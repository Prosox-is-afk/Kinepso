"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Project = {
    id: number;
    title: string;
    description: string;
    category: string;
    slug: string;
    image: string;
};

const CATEGORIES = [
    "Tous",
    "Sites internet",
    "Applications mobiles",
    "Logiciels sur mesure",
];

export default function ProjectsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const selectedCategory = searchParams.get("category") || "Tous";

    const [projects, setProjects] = useState<Project[]>([]);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        async function fetchProjects() {
            const res = await fetch("/api/projects");
            const data = await res.json();
            const filtered =
                selectedCategory === "Tous"
                    ? data
                    : data.filter(
                          (p: Project) => p.category === selectedCategory
                      );

            setProjects(filtered);
            setVisibleCount(6); // reset si changement de catégorie
        }

        fetchProjects();
    }, [selectedCategory]);

    const visibleProjects = projects.slice(0, visibleCount);
    const hasMore = visibleCount < projects.length;

    const handleCategoryClick = (cat: string) => {
        router.push(`/projets?category=${encodeURIComponent(cat)}`);
    };

    return (
        <main className="px-6 max-w-6xl mx-auto py-24 text-center">
            <h1 className="text-4xl font-bold mb-12 text-[#014690]">
                Tous nos projets
            </h1>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`px-4 py-2 rounded-full border transition cursor-pointer ${
                            selectedCategory === cat
                                ? "bg-[#3484DA] text-white border-[#3484DA]"
                                : "text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grille des projets */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {visibleProjects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projets/${project.slug}`}
                        className="group bg-white rounded-3xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden border border-zinc-200"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-5 text-left">
                            <h3 className="text-lg font-semibold text-[#3484DA]">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Bouton Voir plus */}
            {hasMore && (
                <div className="mt-12">
                    <button
                        onClick={() => setVisibleCount((prev) => prev + 6)}
                        className="bg-[#3484DA] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 shadow hover:shadow-lg transition cursor-pointer"
                    >
                        Voir plus
                    </button>
                </div>
            )}
        </main>
    );
}

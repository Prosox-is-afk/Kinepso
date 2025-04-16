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

export default function FilteredProjects() {
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
            setVisibleCount(6);
        }

        fetchProjects();
    }, [selectedCategory]);

    const visibleProjects = projects.slice(0, visibleCount);
    const hasMore = visibleCount < projects.length;

    const handleCategoryClick = (cat: string) => {
        router.push(`/projets?category=${encodeURIComponent(cat)}`);
    };

    return (
        <>
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
                        className="group border-1 border-[#014690] rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        {/* IMAGE */}
                        <div className="h-48 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* CONTENU BLEU */}
                        <div className="bg-[#014690] text-white text-center px-4 py-6 h-[120px] flex flex-col justify-center">
                            <h3 className="text-base font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-sm opacity-90 leading-relaxed line-clamp-2">
                                {project.description.length > 50
                                    ? project.description.slice(0, 50) + "..."
                                    : project.description}
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
        </>
    );
}

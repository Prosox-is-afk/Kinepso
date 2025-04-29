// Fichier FilteredProjects.tsx - Composant React affichant une grille de projets avec système de filtres dynamiques.
// Utilisé pour lister tous les projets disponibles, avec possibilité de filtrer par type de projet (site, application, logiciel).
// La liste est récupérée via une route API interne, et paginée avec un bouton "Voir plus".

"use client";

// Importation des hooks React
import { useEffect, useState } from "react";
// Importation des outils de navigation Next.js
import { useSearchParams, useRouter } from "next/navigation";
// Importation du composant Image optimisé de Next.js
import Image from "next/image";
// Importation du composant Link pour la navigation interne
import Link from "next/link";

// Définition du type TypeScript pour un projet
type Project = {
    id_projets: number;
    title: string;
    description: string;
    slug: string;
    image_path: string;
    category: {
        nom_categoriesprojets: string;
    };
};

// Liste statique des catégories de filtres proposées
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

    const [projects, setProjects] = useState<Project[]>([]); // Stocke tous les projets ou les projets filtrés
    const [visibleCount, setVisibleCount] = useState(6); // Gère combien de projets sont affichés initialement

    useEffect(() => {
        // Fonction interne pour aller chercher les projets via l'API
        async function fetchProjects() {
            const res = await fetch("/api/projects");
            const data = await res.json();

            // Filtrage côté client selon la catégorie sélectionnée
            const filtered =
                selectedCategory === "Tous"
                    ? data
                    : data.filter(
                          (p: Project) =>
                              p.category.nom_categoriesprojets ===
                              selectedCategory
                      );

            setProjects(filtered);
            setVisibleCount(6); // Reset du compteur à 6 quand on change de catégorie
        }

        fetchProjects();
    }, [selectedCategory]); // Re-déclenche la fonction dès que la catégorie change

    // Découpe la liste pour ne montrer que le nombre de projets visibles
    const visibleProjects = projects.slice(0, visibleCount);
    // Détermine s'il reste des projets non affichés
    const hasMore = visibleCount < projects.length;

    // Fonction déclenchée quand on clique sur un filtre
    const handleCategoryClick = (cat: string) => {
        router.push(`/projets?category=${encodeURIComponent(cat)}`);
    };

    return (
        <>
            {/* Barre de filtres */}
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

            {/* Grille des projets affichés */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {visibleProjects.map((project) => (
                    <Link
                        key={project.id_projets}
                        href={`/projets/${project.slug}`}
                        className="group border-1 border-[#014690] rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        {/* Image du projet */}
                        <div className="h-48 overflow-hidden">
                            <Image
                                src={project.image_path}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Contenu texte du projet */}
                        <div className="bg-[#014690] text-white text-center px-4 py-6 h-[120px] flex flex-col justify-center">
                            <h3 className="text-base font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-sm opacity-90 leading-relaxed line-clamp-2">
                                {/* Description tronquée si nécessaire */}
                                {project.description.length > 50
                                    ? project.description.slice(0, 50) + "..."
                                    : project.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Bouton "Voir plus" pour afficher plus de projets */}
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

// Fichier page.tsx dans app/projets - Page listant tous les projets avec filtrage par catégorie.

// Import de Suspense pour gérer le chargement dynamique des composants
import { Suspense } from "react";
// Import du composant de filtrage des projets
import FilteredProjects from "@/components/FilteredProjects";

// Définition du composant principal pour la page "/projets"
export default function ProjectsPage() {
    return (
        <main className="px-6 max-w-6xl mx-auto py-24 text-center">
            {/* Titre principal */}
            <h1 className="text-4xl font-bold mb-12 text-[#014690]">
                Tous nos projets
            </h1>

            {/* 
                Affichage du composant FilteredProjects dans un <Suspense>.
                - Permet d'afficher un fallback ("Chargement des projets...") pendant que FilteredProjects charge ses données.
                - Améliore l'expérience utilisateur en évitant un écran vide.
            */}
            <Suspense fallback={<p>Chargement des projets...</p>}>
                <FilteredProjects />
            </Suspense>
        </main>
    );
}

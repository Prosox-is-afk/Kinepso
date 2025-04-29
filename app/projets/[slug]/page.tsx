// Fichier page.tsx dans app/projets/[slug] - Affiche la page détaillée d'un projet individuel selon son slug.
// Gère aussi le SEO dynamique via la fonction generateMetadata.

import { notFound } from "next/navigation"; // Permet de rediriger vers une 404 si le projet n'existe pas
import { prisma } from "@/lib/prisma"; // Import du client Prisma pour accéder à la base de données
import Image from "next/image"; // Composant Next.js pour une gestion optimisée des images
import type { Metadata } from "next"; // Typage des métadonnées SEO

// Définition d'un type Props pour typer correctement les paramètres reçus
type Props = {
    params: Promise<{ slug: string }>;
};

// Fonction pour générer dynamiquement les métadonnées SEO de chaque projet
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params; // Extraction du slug des paramètres de la page

    // Recherche du projet en base de données correspondant au slug
    const project = await prisma.projets.findUnique({
        where: { slug },
        include: { category: true }, // Inclut la catégorie associée au projet
    });

    // Si aucun projet trouvé, retourne un titre par défaut
    if (!project) {
        return { title: "Projet introuvable" };
    }

    // Retourne le titre personnalisé et la description pour le SEO
    return {
        title: `${project.title} | Kinepso`,
        description: project.description,
    };
}

// Composant principal qui affiche la page d'un projet selon son slug
export default async function ProjectDetails({ params }: Props) {
    const { slug } = await params;

    // Recherche du projet dans la base de données
    const project = await prisma.projets.findUnique({
        where: { slug },
        include: { category: true },
    });

    // Si pas trouvé, redirection automatique vers une page 404
    if (!project) return notFound();

    return (
        <main className="bg-white min-h-screen pt-16 px-4 sm:px-8 max-w-5xl mx-auto">
            {/* Image principale du projet avec effet visuel */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12 h-[300px] sm:h-[400px]">
                <Image
                    src={project.image_path}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
                {/* Dégradé sombre au-dessus de l'image pour lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1BCC] via-[#060D1B88] to-transparent"></div>

                {/* Titre et catégorie du projet affichés sur l'image */}
                <div className="absolute bottom-6 left-6 text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        {project.title}
                    </h1>
                    <p className="mt-2 inline-block bg-[#3484DA] text-white text-sm px-4 py-1 rounded-full shadow-sm">
                        {project.category.nom_categoriesprojets}
                    </p>
                </div>
            </div>

            {/* Description détaillée du projet */}
            <div className="text-[#474747] text-base sm:text-lg leading-relaxed space-y-6">
                <p>{project.description}</p>
            </div>
        </main>
    );
}

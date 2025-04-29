// Fichier HomeProjects.tsx - Composant React affichant les 3 derniers projets sur la page d'accueil.
// Permet un aperçu rapide des projets récents et redirige vers les détails au clic.
// Utilise Framer Motion pour des animations douces et Next.js pour la navigation optimisée.

"use client"; // Ce composant est exécuté côté client

// Importations nécessaires
import Image from "next/image"; // Gestion optimisée des images
import { useRouter } from "next/navigation"; // Hook pour la navigation programmatique
import { motion } from "framer-motion"; // Animation des éléments

// Définition du typage des projets attendus en props
interface Project {
    id_projets: number;
    title: string;
    description: string;
    slug: string;
    image_path: string;
    category: {
        nom_categoriesprojets: string;
    };
}

// Composant principal
export default function HomeProjects({ projects }: { projects: Project[] }) {
    const router = useRouter(); // Initialisation du routeur pour les redirections

    return (
        <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto text-center overflow-hidden">
            {/* Halo visuel en arrière-plan */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(52,132,218,0.2),transparent_70%)] blur-3xl opacity-70 -z-10" />

            {/* Titre de la section */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-[#014690]">
                Nos derniers projets
            </h2>

            {/* Texte descriptif */}
            <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-base">
                Voici un aperçu de nos récentes créations. Sites web, apps et
                solutions métiers sur-mesure.
            </p>

            {/* Grille des projets */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id_projets}
                        initial={{ opacity: 0, y: 40 }} // Animation d'entrée
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        onClick={() => router.push(`/projets/${project.slug}`)} // Redirection vers la page projet au clic
                        className="cursor-pointer overflow-hidden rounded-3xl shadow border border-[#014690]-200 group transition hover:shadow-lg"
                    >
                        {/* Image du projet */}
                        <div className="h-44 overflow-hidden">
                            {project.image_path && (
                                <Image
                                    src={project.image_path}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            )}
                        </div>

                        {/* Contenu bleu avec titre et description */}
                        <div className="bg-[#014690] px-6 py-6 text-white text-center">
                            <h3 className="text-lg font-bold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm">
                                {project.description.length > 50
                                    ? project.description.slice(0, 47) + "..."
                                    : project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bouton pour voir tous les projets */}
            <div className="mt-20">
                <button
                    onClick={() => router.push("/projets")}
                    className="inline-block bg-[#3484DA] text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#2e75c2] transition cursor-pointer"
                >
                    Voir tous nos projets
                </button>
            </div>
        </section>
    );
}

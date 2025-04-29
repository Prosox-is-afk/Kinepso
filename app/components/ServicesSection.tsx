// Fichier ServicesSection.tsx - Composant React affichant les 3 principaux services proposés.
// Présente de façon claire et animée les prestations de l'agence sur la page d'accueil.

"use client"; // Exécution uniquement côté client

// Importations nécessaires
import Image from "next/image"; // Gestion optimisée des images
import { motion } from "framer-motion"; // Bibliothèque pour les animations

// Définition des services à afficher (titre, icône, liste de fonctionnalités)
const services = [
    {
        title: "Sites internet",
        icon: "/icones/site_internet.png",
        features: [
            "Création de sites vitrines modernes",
            "SEO optimisé (référencement naturel)",
            "Performance & design responsive",
        ],
    },
    {
        title: "Applications pc et mobile",
        icon: "/icones/mobile.png",
        features: [
            "Développement mobile iOS & Android",
            "Applications desktop multiplateformes",
            "UX fluide, pensée pour vos utilisateurs",
        ],
    },
    {
        title: "Applications sur-mesure",
        icon: "/icones/pc.png",
        features: [
            "Solutions digitales adaptées à vos besoins",
            "Interfaces personnalisées & évolutives",
            "Intégration fluide à vos outils existants",
        ],
    },
];

// Composant principal
export default function ServicesSection() {
    return (
        <section className="py-24 bg-white px-6 max-w-7xl mx-auto">
            {/* Titre principal */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20 text-[#014690]">
                Nos services
            </h2>

            {/* Grille de services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="border border-[#cbd5e1] rounded-2xl p-6 bg-white hover:shadow-lg transition"
                        initial={{ opacity: 0, y: 50 }} // Animation d'entrée
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* Titre du service avec son icône */}
                        <div className="flex items-center gap-2 mb-6">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={24}
                                height={24}
                            />
                            <h3 className="font-bold text-[#014690]">
                                {service.title}
                            </h3>
                        </div>

                        {/* Liste des fonctionnalités associées au service */}
                        <ul className="space-y-4 text-sm text-zinc-700">
                            {service.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    {/* Icône de validation */}
                                    <Image
                                        src="/icones/check.png"
                                        alt="Check"
                                        width={18}
                                        height={18}
                                        className="mt-[2px]"
                                    />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

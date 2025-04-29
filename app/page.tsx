// Fichier app/page.tsx - Page d'accueil du site Kinepso
// Cette page présente le slogan principal, un aperçu des services, les derniers projets récents, et un appel à contact.

import Image from "next/image"; // Composant Next.js pour optimiser les images
import { prisma } from "@/lib/prisma"; // Client Prisma pour accéder à la base de données
import ServicesSection from "@/components/ServicesSection"; // Section présentant les services proposés
import HomeProjects from "@/components/HomeProjects"; // Section affichant les projets récents

// Composant principal de la page d'accueil
export default async function Home() {
    // Récupération des trois derniers projets depuis la base de données
    const projects = await prisma.projets.findMany({
        orderBy: { created_at: "desc" }, // Trie du plus récent au plus ancien
        take: 3, // On limite aux trois derniers projets
        include: {
            category: true, // Récupère également la catégorie liée pour l'affichage
        },
    });

    return (
        <main className="px-0">
            {/* Section Hero */}
            <section
                className="relative flex flex-col items-center text-center gap-6 mx-auto min-h-[calc(100vh-64px)] justify-center bg-cover bg-center bg-no-repeat px-6 sm:px-0"
                style={{ backgroundImage: "url('/images/bg-hero.png')" }}
            >
                {/* Effet Halo lumineux en arrière-plan */}
                <div className="animate-fade-in">
                    <div className="absolute inset-0 -z-10 flex items-center justify-center bg-[radial-gradient(circle,rgba(52,132,218,0.15)_0%,transparent_70%)]">
                        <div className="w-[600px] h-[600px] rounded-full bg-blue-300 opacity-30 blur-[100px]" />
                    </div>
                </div>

                {/* Titre principal */}
                <h1
                    className="text-3xl sm:text-5xl font-bold leading-tight px-2 sm:px-0"
                    style={{ color: "#014690" }}
                >
                    Concevons vos projets digitaux avec Kinepso
                </h1>

                {/* Points forts de l'agence */}
                <div className="flex flex-col items-start gap-4 text-[#474747]">
                    {/* Élément 1 */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/icones/check.png"
                            alt="check"
                            width={20}
                            height={20}
                            className="mt-[2px]"
                        />
                        <span className="text-sm sm:text-base">
                            Sites vitrines
                        </span>
                    </div>

                    {/* Élément 2 */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/icones/check.png"
                            alt="check"
                            width={20}
                            height={20}
                            className="mt-[2px]"
                        />
                        <span className="text-sm sm:text-base">
                            Applications
                        </span>
                    </div>

                    {/* Élément 3 */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/icones/check.png"
                            alt="check"
                            width={20}
                            height={20}
                            className="mt-[2px]"
                        />
                        <span className="text-sm sm:text-base">
                            Projets sur-mesure
                        </span>
                    </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <a
                        href="/projets"
                        className="border border-[#3484DA] text-[#3484DA] px-6 py-3 rounded hover:bg-[#3484DA] hover:text-white transition"
                    >
                        Découvrir nos projets
                    </a>
                    <a
                        href="/contact"
                        className="border border-[#3484DA] text-[#3484DA] px-6 py-3 rounded hover:bg-[#3484DA] hover:text-white transition"
                    >
                        Nous contacter
                    </a>
                </div>
            </section>

            {/* Section Services */}
            <ServicesSection />

            {/* Section Projets récents */}
            {/* Passage des projets récupérés en BDD au composant d'affichage HomeProjects */}
            <HomeProjects projects={projects} />

            {/* Appel à projet */}
            <section className="bg-[#F4F8FF] py-20 px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#014690] mb-5">
                    Un projet en tête ?
                </h2>
                <p className="text-[#474747] text-base sm:text-lg max-w-2xl mx-auto mb-8">
                    Discutons de vos idées et construisons ensembles votre
                    projet.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-[#3484DA] text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#2e75c2] transition"
                >
                    Contacter mon agence
                </a>
            </section>
        </main>
    );
}

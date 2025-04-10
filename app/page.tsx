import Image from "next/image";
import { prisma } from "@/lib/prisma";
import ServicesSection from "@/components/ServicesSection";
import HomeProjects from "@/components/HomeProjects";

export default async function Home() {
    const projects = await prisma.projet.findMany({
        orderBy: { createdAt: "desc" },
        take: 3,
    });

    return (
        <main className="px-0">
            <section
                className="relative flex flex-col items-center text-center gap-6 mx-auto min-h-[calc(100vh-64px)] justify-center bg-cover bg-center bg-no-repeat px-6 sm:px-0"
                style={{ backgroundImage: "url('/bg-hero.png')" }}
            >
                {/* HALO */}
                <div className="animate-fade-in">
                    <div className="absolute inset-0 -z-10 flex items-center justify-center bg-[radial-gradient(circle,rgba(52,132,218,0.15)_0%,transparent_70%)]">
                        <div className="w-[600px] h-[600px] rounded-full bg-blue-300 opacity-30 blur-[100px]" />
                    </div>
                </div>

                <h1
                    className="text-3xl sm:text-5xl font-bold leading-tight px-2 sm:px-0"
                    style={{ color: "#014690" }}
                >
                    Concevons vos projets digitaux dès maintenant
                </h1>

                <p
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl px-4 sm:px-0"
                    style={{ color: "#474747" }}
                >
                    Sites vitrines, applications ou solutions sur-mesure,
                    Kinepso transforme vos idées en projets réels.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <a
                        href="/projets"
                        className="bg-[#3484DA] text-white px-6 py-3 rounded hover:bg-[#2e75c2] transition"
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

            <ServicesSection />

            <HomeProjects projects={projects} />

            <section className="bg-[#F4F8FF] py-20 px-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#014690] mb-4">
                    Un projet en tête ?
                </h2>
                <p className="text-[#474747] text-base sm:text-lg max-w-2xl mx-auto mb-8">
                    Discutons de vos idées et construisons ensemble des
                    solutions digitales à votre image.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-[#3484DA] text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#2e75c2] transition"
                >
                    Contacter l'agence
                </a>
            </section>
        </main>
    );
}

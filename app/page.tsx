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
                className="relative flex flex-col items-center text-center gap-6 mx-auto min-h-[calc(100vh-64px)] justify-center bg-cover bg-center bg-no-repeat px-0"
                style={{ backgroundImage: "url('/bg-hero.png')" }}
            >
                {/* HALO */}
                <div className="animate-fade-in">
                    <div className="absolute inset-0 -z-10 flex items-center justify-center bg-[radial-gradient(circle,rgba(52,132,218,0.15)_0%,transparent_70%)]">
                        <div className="w-[600px] h-[600px] rounded-full bg-blue-300 opacity-30 blur-[100px]" />
                    </div>
                </div>
                <h1
                    className="text-4xl sm:text-5xl font-bold leading-tight"
                    style={{ color: "#014690" }}
                >
                    Concevons vos projets digitaux dès maintenant
                </h1>
                <p
                    className="text-lg text-gray-700 dark:text-gray-300"
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
        </main>
    );
}

import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function Home() {
    const projects = await prisma.projet.findMany({
        orderBy: { createdAt: "desc" },
        take: 3,
    });

    return (
        <main className="px-6">
            <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto min-h-[calc(100vh-64px)] justify-center">
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

            <div className="relative w-full h-24 -mt-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 opacity-40" />
                <p className="mt-10 text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                    Notre agence propose un accompagnement complet, du site
                    vitrine à l’application mobile.
                </p>
            </div>

            <section className="mt-10 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-[#014690]">
                    Nos services
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: "/icons/siteinternet.png",
                            title: "Sites internet",
                            desc: "Création de sites vitrines modernes, adaptatifs et optimisés SEO.",
                            gradient: "from-blue-400 via-blue-200 to-white",
                        },
                        {
                            icon: "/icons/applimobile.png",
                            title: "Applications mobiles",
                            desc: "Développement mobile performant avec une interface intuitive.",
                            gradient: "from-cyan-400 via-blue-100 to-white",
                        },
                        {
                            icon: "/icons/logicielcustom.png",
                            title: "Logiciels sur mesure",
                            desc: "Outils métier ou dashboards personnalisés selon vos besoins.",
                            gradient: "from-indigo-400 via-blue-100 to-white",
                        },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-[2px] bg-gradient-to-br ${card.gradient} shadow-[0_5px_20px_rgba(0,0,0,0.1)] group transition-all duration-500`}
                        >
                            {/* Effet lumière circulaire */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow z-0" />
                            <div className="relative bg-white rounded-3xl p-6 flex flex-col items-center text-center h-full transition-all duration-500 ease-in-out transform group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="w-20 h-20 mb-4 object-contain"
                                />
                                <h3 className="text-xl font-semibold text-[#3484DA] mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto text-center overflow-hidden">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(52,132,218,0.2),transparent_70%)] blur-3xl opacity-70 -z-10"></div>

                <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-[#014690]">
                    Nos derniers projets
                </h2>
                <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-base">
                    Voici un aperçu de nos récentes créations. Sites web, apps
                    et solutions métiers sur-mesure.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={`/projets/${project.slug}`}
                            className="group relative bg-white rounded-3xl p-4 pb-6 shadow-xl border border-zinc-100 hover:shadow-[0_20px_40px_rgba(52,132,218,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out"
                        >
                            <div className="overflow-hidden rounded-2xl h-48 mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#3484DA] mb-1">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 z-[-1]" />
                        </a>
                    ))}
                </div>

                <div className="mt-20">
                    <a
                        href="/projets"
                        className="inline-block bg-[#3484DA] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Voir tous nos projets
                    </a>
                </div>
            </section>
        </main>
    );
}

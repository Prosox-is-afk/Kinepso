import Image from "next/image";

type Project = {
    _id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
    category: string;
};

async function getProjects(): Promise<Project[]> {
    const res = await fetch("http://localhost:3000/api/projects", {
        cache: "no-store",
    });
    const data: Project[] = await res.json();
    return data.slice(0, 3); // On garde les 3 premiers
}

export default async function Home() {
    const projects = await getProjects();

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
                                {/* Icône */}
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

            <section className="mt-20 px-4 max-w-5xl mx-auto text-center">
                <h2
                    className="text-2xl sm:text-3xl font-bold mb-8"
                    style={{ color: "#014690" }}
                >
                    Nos derniers projets
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {projects.map((project) => (
                        <a
                            key={project._id}
                            href={`/projets/${project.slug}`}
                            className="block border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-zinc-800"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#3484DA] mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}

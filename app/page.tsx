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
                    Kynepso transforme vos idées en projets réels.
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
            <section className="mt-20 px-4 max-w-5xl mx-auto text-center">
                <h2
                    className="text-2xl sm:text-3xl font-bold mb-8"
                    style={{ color: "#014690" }}
                >
                    Nos services
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2 text-[#3484DA]">
                            Sites internet
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Création de sites vitrines modernes, adaptatifs et
                            optimisés SEO.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2 text-[#3484DA]">
                            Applications mobiles
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Développement mobile performant avec une interface
                            intuitive.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold mb-2 text-[#3484DA]">
                            Logiciels sur mesure
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Outils métier ou dashboards personnalisés selon vos
                            besoins.
                        </p>
                    </div>
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

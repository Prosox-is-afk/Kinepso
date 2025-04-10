"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    slug: string;
    image: string;
}

export default function HomeProjects({ projects }: { projects: Project[] }) {
    const router = useRouter();

    return (
        <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto text-center overflow-hidden">
            {/* HALO EN FOND */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(52,132,218,0.2),transparent_70%)] blur-3xl opacity-70 -z-10"></div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-[#014690]">
                Nos derniers projets
            </h2>
            <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-base">
                Voici un aperçu de nos récentes créations. Sites web, apps et
                solutions métiers sur-mesure.
            </p>

            {/* GRILLE DES PROJETS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        onClick={() => router.push(`/projets/${project.slug}`)}
                        className="group relative bg-white rounded-[30px] p-4 pb-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-zinc-100 hover:shadow-[0_20px_40px_rgba(52,132,218,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
                    >
                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-2xl h-44 mb-4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* CONTENU */}
                        <h3 className="text-lg font-semibold text-[#3484DA] mb-1">
                            {project.title}
                        </h3>
                        <p className="text-[#474747] text-sm leading-relaxed">
                            {project.description}
                        </p>

                        {/* GLOW */}
                        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-blue-100 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 z-[-1]" />
                    </motion.div>
                ))}
            </div>

            {/* CTA VERS TOUS LES PROJETS */}
            <div className="mt-20">
                <button
                    onClick={() => router.push("/projets")}
                    className="inline-block bg-[#3484DA] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                    Voir tous nos projets
                </button>
            </div>
        </section>
    );
}

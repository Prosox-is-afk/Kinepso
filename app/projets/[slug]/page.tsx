import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

// ✅ Fonction attendue par Next.js pour le typage automatique (obligatoire si typage strict actif)
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const project = await prisma.projet.findUnique({
        where: { slug: params.slug },
    });

    if (!project) return { title: "Projet introuvable" };

    return {
        title: `${project.title} | Kinepso`,
        description: project.description,
    };
}

export default async function ProjectDetails({
    params,
}: {
    params: { slug: string };
}) {
    const project = await prisma.projet.findUnique({
        where: { slug: params.slug },
    });

    if (!project) return notFound();

    return (
        <main className="bg-white min-h-screen pt-16 px-4 sm:px-8 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12 h-[300px] sm:h-[400px]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1BCC] via-[#060D1B88] to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        {project.title}
                    </h1>
                    <p className="mt-2 inline-block bg-[#3484DA] text-white text-sm px-4 py-1 rounded-full shadow-sm">
                        {project.category}
                    </p>
                </div>
            </div>

            <div className="text-[#474747] text-base sm:text-lg leading-relaxed space-y-6">
                <p>{project.description}</p>
            </div>
        </main>
    );
}

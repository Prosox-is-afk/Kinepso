import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

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
        <main className="px-6 py-16 max-w-3xl mx-auto">
            <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="rounded-xl w-full h-64 object-cover mb-6"
            />
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <span className="inline-block bg-[#3484DA] text-white text-sm px-3 py-1 rounded mb-6">
                {project.category}
            </span>
            <p className="text-gray-700 leading-relaxed text-lg">
                {project.description}
            </p>
        </main>
    );
}

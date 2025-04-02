import { notFound } from "next/navigation";
import Image from "next/image";

type Project = {
    _id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
    category: string;
};

export default async function ProjectDetails({
    params,
}: {
    params: { slug: string };
}) {
    const res = await fetch(`http://localhost:3000/api/projects`, {
        cache: "no-store",
    });
    const projects: Project[] = await res.json();
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <main className="p-8 max-w-3xl mx-auto">
            <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="rounded-xl w-full h-64 object-cover mb-6"
            />
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <span className="inline-block bg-blue-600 text-white text-sm px-2 py-1 rounded mb-4">
                {project.category}
            </span>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
                {project.description}
            </p>
        </main>
    );
}

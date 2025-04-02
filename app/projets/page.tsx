import Image from "next/image";
import Link from "next/link";

type Project = {
    _id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
    category: string;
};

export default async function ProjetsPage() {
    const res = await fetch("http://localhost:3000/api/projects", {
        cache: "no-store",
    });
    const projects: Project[] = await res.json();

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Nos projets</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Link
                        key={project._id}
                        href={`/projets/${project.slug}`}
                        className="border rounded-xl overflow-hidden shadow-md bg-white dark:bg-zinc-800 hover:scale-[1.02] transition cursor-pointer"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold">
                                {project.title}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {project.description}
                            </p>
                            <span className="inline-block text-xs text-white bg-blue-600 px-2 py-1 rounded">
                                {project.category}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

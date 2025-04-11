import FilteredProjects from "@/components/FilteredProjects";

export default function ProjectsPage() {
    return (
        <main className="px-6 max-w-6xl mx-auto py-24 text-center">
            <h1 className="text-4xl font-bold mb-12 text-[#014690]">
                Tous nos projets
            </h1>
            <FilteredProjects />
        </main>
    );
}

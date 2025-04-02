import ProjectForm from "./components/ProjectForm";
// ("use client");

export default function Home() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Ajouter un projet</h1>
            <ProjectForm />
        </main>
    );
}

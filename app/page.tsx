"use client";

export default function Home() {
    return (
        <main className="text-center px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                Gérez vos projets,
                <br className="hidden md:block" /> simplement et efficacement
            </h1>

            <p className="text-secondary mb-8 max-w-xl mx-auto text-lg">
                Organisez vos tâches, collaborez en équipe ou seul et suivez vos
                progrès en un seul endroit.
            </p>

            <div className="flex justify-center flex-col sm:flex-row gap-4">
                <a
                    href="#projets"
                    className="bg-blueBtn text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                    Commencer maintenant !
                </a>
                <a
                    href="/login"
                    className="border border-blueBtn text-blueBtn px-6 py-3 rounded-md hover:bg-blueBtn hover:text-white transition"
                >
                    Connexion
                </a>
            </div>
        </main>
    );
}

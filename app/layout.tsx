// Fichier app/layout.tsx - Définit la structure racine de l'application (layout global sur toutes les pages).
// Ce fichier configure les polices, le Header, le Footer, le bouton "remonter en haut", et fournit les balises HTML principales.

import type { Metadata } from "next"; // Typage pour la partie SEO/metadata
import { Geist, Geist_Mono } from "next/font/google"; // Importation des polices Google via Next.js
import "./globals.css"; // Fichier de styles globaux
import Header from "./components/Header"; // Composant d'en-tête
import Footer from "./components/Footer"; // Composant de pied de page
import BackToTopButton from "@/components/BackToTopButton"; // Bouton pour remonter en haut de page

// Chargement des polices avec variables CSS
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Métadonnées par défaut de l'application (SEO général)
export const metadata: Metadata = {
    title: "Kinepso | Agence digitale",
    description:
        "Kinepso transforme vos idées en projets digitaux concrets : site vitrine, application mobile ou solution métier sur-mesure.",
    keywords: [
        "Kinepso",
        "agence digitale",
        "développement web",
        "site vitrine",
        "application mobile",
    ],
    openGraph: {
        title: "Kinepso",
        description:
            "Agence digitale spécialisée dans la création de projets sur-mesure.",
        type: "website",
    },
};

// Composant principal qui entoure toute l'application
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode; // Toutes les pages de l'application viendront s'insérer ici
}>) {
    return (
        <html lang="fr" className="scrollbar-hide" suppressHydrationWarning>
            <head>
                {/* Favicon du site */}
                <link rel="icon" href="/white_transparent.svg" />
            </head>

            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-zinc-50 text-zinc-900`}
            >
                {/* Structure générale */}
                <div
                    id="app"
                    className="flex flex-col justify-between min-h-screen transition duration-300 overflow-y-scroll scrollbar-hide"
                >
                    {/* En-tête du site */}
                    <Header />

                    {/* Contenu principal avec le bouton de remontée */}
                    <div
                        id="page-content"
                        className="flex flex-col justify-between min-h-screen transition duration-300"
                    >
                        <BackToTopButton />

                        {/* Contenu des pages */}
                        <main className="flex-grow">{children}</main>

                        {/* Pied de page */}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}

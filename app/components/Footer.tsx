// Fichier Footer.tsx - Composant React représentant le pied de page du site Kinepso.
// Contient les liens de navigation secondaires, les réseaux sociaux, et les informations légales.
// Ce footer est responsive et s'adapte à différentes tailles d'écran.

"use client"; // Ce composant utilise du JavaScript côté client

// Importations nécessaires
import Image from "next/image"; // Gestion optimisée des images
import Link from "next/link"; // Navigation interne entre les pages

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-[#1f1f1f] py-12">
            {/* Conteneur principal en grille */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
                {/* Colonne 1 : Logo et Nom de l'agence */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/white_transparent.svg" // Logo
                        alt="Kinepso Logo"
                        width={50}
                        height={50}
                        className="translate-y-1" // Léger ajustement vertical
                    />
                    <span className="text-[#014690] text-2xl">Kinepso</span>{" "}
                    {/* Nom affiché */}
                </div>

                {/* Colonne 2 : Réseaux sociaux */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-1">Réseaux sociaux</h4>
                    {/* Liens vers les réseaux sociaux */}
                    <a href="#" className="hover:underline">
                        Instagram
                    </a>
                    <a href="#" className="hover:underline">
                        Youtube
                    </a>
                    <a href="#" className="hover:underline">
                        Tiktok
                    </a>
                    <a href="#" className="hover:underline">
                        LinkedIn
                    </a>
                </div>

                {/* Colonne 3 : Liens utiles */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-1">Liens utiles</h4>
                    {/* Navigation interne vers des pages du site */}
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                    <a href="#" className="hover:underline">
                        Site Map
                    </a>
                </div>

                {/* Colonne 4 : Informations légales */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-1">Informations légales</h4>
                    <Link href="/mentions" className="hover:underline">
                        Mentions légales
                    </Link>
                    <a href="#" className="hover:underline">
                        Conditions générales d’utilisation
                    </a>
                    <Link href="/confidentialite" className="hover:underline">
                        Politique de confidentialité
                    </Link>
                    <a href="#" className="hover:underline">
                        Politique de cookies
                    </a>
                </div>
            </div>

            {/* Texte en bas du footer */}
            <div className="text-center text-sm text-gray-400 mt-12 px-4">
                © 2025 Kinepso. Tous droits réservés.
            </div>
        </footer>
    );
}

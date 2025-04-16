"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-[#1f1f1f] py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
                {/* Colonne 1 : Logo + nom */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/white_transparent.svg"
                        alt="Kinepso Logo"
                        width={50}
                        height={50}
                        className="translate-y-1"
                    />
                    <span className="text-[#014690] text-2xl">Kinepso</span>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-1">Réseaux sociaux</h4>
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

                {/* Liens utiles */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-1">Liens utiles</h4>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                    <a href="#" className="hover:underline">
                        Site Map
                    </a>
                </div>

                {/* Informations légales */}
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

            {/* Bas de page */}
            <div className="text-center text-sm text-gray-400 mt-12 px-4">
                © 2025 Kinepso. Tous droits réservés.
            </div>
        </footer>
    );
}

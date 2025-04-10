"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#060D1B] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center sm:justify-items-start">
                {/* Colonne 1 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 sm:ml-4">
                    <Image
                        src="/white_transparent.svg"
                        alt="Kinepso Logo"
                        width={60}
                        height={60}
                    />
                    <span className="text-[#3484DA] font-bold tracking-wide text-lg">
                        KINEPSO
                    </span>
                </div>

                {/* Colonne 2 */}
                <div className="flex flex-col gap-2">
                    <a href="/" className="hover:underline">
                        Accueil
                    </a>
                    <a href="/projets" className="hover:underline">
                        Projets
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                </div>

                {/* Colonne 3 */}
                <div className="flex flex-col gap-2">
                    <a href="/confidentialite" className="hover:underline">
                        Politique de Confidentialité
                    </a>
                    <a href="/mentions" className="hover:underline">
                        Mentions Légales
                    </a>
                    <a href="/faq" className="hover:underline">
                        FAQ
                    </a>
                </div>
            </div>

            {/* Footer Bas */}
            <div className="text-center text-sm text-gray-400 mt-12 px-4">
                © 2025 Kinepso. Tous droits réservés.
            </div>
        </footer>
    );
}

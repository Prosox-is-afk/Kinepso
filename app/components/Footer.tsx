"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#060D1B] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center sm:justify-items-start text-center sm:text-left">
                {/* Colonne 1 : Logo + nom */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                    <Image
                        src="/white_transparent.svg"
                        alt="Kinepso Logo"
                        width={60}
                        height={60}
                    />
                    <span className="text-[#014690] font-bold tracking-wide text-lg">
                        KINEPSO
                    </span>
                </div>

                {/* Colonne 2 : Navigation */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                    <Link href="/" className="hover:underline">
                        Accueil
                    </Link>
                    <Link href="/projets" className="hover:underline">
                        Projets
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                </div>

                {/* Colonne 3 : Réseaux sociaux */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                    <a href="#" className="hover:underline">
                        Facebook
                    </a>
                    <a href="#" className="hover:underline">
                        LinkedIn
                    </a>
                    <a href="#" className="hover:underline">
                        Instagram
                    </a>
                </div>

                {/* Colonne 4 : Légal */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                    <Link href="/confidentialite" className="hover:underline">
                        Politique de Confidentialité
                    </Link>
                    <Link href="/mentions" className="hover:underline">
                        Mentions Légales
                    </Link>
                    <Link href="/faq" className="hover:underline">
                        FAQ
                    </Link>
                </div>
            </div>

            {/* Bas de footer */}
            <div className="text-center text-sm text-white mt-12 px-4">
                © 2025 Kinepso. Tous droits réservés.
            </div>
        </footer>
    );
}

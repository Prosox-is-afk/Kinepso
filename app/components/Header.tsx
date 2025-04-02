"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo + Titre */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/white_transparent.svg"
                        alt="Logo Kinepso"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                    <span
                        className="text-xl font-bold leading-none"
                        style={{ fontFamily: "Arial", color: "#014690" }}
                    >
                        Kinepso
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
                    <Link href="/" className="hover:text-blue-600">
                        Accueil
                    </Link>
                    <Link href="/services" className="hover:text-blue-600">
                        Services
                    </Link>
                    <Link href="/projets" className="hover:text-blue-600">
                        Projets
                    </Link>
                </nav>

                {/* Bouton Contact */}
                <Link
                    href="/contact"
                    className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                    Contact
                </Link>
            </div>
        </header>
    );
}

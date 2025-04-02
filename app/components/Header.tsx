"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
            <Link href="/" className="text-2xl font-bold text-blue-600">
                Kynepso
            </Link>
            <nav className="flex gap-6 text-sm">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`hover:text-blue-600 transition ${
                            pathname === link.href
                                ? "text-blue-600 font-semibold"
                                : "text-gray-600 dark:text-gray-300"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

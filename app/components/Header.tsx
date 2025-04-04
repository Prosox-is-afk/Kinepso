"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/services", label: "Services" },
];

export default function Header() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        pathname === href
            ? "text-[#3484DA] font-semibold"
            : "text-zinc-600 hover:text-[#5ca0e4] transition";

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo + Titre */}
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/white_transparent.svg"
                        alt="Logo Kinepso"
                        width={32}
                        height={32}
                        className="object-contain mt-[2px]"
                        style={{
                            filter: "brightness(0) saturate(100%) invert(30%) sepia(76%) saturate(2328%) hue-rotate(188deg) brightness(95%) contrast(96%)",
                        }}
                    />
                    <span
                        className="text-xl font-bold leading-none"
                        style={{ fontFamily: "Arial", color: "#3484DA" }}
                    >
                        Kinepso
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden gap-6 text-sm font-medium sm:flex">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={isActive(href)}>
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Bouton Contact */}
                <Link
                    href="/contact"
                    className="rounded-full bg-[#3484DA] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2772c4] transition"
                >
                    Contact
                </Link>
            </div>
        </header>
    );
}

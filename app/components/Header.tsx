"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/services", label: "Services" },
];

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const isActive = (href: string) =>
        pathname === href
            ? "text-[#3484DA] font-semibold"
            : "text-zinc-600 hover:text-[#5ea2eb] transition";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        const pageContent = document.getElementById("page-content");

        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
            document.addEventListener("mousedown", handleClickOutside);
            pageContent?.classList.add(
                "blur-sm",
                "pointer-events-none",
                "select-none"
            );
        } else {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("mousedown", handleClickOutside);
            pageContent?.classList.remove(
                "blur-sm",
                "pointer-events-none",
                "select-none"
            );
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("mousedown", handleClickOutside);
            pageContent?.classList.remove(
                "blur-sm",
                "pointer-events-none",
                "select-none"
            );
        };
    }, [menuOpen]);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "backdrop-blur-md bg-white/70 border-b border-zinc-200 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo + Titre */}
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/white_transparent.svg"
                        alt="Logo Kinepso"
                        width={30}
                        height={30}
                        className="object-contain translate-y-[1px]"
                    />
                    <span
                        className="text-xl font-bold leading-none"
                        style={{ fontFamily: "Arial", color: "#3484DA" }}
                    >
                        Kinepso
                    </span>
                </Link>

                {/* Navigation - Desktop */}
                <nav className="hidden sm:flex gap-6 text-sm font-medium">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={isActive(href)}>
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Bouton Contact - Desktop */}
                <Link
                    href="/contact"
                    className="hidden sm:inline-block rounded-full bg-[#3484DA] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5ea2eb] transition"
                >
                    Contact
                </Link>

                {/* Menu Mobile Toggle */}
                <button
                    className="sm:hidden text-zinc-700 cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Toggle Menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Menu Mobile - Slide + Blur Overlay */}
            {menuOpen && (
                <>
                    {/* OVERLAY FLOUTÉ (ce qui est derrière le menu) */}
                    <div
                        className="fixed inset-0 z-40 backdrop-blur-sm bg-white/30 sm:hidden"
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* MENU MOBILE */}
                    <div
                        ref={menuRef}
                        className={`fixed top-0 right-0 z-50 h-auto w-4/5 max-w-xs bg-white shadow-lg border-l border-zinc-200 flex flex-col p-6 sm:hidden transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            menuOpen
                                ? "translate-x-0 opacity-100"
                                : "translate-x-full opacity-0"
                        }`}
                    >
                        {/* Top Section */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/white_transparent.svg"
                                    alt="Logo Kinepso"
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                                <span
                                    className="text-lg font-bold"
                                    style={{
                                        fontFamily: "Arial",
                                        color: "#3484DA",
                                    }}
                                >
                                    Kinepso
                                </span>
                            </div>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex flex-col gap-4 text-sm font-medium">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className={isActive(href)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* Contact */}
                        <div className="mt-auto pt-6">
                            <Link
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="block bg-[#3484DA] text-white rounded-full px-4 py-2 text-sm font-semibold text-center hover:bg-[#5ea2eb] transition"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

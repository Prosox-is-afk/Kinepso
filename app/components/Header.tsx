"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
];

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const isActive = (href: string) =>
        pathname === href
            ? "text-[#014690] font-semibold"
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
        <header className="bg-white border-b border-zinc-200 shadow-sm z-50">
            <div className="w-full flex items-center justify-between px-6 py-3">
                {/* Logo + Titre */}
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/white_transparent.svg"
                        alt="Logo Kinepso"
                        width={40}
                        height={40}
                    />
                    <span
                        className="text-lg font-medium tracking-wide"
                        style={{ fontFamily: "Arial", color: "#014690" }}
                    >
                        Kinepso
                    </span>
                </Link>

                {/* Groupe navigation + bouton - Desktop */}
                <div className="hidden sm:flex items-center gap-6">
                    <nav className="flex gap-6 text-sm font-medium">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-[#474747]"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <Link
                        href="/contact"
                        className="rounded-[12px] border border-[#C0C0C0] px-4 py-2 text-sm font-medium text-[#474747]"
                    >
                        Nous contacter
                    </Link>
                </div>

                {/* Menu Mobile Toggle */}
                <button
                    className="sm:hidden text-zinc-700 cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Toggle Menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {menuOpen && (
                <div
                    ref={menuRef}
                    className="fixed inset-0 z-50 bg-white flex flex-col p-6 sm:hidden"
                >
                    {/* Top Section */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/white_transparent.svg"
                                alt="Logo Kinepso"
                                width={45}
                                height={45}
                                className="translate-y-1"
                            />
                            <span
                                className="text-xl font-bold"
                                style={{
                                    fontFamily: "Arial",
                                    color: "#014690",
                                }}
                            >
                                Kinepso
                            </span>
                        </div>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer"
                        >
                            <X size={24} color="#474747" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-4 text-sm font-medium text-[#474747]">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-4 block border border-[#C0C0C0] text-[#474747] rounded-full px-4 py-2 text-sm font-semibold text-center"
                        >
                            Nous Contacter
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

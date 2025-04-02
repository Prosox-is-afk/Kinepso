"use client";

import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <Link href="/" className="text-primary text-xl font-bold">
                Kinepso
            </Link>
            <nav>
                <ul className="flex gap-6 text-sm">
                    <li>
                        <Link
                            href="/projets"
                            className="text-gray-700 hover:text-primary"
                        >
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-primary"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button className="border border-primary text-primary px-4 py-1 rounded hover:bg-primary hover:text-white transition">
                            Connexion
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

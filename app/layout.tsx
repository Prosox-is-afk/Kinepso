import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kinepso | Agence digitale",
    description:
        "Kinepso transforme vos idées en projets digitaux concrets : site vitrine, application mobile ou solution métier sur-mesure.",
    keywords: [
        "Kinepso",
        "agence digitale",
        "développement web",
        "site vitrine",
        "application mobile",
    ],
    openGraph: {
        title: "Kinepso",
        description:
            "Agence digitale spécialisée dans la création de projets sur-mesure.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scrollbar-hide" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/white_transparent.svg" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-zinc-50 text-zinc-900`}
            >
                <div
                    id="app"
                    className="flex flex-col justify-between min-h-screen transition duration-300 overflow-y-scroll scrollbar-hide"
                >
                    <Header />
                    <div
                        id="page-content"
                        className="flex flex-col justify-between min-h-screen transition duration-300"
                    >
                        <BackToTopButton />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}

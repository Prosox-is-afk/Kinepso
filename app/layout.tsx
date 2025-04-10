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
    title: "Kynepso",
    description: "Gérez vos projets simplement et efficacement.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-zinc-50 text-zinc-900`}
            >
                <div
                    id="app"
                    className="flex flex-col justify-between min-h-screen transition duration-300"
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

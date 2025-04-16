"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        title: "Sites internet",
        icon: "/icones/site_internet.png",
        features: [
            "Création de sites vitrines modernes",
            "SEO optimisé (référencement naturel)",
            "Performance & design responsive",
        ],
    },
    {
        title: "Applications pc et mobile",
        icon: "/icones/mobile.png",
        features: [
            "Développement mobile iOS & Android",
            "Applications desktop multiplateformes",
            "UX fluide, pensée pour vos utilisateurs",
        ],
    },
    {
        title: "Applications sur-mesure",
        icon: "/icones/pc.png",
        features: [
            "Solutions digitales adaptées à vos besoins",
            "Interfaces personnalisées & évolutives",
            "Intégration fluide à vos outils existants",
        ],
    },
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20 text-[#014690]">
                Nos services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="border border-[#cbd5e1] rounded-2xl p-6 bg-white hover:shadow-lg transition"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* Titre + icône */}
                        <div className="flex items-center gap-2 mb-6">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={24}
                                height={24}
                            />
                            <h3 className="font-bold text-[#014690]">
                                {service.title}
                            </h3>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 text-sm text-zinc-700">
                            {service.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <Image
                                        src="/icones/check.png"
                                        alt="Check"
                                        width={18}
                                        height={18}
                                        className="mt-[2px]"
                                    />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

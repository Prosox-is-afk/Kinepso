"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        icon: "/icons/siteinternet.png",
        title: "Sites internet",
        desc: "Création de sites vitrines modernes, adaptatifs et optimisés SEO.",
        category: "Sites internet",
        side: "left",
        imageSize: 400, // plus petit
    },
    {
        icon: "/icons/applimobile.png",
        title: "Applications mobiles",
        desc: "Développement mobile performant avec une interface intuitive.",
        category: "Applications mobiles",
        side: "right",
        imageSize: 400, // plus petit
    },
    {
        icon: "/icons/logicielcustom.png",
        title: "Logiciels sur mesure",
        desc: "Outils métier ou dashboards personnalisés selon vos besoins.",
        category: "Logiciels sur mesure",
        side: "left",
        imageSize: 600, // parfait, on garde
    },
];

export default function ServicesSection() {
    return (
        <section className="mt-32 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-24 text-[#014690]">
                Nos services
            </h2>

            <div className="flex flex-col gap-32">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col-reverse lg:flex-row items-center gap-10 ${
                            service.side === "right"
                                ? "lg:flex-row-reverse"
                                : ""
                        }`}
                        initial={{
                            opacity: 0,
                            x: service.side === "right" ? 100 : -100,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* IMAGE */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={service.imageSize}
                                height={service.imageSize}
                                className="rounded-3xl object-contain"
                            />
                        </div>

                        {/* TEXTE */}
                        <div className="w-full lg:w-1/2 text-[#474747]">
                            <h3 className="text-2xl font-bold mb-4 text-[#3484DA]">
                                {service.title}
                            </h3>
                            <p className="mb-6 text-[1.05rem] leading-relaxed">
                                {service.desc} Kinepso vous accompagne avec
                                expertise dans la concrétisation de votre projet
                                digital, en assurant performance et esthétique.
                            </p>
                            <Link
                                href={`/projets?category=${encodeURIComponent(
                                    service.category
                                )}`}
                                className="inline-block border border-[#3484DA] text-[#3484DA] px-6 py-2 rounded-full font-medium hover:bg-[#3484DA] hover:text-white transition"
                            >
                                Voir plus
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

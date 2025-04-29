// Fichier page.tsx - Page de contact permettant aux utilisateurs d'envoyer un message via un formulaire.
// Utilise une requête POST vers l'API interne pour l'envoi du mail.

"use client"; // Code exécuté uniquement côté client (navigateur)

// Importations nécessaires
import { useState } from "react";
import Image from "next/image";

// Composant principal
export default function ContactPage() {
    // État du formulaire
    const [form, setForm] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: "",
    });

    // État pour afficher un message de succès après l'envoi
    const [success, setSuccess] = useState(false);

    // Gère la saisie utilisateur pour chaque champ
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Gère la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prépare les données à envoyer
        const payload = {
            nom: form.nom,
            prenom: form.prenom,
            email: form.email,
            telephone: form.telephone,
            message: form.message,
        };

        try {
            // Envoie les données via une requête POST vers l'API interne
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            // Si succès, réinitialise le formulaire et affiche un message temporaire
            if (data.success) {
                setSuccess(true);
                setForm({
                    nom: "",
                    prenom: "",
                    email: "",
                    telephone: "",
                    message: "",
                });

                // Cache le message de succès après 4 secondes
                setTimeout(() => {
                    setSuccess(false);
                }, 4000);
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
        }
    };

    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-white text-[#014690] px-6 py-20">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
                {/* Informations de contact de l'agence */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-4 text-[#014690]">
                        Contactez-nous
                    </h2>
                    <p className="text-gray-600">
                        Notre équipe est à votre disposition pour toute demande
                        de projet ou question.
                    </p>
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <span className="font-semibold text-[#3484DA]">
                                Téléphone :
                            </span>
                            <br />
                            +33 7 83 62 50 79
                        </div>
                        <div>
                            <span className="font-semibold text-[#3484DA]">
                                Email :
                            </span>
                            <br />
                            contact@kinepso.com
                        </div>
                    </div>
                </div>

                {/* Formulaire de contact */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Champs du formulaire */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="nom"
                            required
                            placeholder="Nom"
                            value={form.nom}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3484DA]"
                        />
                        <input
                            type="text"
                            name="prenom"
                            required
                            placeholder="Prénom"
                            value={form.prenom}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3484DA]"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3484DA]"
                    />
                    <input
                        type="tel"
                        name="telephone"
                        required
                        placeholder="Téléphone"
                        value={form.telephone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3484DA]"
                    />
                    <textarea
                        name="message"
                        required
                        placeholder="Votre message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3484DA]"
                    />

                    {/* Message de confirmation si l'envoi est réussi */}
                    {success && (
                        <div className="flex items-center gap-2 text-green-600 font-medium">
                            <Image
                                src="/icones/check.png"
                                alt="Check"
                                width={24}
                                height={24}
                            />
                            <p>Demande envoyée</p>
                        </div>
                    )}

                    {/* Bouton d'envoi */}
                    <button
                        type="submit"
                        className="bg-[#3484DA] text-white px-6 py-3 rounded hover:bg-[#2e75c2] transition font-semibold cursor-pointer"
                    >
                        Contacter mon agence
                    </button>
                </form>
            </div>
        </main>
    );
}

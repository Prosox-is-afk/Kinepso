"use client";

import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Envoi en cours...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("Message envoyé !");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("Erreur lors de l'envoi.");
            }
        } catch (error) {
            setStatus("Erreur réseau.");
        }
    };

    return (
        <main className="p-8 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contact</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="border px-4 py-2 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="border px-4 py-2 rounded"
                />
                <textarea
                    name="message"
                    placeholder="Votre message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border px-4 py-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Envoyer
                </button>
                <p>{status}</p>
            </form>
        </main>
    );
}

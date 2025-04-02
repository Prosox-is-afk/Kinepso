"use client";

import { useState } from "react";

export default function ProjectForm() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
        slug: "",
        category: "site",
    });

    const [message, setMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("Envoi en cours...");

        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("✅ Projet ajouté !");
                setForm({
                    title: "",
                    description: "",
                    image: "",
                    slug: "",
                    category: "site",
                });
            } else {
                setMessage("❌ Erreur : " + data.message);
            }
        } catch (err) {
            setMessage("❌ Une erreur s'est produite");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto p-4"
        >
            <input
                type="text"
                name="title"
                placeholder="Titre"
                value={form.title}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="image"
                placeholder="URL de l'image"
                value={form.image}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="slug"
                placeholder="Slug (unique)"
                value={form.slug}
                onChange={handleChange}
                required
            />
            <select
                name="category"
                value={form.category}
                onChange={handleChange}
            >
                <option value="site">Site</option>
                <option value="mobile">Mobile</option>
                <option value="logiciel">Logiciel</option>
            </select>
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded"
            >
                Ajouter le projet
            </button>
            <p>{message}</p>
        </form>
    );
}

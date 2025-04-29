// Fichier route.ts - API GET pour récupérer tous les projets du site Kinepso.
// Ce fichier interroge la base de données via Prisma pour obtenir la liste des projets,
// triés par ID croissant, et renvoie également la catégorie liée à chaque projet.

// Importation de l'instance Prisma pour interagir avec la base de données
import { prisma } from "@/lib/prisma";
// Importation de NextResponse pour formater la réponse HTTP
import { NextResponse } from "next/server";

// Déclaration de la route GET pour l’API
export async function GET() {
    // Récupération de tous les projets depuis la base de données
    const projects = await prisma.projets.findMany({
        orderBy: { id_projets: "asc" }, // Trie les projets par ID croissant
        include: {
            category: true, // Récupère en plus les informations de la catégorie liée à chaque projet
        },
    });

    // Retourne la liste des projets au format JSON
    return NextResponse.json(projects);
}

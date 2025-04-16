import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const projects = await prisma.projets.findMany({
        orderBy: { id_projets: "asc" },
        include: {
            category: true, // Inclut la catégorie liée (nom_categoriesprojets)
        },
    });

    return NextResponse.json(projects);
}

import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/Project";

// GET → Lire tous les projets
export async function GET() {
    await connectToDatabase();
    const projects = await Project.find();
    return NextResponse.json(projects);
}

// POST → Créer un projet
export async function POST(req: NextRequest) {
    await connectToDatabase();
    const body = await req.json();

    try {
        const project = await Project.create(body);
        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "Erreur création projet", error },
            { status: 500 }
        );
    }
}

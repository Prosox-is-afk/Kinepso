import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const projects = await prisma.projet.findMany({
        orderBy: { id: "asc" },
    });
    return NextResponse.json(projects);
}

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function GET() {
    try {
        await connectToDatabase();
        return NextResponse.json({
            success: true,
            message: "Connexion réussie à MongoDB",
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Échec de la connexion",
            error,
        });
    }
}

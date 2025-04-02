import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
        return NextResponse.json(
            { success: false, message: "Champs manquants" },
            { status: 400 }
        );
    }

    // Ici tu pourras plus tard envoyer l'email avec Nodemailer, Resend, etc.

    // console.log("Message reçu depuis le formulaire :", body);

    return NextResponse.json({
        success: true,
        message: "Message reçu avec succès",
    });
}

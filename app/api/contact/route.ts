import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    let body;
    try {
        body = await req.json();
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Erreur de parsing JSON" },
            { status: 400 }
        );
    }

    const { nom, prenom, email, telephone, message } = body;

    if (!nom || !prenom || !email || !message) {
        return NextResponse.json(
            { success: false, message: "Champs requis manquants." },
            { status: 400 }
        );
    }

    // ✅ Création du transporteur APRES les vérifications
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Kinepso" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: "Nouveau message via le site Kinepso",
            html: `
                <h2>Nouveau message de ${prenom} ${nom}</h2>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${telephone}</p>
                <p><strong>Message :</strong><br/>${message.replace(
                    /\n/g,
                    "<br/>"
                )}</p>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Message envoyé avec succès.",
        });
    } catch (error) {
        console.error("Erreur envoi mail :", error);
        return NextResponse.json(
            {
                success: false,
                message: "Erreur lors de l'envoi du message.",
            },
            { status: 500 }
        );
    }
}

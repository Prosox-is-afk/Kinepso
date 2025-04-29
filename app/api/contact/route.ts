// Fichier route.ts - API POST pour le formulaire de contact de Kinepso.
// Ce fichier reçoit les données d’un formulaire, les vérifie, et envoie un e-mail via SMTP grâce à Nodemailer.
// Utilisé côté serveur avec la nouvelle API Route Handler de Next.js 13+.

// Importation des types et méthodes nécessaires depuis Next.js
import { NextRequest, NextResponse } from "next/server";
// Importation de Nodemailer pour gérer l'envoi d'e-mails
import nodemailer from "nodemailer";

// Déclaration du gestionnaire POST, déclenché lorsqu’un formulaire est soumis en POST à /api/contact
export async function POST(req: NextRequest) {
    let body;
    try {
        // Lecture et parsing du corps de la requête en JSON
        body = await req.json();
    } catch (error) {
        // Si le parsing échoue, on retourne une erreur 400
        return NextResponse.json(
            { success: false, message: "Erreur de parsing JSON" },
            { status: 400 }
        );
    }

    // Extraction des champs attendus dans la requête
    const { nom, prenom, email, telephone, message } = body;

    // Vérification de la présence des champs obligatoires
    if (!nom || !prenom || !email || !message) {
        return NextResponse.json(
            { success: false, message: "Champs requis manquants." },
            { status: 400 }
        );
    }

    // Configuration du transporteur SMTP via les variables d’environnement (cf. .env.local)
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false, // false = STARTTLS ; true = SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Envoi de l’e-mail avec les infos du formulaire
        await transporter.sendMail({
            from: `"Kinepso" <${process.env.EMAIL_USER}>`, // Adresse de l’expéditeur
            to: process.env.EMAIL_TO, // Adresse du destinataire (souvent toi ou ton équipe)
            subject: "Nouveau message via le site Kinepso", // Sujet de l’e-mail
            html: `
                <h2>Nouveau message de ${prenom} ${nom}</h2>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${telephone}</p>
                <p><strong>Message :</strong><br/>${message.replace(
                    /\n/g,
                    "<br/>"
                )}</p>
            `, // Contenu HTML avec un remplacement des retours à la ligne
        });

        // Réponse positive à la fin du processus
        return NextResponse.json({
            success: true,
            message: "Message envoyé avec succès.",
        });
    } catch (error) {
        // Si une erreur survient lors de l’envoi de l’e-mail, log + réponse erreur 500
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

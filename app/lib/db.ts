import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("⚠️ MONGODB_URI n'est pas défini dans le .env.local");
}

let isConnected = false;

export const connectToDatabase = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log("✅ Connecté à MongoDB avec succès");
    } catch (error) {
        console.error("❌ Erreur lors de la connexion à MongoDB :", error);
        throw error;
    }
};

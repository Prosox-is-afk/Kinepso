// Fichier prisma.ts - Gestion de l'instance Prisma pour éviter la recréation multiple en développement.

// Importation de PrismaClient depuis le package Prisma
import { PrismaClient } from "@prisma/client";

// Création d'une variable globale pour stocker l'instance Prisma
// Cela permet d'éviter la création de plusieurs instances en mode développement,
// car Next.js recharge fréquemment les modules lors des modifications de code.
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Création de l'instance Prisma uniquement si elle n'existe pas encore
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Si on est en développement (pas en production),
// on attache l'instance Prisma à la variable globale pour la réutiliser entre les rechargements.
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

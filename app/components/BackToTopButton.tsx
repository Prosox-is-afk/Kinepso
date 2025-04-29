// Fichier BackToTopButton.tsx - Composant React affichant un bouton "Retour en haut" (Back to Top)
// Ce bouton apparaît uniquement lorsque l'utilisateur a défilé la page de plus de 300px.
// Il utilise Framer Motion pour ajouter une animation d'apparition/disparition élégante.

// "use client" indique que ce composant est un composant client-side
"use client";

// Import des hooks React
import { useEffect, useState } from "react";
// Import des composants d'animation de Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Import d'une icône "chevron haut" depuis lucide-react
import { ChevronUp } from "lucide-react";

export default function BackToTopButton() {
    // State pour savoir si le bouton doit être visible ou non
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fonction qui détermine si on doit afficher ou cacher le bouton
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        // Ajout de l'écouteur d'événement scroll
        window.addEventListener("scroll", toggleVisibility);
        // Nettoyage de l'écouteur d'événement lors du démontage du composant
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Fonction appelée lorsqu'on clique sur le bouton pour remonter en haut
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        // AnimatePresence permet de gérer l'animation d'entrée/sortie du bouton
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 50 }} // Animation d'entrée
                    animate={{ opacity: 1, y: 0 }} // Animation une fois visible
                    exit={{ opacity: 0, y: 50 }} // Animation de sortie
                    className="fixed bottom-6 right-6 z-50 bg-[#3484DA] text-white p-3 rounded-full shadow-lg hover:bg-[#2c74be] transition-all duration-300 cursor-pointer"
                    aria-label="Remonter"
                >
                    {/* Icône de flèche vers le haut */}
                    <ChevronUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#014690", // bleu (titre)
                secondary: "#F4F4F5", // gris très clair
                dark: "#18181B", // noir doux
            },
            fontFamily: {
                sans: ["Arial", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
export default config;

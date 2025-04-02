import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["picsum.photos"], // ✅ on autorise ce domaine
    },
};

export default nextConfig;

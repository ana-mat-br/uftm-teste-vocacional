import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Garante que apenas os ícones referenciados sejam incluídos no bundle;
    // sem isso, Turbopack pode arrastar centenas de KB do barrel da lib.
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;

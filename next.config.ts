import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude native Node.js modules from Turbopack bundling
  // Required for pg (node-postgres) to work correctly
  serverExternalPackages: ["pg"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

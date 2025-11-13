import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export", // This makes it a static site
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
  basePath: "/marvel-auto-repair", // 👈 replace with your repo name
  assetPrefix: "/marvel-auto-repair/", // 👈 same repo name

  reactCompiler: true,
};

export default nextConfig;

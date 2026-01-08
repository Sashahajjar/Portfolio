import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Base path for GitHub Pages (repository name)
  basePath: '/Portfolio',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Base path for GitHub Pages (repository name)
  basePath: '/Portfolio',
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

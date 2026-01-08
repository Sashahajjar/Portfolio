import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/Portfolio' : '';

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Base path for GitHub Pages (repository name) - only in production builds
  basePath: basePath,
  // Asset prefix to ensure images load correctly
  assetPrefix: basePath,
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

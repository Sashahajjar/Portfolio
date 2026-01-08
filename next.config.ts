import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

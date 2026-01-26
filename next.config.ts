import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for Netlify deployment  
  images: {
    unoptimized: true, // Netlify doesn't support Next.js image optimization
  },
  // Skip build-time rendering for client-only pages
  skipTrailingSlashRedirect: true,
  // Disable static page generation
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
}; 

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for Netlify deployment
  images: {
    unoptimized: true, // Netlify doesn't support Next.js image optimization
  },
}; 

export default nextConfig;

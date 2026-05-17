import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  experimental: {
    // Some Next.js versions put it under experimental, some in root.
    // The warning said root, but we can put it in root directly.
  },
  allowedDevOrigins: ['10.196.196.87', 'localhost'],
} as NextConfig; // Type assertion in case the NextConfig type doesn't natively include it yet in this TS version

export default nextConfig;

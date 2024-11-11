/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'next',
  images: {
    unoptimized: true, // Use this if you have issues with image optimization in static export
  },
  basePath: '', // No base path for GitHub Pages root deployment
  assetPrefix: '', // Leave empty for root-level deployment
};

export default nextConfig;
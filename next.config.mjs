/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Use this if you have issues with image optimization in static export
    },
  };
  
  export default nextConfig;

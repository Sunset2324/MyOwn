/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Optimize image formats
    formats: ["image/avif", "image/webp"],
    // Reduce quality slightly for better perf
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Enable compression
  compress: true,
  // Optimize bundle
  experimental: {
    optimizeCss: true,
  },
};
module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    // These are fallback values for development only
    // In production, set these in your hosting environment (Netlify, Vercel, etc.)
    NEXT_PUBLIC_YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '',
    NEXT_PUBLIC_YOUTUBE_CHANNEL_ID: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || '',
  },
  images: {
    domains: ["via.placeholder.com", "media.istockphoto.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;

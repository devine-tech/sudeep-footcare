/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    // These are fallback values for development only
    // In production, set these in your hosting environment (Netlify, Vercel, etc.)
    NEXT_PUBLIC_YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '',
    NEXT_PUBLIC_YOUTUBE_CHANNEL_ID: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || '',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || 'AIzaSyCM82aLfv7n-d0fK_wY5w9G1Cbckp3lmkU',
  },
  images: {
    domains: ["via.placeholder.com", "media.istockphoto.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;

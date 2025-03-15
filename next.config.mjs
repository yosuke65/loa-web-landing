/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turboMode: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;

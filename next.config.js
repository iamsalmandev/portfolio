/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: isProd ? 'https://iamsalmandev.vercel.app' : 'http://localhost:3000/',
  },
  basePath: '/portfolio',
};

module.exports = nextConfig;

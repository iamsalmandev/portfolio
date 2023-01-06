/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:3000'],
  },
  // images: {
  //   loader: 'akamai',
  //   path: isProd
  //     ? 'https://github.com/iamsalmandev/'
  //     : 'http://localhost:3000/',
  // },
};

module.exports = nextConfig;

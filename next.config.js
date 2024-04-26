/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  react: {
    useSuspense: false,
    wait: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  },
};

module.exports = nextConfig;

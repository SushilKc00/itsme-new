/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  images: {
    remotePatterns: [
      {
        hostname: '127.0.0.1',
        protocol: 'http',
      },
        {
        hostname: 'directus-host.onrender.com',
        protocol: 'https',
      },
    ],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    dirs: ['./'] // before build, eslint will check all eslint value!
  },
  images: {
    remotePatterns: [
      {
        hostname: '*'
      }
    ]
  }
};

module.exports = nextConfig;

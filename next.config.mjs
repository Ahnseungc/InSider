/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  distDir: '.next',

  webpack(config) {
    // svg
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    const prod = process.env.NODE_ENV === 'production';

    return {
      ...config,
      mode: prod ? 'production' : 'development',
    };
  },
};

export default nextConfig;

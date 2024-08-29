/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  distDir: ".next",

  webpack(config) {
    const prod = process.env.NODE_ENV === "production";

    return {
      ...config,
      mode: prod ? "production" : "development",
    };
  },
};

export default nextConfig;

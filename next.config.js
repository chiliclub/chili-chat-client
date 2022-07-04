const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        "@utils": path.resolve(__dirname, "src/utils"),
        "@components": path.resolve(__dirname, "src/components"),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;

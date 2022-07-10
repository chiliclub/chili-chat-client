const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        "@utils": path.resolve(__dirname, "src/utils"),
        "@components": path.resolve(__dirname, "src/components"),
        "@public": path.resolve(__dirname, "public"),
        "@api": path.relative(__dirname, "api"),
        "@type": path.resolve(__dirname, "type"),
        "@styles": path.resolve(__dirname, "styles"),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mj-website/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;

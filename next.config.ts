import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/apex-mma",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

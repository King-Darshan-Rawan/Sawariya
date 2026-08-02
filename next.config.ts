import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Sawariya",
  assetPrefix: "/Sawariya",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
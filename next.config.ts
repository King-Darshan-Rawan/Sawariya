import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  basePath: isGithubPages ? "/Sawariya" : "",
  assetPrefix: isGithubPages ? "/Sawariya/" : "",
};

export default nextConfig;
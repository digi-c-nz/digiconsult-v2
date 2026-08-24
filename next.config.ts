import type { NextConfig } from "next";

const repoBase = "/digiconsult.-v2";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: repoBase,
  assetPrefix: repoBase,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "**.scdn.co",
              port: "",
          },
          {
              protocol: "https",
              hostname: "**.spotifycdn.com",
              port: "",
          }
      ]
  }
};

export default nextConfig;

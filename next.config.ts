import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: lets the site's scripts load when it is opened by LAN IP
  // (e.g. from a phone) instead of localhost. Without it the page never
  // hydrates, so buttons and forms do nothing.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

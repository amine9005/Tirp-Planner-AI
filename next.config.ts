import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default withNextVideo(nextConfig);

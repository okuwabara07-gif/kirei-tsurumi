import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // ローカル画像のみ使用するため remotePatterns 不要
  },
};

export default nextConfig;

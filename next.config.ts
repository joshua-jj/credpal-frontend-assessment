import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/wallet",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  basePath: "/empresas",
  assetPrefix: 'https://marcio-simioni-site-nextjs.vercel.app',
};

module.exports = nextConfig;

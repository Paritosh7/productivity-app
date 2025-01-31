// import type { NextConfig } from "next";
// import withNextIntl from "next-intl/plugin";

// const nextConfig = {};

// const withNextIntlConfig = withNextIntl("./i18n.ts");

// module.exports = withNextIntlConfig(nextConfig);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl(nextConfig);

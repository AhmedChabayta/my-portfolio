/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    NEXT_PUBLIC_DEPLOYMENT_ENV:
      process.env.NEXT_PUBLIC_DEPLOYMENT_ENV || "development",
    NEXT_PUBLIC_PRIMARY_COLOR:
      process.env.NEXT_PUBLIC_PRIMARY_COLOR || "blue",
    NEXT_PUBLIC_DEFAULT_COLOR_SCHEME:
      process.env.NEXT_PUBLIC_DEFAULT_COLOR_SCHEME || "light",
    NEXT_PUBLIC_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_ANALYTICS_ID || "",
    NEXT_PUBLIC_CMS_ENDPOINT:
      process.env.NEXT_PUBLIC_CMS_ENDPOINT || "",
  },
};

module.exports = nextConfig;

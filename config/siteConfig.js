const fallback = (value, defaultValue) => {
  if (value === undefined || value === null || value === "") {
    return defaultValue;
  }
  return value;
};

const normalizedColorScheme = fallback(
  process.env.NEXT_PUBLIC_DEFAULT_COLOR_SCHEME,
  "light"
).toLowerCase();

export const siteConfig = {
  deploymentEnv: fallback(
    process.env.NEXT_PUBLIC_DEPLOYMENT_ENV,
    "development"
  ),
  siteUrl: fallback(
    process.env.NEXT_PUBLIC_SITE_URL,
    "http://localhost:3000"
  ),
  primaryColor: fallback(process.env.NEXT_PUBLIC_PRIMARY_COLOR, "blue"),
  defaultColorScheme: ["dark", "light"].includes(normalizedColorScheme)
    ? normalizedColorScheme
    : "light",
  analyticsId: fallback(process.env.NEXT_PUBLIC_ANALYTICS_ID, null),
  cmsEndpoint: fallback(process.env.NEXT_PUBLIC_CMS_ENDPOINT, null),
};

export const isProduction = siteConfig.deploymentEnv === "production";
export const isStaging = siteConfig.deploymentEnv === "staging";
export const isPreview = !isProduction;

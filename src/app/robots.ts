import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/auth/", "/dashboard", "/portfolio", "/settings", "/admin", "/billing", "/screener", "/api-keys", "/onboarding", "/referrals"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Security headers on all routes
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Clickjacking protection on non-API, non-embed routes
        source: "/:path((?!api|embed).*)",
        headers: [{ key: "X-Frame-Options", value: "DENY" }],
      },
      {
        // OG images — 24h edge cache, 7d stale
        source: "/opengraph-image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // Apple icon + favicon — long cache
        source: "/(icon|apple-icon)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=604800, stale-while-revalidate=2592000",
          },
        ],
      },
      {
        // Sitemap — 1h edge cache
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // robots.txt — almost never changes
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, immutable",
          },
        ],
      },
      {
        // Manifest — long cache
        source: "/manifest.webmanifest",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=604800, immutable",
          },
        ],
      },
      {
        // CORS for public API
        source: "/api/v1/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, X-API-Key, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

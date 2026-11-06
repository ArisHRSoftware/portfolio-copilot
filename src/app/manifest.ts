import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brefyr",
    short_name: "Brefyr",
    description:
      "AI-powered SEC filing analysis for 7,600+ uncovered US small-cap stocks",
    start_url: "/dashboard",
    display: "standalone",
    background_color: "#0a1a0f",
    theme_color: "#4ade80",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

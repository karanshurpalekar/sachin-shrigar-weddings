import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { stories, locations } from "@/lib/content";

const BASE_URL = "";

const staticPaths = [
  "/",
  "/about",
  "/services",
  "/stories",
  "/gallery",
  "/locations",
  "/destination-weddings",
  "/testimonials",
  "/blog",
  "/faq",
  "/contact",
];

const paths = [
  ...staticPaths,
  ...stories.map((s) => `/stories/${s.slug}`),
  ...locations.map((l) => `/locations/${l.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map(
          (p) => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

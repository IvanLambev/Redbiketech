import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/product", priority: 0.9 },
    { path: "/how-it-works", priority: 0.85 },
    { path: "/benefits", priority: 0.85 },
    { path: "/book-demo", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/faq", priority: 0.75 },
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }))
}

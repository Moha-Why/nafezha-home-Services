import { categories, saudiCities } from "@/db/data"
import { SITE_URL } from "@/lib/site"

export default function sitemap() {
  const now = new Date()

  const home = [
    { url: SITE_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const cityRoutes = saudiCities.map((city) => ({
    url: `${SITE_URL}/services/${encodeURIComponent(city.slug)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  const serviceRoutes = saudiCities.flatMap((city) =>
    categories.map((category) => ({
      url: `${SITE_URL}/services/${encodeURIComponent(city.slug)}/${encodeURIComponent(category.slug)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    }))
  )

  return [...home, ...cityRoutes, ...serviceRoutes]
}

import { categories } from "@/db/data";

export default function sitemap() {
  const baseUrl = 'nafezha-home-services.com';
  const currentDate = new Date();

  // Home page
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Add all category pages
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/services/${encodeURIComponent(category.slug)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...categoryRoutes];
}

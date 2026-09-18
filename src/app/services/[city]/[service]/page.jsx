import Link from "next/link"
import { notFound } from "next/navigation"
import CategoryServicesGrid from "@/components/CategoryServicesGrid"
import { categories, saudiCities, services } from "@/db/data"
import { SITE_URL, prettySlug } from "@/lib/site"

function findCity(cityParam) {
  const decoded = decodeURIComponent(cityParam)
  return saudiCities.find((c) => c.slug === decoded || c.slug === cityParam)
}

function findCategory(serviceParam) {
  const decoded = decodeURIComponent(serviceParam)
  return categories.find((c) => c.slug === decoded || c.slug === serviceParam)
}

export async function generateStaticParams() {
  const params = []
  for (const city of saudiCities) {
    for (const category of categories) {
      params.push({ city: city.slug, service: category.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }) {
  const { city, service } = await params
  const cityData = findCity(city)
  const category = findCategory(service)
  if (!cityData || !category) {
    return { title: "غير موجود" }
  }

  const title = `${prettySlug(category.slug)} في ${prettySlug(cityData.slug)}`
  return {
    title,
    description: `نفذها — ${title}. صيانة وتنظيف في السعودية.`,
    alternates: {
      canonical: `/services/${cityData.slug}/${category.slug}`,
    },
  }
}

export default async function CategoryPage({ params }) {
  const { city, service } = await params
  const cityData = findCity(city)
  const category = findCategory(service)
  if (!cityData || !category) notFound()

  const categoryServices = services.filter((s) => s.category === category.name)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${category.name} في ${cityData.name}`,
    description: category.description,
    provider: {
      "@type": "LocalBusiness",
      name: "نفذها",
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: cityData.name },
    serviceType: category.name,
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg-section)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-7xl mx-auto py-12 px-4">
        <nav className="text-sm mb-6" style={{ color: "var(--color-text-muted)" }}>
          <Link href="/" className="hover:underline">
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/services/${cityData.slug}`}
            className="hover:underline"
          >
            {cityData.name}
          </Link>
          <span className="mx-2">/</span>
          <span>{category.name}</span>
        </nav>

        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            {category.name} في {cityData.name}
          </h1>
          <div
            className="h-1 mx-[35%] mb-2"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
            style={{ color: "var(--color-text-body)" }}
          >
            {category.description}
          </p>
        </div>

        <CategoryServicesGrid services={categoryServices} city={cityData.slug} />
      </div>
    </div>
  )
}

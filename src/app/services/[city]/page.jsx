import Link from "next/link"
import { notFound } from "next/navigation"
import Services from "@/components/Services"
import { saudiCities } from "@/db/data"
import { SITE_URL, prettySlug } from "@/lib/site"

function findCity(cityParam) {
  const decoded = decodeURIComponent(cityParam)
  return saudiCities.find((c) => c.slug === decoded || c.slug === cityParam)
}

export async function generateStaticParams() {
  return saudiCities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }) {
  const { city } = await params
  const cityData = findCity(city)
  if (!cityData) {
    return { title: "غير موجود" }
  }

  const title = `خدمات منزلية في ${cityData.name}`
  return {
    title,
    description: `نفذها — ${title}. صيانة وتنظيف في السعودية.`,
    alternates: {
      canonical: `/services/${cityData.slug}`,
    },
  }
}

export default async function CityServicesPage({ params }) {
  const { city } = await params
  const cityData = findCity(city)
  if (!cityData) notFound()

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "نفذها",
    description: `نقدم خدمات منزلية وصيانة متكاملة في ${cityData.name}.`,
    url: `${SITE_URL}/services/${encodeURIComponent(cityData.slug)}`,
    image: `${SITE_URL}/icon.png`,
    telephone: "+966572652193",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityData.name,
      addressCountry: "SA",
    },
    areaServed: { "@type": "City", name: cityData.name },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-10">
          <nav className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" className="hover:underline">
              الرئيسية
            </Link>
            <span className="mx-2">/</span>
            <span>{cityData.name}</span>
          </nav>
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: "var(--color-primary)" }}
          >
            خدمات منزلية في {cityData.name}
          </h1>
          <p className="text-lg mb-2" style={{ color: "var(--color-text-body)" }}>
            {prettySlug(cityData.slug)} — صيانة وتنظيف وخدمات منزلية في السعودية.
          </p>
        </div>
        <Services city={cityData.slug} />
      </div>
    </>
  )
}

import { categories, services, saudiCities } from "@/db/data";
import CategoryServicesGrid from "@/components/CategoryServicesGrid";
import { notFound } from "next/navigation";

// JSON-LD Structured Data Component
function ServiceStructuredData({ category, cityName, services, baseUrl }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `خدمات ${category.name} في ${cityName}`,
    "description": category.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "نفذها",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressCountry": "SA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "serviceType": category.name,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `خدمات ${category.name}`,
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": cityName,
        "item": `${baseUrl}/services/${encodeURIComponent(cityName)}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.name,
        "item": `${baseUrl}/services/${encodeURIComponent(cityName)}/${category.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}

export default async function CategoryPage({ params }) {
  const { city, service } = await params;


  const decoded = decodeURIComponent(service);
  const currentCity = decodeURIComponent(city)
  // Find the category by slug
  const category = categories.find((cat) => cat.slug === decoded);

  // If category not found, show 404
  if (!category) {
    notFound();
  }

  // Filter services that belong to this category
  const categoryServices = services.filter(
    (service) => service.category === category.name
  );

  // Get city name for structured data
  const cityData = saudiCities.find((c) => c.slug === currentCity);
  const cityName = cityData?.name || currentCity;
  const baseUrl = 'https://nafzha.com'; // Update with your actual domain

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-section)' }}>
      <ServiceStructuredData
        category={category}
        cityName={cityName}
        services={categoryServices}
        baseUrl={baseUrl}
      />

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            {category.name}
          </h1>
               {/* Accent Bar */}
      <div
        className="h-1 mx-[35%] mb-2"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
            style={{ color: 'var(--color-text-body)' }}
          >
            {category.description}
          </p>
        </div>

        {/* Search Bar and Services Grid */}
        <CategoryServicesGrid services={categoryServices} city={currentCity} />
      </div>
    </div>
  );
}

// Generate static params for all city + service combinations
export async function generateStaticParams() {
  const { saudiCities } = await import("@/db/data");
  const params = [];

  for (const city of saudiCities) {
    for (const category of categories) {
      params.push({
        city: city.slug,
        service: category.slug,
      });
    }
  }

  return params;
}

// Generate metadata for each category page with full SEO optimization
export async function generateMetadata({ params }) {
  const { city, service } = await params;
  const { saudiCities } = await import("@/db/data");

  const decodedService = decodeURIComponent(service);
  const decodedCity = decodeURIComponent(city);

  const category = categories.find((cat) => cat.slug === decodedService);
  const cityData = saudiCities.find((c) => c.slug === decodedCity);

  if (!category) {
    return {
      title: 'الفئة غير موجودة | نفذها',
      robots: 'noindex, nofollow',
    };
  }

  const cityName = cityData?.name || decodedCity;
  const title = `خدمات ${category.name} في ${cityName} | نفذها - أفضل مزودي الخدمات`;
  const description = `احصل على أفضل خدمات ${category.name} في ${cityName}. ${category.description.split('\n')[0]} اتصل بنا الآن للحصول على عروض أسعار مجانية.`;

  const baseUrl = 'https://nafzha.com'; // Update with your actual domain
  const canonicalUrl = `${baseUrl}/services/${city}/${service}`;

  return {
    title,
    description,
    keywords: `${category.name}, خدمات ${category.name}, ${category.name} ${cityName}, ${cityName}, خدمات منزلية, نفذها`,
    authors: [{ name: 'نفذها' }],
    creator: 'نفذها',
    publisher: 'نفذها',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'نفذها',
      locale: 'ar_SA',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/icon.png`,
          width: 1200,
          height: 630,
          alt: `خدمات ${category.name} في ${cityName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/icon.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

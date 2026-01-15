import Services from "@/components/Services";
import { saudiCities } from "@/db/data";

// JSON-LD Structured Data Component for City Page
function CityStructuredData({ cityName, baseUrl }) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    "name": "نفذها",
    "description": `نقدم خدمات منزلية وصيانة متكاملة في ${cityName}. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة.`,
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/icon.png`,
      "width": 512,
      "height": 512
    },
    "image": `${baseUrl}/icon.png`,
    "priceRange": "$$",
    "telephone": "+966572652193",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "SA",
      "addressRegion": "المملكة العربية السعودية"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "serviceType": [
      "خدمات منزلية",
      "تنظيف",
      "سباكة",
      "كهرباء",
      "تكييف",
      "نجارة",
      "دهانات",
      "عزل",
      "مكافحة حشرات",
      "حدادة",
      "هناجر"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "08:00",
      "closes": "22:00"
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
        "name": "الخدمات",
        "item": `${baseUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cityName,
        "item": `${baseUrl}/services/${encodeURIComponent(cityName)}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}

export default async function CityServicesPage({ params }) {
  const { city } = await params;
  const currentCity = decodeURIComponent(city);

  // Get city data for proper name
  const cityData = saudiCities.find((c) => c.slug === currentCity);
  const cityName = cityData?.name || currentCity;
  const baseUrl = 'https://nafzha.com';

  return (
    <>
      <CityStructuredData cityName={cityName} baseUrl={baseUrl} />
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
        <Services city={currentCity} />
      </div>
    </>
  );
}

// Generate static params for all cities
export async function generateStaticParams() {
  return saudiCities.map((city) => ({
    city: city.slug,
  }));
}

// Generate metadata for each city page with full SEO optimization
export async function generateMetadata({ params }) {
  const { city } = await params;
  const decodedCity = decodeURIComponent(city);

  const cityData = saudiCities.find((c) => c.slug === decodedCity);
  const cityName = cityData?.name || decodedCity;

  const baseUrl = 'https://nafzha.com';
  const canonicalUrl = `${baseUrl}/services/${city}`;

  const title = `خدمات منزلية وصيانة في ${cityName} | نفذها - أفضل مزودي الخدمات`;
  const description = `احصل على أفضل خدمات منزلية وصيانة في ${cityName}. تنظيف، سباكة، كهرباء، تكييف، نجارة، دهانات والمزيد. فرق فنية متخصصة تعمل وفق أعلى معايير الجودة. اتصل الآن!`;

  return {
    title,
    description,
    keywords: `خدمات منزلية ${cityName}, صيانة ${cityName}, تنظيف ${cityName}, سباكة ${cityName}, كهرباء ${cityName}, تكييف ${cityName}, نفذها ${cityName}`,
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
          width: 512,
          height: 512,
          alt: `خدمات منزلية في ${cityName}`,
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

import Services from "@/components/Services";
import { Cossette_Texte } from "next/font/google";

export default async function Home( { params } ) {
  const { city } = await params
  const currentCity = decodeURIComponent(city)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "نفذها",
    "description": "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة، لتلبية جميع احتياجات المنازل، الفلل، المباني، والمشاريع تحت سقف واحد وبحلول عملية وسريعة.",
    "url": "nafezha-home-services.app.vercel",
    "logo": "nafezha-home-services.app.vercel/cleaning.jpg",
    "image": "nafezha-home-services.app.vercel/cleaning.jpg",
    "priceRange": "$$",
    "telephone": "+966572652193",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "المملكة العربية السعودية"
    },
    "areaServed": {
      "@type": "Country",
      "name": "المملكة العربية السعودية"
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
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
        <Services city={currentCity} />
      </div>
    </>
  );
}


export async function generateMetadata(
  { params }
) {
  const city = decodeURIComponent(params.city);

  return {
    title: `نفذها - خدمات منزلية وصيانة في ${city}`,
    description:
      "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية...",
    openGraph: {
      title: `نفذها - خدمات منزلية وصيانة في ${city}`,
      description:
        "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية...",
      url: "https://nafezha-home-services.app.vercel",
      type: "website",
    },
  };
}

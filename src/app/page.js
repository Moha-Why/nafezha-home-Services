import Services from "@/components/Services";

export const metadata = {
  title: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
  description: "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة، لتلبية جميع احتياجات المنازل، الفلل، المباني، والمشاريع تحت سقف واحد وبحلول عملية وسريعة.",
  openGraph: {
    title: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    description: "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة، لتلبية جميع احتياجات المنازل، الفلل، المباني، والمشاريع تحت سقف واحد وبحلول عملية وسريعة.",
    url: 'https://nafzha.com',
    type: 'website',
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "نفذها",
    "description": "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة، لتلبية جميع احتياجات المنازل، الفلل، المباني، والمشاريع تحت سقف واحد وبحلول عملية وسريعة.",
    "url": "https://nafzha.com",
    "logo": "https://nafzha.com/logo.png",
    "image": "https://nafzha.com/og-image.jpg",
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
        <Services />
      </div>
    </>
  );
}

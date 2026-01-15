import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Arabic-optimized font
const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// JSON-LD Organization Structured Data
function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nafzha.com/#organization",
    "name": "نفذها",
    "alternateName": "Nafzha",
    "description": "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية",
    "url": "https://nafzha.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nafzha.com/icon.png",
      "width": 512,
      "height": 512
    },
    "image": "https://nafzha.com/icon.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "المملكة العربية السعودية"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "areaServed": {
      "@type": "Country",
      "name": "المملكة العربية السعودية"
    },
    "serviceType": [
      "خدمات التنظيف",
      "خدمات السباكة",
      "خدمات الكهرباء",
      "خدمات التكييف",
      "خدمات النجارة",
      "خدمات الدهانات",
      "خدمات العزل",
      "مكافحة الحشرات"
    ],
    "priceRange": "$$",
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
    },
    "sameAs": [
      // Add your social media URLs here
      // "https://twitter.com/nafzha",
      // "https://www.instagram.com/nafzha",
      // "https://www.facebook.com/nafzha"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nafzha.com/#website",
    "name": "نفذها",
    "url": "https://nafzha.com",
    "publisher": {
      "@id": "https://nafzha.com/#organization"
    },
    "inLanguage": "ar-SA",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nafzha.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}

// Separate viewport export (Next.js 14+ best practice)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a365d', // Update with your brand color
};

export const metadata = {
  title: {
    default: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    template: "%s | نفذها"
  },
  description: "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة، لتلبية جميع احتياجات المنازل، الفلل، المباني، والمشاريع تحت سقف واحد وبحلول عملية وسريعة.",
  keywords: [
    "خدمات منزلية",
    "صيانة منزلية",
    "السعودية",
    "تنظيف",
    "سباكة",
    "كهرباء",
    "تكييف",
    "نجارة",
    "دهانات",
    "عزل",
    "مكافحة حشرات",
    "حدادة",
    "ألمنيوم",
    "هناجر",
    "خدمات منازل السعودية",
    "نفذها",
    "صيانة الرياض",
    "صيانة جدة",
    "خدمات منزلية الرياض"
  ],
  authors: [{ name: "نفذها" }],
  creator: "نفذها",
  publisher: "نفذها",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nafzha.com'), // Updated to production domain
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
    },
  },
  // Icons and favicons
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180' },
    ],
    shortcut: '/icon.png',
  },
  // Manifest for PWA
  manifest: '/manifest.json',
  // Verification tags - add your verification codes here
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console code
    // yandex: 'your-yandex-code',
    // bing: 'your-bing-code',
  },
  // Category for better classification
  category: 'home services',
  // Open Graph
  openGraph: {
    title: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    description: "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة.",
    url: 'https://nafzha.com',
    siteName: 'نفذها',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'نفذها - خدمات منزلية وصيانة في السعودية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    description: "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية.",
    images: ['/icon.png'],
    // creator: '@nafzha', // Add your Twitter handle
    // site: '@nafzha',
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
  // Additional meta tags for Arabic SEO
  other: {
    'google': 'notranslate', // Prevent auto-translation
    'content-language': 'ar-SA',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <OrganizationStructuredData />
      </head>
      <body
        className={`${notoSansArabic.variable} antialiased`}
        style={{ fontFamily: 'var(--font-noto-arabic), system-ui, sans-serif' }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import { Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { SITE_URL } from "@/lib/site"

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "نفذها",
    alternateName: "Nafzha",
    description:
      "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/icon.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: "المملكة العربية السعودية",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.7136",
      longitude: "46.6753",
    },
    areaServed: {
      "@type": "Country",
      name: "المملكة العربية السعودية",
    },
    serviceType: [
      "خدمات التنظيف",
      "خدمات السباكة",
      "خدمات الكهرباء",
      "خدمات التكييف",
      "خدمات النجارة",
      "خدمات الدهانات",
      "خدمات العزل",
      "مكافحة الحشرات",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "نفذها",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "ar-SA",
  }

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
  )
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a365d",
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    template: "%s | نفذها",
  },
  description:
    "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة، لتلبية جميع احتياجات المنازل، الفلل، المباني، والمشاريع تحت سقف واحد وبحلول عملية وسريعة.",
  authors: [{ name: "نفذها" }],
  creator: "نفذها",
  publisher: "نفذها",
  alternates: {
    canonical: "/",
    languages: { "ar-SA": "/" },
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "any" }],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
    shortcut: "/icon.png",
  },
  manifest: "/manifest.json",
  category: "home services",
  openGraph: {
    title: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    description:
      "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية.",
    url: SITE_URL,
    siteName: "نفذها",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "نفذها - خدمات منزلية وصيانة في السعودية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    description:
      "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    google: "notranslate",
    "content-language": "ar-SA",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <OrganizationStructuredData />
      </head>
      <body
        className={`${notoSansArabic.variable} antialiased`}
        style={{ fontFamily: "var(--font-noto-arabic), system-ui, sans-serif" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

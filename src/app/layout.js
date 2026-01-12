import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    "خدمات منازل السعودية"
  ],
  authors: [{ name: "نفذها" }],
  creator: "نفذها",
  publisher: "نفذها",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nafzha.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    description: "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية. فرقنا الفنية متخصصة وتعمل وفق أعلى معايير الجودة.",
    url: 'https://nafzha.com',
    siteName: 'نفذها',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "نفذها - خدمات منزلية وصيانة متكاملة في السعودية",
    description: "نقدم خدمات منزلية وصيانة متكاملة تغطي جميع مدن المملكة العربية السعودية.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

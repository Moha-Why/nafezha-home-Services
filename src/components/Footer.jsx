import Link from "next/link";
import { categories, saudiCities } from "@/db/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Show only first 6 cities in footer
  const featuredCities = saudiCities.slice(0, 6);

  // Show only first 6 categories in footer
  const featuredCategories = categories.slice(0, 6);

  return (
    <footer
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <span className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>ن</span>
              </div>
              <div>
                <span
                  className="text-xl font-bold block leading-tight"
                  style={{ color: "var(--color-text-invert)" }}
                >
                  نفذها
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--color-accent)" }}
                >
                  خدمات منزلية متكاملة
                </span>
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--color-text-invert)", opacity: 0.7 }}
            >
              منصتك الأولى للخدمات المنزلية في المملكة العربية السعودية. نربطك بأفضل الحرفيين والشركات المتخصصة.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966572652193"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "var(--color-whatsapp)",
                color: "white",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              تواصل معنا
            </a>
          </div>

          {/* Services Section */}
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              خدماتنا
            </h3>
            <ul className="space-y-2">
              {featuredCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/services/جدة/${category.slug}`}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: "var(--color-text-invert)", opacity: 0.8 }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Section */}
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              المدن
            </h3>
            <ul className="space-y-2">
              {featuredCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/services/${city.slug}`}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: "var(--color-text-invert)", opacity: 0.8 }}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/966572652193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:underline"
                  style={{ color: "var(--color-text-invert)", opacity: 0.8 }}
                >
                  <svg className="w-4 h-4" style={{ color: "var(--color-whatsapp)" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  966572652193+
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--color-text-invert)", opacity: 0.8 }}
              >
                <svg className="w-4 h-4" style={{ color: "var(--color-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                المملكة العربية السعودية
              </li>
              <li
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--color-text-invert)", opacity: 0.8 }}
              >
                <svg className="w-4 h-4" style={{ color: "var(--color-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                السبت - الخميس: 8 ص - 10 م
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "var(--color-primary-soft)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-sm text-center md:text-right"
              style={{ color: "var(--color-text-invert)", opacity: 0.6 }}
            >
              © {currentYear} نفذها. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm transition-colors hover:underline"
                style={{ color: "var(--color-text-invert)", opacity: 0.6 }}
              >
                الرئيسية
              </Link>
              <span style={{ color: "var(--color-primary-soft)" }}>|</span>
              <a
                href="https://nafezha.com"
                className="text-sm transition-colors hover:underline"
                style={{ color: "var(--color-text-invert)", opacity: 0.6 }}
              >
                انضم لنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

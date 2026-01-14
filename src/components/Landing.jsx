"use client";


export default function Landing() {
  const services = [
    { icon: "🔧", label: "صيانة عامة للمنزل" },
    { icon: "⚡", label: "أعمال كهرباء وسباكة" },
    { icon: "🚪", label: "تركيب أبواب ونوافذ" },
    { icon: "🧹", label: "تنظيف وترتيب المنزل" },
    { icon: "🏗️", label: "الترميم والتجديد" },
  ];

  return (
    <section
      className="min-h-screen pt-8 pb-16 px-4 md:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 right-20 w-72 h-72 rounded-full"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: "var(--color-primary-soft)",
              border: "1px solid var(--color-accent)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span style={{ color: "var(--color-accent)" }} className="text-sm font-medium">
              وجهتك الأولى لأفضل الحرفيين في السعودية
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text-invert)" }}
          >
            نفّذها للخدمات
            <span
              className="block mt-2"
              style={{ color: "var(--color-accent)" }}
            >
              المنزلية
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl max-w-4xl mx-auto mb-6 leading-relaxed"
            style={{ color: "var(--color-text-invert)", opacity: 0.85 }}
          >
            المنصة الرقمية التي تجمع أفضل الحرفيين والشركات المتخصصة في الصيانة المنزلية تحت سقف واحد.
            سواء كنت تبحث عن تركيب، صيانة، تنظيف، أو أعمال كهربائية وسباكة، ستجد لدينا أفضل المؤسسات والشركات الموثوقة.
          </p>

          <p
            className="text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--color-text-invert)", opacity: 0.7 }}
          >
            نربطك مباشرة بحرفيين محترفين ومؤسسات معتمدة لضمان جودة الخدمة وراحة البال.
            وفر الوقت، وتجنب عناء البحث، واحصل على خدمات منزلية عالية الجودة بضغطة زر.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--color-whatsapp)",
                color: "white",
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              تواصل معنا
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "var(--color-text-invert)" }}
          >
            خدماتنا تشمل
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--color-primary-soft)",
                  border: "1px solid var(--color-primary-hover)",
                }}
              >
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-invert)" }}
                >
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div
          className="text-center p-6 rounded-2xl"
          style={{
            backgroundColor: "var(--color-primary-soft)",
            border: "1px solid var(--color-accent)",
          }}
        >
          <p
            className="text-lg md:text-xl font-bold"
            style={{ color: "var(--color-accent)" }}
          >
            نفّذها – حيث تجد كل ما تحتاجه لخدمات منزلك بأعلى جودة وبأقرب وقت
          </p>
        </div>
      </div>
    </section>
  );
}

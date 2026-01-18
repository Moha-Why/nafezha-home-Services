export const metadata = {
  title: "السياسات والشروط | نفذها",
  description: "تعرف على السياسات والشروط وإخلاء المسؤولية لمنصة نفذها للخدمات المنزلية في المملكة العربية السعودية. سياسة الخصوصية، حقوق المستخدمين، وشروط مقدمي الخدمات.",
  keywords: [
    "سياسة الخصوصية نفذها",
    "شروط الاستخدام",
    "إخلاء المسؤولية",
    "سياسة مقدمي الخدمات",
    "حقوق المستخدم",
    "خدمات منزلية السعودية",
  ],
  openGraph: {
    title: "السياسات والشروط | نفذها",
    description: "تعرف على السياسات والشروط وإخلاء المسؤولية لمنصة نفذها للخدمات المنزلية في المملكة العربية السعودية.",
    url: "https://nafezha-home-services.vercel.app/terms",
    siteName: "نفذها",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "السياسات والشروط | نفذها",
    description: "تعرف على السياسات والشروط وإخلاء المسؤولية لمنصة نفذها للخدمات المنزلية.",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main
      className="min-h-screen py-12 px-4 md:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            السياسات والشروط
          </h1>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "var(--color-bg-muted)" }}
          >
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-primary)" }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                1
              </span>
              الشروط العامة
            </h2>
            <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                استخدام المنصة متاح لكل العملاء ومقدمي الخدمات المسجلين.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                التسجيل يعني قبول جميع شروط وسياسات نفّذها.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                الالتزام بالقوانين المحلية وحماية حقوق الآخرين واجب على الجميع.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "var(--color-bg-muted)" }}
          >
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-primary)" }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                2
              </span>
              سياسة الخصوصية
            </h2>
            <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                نحترم خصوصية المستخدمين ونسجل البيانات لتسهيل الخدمة فقط.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                لا نشارك المعلومات مع أطراف خارجية إلا لأغراض تنفيذ الخدمات أو بموافقة المستخدم.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "var(--color-bg-muted)" }}
          >
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-primary)" }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                3
              </span>
              سياسة مقدمي الخدمات
            </h2>
            <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                يجب على مقدمي الخدمات الالتزام بالمعايير والجودة المحددة.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                يحق للمنصة إيقاف أي مقدم خدمة لا يلتزم بالمعايير أو تضر سمعة المنصة.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          {/* <section
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "var(--color-bg-muted)" }}
          >
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-primary)" }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                4
              </span>
              سياسة التسويق بالعمولة
            </h2>
            <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                للمسوّقين رابط تسويقي خاص يُحتسب عليه النقاط عند كل ضغطة.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                كل 1000 نقطة أو حسب الاتفاق تتحول إلى عمولة مالية.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                التلاعب أو النقرات المزيفة تؤدي لإلغاء النقاط.
              </li>
            </ul>
          </section> */}

          {/* Section 5 */}
          <section
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "var(--color-bg-muted)" }}
          >
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-primary)" }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                4
              </span>
              حقوق وواجبات المستخدم
            </h2>
            <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                الحق في طلب الخدمة أو الاستفسار أو تقديم شكوى.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                الالتزام بالاحترام وعدم إساءة استخدام المنصة.
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "var(--color-accent)" }}>•</span>
                أي مخالفة للسياسات قد تؤدي لتعليق أو إيقاف الحساب.
              </li>
            </ul>
          </section>

          {/* Disclaimer Section */}
          <section
            className="p-6 rounded-2xl border-2"
            style={{
              backgroundColor: "var(--color-primary)",
              borderColor: "var(--color-accent)",
            }}
          >
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-accent)" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              إخلاء المسؤولية
            </h2>
            <div className="space-y-4" style={{ color: "var(--color-text-invert)", opacity: 0.9 }}>
              <p>
                منصة نفّذها تعمل كوسيط بين العملاء ومقدمي الخدمات المنزلية، ولا تتحمل أي مسؤولية عن أفعال أو خدمات مقدمي الخدمات.
              </p>
              <p>
                جميع المعلومات المقدمة على المنصة لغرض تسهيل الوصول للخدمات فقط.
              </p>
              <p>
                جودة الخدمات والتزام مقدميها بالمعايير مسؤوليتهم الخاصة.
              </p>
              <p>
                استخدام المنصة يعني قبول المستخدم بهذه الشروط، وإخلاء المنصة من أي مسؤولية قانونية تجاه أي ضرر أو خسارة ناتجة عن الخدمة.
              </p>
              <p
                className="pt-4 border-t font-medium"
                style={{ borderColor: "var(--color-primary-soft)", color: "var(--color-accent)" }}
              >
                ننصح العملاء بالتحقق من مقدمي الخدمة ومراجعة التقييمات قبل الطلب لضمان تجربة آمنة وموثوقة.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

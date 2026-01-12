import Services from "@/components/Services";
import Cities from "@/components/Cities";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* <section
        className="w-full py-20 px-4 md:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: 'var(--color-text-invert)' }}
          >
            نفذها - خدمات منزلية متكاملة
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-invert)', opacity: 0.95 }}
          >
            حلول صيانة وإصلاح شاملة لجميع احتياجاتك المنزلية في كافة مدن المملكة
          </p>
        </div>
      </section> */}

      {/* Cities Section */}
      <Cities />
    </main>
  );
}

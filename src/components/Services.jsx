import { categories } from "@/db/data";
import ServiceCard from "./ServiceCard";

export default function Services( { city } ) {
  const currentCity = city
  return (
    <section
      className="w-full py-12 px-4 md:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg-section)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            خدماتنا
          </h2>
          {/* Accent Bar */}
          <div
            className="h-1 mx-[35%] mb-2"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-body)' }}
          >
            نقدم مجموعة متنوعة من الخدمات المنزلية والصيانة لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <ServiceCard
              key={category.slug}
              name={category.name}
              slug={category.slug}
              city={currentCity}
              imageURL={category.imageURL}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

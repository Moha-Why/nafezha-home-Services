import { saudiCities } from "@/db/data";
import CityCard from "./CityCard";

export default function Cities() {
  return (
    <section
      className="w-full py-12 px-4 md:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            خدماتنا في جميع مدن المملكة
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-body)' }}
          >
            نوفر خدمات الصيانة المنزلية والإصلاح في كافة المدن السعودية بجودة عالية واحترافية
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {saudiCities.map((city) => (
            <CityCard
              key={city.slug}
              name={city.name}
              slug={city.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

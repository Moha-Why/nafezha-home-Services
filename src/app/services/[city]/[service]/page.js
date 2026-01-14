import { categories, services } from "@/db/data";
import CategoryServicesGrid from "@/components/CategoryServicesGrid";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }) {
  const { city, service } = await params;


  const decoded = decodeURIComponent(service);
  const currentCity = decodeURIComponent(city)
  // Find the category by slug
  const category = categories.find((cat) => cat.slug === decoded);

  // If category not found, show 404
  if (!category) {
    notFound();
  }

  // Filter services that belong to this category
  const categoryServices = services.filter(
    (service) => service.category === category.name
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-section)' }}>
 

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            {category.name}
          </h1>
               {/* Accent Bar */}
      <div
        className="h-1 mx-[35%] mb-2"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
            style={{ color: 'var(--color-text-body)' }}
          >
            {category.description}
          </p>
        </div>

        {/* Search Bar and Services Grid */}
        <CategoryServicesGrid services={categoryServices} city={currentCity} />
      </div>
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    catagory: category.slug,
  }));
}

// Generate metadata for each category page
export async function generateMetadata({ params }) {
  const { catagory } = await params;
  const category = categories.find((cat) => cat.slug === catagory);

  if (!category) {
    return {
      title: 'الفئة غير موجودة',
    };
  }

  return {
    title: `${category.name} - خدماتنا`,
    description: category.description,
  };
}

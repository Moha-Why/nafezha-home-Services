"use client"

import { useState } from "react";
import CategoryServiceCard from "./CategoryServiceCard";

export default function CategoryServicesGrid({ services, city }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description_short.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن الخدمة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pr-12 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-2"
            style={{
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text-main)',
              border: '2px solid var(--color-border)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
            }}
          />
          {/* Search Icon */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-6 h-6"
              style={{ fill: 'var(--color-text-muted)' }}
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          {/* Clear Button */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-all duration-200 hover:bg-gray-200"
              aria-label="مسح البحث"
            >
              <svg
                className="w-5 h-5"
                style={{ fill: 'var(--color-text-muted)' }}
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          )}
        </div>

        {/* Search Results Count */}
        {searchQuery && (
          <p
            className="text-sm mt-2 text-center"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {filteredServices.length === 0
              ? "لم يتم العثور على نتائج"
              : `تم العثور على ${filteredServices.length} ${filteredServices.length === 1 ? 'خدمة' : 'خدمات'}`}
          </p>
        )}
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <CategoryServiceCard
              key={index}
              name={service.name}
              imgURL={service.imgURL}
              city={city}
              description_short={service.description_short}
              number={service.number}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p
            className="text-xl"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {searchQuery
              ? "لم يتم العثور على خدمات تطابق بحثك"
              : "لا توجد خدمات متاحة في هذه الفئة حالياً"}
          </p>
        </div>
      )}
    </>
  );
}

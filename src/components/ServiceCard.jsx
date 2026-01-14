"use client"

import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ name, city, slug, imageURL }) {
  return (
    <Link
      href={`/services/${city}/${slug}`}
      className="group block rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src={imageURL}
          alt={`خدمات ${name} في السعودية - نفذها | صيانة منزلية احترافية`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* Full Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
        />

        {/* Triangle Shape */}
        <div
          className="absolute transition-all duration-300"
          style={{
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            borderLeft: '200px solid var(--color-primary)',
            borderTop: '150px solid transparent',
          }}
        />

        {/* Another Triangle Shape (optional - right side) */}
        <div
          className="absolute transition-all duration-300 opacity-70 group-hover:opacity-100"
          style={{
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderRight: '120px solid var(--color-accent)',
            borderBottom: '100px solid transparent',
          }}
        />

        {/* Text on Image */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 px-4 z-10">
          <h3
            className="text-2xl font-bold text-center transition-transform duration-300 group-hover:scale-105"
            style={{ color: 'var(--color-text-invert)' }}
          >
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

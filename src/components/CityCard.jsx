"use client"

import Link from "next/link";
import Image from "next/image";

export default function CityCard({ name, slug, imgURL }) {
  return (
    <Link
      href={`/services/${slug}`}
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
      <div className="relative h-48 w-full overflow-hidden">
        {/* City Image */}
        <Image
          src={imgURL}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* City Name */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 px-4 z-10">
          <h3
            className="text-2xl font-bold text-center transition-transform duration-300 group-hover:scale-105 text-white drop-shadow-lg"
          >
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

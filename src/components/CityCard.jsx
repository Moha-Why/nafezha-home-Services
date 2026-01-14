"use client"

import Link from "next/link";

export default function CityCard({ name, slug }) {
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
        {/* Gradient Background */}
        <div
          className="absolute inset-0 transition-all duration-500 group-hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
          }}
        />

        {/* Decorative Circles */}
        <div
          className="absolute transition-all duration-300 opacity-20 group-hover:opacity-30"
          style={{
            top: '-20px',
            right: '-20px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <div
          className="absolute transition-all duration-300 opacity-20 group-hover:opacity-30"
          style={{
            bottom: '-30px',
            left: '-30px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* Triangle Shape */}
        <div
          className="absolute transition-all duration-300 opacity-50"
          style={{
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            borderLeft: '150px solid rgba(255, 255, 255, 0.2)',
            borderTop: '100px solid transparent',
          }}
        />

        {/* City Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-110"
            style={{ width: '60px', height: '60px', opacity: 0.3 }}
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>

        {/* City Name */}
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

"use client"

import Image from "next/image";

export default function CategoryServiceCard({ name, imgURL, description_short, number }) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`مرحباً، أريد الاستفسار عن خدمة: ${name}`);
    const whatsappUrl = `https://wa.me/${number}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+${number}`;
  };

  return (
    <div
      className="group block rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src={imgURL}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Full Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
            borderLeft: '180px solid var(--color-primary)',
            borderTop: '120px solid transparent',
          }}
        />

        {/* Accent Triangle on Hover */}
        <div
          className="absolute transition-all duration-300 opacity-70 group-hover:opacity-100"
          style={{
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderRight: '100px solid var(--color-accent)',
            borderBottom: '80px solid transparent',
          }}
        />

        {/* Text on Image */}
        <div className="absolute inset-0 flex items-end justify-center pb-4 px-4 z-10">
          <h3
            className="text-xl font-bold text-center transition-transform duration-300 group-hover:scale-105"
            style={{ color: 'var(--color-text-invert)' }}
          >
            {name}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <p
          className="text-sm mb-4 text-center line-clamp-2"
          style={{ color: 'var(--color-text-body)' }}
        >
          {description_short}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Phone Call Button */}
          <button
            onClick={handlePhoneClick}
            className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            اتصال
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-whatsapp)',
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-whatsapp-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-whatsapp)';
            }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            واتساب
          </button>
        </div>
      </div>
    </div>
  );
}

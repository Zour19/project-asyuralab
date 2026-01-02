'use client';

import Link from 'next/link';

export default function HomeHero() {
  const img = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000';

  return (
    <section className="bg-[#FAF9F6] text-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 font-serif">
              Capturing moments that feel true
            </h1>
            <p className="text-lg mb-8 leading-relaxed text-opacity-90">
              I focus on honest documentation — quiet moments, natural light, and fleeting expressions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="text-[#1A1A1A] border-b-2 border-transparent hover:border-[#1A1A1A] pb-1 transition"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-[#1A1A1A] border-b-2 border-transparent hover:border-[#1A1A1A] pb-1 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="rounded-lg h-72 md:h-96 overflow-hidden">
            <img
              src={img}
              alt="Hero"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

/**
 * AboutHero Component
 * Menampilkan filosofi fotografer dengan Serif font yang elegant
 */

import { asyuraData } from '@/constants/asyuraData';

export default function AboutHero() {
  const { philosophy } = asyuraData;

  return (
    <section className="w-full bg-[#FAF9F6] py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Spacing spacer */}
        <div className="mb-8"></div>

        {/* Main Quote - Serif Font */}
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-8 leading-tight tracking-tight">
            {philosophy.title}
          </h2>
        </div>

        {/* Main Quote */}
        <div className="mb-12 border-l-4 border-[#1A1A1A] pl-8">
          <p className="font-serif text-3xl md:text-4xl text-[#1A1A1A] italic leading-relaxed">
            "{philosophy.mainQuote}"
          </p>
        </div>

        {/* Full Description */}
        <div className="space-y-6 mb-12">
          <p className="text-lg md:text-xl text-[#1A1A1A] leading-relaxed max-w-2xl">
            {philosophy.description}
          </p>
        </div>

        {/* Short Quote at Bottom */}
        <div className="mt-16 pt-12 border-t border-[#1A1A1A] border-opacity-20">
          <p className="font-serif text-lg md:text-xl text-[#1A1A1A] italic">
            "{philosophy.shortQuote}"
          </p>
        </div>

        {/* Spacing spacer */}
        <div className="mt-12"></div>
      </div>
    </section>
  );
}

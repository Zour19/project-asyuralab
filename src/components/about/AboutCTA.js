'use client';

/**
 * AboutCTA Component
 * Call to action section di akhir halaman About
 */

import Link from 'next/link';
import { asyuraData } from '@/constants/asyuraData';

export default function AboutCTA() {
  const { cta } = asyuraData;

  return (
    <section className="w-full bg-[#FAF9F6] py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
          {cta.title}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#1A1A1A] text-opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto">
          {cta.description}
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <Link
            href={cta.buttonUrl}
            className="inline-block text-lg text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-2 hover:border-opacity-50 transition-all duration-300 hover:text-opacity-70"
          >
            {cta.buttonText}
          </Link>
        </div>

        {/* Contact Info */}
        <div className="pt-12 border-t border-[#1A1A1A] border-opacity-10 space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-[#1A1A1A] text-opacity-60">Email</p>
            <a
              href={`mailto:${cta.email}`}
              className="text-base text-[#1A1A1A] hover:text-opacity-70 transition-opacity"
            >
              {cta.email}
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-[#1A1A1A] text-opacity-60">Phone</p>
            <a
              href={`tel:${cta.phone}`}
              className="text-base text-[#1A1A1A] hover:text-opacity-70 transition-opacity"
            >
              {cta.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

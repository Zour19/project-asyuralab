'use client';

/**
 * WorkMethodComponent
 * Menampilkan 4 langkah cara kerja kami dengan visual yang clean
 */

import { asyuraData } from '@/constants/asyuraData';

export default function WorkMethod() {
  const { workMethod } = asyuraData;

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6 leading-tight">
            {workMethod.title}
          </h2>
          <p className="text-lg text-[#1A1A1A] text-opacity-70 max-w-2xl">
            {workMethod.intro}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {workMethod.steps.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Step Number */}
              <div className="mb-6">
                <span className="font-serif text-6xl md:text-7xl text-[#1A1A1A] text-opacity-10">
                  {item.step}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-[#1A1A1A] text-opacity-80 leading-relaxed">
                {item.description}
              </p>

              {/* Divider (except last item) */}
              {idx < workMethod.steps.length - 1 && (
                <div className="mt-12 md:mt-16 md:col-span-2 h-px bg-[#1A1A1A] bg-opacity-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

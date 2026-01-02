'use client';

/**
 * JourneyStory Component
 * Menampilkan perjalanan hidup fotografer dengan narrative yang kuat
 */

import { asyuraData } from '@/constants/asyuraData';

export default function JourneyStory() {
  const { journey } = asyuraData;

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6 leading-tight">
            {journey.title}
          </h2>
          <p className="text-lg text-[#1A1A1A] text-opacity-70">
            {journey.intro}
          </p>
        </div>

        {/* Journey Chapters */}
        <div className="space-y-16 md:space-y-24">
          {journey.chapters.map((chapter, idx) => (
            <div key={chapter.id} className="pb-12 md:pb-16">
              {/* Chapter Header */}
              <div className="mb-8 md:mb-10">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between md:gap-8 mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-tight">
                    {chapter.phase}
                  </h3>
                  <span className="text-sm md:text-base text-[#1A1A1A] text-opacity-50 mt-2 md:mt-0 whitespace-nowrap">
                    {chapter.year}
                  </span>
                </div>
              </div>

              {/* Chapter Content - Prose style */}
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg text-[#1A1A1A] leading-relaxed text-opacity-85">
                  {chapter.description}
                </p>
              </div>

              {/* Divider (except last) */}
              {idx < journey.chapters.length - 1 && (
                <div className="mt-12 md:mt-16 h-px bg-[#1A1A1A] bg-opacity-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-20 pt-12 border-t border-[#1A1A1A] border-opacity-10">
          <p className="font-serif text-lg text-[#1A1A1A] italic text-opacity-80">
            Terima kasih telah menjadi bagian dari perjalanan ini.
          </p>
        </div>
      </div>
    </section>
  );
}

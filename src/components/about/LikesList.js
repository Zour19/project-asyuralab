'use client';

/**
 * LikesList Component
 * Menampilkan 10 hal yang disukai dengan styling minimalist
 */

import { asyuraData } from '@/constants/asyuraData';

export default function LikesList() {
  const { likes } = asyuraData;

  return (
    <section className="w-full bg-[#FAF9F6] py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">
            10 Hal yang Saya Sukai
          </h2>
          <p className="text-lg text-[#1A1A1A] text-opacity-70">
            Hal-hal yang membuat fotografi saya tetap hidup dan penuh passion
          </p>
        </div>

        {/* Likes List */}
        <div className="space-y-12 md:space-y-16">
          {likes.map((item, idx) => (
            <div key={idx} className="flex gap-8 md:gap-12">
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="font-serif text-3xl md:text-4xl text-[#1A1A1A] text-opacity-30 font-light">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-[#1A1A1A] text-opacity-75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-20 pt-12 border-t border-[#1A1A1A] border-opacity-10">
          <p className="font-serif text-lg text-[#1A1A1A] italic text-opacity-80">
            Setiap item dalam daftar ini adalah bukti passion saya yang tetap hidup dalam setiap project.
          </p>
        </div>
      </div>
    </section>
  );
}

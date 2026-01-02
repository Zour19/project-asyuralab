'use client';

import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Capturing Moments, Creating Memories
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional photographer specializing in portrait, wedding, and event photography.
              Every shot tells a story.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/portfolio"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                View Portfolio
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-gray-300">Hero Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

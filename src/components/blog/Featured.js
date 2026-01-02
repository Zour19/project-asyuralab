'use client';

import Link from 'next/link';

export default function BlogFeatured() {
  return (
    <section className="mb-16">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-400 h-64 md:h-auto flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">📝</div>
              <p className="text-gray-700">Featured Article Image</p>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-sm text-gray-600 mb-2">Featured Article</p>
            <h3 className="text-3xl font-bold mb-4">
              Photography Tips & Tricks: How to Master Manual Mode
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Learn the basics of manual photography mode and take control of your camera. 
              In this comprehensive guide, we'll explore aperture, shutter speed, and ISO.
            </p>
            <p className="text-sm text-gray-600 mb-6">Posted on January 2, 2026</p>
            <Link 
              href="#"
              className="inline-block w-fit bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

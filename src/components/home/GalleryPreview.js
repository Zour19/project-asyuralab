'use client';

import Link from 'next/link';

export default function HomeGalleryPreview() {
  // Placeholder untuk preview galeri
  const galleryItems = [
    { id: 1, title: 'Wedding Collection' },
    { id: 2, title: 'Portrait Sessions' },
    { id: 3, title: 'Event Photography' },
    { id: 4, title: 'Landscape Works' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Works</h2>
        <p className="text-center text-gray-600 mb-12">
          A selection of my recent photography projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-300 rounded-lg h-48 flex items-center justify-center hover:shadow-lg transition"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">📷</div>
                <p className="text-gray-700 font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/portfolio"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

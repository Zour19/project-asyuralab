'use client';

export default function HomeGalleryPreview() {
  const img = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000';

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-serif mb-6">Selected Works</h3>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 overflow-hidden rounded">
              <img
                src={`${img}&auto=format&fit=crop&s=${i}`}
                alt={`preview-${i}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

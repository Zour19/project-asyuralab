'use client';

export default function PortfolioGallery() {
  // Placeholder untuk galeri portfolio
  const portfolioItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Photo ${i + 1}`,
    category: ['wedding', 'portrait', 'event', 'landscape'][i % 4],
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <div 
          key={item.id}
          className="bg-gray-300 rounded-lg h-64 flex items-center justify-center hover:shadow-lg transition overflow-hidden group cursor-pointer"
        >
          <div className="text-center">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-gray-700 font-medium">{item.title}</p>
            <p className="text-sm text-gray-600 capitalize mt-1">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

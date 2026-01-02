'use client';

export default function HomeFeatures() {
  const features = [
    {
      icon: '📸',
      title: 'Weddings',
      description: 'Documentary-style wedding photography focused on emotion.'
    },
    {
      icon: '👤',
      title: 'Portraits',
      description: 'Natural portraits for individuals and families.'
    },
    {
      icon: '🎉',
      title: 'Events',
      description: 'Events coverage with unobtrusive storytelling.'
    },
    {
      icon: '🖼️',
      title: 'Albums & Prints',
      description: 'Fine-art prints and curated albums as heirlooms.'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">My Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border-l-4 border-[#1A1A1A]"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

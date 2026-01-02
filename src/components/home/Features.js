'use client';

export default function HomeFeatures() {
  const features = [
    {
      icon: '📸',
      title: 'Professional Photography',
      description: 'High-quality photography services for all occasions'
    },
    {
      icon: '🎬',
      title: 'Video Production',
      description: 'Professional video production and editing'
    },
    {
      icon: '✏️',
      title: 'Photo Editing',
      description: 'Expert photo retouching and enhancement'
    },
    {
      icon: '🎨',
      title: 'Creative Direction',
      description: 'Conceptualization and creative guidance'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

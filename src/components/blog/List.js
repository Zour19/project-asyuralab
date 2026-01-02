'use client';

import Link from 'next/link';

export default function BlogList() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Composition in Photography',
      excerpt: 'Learn the rule of thirds and other composition techniques that will improve your photos...',
      date: 'December 28, 2025',
      category: 'Tips & Tricks'
    },
    {
      id: 2,
      title: 'The Art of Portrait Photography',
      excerpt: 'Discover how to connect with your subjects and capture authentic moments...',
      date: 'December 21, 2025',
      category: 'Tutorials'
    },
    {
      id: 3,
      title: 'Best Lighting for Indoor Photography',
      excerpt: 'Explore different lighting setups and how to use natural light effectively...',
      date: 'December 14, 2025',
      category: 'Tips & Tricks'
    },
    {
      id: 4,
      title: 'How to Edit Photos Like a Pro',
      excerpt: 'A step-by-step guide to post-processing your photos to achieve professional results...',
      date: 'December 7, 2025',
      category: 'Tutorials'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogPosts.map((post) => (
        <article 
          key={post.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
        >
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📰</div>
              <p className="text-gray-700">Article Image</p>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-600 mb-2">{post.category}</p>
            <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">{post.date}</p>
              <Link 
                href="#"
                className="text-gray-900 font-semibold hover:text-gray-600 transition"
              >
                Read →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

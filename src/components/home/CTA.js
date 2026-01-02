'use client';

import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Get in touch to discuss your photography needs and schedule a session
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
          <Link 
            href="/blog"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Read Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'wedding', 'portrait', 'event', 'landscape'];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-6 py-2 rounded-lg font-medium transition capitalize ${
            activeFilter === filter
              ? 'bg-gray-900 text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

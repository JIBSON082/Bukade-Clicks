'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { portfolioItems, portfolioCategories } from '@/lib/data';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="bg-cream text-ink px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
          Explore
        </p>
        <h2 className="font-serif text-ink text-4xl md:text-6xl">
          Full Portfolio
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 sticky top-2 z-20">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-xs md:text-sm tracking-wide rounded-full border transition-colors ${
              activeFilter === cat
                ? 'bg-ink text-cream border-ink'
                : 'border-ink/20 text-ink/60 hover:border-gold-dark hover:text-gold-dark'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-sm break-inside-avoid cursor-pointer"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={600}
              height={
                item.orientation === 'portrait'
                  ? 800
                  : item.orientation === 'landscape'
                  ? 400
                  : 600
              }
              className="w-full h-auto object-cover grayscale group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
              <span className="text-cream text-sm font-serif">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

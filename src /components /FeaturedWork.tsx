'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { portfolioItems } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const featured = portfolioItems.filter((item) => item.featured);

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('[data-fw-card]');
      cards?.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: 'power3.out',
          delay: i * 0.05,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="featured-work"
      ref={sectionRef}
      className="bg-ink px-6 md:px-12 py-20 md:py-28"
    >
      <div className="text-center mb-14 md:mb-16">
        <p className="text-gold text-xs tracking-widest2 uppercase mb-3">
          Our Work
        </p>
        <h2 className="font-serif text-cream text-4xl md:text-6xl">
          Featured Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-7xl mx-auto">
        {featured.map((item, i) => (
          <div
            key={item.id}
            data-fw-card
            className={`group relative overflow-hidden rounded-sm cursor-pointer ${
              i === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            style={{ aspectRatio: i === 0 ? '4/5' : '3/4' }}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-cream font-serif text-lg">{item.title}</p>
              <span className="text-gold text-xs tracking-widest2 uppercase flex items-center gap-1 mt-1">
                View gallery <ArrowRight size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

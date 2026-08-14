'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = sectionRef.current?.querySelectorAll('[data-stat-value]');
      numbers?.forEach((el) => {
        const raw = el.getAttribute('data-stat-value') || '0';
        const numMatch = raw.match(/[\d.]+/);
        const suffix = raw.replace(/[\d.]+/, '');
        const num = numMatch ? parseFloat(numMatch[0]) : 0;
        const counter = { val: 0 };

        gsap.to(counter, {
          val: num,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.val)}${suffix}`;
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-ink border-y border-cream/10 py-10 md:py-14"
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span
              data-stat-value={stat.value}
              className="font-serif text-gold text-3xl md:text-4xl"
            >
              0
            </span>
            <span className="text-cream/60 text-[11px] md:text-xs tracking-widest2 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

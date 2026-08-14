'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Camera,
  Briefcase,
  Heart,
  Sparkles,
  Wand2,
  Image as ImageIcon,
  ArrowRight,
} from 'lucide-react';
import { services } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Briefcase,
  Heart,
  Sparkles,
  Wand2,
  Image: ImageIcon,
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('[data-service-card]');
      cards?.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          delay: (i % 3) * 0.08,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-cream text-ink px-6 md:px-12 py-20 md:py-28"
    >
      <div className="text-center mb-14 md:mb-16">
        <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
          What I Do
        </p>
        <h2 className="font-serif text-ink text-4xl md:text-6xl">Services</h2>
        <p className="text-ink/60 max-w-md mx-auto mt-4 text-sm md:text-base">
          From behind the lens to final retouch, every detail is handled with
          care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Camera;
          return (
            <div
              key={service.id}
              data-service-card
              className="border border-ink/10 p-8 flex flex-col gap-4 hover:border-gold transition-colors duration-300"
            >
              <Icon size={22} strokeWidth={1.5} className="text-gold-dark" />
              <h3 className="font-serif text-xl">{service.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <a
                href="#contact"
                className="text-gold-dark text-xs tracking-widest2 uppercase flex items-center gap-1.5 mt-2 hover:gap-2.5 transition-all"
              >
                Enquire <ArrowRight size={12} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

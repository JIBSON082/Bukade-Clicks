'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="bg-ink px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-gold text-xs tracking-widest2 uppercase mb-3">
          Reviews
        </p>
        <h2 className="font-serif text-cream text-4xl md:text-6xl">
          What Clients Say
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] px-4">
                <div className="border border-cream/10 rounded-sm p-8 md:p-10 flex flex-col items-center text-center gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-cream/80 text-base md:text-lg italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <p className="text-cream font-serif">{t.name}</p>
                    <p className="text-cream/50 text-xs tracking-wide uppercase mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="text-cream/50 hover:text-gold transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === selectedIndex ? 'bg-gold' : 'bg-cream/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="text-cream/50 hover:text-gold transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

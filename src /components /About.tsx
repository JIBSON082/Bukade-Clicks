'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1000&q=80'; // placeholder — swap for candid shot of Bukade

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-about-img]', {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      gsap.from('[data-about-text] > *', {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-ink px-6 md:px-12 py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div
          data-about-img
          className="relative aspect-[4/5] overflow-hidden rounded-sm grain"
        >
          <Image
            src={ABOUT_IMAGE}
            alt="Bukade Adewusi at work"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale"
          />
        </div>

        <div data-about-text className="flex flex-col gap-6">
          <p className="text-gold text-xs tracking-widest2 uppercase">About</p>
          <h2 className="font-serif text-cream text-3xl md:text-5xl leading-tight">
            Behind every frame is a story worth telling.
          </h2>
          <p className="text-cream/70 text-sm md:text-base leading-relaxed">
            Bukade Adewusi, known as{' '}
            <span className="text-cream">Bukade Cliks</span>, is a Lagos-based
            photographer and high-end retoucher who captures stories through
            the lens with creativity, precision, and artistry.
          </p>
          <p className="text-cream/70 text-sm md:text-base leading-relaxed">
            Specializing in portrait, corporate, wedding, and event
            photography, my work blends technical skill, meticulous attention
            to detail, and a deep appreciation for authentic human moments —
            elevated by high-end retouching that turns every image into a
            polished piece of art.
          </p>
          <p className="text-cream/70 text-sm md:text-base leading-relaxed">
            Every session is collaborative and intentional. My goal is
            simple: help people see themselves in the best light, and tell
            their stories beautifully, authentically, and creatively.
          </p>
        </div>
      </div>
    </section>
  );
}


'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Instagram, MessageCircle } from 'lucide-react';
import { contact } from '@/lib/data';

gsap.registerPlugin(SplitText);

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1400&q=80'; // placeholder — swap for Bukade's B&W portrait

interface HeroProps {
  onMenuOpen: () => void;
}

export default function Hero({ onMenuOpen }: HeroProps) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (nameRef.current) {
        const split = new SplitText(nameRef.current, { type: 'chars' });
        gsap.from(split.chars, {
          opacity: 0,
          y: 40,
          rotateX: -40,
          stagger: 0.03,
          duration: 1,
          ease: 'power3.out',
          delay: 0.3,
        });
      }
      gsap.from(imgRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen bg-ink flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-6 z-10">
        <div className="flex items-center gap-4">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-cream/70 hover:text-gold transition-colors"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-cream/70 hover:text-gold transition-colors"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
          </a>
        </div>
        <button
          onClick={onMenuOpen}
          className="text-cream/90 text-xs tracking-widest2 uppercase flex items-center gap-2 hover:text-gold transition-colors"
          aria-label="Open menu"
        >
          Menu
          <span className="flex flex-col gap-[3px]">
            <span className="w-5 h-px bg-current" />
            <span className="w-5 h-px bg-current" />
          </span>
        </button>
      </div>

      {/* Tagline */}
      <div className="text-center mt-8 md:mt-12">
        <p className="text-gold/90 text-[11px] md:text-xs tracking-widest2 uppercase">
          Portrait · Corporate · Wedding · Event Photography
        </p>
      </div>

      {/* Wordmark */}
      <div className="text-center px-4 mt-2 md:mt-4">
        <h1
          ref={nameRef}
          className="font-serif text-cream text-[15vw] md:text-[9vw] lg:text-[120px] leading-[0.95] tracking-tight"
        >
          Bukade Cliks
        </h1>
      </div>

      {/* Portrait */}
      <div
        ref={imgRef}
        className="relative flex-1 mt-8 md:mt-10 mx-4 md:mx-12 mb-6 max-w-6xl lg:mx-auto lg:w-full overflow-hidden rounded-sm grain"
        style={{ minHeight: '55vh' }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Bukade Adewusi — Photographer"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </div>

      {/* Scroll cue */}
      <div className="text-center pb-6">
        <span className="text-cream/40 text-[10px] tracking-widest2 uppercase animate-pulse">
          Scroll
        </span>
      </div>
    </section>
  );
}
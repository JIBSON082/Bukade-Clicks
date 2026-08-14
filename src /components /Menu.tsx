'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import { contact, portfolioCategories } from '@/lib/data';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const bottomLinks = [
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
        gsap.fromTo(
          itemsRef.current?.children ?? [],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.5,
            delay: 0.15,
            ease: 'power3.out',
          }
        );
      } else {
        gsap.to(overlayRef.current, {
          autoAlpha: 0,
          duration: 0.35,
          ease: 'power2.in',
        });
      }
    });
    return () => ctx.revert();
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-cream text-ink invisible opacity-0"
      style={{ visibility: isOpen ? 'visible' : 'hidden' }}
    >
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-6 right-6 md:top-10 md:right-12 hover:text-gold transition-colors"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      <div
        ref={itemsRef}
        className="h-full flex flex-col items-center justify-center gap-5 md:gap-6"
      >
        <button
          onClick={() => handleLinkClick('#portfolio')}
          className="font-serif text-gold text-2xl md:text-3xl tracking-wide hover:opacity-70 transition-opacity"
        >
          Portfolio
        </button>

        {portfolioCategories
          .filter((c) => c !== 'All')
          .map((cat) => (
            <button
              key={cat}
              onClick={() => handleLinkClick('#portfolio')}
              className="font-sans font-light text-xl md:text-2xl tracking-wide text-ink/80 hover:text-gold transition-colors"
            >
              {cat}
            </button>
          ))}

        <div className="w-12 h-px bg-ink/20 my-2" />

        {bottomLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleLinkClick(link.href)}
            className="font-sans font-light text-xl md:text-2xl tracking-wide text-ink/80 hover:text-gold transition-colors"
          >
            {link.label}
          </button>
        ))}

        <a
          href={contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-sans text-sm tracking-widest2 uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ink transition-colors"
        >
          Book a Session
        </a>
      </div>
    </div>
  );
}

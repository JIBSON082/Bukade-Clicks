'use client';

import { useState, useEffect } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { contact } from '@/lib/data';

interface NavbarProps {
  onMenuOpen: () => void;
}

export default function Navbar({ onMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-ink/90 backdrop-blur-sm border-b border-cream/10'
            : 'bg-transparent pointer-events-none opacity-0'
        }`}
      >
        <span className="font-serif text-cream text-lg tracking-wide">
          Bukade Cliks
        </span>

        <div className="flex items-center gap-5 pointer-events-auto">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-cream/70 hover:text-gold transition-colors hidden sm:block"
          >
            <Instagram size={16} strokeWidth={1.5} />
          </a>
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-cream/70 hover:text-gold transition-colors hidden sm:block"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
          </a>
          <button
            onClick={onMenuOpen}
            className="text-cream/90 text-xs tracking-widest2 uppercase flex items-center gap-2 hover:text-gold transition-colors"
          >
            Menu
            <span className="flex flex-col gap-[3px]">
              <span className="w-5 h-px bg-current" />
              <span className="w-5 h-px bg-current" />
            </span>
          </button>
        </div>
      </header>
    </>
  );
}

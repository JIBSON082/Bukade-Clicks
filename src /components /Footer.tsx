import { Instagram, MessageCircle, Mail, AtSign } from 'lucide-react';
import { contact, navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-cream/10 px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div>
          <p className="font-serif text-cream text-xl mb-3">Bukade Cliks</p>
          <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
            Lagos-based photographer and high-end retoucher, capturing
            stories with precision, creativity, and class.
          </p>
        </div>

        <div>
          <p className="text-cream/40 text-xs tracking-widest2 uppercase mb-4">
            Quick Links
          </p>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream/70 text-sm hover:text-gold transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-cream/40 text-xs tracking-widest2 uppercase mb-4">
            Contact
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-cream/70 text-sm hover:text-gold transition-colors"
            >
              <Mail size={14} strokeWidth={1.5} /> {contact.email}
            </a>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/70 text-sm hover:text-gold transition-colors"
            >
              <MessageCircle size={14} strokeWidth={1.5} /> WhatsApp
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/70 text-sm hover:text-gold transition-colors"
            >
              <Instagram size={14} strokeWidth={1.5} />{' '}
              {contact.instagramHandle}
            </a>
            <a
              href={contact.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/70 text-sm hover:text-gold transition-colors"
            >
              <AtSign size={14} strokeWidth={1.5} /> Threads
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-cream/30 text-xs">
          © {new Date().getFullYear()} Bukade Cliks. All rights reserved.
        </p>
        <p className="text-cream/30 text-xs">{contact.location}</p>
      </div>
    </footer>
  );
}

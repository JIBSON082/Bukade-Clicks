'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MessageCircle, Instagram, AtSign } from 'lucide-react';
import { contact, portfolioCategories } from '@/lib/data';

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  shootType: z.string().min(1, 'Select a shoot type'),
  message: z.string().min(10, 'Tell me a bit more about your shoot'),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryForm>({ resolver: zodResolver(enquirySchema) });

  const onSubmit = async (data: EnquiryForm) => {
    const text = encodeURIComponent(
      `Hi Bukade! I'm ${data.name}. I'm interested in ${data.shootType}.\n\n${data.message}\n\nReach me at ${data.email}.`
    );
    window.open(`${contact.whatsappLink}?text=${text}`, '_blank');
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className="bg-cream text-ink px-6 md:px-12 py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-gold-dark text-xs tracking-widest2 uppercase">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Let&apos;s create something beautiful.
          </h2>
          <p className="text-ink/60 text-sm md:text-base leading-relaxed max-w-sm">
            Every shoot is different — tell me what you&apos;re planning and
            I&apos;ll get back to you with options and pricing.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-sm hover:text-gold-dark transition-colors"
            >
              <Mail size={18} strokeWidth={1.5} /> {contact.email}
            </a>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-gold-dark transition-colors"
            >
              <MessageCircle size={18} strokeWidth={1.5} /> WhatsApp
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-gold-dark transition-colors"
            >
              <Instagram size={18} strokeWidth={1.5} />{' '}
              {contact.instagramHandle}
            </a>
            <a
              href={contact.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-gold-dark transition-colors"
            >
              <AtSign size={18} strokeWidth={1.5} /> Threads
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <div>
            <input
              {...register('name')}
              placeholder="Full name"
              className="w-full bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-gold-dark transition-colors"
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('email')}
              placeholder="Email"
              className="w-full bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-gold-dark transition-colors"
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <select
              {...register('shootType')}
              defaultValue=""
              className="w-full bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-gold-dark transition-colors"
            >
              <option value="" disabled>
                Shoot type
              </option>
              {portfolioCategories
                .filter((c) => c !== 'All')
                .map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
            {errors.shootType && (
              <p className="text-red-600 text-xs mt-1">
                {errors.shootType.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register('message')}
              placeholder="Tell me about your shoot..."
              rows={4}
              className="w-full bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-gold-dark transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-red-600 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 bg-ink text-cream text-sm tracking-widest2 uppercase py-4 hover:bg-gold-dark transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </button>

          {submitted && (
            <p className="text-gold-dark text-xs text-center">
              Opening WhatsApp with your message — send it across to complete
              your enquiry.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

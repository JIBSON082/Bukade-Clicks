import {
  Stat,
  Service,
  PortfolioItem,
  Testimonial,
  NavLink,
  ContactInfo,
} from '@/types';

export const contact: ContactInfo = {
  email: 'bukadeclicks@gmail.com',
  whatsapp: '07033763984',
  whatsappLink: 'https://wa.me/2347033763984',
  instagram: 'https://www.instagram.com/bukade_cliks',
  instagramHandle: '@bukade_cliks',
  threads: 'https://www.threads.com/@bukade_cliks',
  location: 'Lagos, Nigeria',
};

export const stats: Stat[] = [
  { value: '5+', label: 'Years Behind the Lens' },
  { value: '300+', label: 'Shoots Delivered' },
  { value: '200+', label: 'Happy Clients' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export const services: Service[] = [
  {
    id: 'portraits',
    title: 'Portrait Photography',
    description:
      'Timeless, expressive images meticulously retouched to highlight personality and presence.',
    icon: 'Camera',
  },
  {
    id: 'corporate',
    title: 'Corporate & Professional',
    description:
      'Clean, polished visuals for personal branding and business needs.',
    icon: 'Briefcase',
  },
  {
    id: 'weddings',
    title: 'Wedding & Event',
    description:
      'Candid, intentional coverage that preserves the emotion and beauty of your day.',
    icon: 'Heart',
  },
  {
    id: 'brand',
    title: 'Brand Photography',
    description:
      'Visual content that builds your brand identity and elevates your online presence.',
    icon: 'Sparkles',
  },
  {
    id: 'retouching',
    title: 'High-End Retouching',
    description:
      'Advanced post-production delivering magazine-quality results, true to the original moment.',
    icon: 'Wand2',
  },
  {
    id: 'editorial',
    title: 'Editorial & Lifestyle',
    description:
      'Creative storytelling through fashion, outdoor, and lifestyle photography.',
    icon: 'Image',
  },
];

// Placeholder images via Unsplash — swap imageUrl with Cloudinary URLs later.
// Structure stays identical, so swapping is a one-line change per item.
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    category: 'Weddings',
    title: 'Wedding Photography',
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    featured: true,
    orientation: 'portrait',
  },
  {
    id: 'p2',
    category: 'Portraits',
    title: 'Studio Portrait',
    imageUrl:
      'https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=1200&q=80',
    featured: true,
    orientation: 'landscape',
  },
  {
    id: 'p3',
    category: 'Corporate',
    title: 'Executive Headshot',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80',
    featured: true,
    orientation: 'portrait',
  },
  {
    id: 'p4',
    category: 'Editorial',
    title: 'Editorial Concept',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80',
    featured: true,
    orientation: 'portrait',
  },
  {
    id: 'p5',
    category: 'Brand',
    title: 'Brand Session',
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80',
    featured: true,
    orientation: 'landscape',
  },
  {
    id: 'p6',
    category: 'Retouching',
    title: 'Retouched Portrait',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
    featured: true,
    orientation: 'portrait',
  },
  {
    id: 'p7',
    category: 'Weddings',
    title: 'Bridal Portrait',
    imageUrl:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80',
    orientation: 'portrait',
  },
  {
    id: 'p8',
    category: 'Portraits',
    title: 'Editorial Portrait',
    imageUrl:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80',
    orientation: 'portrait',
  },
  {
    id: 'p9',
    category: 'Corporate',
    title: 'Team Headshots',
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80',
    orientation: 'landscape',
  },
  {
    id: 'p10',
    category: 'Editorial',
    title: 'Fashion Story',
    imageUrl:
      'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1200&q=80',
    orientation: 'portrait',
  },
  {
    id: 'p11',
    category: 'Brand',
    title: 'Lifestyle Brand Shoot',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80',
    orientation: 'square',
  },
  {
    id: 'p12',
    category: 'Weddings',
    title: 'Wedding Day Moment',
    imageUrl:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80',
    orientation: 'landscape',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Bukade captured our wedding beautifully. Every frame tells our story. Professional and so easy to work with.',
    name: 'Fatima B.',
    role: 'Bride',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'Professional, patient, and incredibly talented. My headshots have never looked better — the retouching is next level.',
    name: 'Chidi E.',
    role: 'CEO, Chidi Enterprises',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'Fast turnaround, seamless experience, and stunning results every time. Highly recommend for any brand shoot.',
    name: 'Amara O.',
    role: 'Event Client',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'The attention to detail is unmatched. He made the whole shoot feel effortless and the images are magazine-quality.',
    name: 'Tolu A.',
    role: 'Personal Branding Client',
    rating: 5,
  },
];

export const navLinks: NavLink[] = [
  { label: 'Work', href: '#featured-work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const portfolioCategories = [
  'All',
  'Portraits',
  'Weddings',
  'Corporate',
  'Brand',
  'Retouching',
  'Editorial',
] as const;

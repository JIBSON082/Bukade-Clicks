export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

export type PortfolioCategory =
  | 'Portraits'
  | 'Weddings'
  | 'Corporate'
  | 'Brand'
  | 'Retouching'
  | 'Editorial';

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  title: string;
  imageUrl: string; // Unsplash placeholder now, Cloudinary URL later
  featured?: boolean;
  orientation: 'portrait' | 'landscape' | 'square';
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  whatsappLink: string;
  instagram: string;
  instagramHandle: string;
  threads: string;
  location: string;
}

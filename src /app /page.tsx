'use client';

import { useState } from 'react';
import { useSmoothScroll } from '@/lib/smoothScroll';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FeaturedWork from '@/components/FeaturedWork';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useSmoothScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <Hero onMenuOpen={() => setMenuOpen(true)} />
      <Stats />
      <FeaturedWork />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

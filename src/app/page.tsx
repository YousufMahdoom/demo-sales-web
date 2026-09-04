'use client';

import { useEffect } from 'react';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import InventorySection from '@/components/sections/InventorySection';
import AboutSection from '@/components/sections/AboutSection';
import SpecialOffersBanner from '@/components/sections/SpecialOffersBanner';
import GallerySection from '@/components/sections/GallerySection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/Footer';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';

export default function Home() {
  // Handle cross-page or direct URL hash scrolling (e.g. /#about, /#gallery, /#contact)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 120);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] text-[var(--color-gray-100)]">
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. All Sections with IDs for instant, smooth header navigation */}
        <InventorySection limit={6} randomize={true} />
        <AboutSection />
        <SpecialOffersBanner />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

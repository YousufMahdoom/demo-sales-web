'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import LazySection from '@/components/ui/LazySection';

// Dynamically import below-the-fold sections so their JS and image assets are deferred until needed
const InventorySection = dynamic(
  () => import('@/components/sections/InventorySection'),
  { ssr: false }
);

const AboutSection = dynamic(
  () => import('@/components/sections/AboutSection'),
  { ssr: false }
);

const SpecialOffersBanner = dynamic(
  () => import('@/components/sections/SpecialOffersBanner'),
  { ssr: false }
);

const GallerySection = dynamic(
  () => import('@/components/sections/GallerySection'),
  { ssr: false }
);

const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection'),
  { ssr: false }
);

const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection'),
  { ssr: false }
);

const Footer = dynamic(
  () => import('@/components/ui/Footer'),
  { ssr: false }
);

const WhatsAppFAB = dynamic(
  () => import('@/components/ui/WhatsAppFAB'),
  { ssr: false }
);

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  const handleHeroReady = useCallback(() => {
    setHeroReady(true);
  }, []);

  // Safety fallback: Ensure below-the-fold sections become available even if hero event is delayed
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroReady(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] text-[var(--color-gray-100)]">
      <Navbar />
      <main>
        {/* 1. Hero Section loads first and immediately */}
        <HeroSection onInitialReady={handleHeroReady} />

        {/* 2. All subsequent sections load progressively AFTER the hero section is ready and user approaches them */}
        <LazySection enabled={heroReady} minHeight="600px" rootMargin="500px">
          <InventorySection limit={6} randomize={true} />
        </LazySection>

        <LazySection enabled={heroReady} minHeight="600px" rootMargin="500px">
          <AboutSection />
        </LazySection>

        <LazySection enabled={heroReady} minHeight="200px" rootMargin="400px">
          <SpecialOffersBanner />
        </LazySection>

        <LazySection enabled={heroReady} minHeight="600px" rootMargin="500px">
          <GallerySection />
        </LazySection>

        <LazySection enabled={heroReady} minHeight="400px" rootMargin="400px">
          <FAQSection />
        </LazySection>

        <LazySection enabled={heroReady} minHeight="500px" rootMargin="400px">
          <ContactSection />
        </LazySection>
      </main>

      <LazySection enabled={heroReady} minHeight="300px" rootMargin="300px">
        <Footer />
      </LazySection>

      {heroReady && <WhatsAppFAB />}
    </div>
  );
}

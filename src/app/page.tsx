'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import InventorySection from '@/components/sections/InventorySection';
import AboutSection from '@/components/sections/AboutSection';
import GallerySection from '@/components/sections/GallerySection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/Footer';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';

const SpecialOffersBanner = dynamic(
  () => import('@/components/sections/SpecialOffersBanner'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] text-[var(--color-gray-100)]">
      <Navbar />
      <main>
        <HeroSection />
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

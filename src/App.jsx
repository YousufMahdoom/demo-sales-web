import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroParallax from './components/HeroParallax';
import InventorySection from './components/InventorySection';
import AboutSection from './components/AboutSection';
import SellTradeSection from './components/SellTradeSection';
import WholesaleSection from './components/WholesaleSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Car, Phone, Mail, MapPin, Share2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToInventory = () => {
    setActiveSection('inventory');
    const el = document.getElementById('inventory');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Dynamic Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main>
        <HeroParallax onExplore={scrollToInventory} />
        <InventorySection />
        <AboutSection />
        <SellTradeSection />
        <WholesaleSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Comprehensive Footer */}
      <footer className="bg-black border-t border-white/10 py-16 relative z-10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Brand Col */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-lg font-extrabold text-white uppercase tracking-wider">
                  DEMO SALES WEB
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Sri Lanka's trusted dealer for Suzuki Wagon R FX, FZ, Stingray, and premium Japanese vehicle imports.
              </p>
              <p className="text-red-400 font-semibold">
                Kurunegala, North Western Province
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Quick Navigation</h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><a href="#hero" className="hover:text-red-400 transition-colors">Home Showcase</a></li>
                <li><a href="#inventory" className="hover:text-red-400 transition-colors">Wagon R Inventory</a></li>
                <li><a href="#about" className="hover:text-red-400 transition-colors">About Dealership</a></li>
                <li><a href="#sell-trade" className="hover:text-red-400 transition-colors">Sell & Trade-in</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Our Services</h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><span>Retail Vehicle Sales</span></li>
                <li><span>Wholesale & B2B Bulk Supply</span></li>
                <li><span>Vehicle Valuation & Trade-in</span></li>
                <li><span>Auction Sheet Verification</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Connect With Us</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>0755331445</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Kurunegala, Sri Lanka</span>
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <a
                    href="https://www.facebook.com/share/1Jq4RvinxM/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel text-gray-200 hover:text-white"
                  >
                    <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/azytion?igsh=MWpodXVzcW1rczBqeg=="
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel text-gray-200 hover:text-white"
                  >
                    <svg className="w-4 h-4 text-pink-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@azytion?_r=1&_t=ZS-98Vb3lAT3KP"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel text-gray-200 hover:text-white"
                  >
                    <svg className="w-4 h-4 text-teal-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.05 1.12.97 2.62 1.48 4.11 1.58V9.52c-1.57-.17-3.08-.85-4.22-1.96-.06-.06-.11-.12-.17-.18-.01.55-.01 1.11-.01 1.66v6.1c.07 2.05-1.01 4.05-2.8 5.05-1.95 1.14-4.5.95-6.27-.47-1.9-1.47-2.61-4.08-1.74-6.32.74-1.95 2.76-3.26 4.86-3.25.75-.01 1.49.15 2.19.46v4.06c-.66-.34-1.42-.48-2.15-.36-1.12.15-2.05.99-2.31 2.09-.37 1.4.45 2.91 1.84 3.33 1.25.4 2.69-.17 3.23-1.32.14-.3.2-.62.21-.95V.02h.02z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-gray-500">
            <p>© {new Date().getFullYear()} DEMO SALES WEB. All Rights Reserved.</p>
            <p className="mt-2 sm:mt-0">Designed for Premium Automotive Experience</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

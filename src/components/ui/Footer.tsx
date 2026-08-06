'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'Home Showcase', href: '/' },
  { label: 'Vehicles Catalog', href: '/vehicles' },
  { label: 'About Dealership', href: '/#about' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

const SERVICES = [
  'Retail Vehicle Sales',
  'Wholesale & B2B Bulk Supply',
  'Vehicle Valuation & Trade-in',
  'Auction Sheet Verification',
  'Leasing & Finance Facilitation',
  'Island-Wide Delivery',
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 relative z-10">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                <i className="fa-solid fa-car text-sm" />
              </div>
              <span className="text-lg font-extrabold text-white uppercase tracking-wider font-display">
                DEMO SALES WEB
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Sri Lanka&apos;s trusted dealer for Suzuki Wagon R FX, FZ, Stingray, and premium
              Japanese vehicle imports in Kurunegala.
            </p>
            <p className="text-red-400 font-semibold">Kurunegala, North Western Province</p>
            {/* Social */}
            <div className="flex gap-2 pt-2">
              {[
                { href: 'https://www.facebook.com/share/1Jq4RvinxM/', icon: 'fa-brands fa-facebook', label: 'Facebook' },
                { href: 'https://www.instagram.com/azytion', icon: 'fa-brands fa-instagram', label: 'Instagram' },
                { href: 'https://www.tiktok.com/@azytion', icon: 'fa-brands fa-tiktok', label: 'TikTok' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${s.icon} text-sm`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-gray-400">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-red-400 transition-colors duration-200 hover:pl-1 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-gray-400">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
              Connect With Us
            </h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-red-500" />
                <a href="tel:0755331445" className="hover:text-white transition-colors">0755331445</a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-green-400" />
                <a href="https://wa.me/94755331445" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Chat
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-red-500" />
                <span>Kurunegala, Sri Lanka</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-regular fa-clock text-red-500" />
                <span>Mon–Sat: 8:30AM – 6:00PM</span>
              </p>
              <div className="pt-3">
                <a
                  href="https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB!"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/30"
                >
                  <i className="fa-brands fa-whatsapp text-base" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-xs gap-2">
          <p>© 2026 DEMO SALES WEB. All Rights Reserved.</p>
          <p>Designed for Premium Automotive Experience</p>
        </div>
      </div>
    </footer>
  );
}

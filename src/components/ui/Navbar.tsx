'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

const NAV_LINKS = [
  { href: '/', label: 'Home', section: 'hero' },
  { href: '/vehicles', label: 'Vehicles', isPage: true },
  { href: '/#about', label: 'About Us', section: 'about' },
  { href: '/#gallery', label: 'Gallery', section: 'gallery' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (pathname === '/') {
        // Active section detection on home page
        const sections = ['hero', 'inventory', 'about', 'sell-trade', 'gallery', 'contact'];
        for (const id of [...sections].reverse()) {
          const el = document.getElementById(id);
          if (el && window.scrollY >= el.offsetTop - 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <motion.header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-panel border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-car text-white text-lg" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white uppercase block leading-none font-display">
                  DEMO SALES WEB
                </span>
                <span className="text-xs tracking-widest text-red-500 font-semibold uppercase block mt-0.5 font-mono">
                  KURUNEGALA
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              {NAV_LINKS.map((link) => {
                const isVehiclesPage = pathname === '/vehicles' && link.isPage;
                const isHomeSectionActive =
                  pathname === '/' && link.section && activeSection === link.section;
                const isActive = isVehiclesPage || isHomeSectionActive;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-red-600 shadow-md shadow-red-600/30"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:0755331445"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-200 hover:text-white glass-panel hover:border-white/20 transition-all"
              >
                <i className="fa-solid fa-phone text-red-500" />
                <span>0755331445</span>
              </a>
              <a
                href="https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20am%20interested%20in%20a%20vehicle."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/30 transition-all hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl glass-panel text-gray-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              <motion.i
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT_QUART }}
              className="md:hidden glass-panel border-b border-white/10 px-4 overflow-hidden"
            >
              <div className="pt-3 pb-6 space-y-2">
                {NAV_LINKS.map((link) => {
                  const isVehiclesPage = pathname === '/vehicles' && link.isPage;
                  const isHomeSectionActive =
                    pathname === '/' && link.section && activeSection === link.section;
                  const isActive = isVehiclesPage || isHomeSectionActive;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-red-600 text-white font-semibold'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                  <a
                    href="tel:0755331445"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl glass-panel text-sm font-medium text-white"
                  >
                    <i className="fa-solid fa-phone text-red-500" />
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/94755331445"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-sm font-semibold text-white"
                  >
                    <i className="fa-brands fa-whatsapp text-lg" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

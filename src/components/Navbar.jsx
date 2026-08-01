import React, { useState, useEffect } from 'react';
import { Car, Phone, MessageSquare, Menu, X, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'about', label: 'About Us' },
    { id: 'sell-trade', label: 'Sell / Trade-in' },
    { id: 'wholesale', label: 'Wholesale' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-600/30">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider text-white uppercase block leading-none">
                DEMO SALES WEB
              </span>
              <span className="text-xs tracking-widest text-red-500 font-semibold uppercase block mt-0.5">
                KURUNEGALA
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0755331445"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-200 hover:text-white glass-panel hover:border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20am%20interested%20in%20a%20vehicle."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl glass-panel text-gray-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-red-600 text-white font-semibold'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href="tel:0755331445"
              className="flex items-center justify-center gap-2 py-3 rounded-xl glass-panel text-sm font-medium text-white"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20am%20interested%20in%20a%20vehicle."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-sm font-semibold text-white"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

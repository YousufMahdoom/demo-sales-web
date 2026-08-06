'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '@/lib/data';

type Slide = {
  id: string;
  badge: string;
  brand: string;
  model: string;
  price: string;
  priceNote: string;
  grade: string;
  mileage: string;
  engineSpec: string;
  fuelEconomy: string;
  image: string;
  waLink: string;
};

const HERO_SLIDES: Slide[] = [
  {
    id: 'wr-fz',
    badge: 'UNREGISTERED • GRADE 4.5/B',
    brand: 'SUZUKI',
    model: 'Wagon R FZ Hybrid',
    price: 'Rs. 6,850,000',
    priceNote: 'Mint Condition',
    grade: '4.5 / B',
    mileage: '14,500 km',
    engineSpec: '660cc Hybrid',
    fuelEconomy: '30+ km/L',
    image: getImagePath('/images/wagonr-fz.jpg'),
    waLink:
      'https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20want%20to%20reserve%20the%20Wagon%20R%20FZ.',
  },
  {
    id: 'wr-stingray',
    badge: 'TURBO SPORT • GRADE 4.5/A',
    brand: 'SUZUKI',
    model: 'Wagon R Stingray T',
    price: 'Rs. 7,250,000',
    priceNote: 'LED Package',
    grade: '4.5 / A',
    mileage: '18,200 km',
    engineSpec: '660cc Turbo',
    fuelEconomy: '28+ km/L',
    image: getImagePath('/images/wagonr-stingray.jpg'),
    waLink:
      'https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20want%20to%20reserve%20the%20Wagon%20R%20Stingray.',
  },
  {
    id: 'wr-fx',
    badge: 'HIGH VALUE • SAFETY EDITION',
    brand: 'SUZUKI',
    model: 'Wagon R FX Safety',
    price: 'Rs. 6,450,000',
    priceNote: 'Silky Silver',
    grade: '4.5 / B',
    mileage: '11,000 km',
    engineSpec: '660cc Hybrid',
    fuelEconomy: '30+ km/L',
    image: getImagePath('/images/wagonr-fx.jpg'),
    waLink:
      'https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20want%20to%20reserve%20the%20Wagon%20R%20FX.',
  },
  {
    id: 'bmw-m3',
    badge: 'M PERFORMANCE • 503 HP',
    brand: 'BMW',
    model: 'M3 Competition',
    price: 'Rs. 46,500,000',
    priceNote: 'Duty Paid',
    grade: '5.0 / A',
    mileage: '8,500 km',
    engineSpec: '3.0L Twin-Turbo',
    fuelEconomy: '503 HP',
    image: getImagePath('/images/bmw-m3-hero.jpg'),
    waLink:
      'https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20want%20to%20inquire%20about%20the%20BMW%20M3.',
  },
];

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;
const AUTO_PLAY_INTERVAL = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const startTimeRef = useRef<number>(Date.now());

  const slide = HERO_SLIDES[current];
  const total = HERO_SLIDES.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
    startTimeRef.current = Date.now();
    setProgress(0);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
    startTimeRef.current = Date.now();
    setProgress(0);
  }, [total]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    startTimeRef.current = Date.now();
    setProgress(0);
  };

  // 5-Second auto progress timer
  useEffect(() => {
    startTimeRef.current = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / AUTO_PLAY_INTERVAL) * 100);
      setProgress(pct);

      if (elapsed >= AUTO_PLAY_INTERVAL) {
        next();
      }
    }, 50);

    return () => clearInterval(timer);
  }, [current, next]);

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const smoothBgY = useSpring(bgY, { damping: 30, stiffness: 80 });
  const smoothBgScale = useSpring(bgScale, { damping: 30, stiffness: 80 });

  // Mouse Parallax listener
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-6 px-4 sm:px-8 lg:px-12 border-b border-white/10 select-none"
      aria-label="Hero Showcase"
    >
      {/* ── Background Parallax Layer ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: EASE_OUT_QUART }}
          style={{ y: smoothBgY, scale: smoothBgScale }}
        >
          <Image
            src={slide.image}
            alt="Hero background car"
            fill
            priority
            className="object-cover object-center filter brightness-[0.38] contrast-[1.2]"
            sizes="100vw"
          />

          {/* Vignette & Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        </motion.div>
      </AnimatePresence>

      {/* ── Ambient Glowing Orbs & Parallax Grid ── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(350px, 50vw, 800px)',
            height: 'clamp(350px, 50vw, 800px)',
            bottom: '-12%',
            left: '-6%',
            background: 'radial-gradient(circle, hsl(0 80% 50% / 0.18), transparent 70%)',
            filter: 'blur(95px)',
          }}
          animate={{ x: mousePos.x * -30, y: mousePos.y * -30 }}
          transition={{ type: 'spring', damping: 40, stiffness: 60 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'clamp(250px, 35vw, 550px)',
            height: 'clamp(250px, 35vw, 550px)',
            top: '15%',
            right: '8%',
            background: 'radial-gradient(circle, hsl(38 90% 55% / 0.12), transparent 70%)',
            filter: 'blur(75px)',
          }}
          animate={{ x: mousePos.x * 25, y: mousePos.y * 25 }}
          transition={{ type: 'spring', damping: 40, stiffness: 60 }}
        />
        <motion.div
          className="absolute inset-0 bg-dot-grid opacity-20"
          animate={{ x: mousePos.x * -10, y: mousePos.y * -10 }}
          transition={{ type: 'spring', damping: 60, stiffness: 40 }}
        />
      </div>

      {/* ── Content Stage ── */}
      <motion.div
        className="w-full max-w-[1600px] mx-auto flex-1 flex flex-col lg:grid lg:grid-cols-12 items-center relative z-20 gap-6 lg:gap-8 my-auto py-4"
        style={{ opacity }}
      >
        {/* Title Header Block (Always First) */}
        <div className="w-full lg:col-span-6 flex flex-col justify-center space-y-4 lg:space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`header-${slide.id}`}
              className="space-y-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: EASE_OUT_QUART }}
            >
              {/* Pill Badge */}
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-red-600 rounded-full" />
                <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-red-500 uppercase">
                  {slide.badge}
                </span>
              </div>

              {/* Giant Title */}
              <motion.div
                style={{ x: mousePos.x * -8, y: mousePos.y * -5 }}
                transition={{ type: 'spring', damping: 30, stiffness: 100 }}
              >
                <h1 className="font-display tracking-tighter leading-[0.9] uppercase">
                  <span className="block text-white text-3xl sm:text-5xl lg:text-6xl font-light">
                    {slide.brand}
                  </span>
                  <span className="block text-gradient-red text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mt-1">
                    {slide.model}
                  </span>
                </h1>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* On Desktop: Price & Buttons are placed here in left column */}
          <div className="hidden lg:flex flex-col space-y-6 pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`desk-price-${slide.id}`}
                className="flex flex-col space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.55, ease: EASE_OUT_QUART }}
              >
                {/* Price Tag */}
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
                    {slide.price}
                  </span>
                  <span className="text-xs text-red-400 font-mono font-bold uppercase px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30">
                    {slide.priceNote}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row items-center gap-3.5">
                  <motion.a
                    href={slide.waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 min-h-[52px] rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold font-mono uppercase tracking-wider shadow-xl shadow-red-600/40 transition-all"
                    whileHover={{ scale: 1.04, boxShadow: '0 0 30px hsl(0 80% 50% / 0.5)' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <i className="fa-brands fa-whatsapp text-lg" />
                    <span>Reserve via WhatsApp</span>
                  </motion.a>

                  <motion.a
                    href="#inventory"
                    className="inline-flex items-center justify-center gap-2.5 px-7 min-h-[52px] rounded-xl border border-white/20 glass-panel text-xs font-mono font-bold uppercase tracking-wider text-white hover:border-red-500 transition-all"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span>Explore Cars</span>
                    <i className="fa-solid fa-arrow-down text-red-500 text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Vehicle Stage Image (Shows RIGHT AFTER TITLE on Mobile) ── */}
        <div className="w-full lg:col-span-6 relative flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`stage-${slide.id}`}
              className="relative w-full max-w-[560px] aspect-[16/10] rounded-3xl overflow-hidden glass-card border border-white/20 shadow-[0_30px_90px_rgba(220,38,38,0.25)] bg-black/60 group cursor-pointer"
              animate={{
                rotateY: mousePos.x * 12,
                rotateX: mousePos.y * -8,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={slide.image}
                alt={`${slide.brand} ${slide.model}`}
                fill
                priority
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Verified Stamp Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-mono font-bold uppercase tracking-widest text-green-400 border border-green-500/40 bg-black/80 backdrop-blur-md shadow-md flex items-center gap-1.5 sm:gap-2">
                  <i className="fa-solid fa-shield-halved text-green-400 text-xs" />
                  <span>Auction Grade {slide.grade} Verified</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* On Mobile ONLY: Price, Key Specs, and Buttons are displayed AFTER the image */}
          <div className="w-full max-w-[560px] flex flex-col space-y-4 pt-4 lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mob-details-${slide.id}`}
                className="flex flex-col space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5, ease: EASE_OUT_QUART }}
              >
                {/* Mobile Price Tag */}
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                    {slide.price}
                  </span>
                  <span className="text-[11px] text-red-400 font-mono font-bold uppercase px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30">
                    {slide.priceNote}
                  </span>
                </div>

                {/* Key Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="glass-panel p-3 rounded-2xl border border-white/10">
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">Mileage</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{slide.mileage}</span>
                  </div>
                  <div className="glass-panel p-3 rounded-2xl border border-white/10">
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">Engine</span>
                    <span className="text-xs font-bold text-red-400 mt-0.5 block truncate">{slide.engineSpec}</span>
                  </div>
                  <div className="glass-panel p-3 rounded-2xl border border-white/10">
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">Economy</span>
                    <span className="text-xs font-bold text-green-400 mt-0.5 block">{slide.fuelEconomy}</span>
                  </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex flex-col gap-2.5 pt-1">
                  <motion.a
                    href={slide.waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 min-h-[48px] rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold font-mono uppercase tracking-wider shadow-lg shadow-red-600/30"
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="fa-brands fa-whatsapp text-base" />
                    <span>Reserve via WhatsApp</span>
                  </motion.a>

                  <motion.a
                    href="#inventory"
                    className="w-full inline-flex items-center justify-center gap-2 min-h-[46px] rounded-xl border border-white/20 glass-panel text-xs font-mono font-bold uppercase tracking-wider text-white"
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Explore Cars</span>
                    <i className="fa-solid fa-arrow-down text-red-500 text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* On Desktop ONLY: Key Metrics Bar under stage card */}
          <motion.div
            className="hidden lg:grid w-full max-w-[560px] mt-4 grid-cols-3 gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="glass-panel p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Mileage</span>
              <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">{slide.mileage}</span>
            </div>
            <div className="glass-panel p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Engine</span>
              <span className="text-xs sm:text-sm font-bold text-red-400 mt-0.5 block truncate">{slide.engineSpec}</span>
            </div>
            <div className="glass-panel p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Fuel Economy</span>
              <span className="text-xs sm:text-sm font-bold text-green-400 mt-0.5 block">{slide.fuelEconomy}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom Controls Bar (5-Second Progress Bar + Slider Nav) ── */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-white font-bold tracking-widest text-xs">
            {String(current + 1).padStart(2, '0')}
          </span>

          {/* 5-Second Linear Progress Bar */}
          <div className="w-24 sm:w-44 h-[3px] bg-white/15 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-red-600 rounded-full transition-all duration-75 ease-linear shadow-sm shadow-red-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-gray-600 text-xs">{String(total).padStart(2, '0')}</span>

          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/20 glass-panel flex items-center justify-center text-white hover:border-red-500 hover:text-red-500 transition-colors"
              aria-label="Previous Slide"
            >
              <i className="fa-solid fa-chevron-left text-xs" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/20 glass-panel flex items-center justify-center text-white hover:border-red-500 hover:text-red-500 transition-colors"
              aria-label="Next Slide"
            >
              <i className="fa-solid fa-chevron-right text-xs" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? 'w-8 bg-red-600' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3 sm:gap-4 text-gray-400 ml-auto sm:ml-0">
          <a href="https://www.facebook.com/share/1Jq4RvinxM/" target="_blank" rel="noreferrer" className="p-1 hover:text-white transition-colors" aria-label="Facebook">
            <i className="fa-brands fa-facebook text-sm" />
          </a>
          <a href="https://www.instagram.com/azytion" target="_blank" rel="noreferrer" className="p-1 hover:text-white transition-colors" aria-label="Instagram">
            <i className="fa-brands fa-instagram text-sm" />
          </a>
          <a href="https://www.tiktok.com/@azytion" target="_blank" rel="noreferrer" className="p-1 hover:text-white transition-colors" aria-label="TikTok">
            <i className="fa-brands fa-tiktok text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}

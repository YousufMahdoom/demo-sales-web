'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getImagePath, VEHICLES_DATA, Vehicle } from '@/lib/data';
import VehicleDetailsModal from '@/components/ui/VehicleDetailsModal';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

interface HeroSectionProps {
  onInitialReady?: () => void;
}

interface SpotlightCar {
  id: string;
  dataId: string;
  badge: string;
  name: string;
  modelCode: string;
  price: string;
  image: string;
  glowColor: string;
  specs: {
    mileage: string;
    engine: string;
    grade: string;
  };
}

const SPOTLIGHT_CARS: SpotlightCar[] = [
  {
    id: 'wr-fz',
    dataId: 'wr-fz-2023',
    badge: 'Flagship Hybrid',
    name: 'Suzuki Wagon R FZ',
    modelCode: '2023 • Safety Package • HUD',
    price: 'Rs. 6,850,000',
    image: getImagePath('/images/wagonr-fz.jpg'),
    glowColor: 'rgba(239, 68, 68, 0.24)',
    specs: {
      mileage: '30+ km/L',
      engine: '660cc ISG Hybrid',
      grade: 'Grade 4.5 / B',
    },
  },
  {
    id: 'wr-stingray',
    dataId: 'wr-stingray-2022',
    badge: 'Turbo Sport',
    name: 'Wagon R Stingray T',
    modelCode: '2022 • Turbo • Paddle Shift',
    price: 'Rs. 7,250,000',
    image: getImagePath('/images/wagonr-stingray.jpg'),
    glowColor: 'rgba(245, 158, 11, 0.24)',
    specs: {
      mileage: '28+ km/L',
      engine: '660cc Turbo Hybrid',
      grade: 'Grade 4.5 / A',
    },
  },
  {
    id: 'honda-fit',
    dataId: 'honda-fit-crosstar-2022',
    badge: 'Crossover e:HEV',
    name: 'Honda Fit Crosstar',
    modelCode: '2022 • Dual Motor • Honda SENSING',
    price: 'Rs. 9,450,000',
    image: getImagePath('/images/honda-fit.jpg'),
    glowColor: 'rgba(6, 182, 212, 0.24)',
    specs: {
      mileage: '29+ km/L',
      engine: '1.5L e:HEV Dual Motor',
      grade: 'Grade 5.0 Mint',
    },
  },
  {
    id: 'toyota-vitz',
    dataId: 'toyota-vitz-2019',
    badge: 'Safety Edition',
    name: 'Toyota Vitz F Safety',
    modelCode: '2020 • Push Start • Reverse Cam',
    price: 'Rs. 7,400,000',
    image: getImagePath('/images/toyota-vitz.jpg'),
    glowColor: 'rgba(168, 85, 247, 0.24)',
    specs: {
      mileage: '24+ km/L',
      engine: '1.0L VVT-i Petrol',
      grade: 'Grade 4.5 Clean',
    },
  },
  {
    id: 'nissan-dayz',
    dataId: 'nissan-dayz-2022',
    badge: 'Highway Star',
    name: 'Nissan Dayz Highway',
    modelCode: '2022 • Around View 360° • LED',
    price: 'Rs. 6,650,000',
    image: getImagePath('/images/nissan-dayz.jpg'),
    glowColor: 'rgba(245, 158, 11, 0.24)',
    specs: {
      mileage: '27+ km/L',
      engine: '660cc Smart Hybrid',
      grade: 'Grade 4.5 / B',
    },
  },
];

const AUTO_ROTATE_INTERVAL = 6000;

export default function HeroSection({ onInitialReady }: HeroSectionProps = {}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedModalVehicle, setSelectedModalVehicle] = useState<Vehicle | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const touchStartXRef = useRef<number | null>(null);

  const currentCar = SPOTLIGHT_CARS[selectedIndex];

  // Notify parent immediately that Hero is mounted and ready
  useEffect(() => {
    onInitialReady?.();
  }, [onInitialReady]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % SPOTLIGHT_CARS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + SPOTLIGHT_CARS.length) % SPOTLIGHT_CARS.length);
  }, []);

  // Auto-rotation timer with pause on hover/interaction
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;

    if (deltaX > 40) {
      handleNext();
    } else if (deltaX < -40) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  // Subtle mouse tracking for studio glow on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleWhatsAppInquiry = (car: SpotlightCar) => {
    const text = encodeURIComponent(
      `Hello DEMO SALES WEB, I would like to inquire about the ${car.name} (${car.modelCode}) listed at ${car.price}. Please share auction sheet and stock details.`
    );
    window.open(`https://wa.me/94755331445?text=${text}`, '_blank');
  };

  const handleOpenDetails = (car: SpotlightCar) => {
    const vehicle = VEHICLES_DATA.find((v) => v.id === car.dataId);
    if (vehicle) {
      setSelectedModalVehicle(vehicle);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:h-screen lg:max-h-[920px] lg:min-h-[640px] w-full bg-[#030305] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 lg:pt-20 pb-4 sm:pb-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
      onMouseMove={handleMouseMove}
    >
      {/* 1. AMBIENT STUDIO LIGHTING */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          key={currentCar.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePos.x,
            y: mousePos.y,
          }}
          transition={{ duration: 0.8, ease: EASE_OUT_QUART }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[550px] lg:w-[750px] h-[320px] sm:h-[450px] rounded-full blur-[90px] sm:blur-[130px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${currentCar.glowColor} 0%, transparent 70%)` }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030305] via-[#030305]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030305] via-[#030305]/80 to-transparent" />
      </div>

      {/* 2. MAIN CLEAN HERO CONTAINER */}
      <div className="container-max relative z-10 my-auto w-full px-4 sm:px-6 lg:px-8">
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* LEFT / AFTER CARS ON MOBILE: Clean Headline & Action Buttons */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-4 sm:space-y-5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_QUART }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.1]">
                Premium Japanese <br />
                <span className="text-gradient-red">Vehicles in Stock.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT_QUART }}
              className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg"
            >
              Handpicked Grade 4.5+ hybrid hatchbacks and Japanese imports in Kurunegala with guaranteed auction sheets and direct import pricing.
            </motion.p>

            {/* Clean CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT_QUART }}
              className="flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center gap-2.5 sm:gap-3 pt-1"
            >
              <a
                href="#inventory"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm font-mono tracking-wide shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Explore Inventory</span>
                <i className="fa-solid fa-arrow-down text-xs" />
              </a>

              <button
                onClick={() => handleWhatsAppInquiry(currentCar)}
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass hover:bg-white/10 border border-white/15 text-white font-semibold text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 hover:border-green-500/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-green-400 text-base" />
                <span>WhatsApp Us</span>
              </button>
            </motion.div>

            {/* Clean 3-Metric Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10 max-w-md"
            >
              <div className="glass-panel p-2 sm:p-2.5 rounded-xl border border-white/5 text-center">
                <span className="text-sm sm:text-lg font-bold text-white block font-display">1,450+</span>
                <span className="text-[8px] sm:text-[10px] font-mono text-gray-400 uppercase">Delivered</span>
              </div>
              <div className="glass-panel p-2 sm:p-2.5 rounded-xl border border-white/5 text-center">
                <span className="text-sm sm:text-lg font-bold text-green-400 block font-display">100%</span>
                <span className="text-[8px] sm:text-[10px] font-mono text-gray-400 uppercase">Auction Sheets</span>
              </div>
              <div className="glass-panel p-2 sm:p-2.5 rounded-xl border border-white/5 text-center">
                <span className="text-sm sm:text-lg font-bold text-amber-400 block font-display">12+ Yrs</span>
                <span className="text-[8px] sm:text-[10px] font-mono text-gray-400 uppercase">Trust</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT / FIRST ON MOBILE: Clean Vehicle Showcase Stage */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center w-full">
            <div 
              className="relative w-full glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-5 border border-white/15 bg-[#09090d]/90 shadow-2xl overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Header: Name + Price */}
              <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white font-display">
                      {currentCar.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-mono font-semibold uppercase text-red-400 bg-red-500/10 border border-red-500/30">
                      {currentCar.badge}
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-xs text-gray-400 font-mono mt-0.5">
                    {currentCar.modelCode}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs sm:text-base lg:text-lg font-mono font-bold text-white block">
                    {currentCar.price}
                  </span>
                </div>
              </div>

              {/* Vehicle Showcase Image Window */}
              <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center group/stage">
                
                {/* Ambient Floor Glow */}
                <div 
                  className="absolute bottom-1 inset-x-12 h-14 rounded-full blur-2xl opacity-70 pointer-events-none transition-colors duration-700"
                  style={{ backgroundColor: currentCar.glowColor }}
                />

                {/* Animated Vehicle Transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCar.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: EASE_OUT_QUART }}
                    className="relative w-full h-full flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenDetails(currentCar)}
                  >
                    <Image
                      src={currentCar.image}
                      alt={currentCar.name}
                      fill
                      priority
                      loading="eager"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 55vw"
                      className="object-cover rounded-lg sm:rounded-xl group-hover/stage:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Subtle Quick Inspect Overlay Tag */}
                    <div className="absolute top-2.5 right-2.5 z-10 opacity-90 sm:opacity-0 sm:group-hover/stage:opacity-100 transition-opacity duration-300">
                      <span className="px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold text-white bg-black/75 border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <i className="fa-solid fa-expand text-[8px]" />
                        <span>Inspect Specs</span>
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Touch Navigation Left & Right */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-90 z-20 cursor-pointer"
                  aria-label="Previous Car"
                >
                  <i className="fa-solid fa-chevron-left text-[10px] sm:text-xs" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-90 z-20 cursor-pointer"
                  aria-label="Next Car"
                >
                  <i className="fa-solid fa-chevron-right text-[10px] sm:text-xs" />
                </button>

                {/* Slide Dots Indicator with Auto-Progress */}
                <div className="absolute bottom-2 sm:bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                  {SPOTLIGHT_CARS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        selectedIndex === i ? 'w-5 sm:w-6 bg-red-500' : 'w-1.5 bg-white/40'
                      }`}
                      aria-label={`Car ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* 3 Key Specs Strip */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-2.5 sm:mt-3">
                <div className="glass-panel p-1.5 sm:p-2 rounded-xl border border-white/5 text-center">
                  <span className="text-[8px] sm:text-[9px] font-mono text-gray-400 block uppercase">Economy</span>
                  <span className="text-[11px] sm:text-xs lg:text-sm font-bold text-green-400 font-mono">{currentCar.specs.mileage}</span>
                </div>
                <div className="glass-panel p-1.5 sm:p-2 rounded-xl border border-white/5 text-center">
                  <span className="text-[8px] sm:text-[9px] font-mono text-gray-400 block uppercase">Engine</span>
                  <span className="text-[11px] sm:text-xs lg:text-sm font-bold text-white font-mono truncate">{currentCar.specs.engine}</span>
                </div>
                <div className="glass-panel p-1.5 sm:p-2 rounded-xl border border-white/5 text-center">
                  <span className="text-[8px] sm:text-[9px] font-mono text-gray-400 block uppercase">Grade</span>
                  <span className="text-[11px] sm:text-xs lg:text-sm font-bold text-amber-400 font-mono">{currentCar.specs.grade}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* 3. SUBTLE SCROLL HINT */}
      <div className="relative z-10 w-full pt-1 sm:pt-2 text-center">
        <a href="#inventory" className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-gray-500 hover:text-red-400 transition-colors">
          <span>Scroll to explore stock</span>
          <i className="fa-solid fa-chevron-down text-[8px] animate-bounce" />
        </a>
      </div>

      {/* Vehicle Details Modal from Hero */}
      {selectedModalVehicle && (
        <VehicleDetailsModal
          vehicle={selectedModalVehicle}
          onClose={() => setSelectedModalVehicle(null)}
        />
      )}
    </section>
  );
}

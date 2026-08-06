'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { GALLERY_IMAGES, GalleryItem } from '@/lib/data';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

const CATEGORIES = [
  { key: 'all', label: 'All Showcase' },
  { key: 'showroom', label: 'Showroom' },
  { key: 'deliveries', label: 'Vehicle Deliveries' },
  { key: 'imports', label: 'Japanese Imports' },
  { key: 'inspection', label: 'Quality Checks' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="section-padding relative z-10 bg-black/40">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto space-y-4 mb-10"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
        >
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-mono">
            VISUAL SHOWCASE & DELIVERIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Photo & Media <span className="text-gradient-red">Gallery</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Take a look inside our Kurunegala showroom, recent vehicle handovers, Japanese import arrivals, and 150-point quality inspection process.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setSelectedIndex(null);
                }}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-red-600 shadow-lg shadow-red-600/30'
                    : 'text-gray-400 glass-panel border border-white/10 hover:text-white hover:border-white/25'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Display */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, ease: EASE_OUT_QUART, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setSelectedIndex(i)}
                className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-white/10 bg-black/50 shadow-xl"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4 z-10">
                  <span className="self-start px-2.5 py-1 rounded-full text-[8px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 border border-red-500/30 bg-black/70 backdrop-blur-md">
                    {img.badge}
                  </span>

                  <div className="flex items-center justify-between">
                    <p className="text-white text-xs font-bold leading-tight line-clamp-2 pr-2">
                      {img.title}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-expand text-white text-xs" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal with Full Carousel Controls */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Modal Container */}
            <motion.div
              className="relative max-w-5xl w-full flex flex-col items-center"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT_QUART }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Window */}
              <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-red-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-colors z-20"
                  aria-label="Close Lightbox"
                >
                  <i className="fa-solid fa-xmark text-lg" />
                </button>

                {/* Counter & Category Pill */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-black/70 border border-white/20 backdrop-blur-md">
                    {String(selectedIndex + 1).padStart(2, '0')} / {String(filteredImages.length).padStart(2, '0')}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-red-400 bg-black/70 border border-red-500/40 backdrop-blur-md uppercase">
                    {selectedImage.badge}
                  </span>
                </div>

                {/* Previous & Next Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-red-600 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition-colors z-20 shadow-lg"
                  aria-label="Previous Image"
                >
                  <i className="fa-solid fa-chevron-left text-base" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-red-600 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition-colors z-20 shadow-lg"
                  aria-label="Next Image"
                >
                  <i className="fa-solid fa-chevron-right text-base" />
                </button>

                {/* Caption Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10">
                  <h3 className="text-white text-base sm:text-xl font-bold font-display">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

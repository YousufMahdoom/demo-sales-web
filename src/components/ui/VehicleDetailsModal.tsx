'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Vehicle } from '@/lib/data';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

interface VehicleDetailsModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export default function VehicleDetailsModal({ vehicle, onClose }: VehicleDetailsModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (vehicle) {
      setSelectedImage(vehicle.image);
    }
  }, [vehicle]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!vehicle) return null;

  const galleryImages = Array.from(
    new Set([vehicle.image, ...(vehicle.gallery || [])])
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto no-scrollbar">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/15 bg-[#09090b]/95 shadow-2xl overflow-hidden z-10 my-auto"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: EASE_OUT_QUART }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left: Gallery Column */}
            <div className="lg:col-span-6 p-6 flex flex-col justify-between space-y-4 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-3">
                {/* Main View */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/50 border border-white/10 group">
                  <Image
                    src={selectedImage || vehicle.image}
                    alt={vehicle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-all duration-500"
                    priority
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 bg-black/70 border border-red-500/30 backdrop-blur-md">
                      {vehicle.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase text-green-400 bg-black/70 border border-green-500/30 backdrop-blur-md">
                      {vehicle.condition}
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                {galleryImages.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {galleryImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-20 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                          selectedImage === img
                            ? 'border-red-500 scale-105 shadow-md shadow-red-600/30'
                            : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt="Thumbnail"
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Banner */}
              <div className="glass-panel p-4 rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-950/40 via-black to-black mt-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                  Showroom Target Price
                </span>
                <span className="text-2xl font-extrabold text-white tracking-tight mt-0.5 block">
                  {vehicle.isPriceContact ? 'Contact For Best Offer' : vehicle.price}
                </span>
              </div>
            </div>

            {/* Right: Specifications & Features */}
            <div className="lg:col-span-6 p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
                    {vehicle.category.toUpperCase()} • YEAR {vehicle.year}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white font-display leading-tight mt-1">
                    {vehicle.title}
                  </h2>
                </div>

                {/* Specification Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-gray-500 uppercase block text-[10px]">Engine</span>
                    <span className="font-bold text-white mt-0.5 block truncate">{vehicle.engine}</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-gray-500 uppercase block text-[10px]">Mileage</span>
                    <span className="font-bold text-white mt-0.5 block truncate">{vehicle.mileage}</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-gray-500 uppercase block text-[10px]">Transmission</span>
                    <span className="font-bold text-white mt-0.5 block truncate">{vehicle.transmission}</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-gray-500 uppercase block text-[10px]">Fuel Economy</span>
                    <span className="font-bold text-green-400 mt-0.5 block truncate">{vehicle.fuel}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono mb-1">
                    Vehicle Overview
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {vehicle.description}
                  </p>
                </div>

                {/* Feature Tags */}
                {vehicle.features && vehicle.features.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono mb-2">
                      Key Options & Packages
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {vehicle.features.map((feat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg glass-panel text-[11px] font-semibold text-gray-200 border border-white/10 flex items-center gap-1.5"
                        >
                          <i className="fa-solid fa-circle-check text-red-500 text-[10px]" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(
                    vehicle.title
                  )}%20(${vehicle.price}).`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-green-600/30 transition-all text-center"
                >
                  <i className="fa-brands fa-whatsapp text-base" />
                  <span>Reserve Vehicle</span>
                </a>

                <a
                  href="tel:0755331445"
                  className="py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all text-center"
                >
                  <i className="fa-solid fa-phone text-sm" />
                  <span>Call Showroom</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { VEHICLES_DATA, Vehicle } from '@/lib/data';
import VehicleDetailsModal from '@/components/ui/VehicleDetailsModal';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_QUART },
  },
};

interface InventorySectionProps {
  showHeading?: boolean;
  showExploreButton?: boolean;
  limit?: number;
  randomize?: boolean;
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function VehicleCard({
  vehicle,
  onSelect,
}: {
  vehicle: Vehicle;
  onSelect: (v: Vehicle) => void;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="vehicle-card glass-card rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden group cursor-pointer flex flex-col justify-between"
      onClick={() => onSelect(vehicle)}
    >
      {/* Image */}
      <div className="aspect-[16/11] relative overflow-hidden bg-black/40">
        <Image
          src={vehicle.image}
          alt={vehicle.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badges */}
        <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 flex flex-wrap items-center gap-1 sm:gap-2 z-10">
          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 border border-red-500/40 bg-black/70 backdrop-blur-sm">
            {vehicle.badge}
          </span>
          {vehicle.condition === 'Unregistered' || vehicle.condition.includes('Unregistered') ? (
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[7px] sm:text-[9px] font-mono font-bold uppercase tracking-wider text-green-400 border border-green-500/40 bg-black/70 backdrop-blur-sm hidden min-[380px]:inline-block">
              UNREG
            </span>
          ) : null}
        </div>

        {/* Year */}
        <div className="absolute bottom-1.5 right-1.5 sm:bottom-3 sm:right-3 z-10">
          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono font-bold text-gray-300 bg-black/80 backdrop-blur-sm">
            {vehicle.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-5 space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xs sm:text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
            {vehicle.title}
          </h3>
          <p className="text-[9px] sm:text-[11px] font-mono text-gray-500 mt-0.5 sm:mt-1 uppercase tracking-wider truncate">
            {vehicle.engine}
          </p>
        </div>

        {/* Specs row */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
          {[
            { label: 'Mileage', value: vehicle.mileage, icon: 'fa-gauge' },
            { label: 'Gearbox', value: vehicle.transmission.split(' ')[0], icon: 'fa-gears' },
            { label: 'Fuel', value: vehicle.fuel.split(' ')[0], icon: 'fa-leaf' },
          ].map((spec) => (
            <div key={spec.label} className="bg-white/5 rounded-lg sm:rounded-xl p-1 sm:p-2 border border-white/5">
              <i className={`fa-solid ${spec.icon} text-red-500 text-[9px] sm:text-xs mb-0.5 block`} />
              <p className="text-[7px] sm:text-[9px] font-mono text-gray-500 uppercase tracking-widest hidden min-[380px]:block">{spec.label}</p>
              <p className="text-[8px] sm:text-[11px] font-bold text-white mt-0.5 truncate">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col min-[380px]:flex-row items-start min-[380px]:items-center justify-between pt-1 border-t border-white/10 gap-1.5 sm:gap-0">
          <div>
            <p className="text-[8px] sm:text-[10px] font-mono text-gray-500 uppercase hidden min-[380px]:block">Price</p>
            {vehicle.isPriceContact ? (
              <p className="text-[10px] sm:text-sm font-bold text-red-400">Contact</p>
            ) : (
              <p className="text-[11px] sm:text-sm font-bold text-white">{vehicle.price}</p>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(vehicle);
            }}
            className="w-full min-[380px]:w-auto flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-red-600 hover:bg-red-500 text-white text-[9px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
          >
            <i className="fa-solid fa-eye text-[9px] sm:text-[11px]" />
            <span>Details</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function InventorySection({
  showHeading = true,
  showExploreButton = true,
  limit,
  randomize = true,
}: InventorySectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>(VEHICLES_DATA);

  // Randomize vehicles array on client mount
  useEffect(() => {
    if (randomize) {
      setVehicles(shuffleArray(VEHICLES_DATA));
    }
  }, [randomize]);

  const displayedVehicles = limit ? vehicles.slice(0, limit) : vehicles;

  return (
    <section id="inventory" className="section-padding relative z-10">
      <div className="container-max">
        {/* Header (optional) */}
        {showHeading && (
          <motion.div
            ref={ref}
            className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
          >
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-mono">
              FRESH SHOWROOM ARRIVALS
            </span>
            <h2 className="text-2xl sm:text-5xl font-extrabold text-white font-display">
              Latest <span className="text-gradient-red">Showroom Vehicles</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-base leading-relaxed">
              Explore our newest Suzuki Wagon R models (FX, FZ, Stingray) and premium Japanese
              imports ready for immediate delivery.
            </p>
          </motion.div>
        )}

        {/* 2 Columns on Mobile (`grid-cols-2`), 2 on SM, 3 on LG */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {displayedVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={setSelectedVehicle} />
          ))}
        </motion.div>

        {/* See More (optional) */}
        {showExploreButton && (
          <motion.div
            className="mt-8 sm:mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE_OUT_QUART }}
          >
            <a
              href="/vehicles"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-lg shadow-red-600/30 transition-all hover:scale-105 hover:shadow-red-600/50"
            >
              <span>Explore All Inventory Catalog</span>
              <i className="fa-solid fa-arrow-right text-xs sm:text-sm" />
            </a>
          </motion.div>
        )}
      </div>

      {/* Vehicle Details Modal Overlay */}
      {selectedVehicle && (
        <VehicleDetailsModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </section>
  );
}

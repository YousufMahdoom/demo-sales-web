'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { VEHICLES_DATA, Vehicle } from '@/lib/data';
import VehicleDetailsModal from '@/components/ui/VehicleDetailsModal';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT_QUART },
  },
};

interface InventorySectionProps {
  showHeading?: boolean;
  showExploreButton?: boolean;
  limit?: number;
  randomize?: boolean;
}

const CATEGORIES = [
  { key: 'all', label: 'All Stock' },
  { key: 'wagonr', label: 'Suzuki Wagon R' },
  { key: 'other', label: 'Hatchbacks & Hybrids' },
  { key: 'van', label: 'Vans & Commercial' },
  { key: 'sports', label: 'Luxury & Sports' },
];

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
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
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
      <div className="p-2.5 sm:p-5 space-y-2 sm:space-y-3.5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xs sm:text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-red-400 transition-colors duration-300 font-display">
            {vehicle.title}
          </h3>
          <p className="text-[9px] sm:text-[11px] font-mono text-gray-400 mt-0.5 uppercase tracking-wider truncate">
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
            <div key={spec.label} className="bg-white/5 rounded-lg sm:rounded-xl p-1 sm:p-1.5 border border-white/5">
              <i className={`fa-solid ${spec.icon} text-red-500 text-[9px] sm:text-xs mb-0.5 block`} />
              <p className="text-[7px] sm:text-[8px] font-mono text-gray-500 uppercase tracking-widest hidden min-[380px]:block">{spec.label}</p>
              <p className="text-[8px] sm:text-[10px] font-bold text-white mt-0.5 truncate font-mono">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col min-[380px]:flex-row items-start min-[380px]:items-center justify-between pt-2 border-t border-white/10 gap-1.5 sm:gap-0">
          <div>
            <p className="text-[8px] sm:text-[9px] font-mono text-gray-500 uppercase hidden min-[380px]:block">Price</p>
            {vehicle.isPriceContact ? (
              <p className="text-[10px] sm:text-xs font-bold text-red-400 font-mono">Contact For Price</p>
            ) : (
              <p className="text-[11px] sm:text-sm font-bold text-white font-mono">{vehicle.price}</p>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(vehicle);
            }}
            className="w-full min-[380px]:w-auto flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-red-600 hover:bg-red-500 text-white text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            <i className="fa-solid fa-eye text-[9px] sm:text-xs" />
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
  const [activeCategory, setActiveCategory] = useState('all');
  const [vehicles, setVehicles] = useState<Vehicle[]>(VEHICLES_DATA);

  // Initialize randomized vehicles on mount
  useEffect(() => {
    if (randomize) {
      const arr = [...VEHICLES_DATA];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      setVehicles(arr);
    }
  }, [randomize]);

  // Filter by category
  const filteredVehicles = useMemo(() => {
    let list = activeCategory === 'all'
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

    return limit ? list.slice(0, limit) : list;
  }, [activeCategory, vehicles, limit]);

  return (
    <section id="inventory" className="section-padding relative z-10">
      <div className="container-max">
        {/* Header */}
        {showHeading && (
          <motion.div
            ref={ref}
            className="text-center max-w-3xl mx-auto space-y-3 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_OUT_QUART }}
          >
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-mono">
              AVAILABLE SHOWROOM STOCK
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Latest <span className="text-gradient-red">Imported Vehicles</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-base leading-relaxed">
              Explore our current stock of Suzuki Wagon R hybrids and Japanese vehicles available for immediate delivery in Kurunegala.
            </p>
          </motion.div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30 font-semibold'
                    : 'glass border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 2 Columns on Mobile, 2 on SM, 3 on LG */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={setSelectedVehicle} />
          ))}
        </motion.div>

        {/* See More button */}
        {showExploreButton && (
          <motion.div
            className="mt-8 sm:mt-12 text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: EASE_OUT_QUART }}
          >
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              <span>View All Showroom Stock</span>
              <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Vehicle Details Modal */}
      {selectedVehicle && (
        <VehicleDetailsModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </section>
  );
}

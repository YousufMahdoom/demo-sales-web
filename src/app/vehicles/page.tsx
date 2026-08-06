'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';
import InventorySection from '@/components/sections/InventorySection';
import { motion } from 'framer-motion';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] text-[var(--color-gray-100)]">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container-max text-center max-w-3xl mx-auto space-y-4 mb-4">
          <motion.span
            className="text-xs font-bold text-red-500 uppercase tracking-widest block font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            FULL SHOWROOM CATALOG
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold text-white font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
          >
            All Imported <span className="text-gradient-red">Vehicles</span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_QUART }}
          >
            Browse our full stock of Suzuki Wagon R hybrids (FX, FZ, Stingray), Honda Fit Crosstar, Toyota Vitz, Nissan Dayz, Toyota HiAce, and luxury imports in Kurunegala.
          </motion.p>
        </div>

        {/* Display all vehicles without duplicate heading and without explore button */}
        <InventorySection showHeading={false} showExploreButton={false} randomize={true} />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

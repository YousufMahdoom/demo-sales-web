'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

const FAQ_ITEMS = [
  {
    q: 'How do I verify the original Japanese Auction Sheet?',
    a: 'We provide 100% verified original auction sheet documents with every imported vehicle. You can double-check the chassis number on official Japanese verification portals prior to purchase.',
  },
  {
    q: 'What is the real-world fuel economy of Suzuki Wagon R Mild Hybrid?',
    a: 'The Suzuki Wagon R FX, FZ, and Stingray mild-hybrid ISG engines deliver approximately 26 to 32 km/L depending on Sri Lankan traffic conditions and driving habits.',
  },
  {
    q: 'Do you offer trade-ins for existing registered cars?',
    a: 'Yes, we accept trade-ins for popular Japanese models (Vitz, Wagon R, Alto, etc.) at fair current market valuations with immediate balance payment settlement.',
  },
  {
    q: 'Can sub-dealers order wholesale bulk vehicle containers?',
    a: 'Yes! DEMO SALES WEB is a direct importer in Kurunegala. Sub-dealers can place bulk orders (3+ units) with custom import clearance documentation and discounted margin pricing.',
  },
  {
    q: 'Do you offer leasing or finance facilities?',
    a: 'Yes, we work with top Sri Lankan financial institutions to offer leasing up to 70% of vehicle value on unregistered Wagon R models. Contact us for current rates and packages.',
  },
];

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="glass-card rounded-2xl border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: EASE_OUT_QUART }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 hover:text-red-400 transition-colors"
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <motion.i
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
          className="fa-solid fa-chevron-down text-red-500 text-sm ml-3 flex-shrink-0"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_QUART }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4 bg-black/30">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section id="faq" className="py-16 sm:py-20 relative z-10 bg-black/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center space-y-3 mb-10"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
        >
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-mono">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Got Questions?{' '}
            <span className="text-gradient-red">We&apos;ve Got Answers</span>
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

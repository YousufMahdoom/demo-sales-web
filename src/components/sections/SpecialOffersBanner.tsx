'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ d, h, m, s });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center gap-3 sm:gap-4 font-mono text-center">
      {[
        { label: 'Days', value: time.d },
        { label: 'Hours', value: time.h },
        { label: 'Mins', value: time.m },
        { label: 'Secs', value: time.s, accent: true },
      ].map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3">
          <div className="glass-panel px-3 py-2 sm:px-4 sm:py-3 rounded-2xl border border-white/10 min-w-[60px]">
            <span className={`text-xl sm:text-3xl font-extrabold block ${unit.accent ? 'text-red-400' : 'text-white'}`}>
              {pad(unit.value)}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase text-gray-400">{unit.label}</span>
          </div>
          {i < 3 && <span className="text-xl font-bold text-gray-500 -ml-1">:</span>}
        </div>
      ))}
    </div>
  );
}

export default function SpecialOffersBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const [targetDate] = useState(() => new Date(Date.now() + 10 * 24 * 3600 * 1000));

  return (
    <section className="py-12 relative z-10" ref={ref}>
      <div className="container-max">
        <motion.div
          className="glass-card rounded-3xl p-6 sm:p-10 border border-red-500/30 bg-gradient-to-r from-red-950/40 via-black to-black relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT_QUART }}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/8 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-red-500/40 text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest">
                <i className="fa-solid fa-fire text-red-500 animate-pulse" />
                <span>Limited Time Promotion</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                August Direct Import Clearance Deal
              </h3>
              <p className="text-sm text-gray-300">
                Free 1-Year Hybrid Battery & Engine Warranty + Free First 3 Service Package on Suzuki Wagon R Stock.
              </p>
            </div>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

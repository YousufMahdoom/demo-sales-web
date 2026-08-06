'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/data';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;
const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;

const STATS = [
  { label: 'Vehicles Delivered', value: 1450, suffix: '+', gradient: true },
  { label: '% Verified Sheets', value: 100, suffix: '', gradient: false },
  { label: 'Years of Trust', value: 12, suffix: '+', gradient: true },
  { label: '% Customer Satisfaction', value: 99, suffix: '', gradient: false },
];

const TRUST_BADGES = [
  { icon: 'fa-shield-halved', title: 'Verified Auction Sheets', desc: 'Original Japanese export documents & genuine mileage.' },
  { icon: 'fa-award', title: 'Unmatched Pricing', desc: 'Direct import pricing without intermediary markups.' },
  { icon: 'fa-truck', title: 'Nationwide Delivery', desc: 'Full container load delivery across Sri Lanka.' },
  { icon: 'fa-headset', title: 'After-Sale Support', desc: '150-point technical check on every vehicle.' },
];

function StatCounter({ target, suffix, gradient }: { target: number; suffix: string; gradient: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 2.5, ease: EASE_OUT_QUART });
    return controls.stop;
  }, [inView, count, target]);

  return (
    <div ref={ref} className="glass-panel p-6 rounded-2xl border border-white/5 text-center group hover:border-red-500/30 transition-all duration-500">
      <div className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${gradient ? 'text-gradient-red' : 'text-white'}`}>
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-2">
        {STATS.find(s => s.value === target)?.label}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
  const statsInView = useInView(statsRef, { once: true, margin: '0px 0px -50px 0px' });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '0px 0px -50px 0px' });

  return (
    <>
      {/* Stats Strip */}
      <section className="py-16 relative z-10 bg-black/60 border-y border-white/5">
        <div className="container-max">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {STATS.map((stat) => (
              <StatCounter
                key={stat.label}
                target={stat.value}
                suffix={stat.suffix}
                gradient={stat.gradient}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section id="about" className="section-padding relative z-10 bg-black/40">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Text */}
            <motion.div
              ref={ref}
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE_OUT_QUART }}
            >
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-mono">
                OUR HERITAGE & TRUST
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-display">
                Kurunegala&apos;s Premier{' '}
                <span className="text-gradient-red">Automotive Destination</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Established with a passion for excellence,{' '}
                <strong className="text-white">DEMO SALES WEB</strong> has grown to become North
                Western Province&apos;s most trusted dealer for Suzuki Wagon R hybrids and Japanese vehicle imports.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We specialize in retail sales, vehicle trade-ins, and wholesale bulk supply to
                sub-dealers across Sri Lanka. Every vehicle undergoes a comprehensive 150-point
                technical check to ensure 100% peace of mind.
              </p>

              {/* Trust Badges Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {TRUST_BADGES.map((badge, i) => (
                  <motion.div
                    key={badge.title}
                    className="glass-panel p-4 rounded-2xl flex items-start gap-3 border border-white/5 hover:border-red-500/30 transition-all duration-500 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: EASE_OUT_QUART }}
                    whileHover={{ y: -2 }}
                  >
                    <i className={`fa-solid ${badge.icon} text-red-500 text-xl mt-0.5 group-hover:scale-110 transition-transform duration-300`} />
                    <div>
                      <h4 className="text-white font-bold text-sm">{badge.title}</h4>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{badge.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT_QUART }}
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl relative">
                  <Image
                    src="/images/showroom.jpg"
                    alt="DEMO SALES WEB Showroom Kurunegala"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -left-6 glass-panel p-5 rounded-2xl border border-white/15 shadow-xl max-w-xs hidden sm:block z-10"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.7, ease: EASE_SPRING }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-extrabold text-white text-lg">
                      ★
                    </div>
                    <div>
                      <span className="text-white font-bold text-sm block">Top Rated Dealer</span>
                      <span className="text-gray-400 text-xs">Kurunegala, Sri Lanka</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-mono">
                CLIENT TESTIMONIALS
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-display">
                What Our Customers Say
              </h3>
            </div>
            <motion.div
              ref={testimonialsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={testimonialsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 hover:border-white/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.65, ease: EASE_OUT_QUART }}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <i key={si} className="fa-solid fa-star text-amber-400 text-xs" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center text-white text-xs font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

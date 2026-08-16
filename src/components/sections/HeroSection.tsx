'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { getImagePath } from '@/lib/data';

const TOTAL_FRAMES = 240;
const FRAMES_DIR = '/images/Car_parts_assembling_together_202608162019_frames';
const WA_LINK = 'https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20want%20to%20inquire%20about%20your%20vehicles.';

// Helper to format frame path: frame_000000.jpeg to frame_000239.jpeg
const getFramePath = (index: number) => {
  const frameNum = String(index).padStart(6, '0');
  return getImagePath(`${FRAMES_DIR}/frame_${frameNum}.jpeg`);
};

interface StageData {
  id: number;
  label: string;
  tag: string;
  tagColor: string;
  badgeIcon: string;
  titleLight: string;
  titleAccent: string;
  shortDesc: string;
  metrics: { label: string; value: string; color: string }[];
  ctaType?: 'scroll' | 'action';
  frameStart: number;
}

const STAGES: StageData[] = [
  {
    id: 1,
    label: 'Chassis',
    tag: 'STAGE 01 // ARCHITECTURE',
    tagColor: 'text-red-400 bg-red-500/10 border-red-500/30',
    badgeIcon: 'fa-cube',
    titleLight: 'DECONSTRUCTED',
    titleAccent: 'PRECISION',
    shortDesc: 'Exploded chassis blueprint & high-tensile modular subframes.',
    metrics: [
      { label: 'TOLERANCE', value: '0.01 mm', color: 'text-red-400' },
      { label: 'AUCTION GRADE', value: '4.5 / 5.0', color: 'text-amber-400' },
    ],
    ctaType: 'scroll',
    frameStart: 0,
  },
  {
    id: 2,
    label: 'Powertrain',
    tag: 'STAGE 02 // POWERTRAIN',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    badgeIcon: 'fa-gears',
    titleLight: 'HYBRID',
    titleAccent: 'PROPULSION',
    shortDesc: 'Mild-hybrid ISG drivetrains & performance turbo synchronization.',
    metrics: [
      { label: 'FUEL ECONOMY', value: '30+ km/L', color: 'text-green-400' },
      { label: 'REGEN MATRIX', value: 'ISG ACTIVE', color: 'text-amber-400' },
    ],
    ctaType: 'scroll',
    frameStart: 60,
  },
  {
    id: 3,
    label: 'Aero',
    tag: 'STAGE 03 // AERODYNAMICS',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    badgeIcon: 'fa-wind',
    titleLight: 'SCULPTED',
    titleAccent: 'AERODYNAMICS',
    shortDesc: 'Wind-tunnel panels, LED signature optics & collision radar arrays.',
    metrics: [
      { label: 'DRAG COEFF', value: '0.26 Cd', color: 'text-blue-400' },
      { label: 'ACTIVE RADAR', value: 'DSBS SENSE', color: 'text-green-400' },
    ],
    ctaType: 'scroll',
    frameStart: 130,
  },
  {
    id: 4,
    label: 'Manifest',
    tag: 'STAGE 04 // FINAL MANIFEST',
    tagColor: 'text-green-400 bg-green-500/10 border-green-500/30',
    badgeIcon: 'fa-circle-check',
    titleLight: 'COMMAND',
    titleAccent: 'THE ROAD',
    shortDesc: 'Masterpiece assembled & verified for immediate Sri Lankan delivery.',
    metrics: [
      { label: 'STOCK STATUS', value: 'READY IN STOCK', color: 'text-green-400' },
      { label: 'DOCUMENTS', value: '100% VERIFIED', color: 'text-white' },
    ],
    ctaType: 'action',
    frameStart: 195,
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const loadedIndicesRef = useRef<Set<number>>(new Set());

  const [loadedCount, setLoadedCount] = useState(0);
  const [initialReady, setInitialReady] = useState(false);
  const [activeFrame, setActiveFrame] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  // Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth frame mapping 0..239
  const frameIndexTransform = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Find the nearest loaded frame if current one is still downloading
  const getNearestLoadedFrame = useCallback((targetIdx: number): HTMLImageElement | null => {
    const images = imagesRef.current;
    if (images[targetIdx] && loadedIndicesRef.current.has(targetIdx)) {
      return images[targetIdx];
    }
    let closestIdx = -1;
    let minDistance = Infinity;
    for (const idx of loadedIndicesRef.current) {
      const dist = Math.abs(idx - targetIdx);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    }
    if (closestIdx !== -1 && images[closestIdx]) {
      return images[closestIdx];
    }
    return null;
  }, []);

  // Dual-Layer Atmospheric Canvas drawing (Full bleed ambience + sharp foreground car)
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = getNearestLoadedFrame(index);
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgRatio = imgWidth / imgHeight; // 1.777 (16:9)
    const canvasRatio = canvasWidth / canvasHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 1. LAYER 1: Full-Bleed Atmospheric Studio Background (fills all blank/black bars)
    ctx.save();
    let bgWidth = canvasWidth;
    let bgHeight = canvasHeight;
    if (imgRatio > canvasRatio) {
      bgWidth = canvasHeight * imgRatio;
    } else {
      bgHeight = canvasWidth / imgRatio;
    }
    const bgOffsetX = (canvasWidth - bgWidth) / 2;
    const bgOffsetY = (canvasHeight - bgHeight) / 2;

    // Apply smooth ambient blur and contrast to extend background
    ctx.filter = 'blur(35px) brightness(0.55) contrast(1.1)';
    ctx.drawImage(img, bgOffsetX, bgOffsetY, bgWidth, bgHeight);
    ctx.restore();

    // 2. LAYER 2: Crisp Foreground Main Vehicle Frame
    ctx.save();
    let fgWidth: number;
    let fgHeight: number;
    let fgOffsetX: number;
    let fgOffsetY: number;

    if (canvasRatio < 1.45) {
      // Portrait / Square Mobile: fit full width with nice vertical breathing room
      fgWidth = canvasWidth * 0.98;
      fgHeight = fgWidth / imgRatio;
      fgOffsetX = (canvasWidth - fgWidth) / 2;
      fgOffsetY = (canvasHeight - fgHeight) / 2;
    } else {
      // Widescreen Desktop / Tablets: cover fit
      if (imgRatio > canvasRatio) {
        fgWidth = canvasHeight * imgRatio;
        fgHeight = canvasHeight;
        fgOffsetX = (canvasWidth - fgWidth) / 2;
        fgOffsetY = 0;
      } else {
        fgWidth = canvasWidth;
        fgHeight = canvasWidth / imgRatio;
        fgOffsetX = 0;
        fgOffsetY = (canvasHeight - fgHeight) / 2;
      }
    }

    // Draw foreground car with subtle depth
    ctx.filter = 'brightness(0.98) contrast(1.06) saturate(1.05)';
    ctx.drawImage(img, fgOffsetX, fgOffsetY, fgWidth, fgHeight);
    ctx.restore();
  }, [getNearestLoadedFrame]);

  // Progressive Preloading
  useEffect(() => {
    let isCancelled = false;

    const registerImage = (idx: number, img: HTMLImageElement) => {
      if (isCancelled) return;
      imagesRef.current[idx] = img;
      loadedIndicesRef.current.add(idx);
      setLoadedCount((prev) => prev + 1);

      if (idx === 0) {
        setInitialReady(true);
        drawFrame(0);
      }
    };

    const loadImage = (idx: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current[idx] && loadedIndicesRef.current.has(idx)) {
          resolve();
          return;
        }
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        if (idx < 24) {
          img.fetchPriority = 'high';
        }
        img.src = getFramePath(idx);
        img.onload = () => {
          registerImage(idx, img);
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
      });
    };

    loadImage(0).then(() => {
      if (isCancelled) return;

      const keyframes: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i += 6) {
        if (i !== 0) keyframes.push(i);
      }

      const loadBatches = async () => {
        const batchSize = 6;
        for (let i = 0; i < keyframes.length; i += batchSize) {
          if (isCancelled) break;
          const batch = keyframes.slice(i, i + batchSize);
          await Promise.all(batch.map((idx) => loadImage(idx)));
        }

        const remaining: number[] = [];
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          if (!loadedIndicesRef.current.has(i)) {
            remaining.push(i);
          }
        }

        for (let i = 0; i < remaining.length; i += batchSize) {
          if (isCancelled) break;
          const batch = remaining.slice(i, i + batchSize);
          await Promise.all(batch.map((idx) => loadImage(idx)));
        }
      };

      loadBatches();
    });

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // Frame Index & Stage Sync
  useEffect(() => {
    let animId: number;

    const unsubscribe = frameIndexTransform.on('change', (latest) => {
      const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(latest)));
      setActiveFrame(idx);

      let stageIdx = 0;
      if (idx < 60) stageIdx = 0;
      else if (idx < 130) stageIdx = 1;
      else if (idx < 195) stageIdx = 2;
      else stageIdx = 3;

      setCurrentStageIndex(stageIdx);

      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        drawFrame(idx);
      });
    });

    return () => {
      unsubscribe();
      cancelAnimationFrame(animId);
    };
  }, [frameIndexTransform, drawFrame]);

  // Handle Resize and Orientation Change with high-DPI scaling
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = canvasContainerRef.current;
      if (!canvas || !container) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = container.clientWidth * dpr;
      canvas.height = container.clientHeight * dpr;
      drawFrame(activeFrame);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [drawFrame, activeFrame]);

  useEffect(() => {
    if (initialReady) {
      setTimeout(() => {
        const canvas = canvasRef.current;
        const container = canvasContainerRef.current;
        if (canvas && container) {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          canvas.width = container.clientWidth * dpr;
          canvas.height = container.clientHeight * dpr;
        }
        drawFrame(0);
      }, 50);
    }
  }, [initialReady, drawFrame]);

  const jumpToStage = (frameStart: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (frameStart / (TOTAL_FRAMES - 1)) * containerHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const currentStage = STAGES[currentStageIndex];
  const progressPercent = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
  const isFullyLoaded = loadedCount >= TOTAL_FRAMES;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360vh] md:h-[400vh] bg-[#020202] touch-pan-y"
    >
      {/* Initial Warmup Overlay */}
      <AnimatePresence>
        {!initialReady && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040406] text-white px-4"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center space-y-4 max-w-xs sm:max-w-sm w-full shadow-2xl">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-red-500/20 border-t-red-500 animate-spin" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-600/20 flex items-center justify-center">
                  <i className="fa-solid fa-car text-red-500 text-xs sm:text-sm animate-pulse" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-red-500 uppercase">
                  INITIALIZING SHOWCASE
                </div>
                <h3 className="font-display font-extrabold text-white text-base sm:text-lg tracking-wide uppercase">
                  Precision Engineering
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-400 font-mono">
                  Loading Interactive Assembly...
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Hero Showcase Frame */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-between select-none bg-[#020202]">
        
        {/* TOP HUD BAR: Ample top clearance (pt-24 sm:pt-28) ensuring 0 collision with the top navbar */}
        <header className="relative z-20 w-full max-w-[1600px] mx-auto px-3 sm:px-8 pt-24 sm:pt-28 pb-1 sm:pb-2 flex items-center justify-between pointer-events-auto shrink-0 gap-2">
          {/* Stage Switcher Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 glass px-1.5 sm:px-2.5 py-1 rounded-full border border-white/10 shadow-lg backdrop-blur-xl max-w-full overflow-x-auto no-scrollbar">
            {STAGES.map((stg, index) => {
              const isCurrent = currentStageIndex === index;
              return (
                <button
                  key={stg.id}
                  onClick={() => jumpToStage(stg.frameStart)}
                  aria-label={`Jump to ${stg.label} stage`}
                  className={`flex items-center gap-1 px-2.5 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap min-h-[28px] ${
                    isCurrent
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isCurrent ? 'bg-white animate-pulse' : 'bg-gray-500'}`} />
                  <span className="hidden xs:inline">{stg.label}</span>
                  <span className="xs:hidden">0{stg.id}</span>
                </button>
              );
            })}
          </div>

          {/* Live Telemetry & Frame Counter */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-xs font-mono glass px-2.5 sm:px-3 py-1 rounded-full border border-white/10 text-gray-400 shadow-lg backdrop-blur-xl shrink-0">
            <span className="inline-flex items-center gap-1 text-red-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              LIVE
            </span>
            <span className="text-white/20">|</span>
            <span className="text-white">
              <strong className="text-red-400">{String(activeFrame).padStart(3, '0')}</strong><span className="text-gray-500">/239</span>
            </span>
          </div>
        </header>

        {/* FULL BLEED CAR VIEWPORT (Dual-Layer: Atmospheric Background + Sharp Foreground Car) */}
        <div ref={canvasContainerRef} className="relative flex-1 w-full min-h-0 overflow-hidden flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
          />
          {/* Subtle Ambient Gradients on top/bottom edges of canvas */}
          <div className="absolute inset-x-0 top-0 h-12 sm:h-20 bg-gradient-to-b from-[#020202] via-[#020202]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-12 sm:h-20 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent pointer-events-none" />
        </div>

        {/* BOTTOM COCKPIT DOCK: POSITIONED UNDER THE CAR (With right padding so FAB does not overlap) */}
        <footer className="relative z-30 w-full bg-[#050508]/96 border-t border-white/10 backdrop-blur-2xl px-3 sm:px-8 py-2.5 sm:py-3.5 shadow-2xl shrink-0 pointer-events-auto pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-1.5 sm:gap-2.5">
            
            {/* Top Row inside Dock: Stage info + Live Metrics + CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-4 pr-14 sm:pr-0">
              
              {/* Stage Identity & Title */}
              <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStage.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col min-w-0"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[8px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border ${currentStage.tagColor}`}>
                        <i className={`fa-solid ${currentStage.badgeIcon} text-[8px]`} />
                        <span>{currentStage.tag}</span>
                      </span>
                      <span className="text-[9px] font-mono text-gray-500 hidden sm:inline">
                        • {Math.round((activeFrame / (TOTAL_FRAMES - 1)) * 100)}% ASSEMBLED
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <h2 className="font-display font-black text-sm sm:text-xl lg:text-2xl uppercase tracking-tight text-white whitespace-nowrap">
                        <span className="font-light text-gray-300 mr-1">{currentStage.titleLight}</span>
                        <span className="text-gradient-red">{currentStage.titleAccent}</span>
                      </h2>
                      <span className="hidden xl:inline text-xs text-gray-400 font-sans truncate max-w-sm">
                        {currentStage.shortDesc}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center Live Metrics (Tablet & Desktop) */}
              <div className="hidden md:flex items-center gap-2 shrink-0">
                {currentStage.metrics.map((m, i) => (
                  <div key={i} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-1.5">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">{m.label}:</span>
                    <span className={`text-[11px] font-mono font-bold ${m.color}`}>{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {currentStage.ctaType === 'action' ? (
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <motion.a
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 min-h-[36px] sm:min-h-[42px] rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-[10px] sm:text-xs font-bold font-mono uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all cursor-pointer whitespace-nowrap active:scale-95"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <i className="fa-brands fa-whatsapp text-sm" />
                      <span>Reserve</span>
                    </motion.a>

                    <motion.a
                      href="#inventory"
                      className="inline-flex items-center justify-center gap-1 px-3 sm:px-4 min-h-[36px] sm:min-h-[42px] rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white hover:border-red-500 transition-all cursor-pointer whitespace-nowrap active:scale-95"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span>Cars</span>
                      <i className="fa-solid fa-arrow-down text-red-500 text-[9px]" />
                    </motion.a>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-3">
                    <span className="text-[9px] sm:text-[11px] font-mono text-gray-400 flex items-center gap-1">
                      <i className="fa-solid fa-angles-down text-red-500 animate-bounce text-[8px] sm:text-[9px]" />
                      Scroll down
                    </span>
                    <button
                      onClick={() => jumpToStage(STAGES[Math.min(3, currentStageIndex + 1)].frameStart)}
                      aria-label="Next assembly phase"
                      className="text-[9px] sm:text-xs font-mono font-bold text-red-400 hover:text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-red-600/10 border border-red-500/20 hover:bg-red-600/20 transition-all cursor-pointer whitespace-nowrap active:scale-95"
                    >
                      Next &rarr;
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Row: Progress Gauge + Social Links */}
            <div className="flex items-center justify-between pt-1 border-t border-white/[0.07] text-[8px] sm:text-[10px] font-mono text-gray-400 pr-14 sm:pr-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-white font-bold tracking-wider uppercase text-[8px] sm:text-[9px]">PROGRESS</span>
                <div className="w-16 sm:w-32 h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-600 via-red-500 to-amber-400"
                    style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
                  />
                </div>
                <span className="text-white font-mono font-bold">
                  {Math.round((activeFrame / (TOTAL_FRAMES - 1)) * 100)}%
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                <span className="hidden sm:inline uppercase text-gray-500 text-[8px]">Connect:</span>
                <a
                  href="https://www.facebook.com/share/1Jq4RvinxM/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hover:text-white transition-colors p-1"
                >
                  <i className="fa-brands fa-facebook text-xs" />
                </a>
                <a
                  href="https://www.instagram.com/azytion"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors p-1"
                >
                  <i className="fa-brands fa-instagram text-xs" />
                </a>
                <a
                  href="https://www.tiktok.com/@azytion"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="hover:text-white transition-colors p-1"
                >
                  <i className="fa-brands fa-tiktok text-xs" />
                </a>
              </div>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}







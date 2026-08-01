import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, PhoneCall, ChevronDown, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroParallax({ onExplore }) {
  const heroPinRef = useRef(null);
  
  // Rotating Car Angles & Visual Layers
  const carSideRef = useRef(null);
  const carQuarterRef = useRef(null);
  const carEngineRef = useRef(null);

  // Dynamic Left Text Content Blocks
  const textStage1Ref = useRef(null);
  const textStage2Ref = useRef(null);
  const textStage3Ref = useRef(null);

  // Dynamic Floating Right Spec Panels
  const specPanel1Ref = useRef(null);
  const specPanel2Ref = useRef(null);
  const specPanel3Ref = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    let tl;

    if (!isMobile) {
      // 3-Stage Pinned Scroll Timeline for Desktop only
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroPinRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1
        }
      });

      // ==========================================
      // STAGE 1 -> STAGE 2 TRANSITION
      // ==========================================
      tl.to(textStage1Ref.current, { y: -50, opacity: 0, duration: 1 }, 0);
      tl.to(specPanel1Ref.current, { x: 50, opacity: 0, duration: 1 }, 0);
      tl.to(carSideRef.current, { scale: 0.82, opacity: 0, rotateY: -20, duration: 1.2 }, 0);

      tl.fromTo(carQuarterRef.current,
        { scale: 1.15, opacity: 0, rotateY: 25 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 1.4, ease: 'power2.out' },
        0.6
      );
      tl.fromTo(textStage2Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
        0.8
      );
      tl.fromTo(specPanel2Ref.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
        1.0
      );

      // ==========================================
      // STAGE 2 -> STAGE 3 TRANSITION
      // ==========================================
      tl.to(textStage2Ref.current, { y: -50, opacity: 0, duration: 1 }, 2.0);
      tl.to(specPanel2Ref.current, { x: 50, opacity: 0, duration: 1 }, 2.0);
      tl.to(carQuarterRef.current, { y: -80, scale: 0.85, opacity: 0, duration: 1.2 }, 2.0);

      tl.fromTo(carEngineRef.current,
        { scale: 1.25, opacity: 0, y: 100 },
        { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: 'power2.out' },
        2.5
      );
      tl.fromTo(textStage3Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
        2.7
      );
      tl.fromTo(specPanel3Ref.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
        2.9
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={heroPinRef} 
      id="hero" 
      className="relative min-h-screen lg:h-screen w-full bg-[#0b0c10] text-white overflow-hidden flex flex-col justify-between pt-24 lg:pt-20 pb-8 lg:pb-4 px-4 sm:px-8 lg:px-12 select-none"
    >
      
      {/* Hyper-Garage Dark Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-red-600/15 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      {/* MAIN HYPER GARAGE 3-COLUMN HERO CANVAS */}
      <div className="w-full max-w-7xl mx-auto my-auto relative z-20 flex-1 flex flex-col justify-between lg:grid lg:grid-cols-12 gap-4 lg:gap-8 items-center min-h-0 py-4 lg:py-2">
        
        {/* ==========================================
            LEFT COLUMN: DYNAMIC STAGE HEADLINES & TEXT
           ========================================== */}
        <div className="lg:col-span-4 relative w-full h-[28%] lg:h-72 flex flex-col justify-center">
          
          {/* STAGE 1 TEXT: Side Profile Overview */}
          <div ref={textStage1Ref} className="absolute inset-0 flex flex-col justify-center space-y-2 sm:space-y-3 transition-opacity">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full glass-panel border border-red-500/30 text-[9px] sm:text-[10px] font-bold text-red-400 uppercase tracking-widest w-fit">
              <Sparkles className="w-3 h-3" />
              <span>Flagship Showcase Model</span>
            </div>
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Suzuki <br />
              <span className="text-gradient-red">Wagon R FZ</span>
            </h1>
            <p className="text-[10px] sm:text-xs lg:text-sm text-gray-300 max-w-sm leading-snug lg:leading-relaxed">
              Sri Lanka's premier mild-hybrid hatchback with 30+ km/L efficiency, 100% verified Japanese auction sheet, and high-resale value.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <button
                onClick={onExplore}
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 font-bold sm:font-extrabold text-[10px] sm:text-xs text-white uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center gap-1.5 sm:gap-2"
              >
                <span>Explore Yard Stock</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* STAGE 2 TEXT: Open Doors & Ergonomic Design */}
          <div ref={textStage2Ref} className="absolute inset-0 flex flex-col justify-center space-y-2 sm:space-y-3 opacity-0 transition-opacity">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full glass-panel border border-red-500/30 text-[9px] sm:text-[10px] font-bold text-red-400 uppercase tracking-widest w-fit">
              <ShieldCheck className="w-3 h-3" />
              <span>Safety & Cabin Architecture</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Cabin & <br />
              <span className="text-gradient-red">Safety Design</span>
            </h2>
            <p className="text-[10px] sm:text-xs lg:text-sm text-gray-300 max-w-sm leading-snug lg:leading-relaxed">
              High-roof seating layout fitted with Head-Up Display (HUD), dual airbags, and Dual Sensor Brake Support (DSBS) collision mitigation.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <button
                onClick={onExplore}
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-white text-black font-bold sm:font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-xl"
              >
                <span>View Design Specs</span>
              </button>
            </div>
          </div>

          {/* STAGE 3 TEXT: Top Hybrid Engine Zoom */}
          <div ref={textStage3Ref} className="absolute inset-0 flex flex-col justify-center space-y-2 sm:space-y-3 opacity-0 transition-opacity">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full glass-panel border border-green-500/30 text-[9px] sm:text-[10px] font-bold text-green-400 uppercase tracking-widest w-fit">
              <Zap className="w-3 h-3" />
              <span>ISG Mild-Hybrid Power Core</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Hybrid <br />
              <span className="text-green-400">Power Core</span>
            </h2>
            <p className="text-[10px] sm:text-xs lg:text-sm text-gray-300 max-w-sm leading-snug lg:leading-relaxed">
              660cc Mild Hybrid ISG dual-battery system delivering unmatched fuel economy exceeding 30 km/L for daily Sri Lankan commuting.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20want%20to%20inquire%20about%20the%20Wagon%20R%20Hybrid%20Price."
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-green-600 hover:bg-green-500 font-bold sm:font-extrabold text-[10px] sm:text-xs text-white uppercase tracking-wider shadow-lg shadow-green-600/30 flex items-center gap-1.5 sm:gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>

        </div>

        {/* ==========================================
            CENTER COLUMN: TRANSFORMING 3D CAR CANVAS
           ========================================== */}
        <div className="lg:col-span-5 relative w-full h-[38%] lg:h-[380px] flex items-center justify-center">
          
          {/* CAR ANGLE 1: Side Profile View */}
          <div 
            ref={carSideRef}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-1 will-change-transform transition-opacity"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl bg-black/60">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
                alt="Suzuki Wagon R FZ Side View"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase font-bold block">FLAGSHIP EXHIBIT</span>
                  <span className="text-xl font-extrabold text-white">Pearl White Suzuki Wagon R FZ</span>
                </div>
              </div>
            </div>
          </div>

          {/* CAR ANGLE 2: Open Doors / Quarter Perspective */}
          <div 
            ref={carQuarterRef}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-1 opacity-0 will-change-transform transition-opacity"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border border-red-500/30 shadow-2xl bg-black/80">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
                alt="Suzuki Wagon R Cabin Ergonomics"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase font-bold block">DESIGN EXHIBIT</span>
                  <span className="text-xl font-extrabold text-white">Open Doors Ergonomic Seating</span>
                </div>
              </div>
            </div>
          </div>

          {/* CAR ANGLE 3: Top Engine Zoom Bay View */}
          <div 
            ref={carEngineRef}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-1 opacity-0 will-change-transform transition-opacity"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border border-green-500/40 shadow-2xl bg-black/90">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
                alt="Suzuki Wagon R Hybrid Engine Zoom"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-mono text-green-400 uppercase font-bold block">ENGINE BAY ZOOM</span>
                  <span className="text-xl font-extrabold text-white">660cc Mild Hybrid Power Core</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ==========================================
            RIGHT COLUMN: FLOATING SPECIFICATIONS PANELS
           ========================================== */}
        <div className="lg:col-span-3 relative w-full h-[24%] lg:h-72 flex flex-col justify-center">
          
          {/* SPEC PANEL 1 (Stage 1 Overlay) */}
          <div 
            ref={specPanel1Ref}
            className="absolute inset-0 glass-panel p-3 lg:p-5 rounded-2xl border border-white/10 bg-black/80 flex flex-col justify-between shadow-2xl backdrop-blur-md transition-opacity"
          >
            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase font-bold block">SHOWROOM TARGET PRICE</span>
              <span className="text-2xl font-black text-red-500 mt-1 block">Rs. 6,850,000</span>
            </div>

            <div className="space-y-2.5 border-t border-white/10 pt-3 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Auction Grade</span>
                <span className="font-extrabold text-green-400">4.5 / B Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Odometer</span>
                <span className="font-extrabold text-white">14,500 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Yard Location</span>
                <span className="font-extrabold text-red-400">Kurunegala Yard</span>
              </div>
            </div>
          </div>

          {/* SPEC PANEL 2 (Stage 2 Overlay) */}
          <div 
            ref={specPanel2Ref}
            className="absolute inset-0 glass-panel p-3 lg:p-5 rounded-2xl border border-red-500/40 bg-black/90 flex flex-col justify-between shadow-2xl opacity-0 backdrop-blur-md transition-opacity"
          >
            <div>
              <span className="text-[10px] font-mono text-red-400 uppercase font-bold block">SAFETY & CABIN TECH</span>
              <span className="text-xl font-black text-white mt-1 block">Collision Mitigation</span>
            </div>

            <ul className="text-xs space-y-2 text-gray-300 border-t border-white/10 pt-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>HUD (Head-Up Display)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Dual Sensor Brake Support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Heat-Seated Front Seats</span>
              </li>
            </ul>
          </div>

          {/* SPEC PANEL 3 (Stage 3 Overlay) */}
          <div 
            ref={specPanel3Ref}
            className="absolute inset-0 glass-panel p-3 lg:p-5 rounded-2xl border border-green-500/50 bg-black/95 flex flex-col justify-between shadow-2xl opacity-0 backdrop-blur-md transition-opacity"
          >
            <div>
              <span className="text-[10px] font-mono text-green-400 uppercase font-bold block">TECHNICAL BENCHMARK</span>
              <span className="text-3xl font-black text-white mt-1 block">30+ km/L</span>
              <span className="text-[10px] text-gray-400 block">Class-leading fuel economy</span>
            </div>

            <div className="space-y-2 text-xs border-t border-white/10 pt-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Displacement</span>
                <span className="font-extrabold text-white">658 cc</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transmission</span>
                <span className="font-extrabold text-white">Automatic CVT</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER SCROLL INDICATOR BAR */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto items-center justify-center gap-2 relative z-30 border-t border-white/10 pt-2 text-[11px] text-gray-400 font-mono">
        <span className="uppercase tracking-widest">
          SCROLL DOWN
        </span>
        <div className="flex items-center">
          <ChevronDown className="w-4 h-4 text-red-500 animate-bounce" />
        </div>
      </div>

    </section>
  );
}

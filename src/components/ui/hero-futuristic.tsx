'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mesh } from 'three';
import * as THREE from 'three';

const WIDTH = 300;
const HEIGHT = 300;

// Fallback for non-WebGPU browsers — a stunning CSS hero
function FallbackHero() {
  const titleWords = 'Drive Your Dreams'.split(' ');
  const subtitle = "Sri Lanka's Premier Japanese Import Dealer";
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const t = setTimeout(() => setVisibleWords((v) => v + 1), 500);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setSubtitleVisible(true), 600);
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleWords]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-8 text-center">
      <div className="text-4xl md:text-6xl xl:text-7xl font-extrabold uppercase tracking-tighter text-white">
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={i < visibleWords ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: i * 0.05 }}
              className="text-gradient-red"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {subtitleVisible && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="mt-4 text-base md:text-xl text-gray-300 font-semibold tracking-wide"
          >
            {subtitle}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple 3D scene with standard WebGL (wide browser support)
function Scene3D() {
  const meshRef = useRef<Mesh>(null);

  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1.8, 0.5, 200, 32), []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('hsl(0, 80%, 50%)'),
        metalness: 0.85,
        roughness: 0.15,
        wireframe: false,
      }),
    []
  );

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.22;
    meshRef.current.position.x = pointer.x * 0.5;
    meshRef.current.position.y = pointer.y * 0.3;
  });

  const [w, h] = useAspect(WIDTH, HEIGHT);
  const scale = Math.min(w, h) * 0.0018;

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="hsl(0, 80%, 60%)" />
      <pointLight position={[-5, -3, 3]} intensity={1} color="hsl(30, 90%, 60%)" />
      <directionalLight position={[0, 10, 5]} intensity={0.8} />
      <mesh ref={meshRef} geometry={geometry} material={material} scale={scale} />
    </>
  );
}

export function FuturisticHero() {
  const [mounted, setMounted] = useState(false);
  const titleWords = 'Drive Your Dreams'.split(' ');
  const subtitle = "Sri Lanka's Premier Japanese Import Dealer";
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (visibleWords < titleWords.length) {
      const t = setTimeout(() => setVisibleWords((v) => v + 1), 500);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setSubtitleVisible(true), 600);
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleWords, mounted]);

  if (!mounted) return null;

  return (
    <div className="relative h-svh w-full overflow-hidden bg-[#050505]">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full animate-pulse-glow"
          style={{
            width: 600, height: 600,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, hsl(0 80% 50% / 0.08), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 300, height: 300,
            top: '10%', right: '10%',
            background: 'radial-gradient(circle, hsl(38 90% 55% / 0.06), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Three.js Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-8 text-center">
        <div className="text-4xl md:text-6xl xl:text-7xl font-extrabold uppercase tracking-tighter text-white font-display">
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={i < visibleWords ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="text-gradient-red"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {subtitleVisible && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="mt-4 text-base md:text-xl text-gray-300 font-semibold tracking-wide max-w-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </AnimatePresence>

        {/* CTAs */}
        <AnimatePresence>
          {subtitleVisible && (
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            >
              <a
                href="#inventory"
                className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-600/40 transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>Explore Inventory</span>
                <i className="fa-solid fa-arrow-down" />
              </a>
              <a
                href="https://wa.me/94755331445"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-white/25 glass text-white font-bold text-sm uppercase tracking-wider transition-all hover:border-white/50 hover:scale-105 flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-green-400" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-500">Scroll to explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </motion.div>
    </div>
  );
}

export default FuturisticHero;

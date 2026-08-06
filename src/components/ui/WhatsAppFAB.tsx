'use client';

import { motion } from 'framer-motion';

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB!%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20stock."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-green-500 text-white font-extrabold shadow-2xl shadow-green-500/40 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.08, boxShadow: '0 20px 40px hsl(145 70% 45% / 0.5)' }}
      whileTap={{ scale: 0.96 }}
    >
      <div className="relative">
        <i className="fa-brands fa-whatsapp text-2xl" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full hidden sm:block animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
      </div>
      <span className="text-sm tracking-wide hidden sm:inline">Chat with Us</span>
    </motion.a>
  );
}

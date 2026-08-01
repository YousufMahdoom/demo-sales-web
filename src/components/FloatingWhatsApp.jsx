import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB!%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20Suzuki%20Wagon%20R%20stock.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-extrabold shadow-2xl shadow-green-500/50 transition-all duration-300 transform hover:scale-105 group"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
      </div>
      <span className="text-sm tracking-wide hidden sm:inline">
        Chat with Us
      </span>
    </a>
  );
}

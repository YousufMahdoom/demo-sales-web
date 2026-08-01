import React, { useState } from 'react';
import { X, Check, ShieldCheck, Fuel, Calendar, Gauge, MessageSquare, Phone, ChevronRight } from 'lucide-react';

export default function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) return null;

  const [activeImg, setActiveImg] = useState(vehicle.image);

  const whatsappMsg = encodeURIComponent(
    `Hello DEMO SALES WEB! I am reviewing the ${vehicle.title} (${vehicle.year}, ${vehicle.color}) on your website. I would like to schedule a inspection / request pricing details.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/15 bg-zinc-900/95 text-white shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
              <img
                src={activeImg}
                alt={vehicle.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail Selectors */}
            {vehicle.gallery && vehicle.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {vehicle.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(imgUrl)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImg === imgUrl ? 'border-red-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="glass-panel p-4 rounded-2xl border border-green-500/20 bg-green-500/5 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-green-400 block">100% Genuine Auction Sheet Guaranteed</span>
                <span className="text-gray-300">Verified mileage, original Japanese export documents provided on inspection.</span>
              </div>
            </div>
          </div>

          {/* Specs Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 uppercase tracking-widest mb-2">
                {vehicle.badge || vehicle.condition}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {vehicle.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {vehicle.description}
              </p>

              {/* Price Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Target Showroom Price</span>
                <span className="text-2xl font-extrabold text-gradient-red mt-0.5 block">
                  {vehicle.isPriceContact ? "Contact for Direct Quote" : vehicle.price}
                </span>
              </div>

              {/* Technical Specifications */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Vehicle Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="glass-panel p-2.5 rounded-xl">
                    <span className="text-gray-400 block">Year of Mfg</span>
                    <span className="font-bold text-white text-sm">{vehicle.year}</span>
                  </div>
                  <div className="glass-panel p-2.5 rounded-xl">
                    <span className="text-gray-400 block">Odometer</span>
                    <span className="font-bold text-white text-sm">{vehicle.mileage}</span>
                  </div>
                  <div className="glass-panel p-2.5 rounded-xl">
                    <span className="text-gray-400 block">Transmission</span>
                    <span className="font-bold text-white text-sm">{vehicle.transmission}</span>
                  </div>
                  <div className="glass-panel p-2.5 rounded-xl">
                    <span className="text-gray-400 block">Engine Capacity</span>
                    <span className="font-bold text-white text-sm">{vehicle.engine}</span>
                  </div>
                  <div className="glass-panel p-2.5 rounded-xl">
                    <span className="text-gray-400 block">Body Color</span>
                    <span className="font-bold text-white text-sm">{vehicle.color}</span>
                  </div>
                  <div className="glass-panel p-2.5 rounded-xl">
                    <span className="text-gray-400 block">Fuel System</span>
                    <span className="font-bold text-white text-sm">{vehicle.fuel}</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6 space-y-2">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Included Options & Safety</h4>
                <ul className="grid grid-cols-1 gap-1.5 text-xs text-gray-300">
                  {vehicle.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`https://wa.me/94755331445?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-600/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
              <a
                href="tel:0755331445"
                className="w-full py-3 rounded-xl glass-panel text-gray-200 hover:text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all border border-white/10"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call Showroom Sales</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

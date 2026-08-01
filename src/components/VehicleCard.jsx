import React from 'react';
import { Fuel, Gauge, Calendar, ShieldCheck, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function VehicleCard({ vehicle, onSelect }) {
  const whatsappMsg = encodeURIComponent(
    `Hello DEMO SALES WEB! I am interested in the ${vehicle.title} (${vehicle.year}). Please send me full pricing details and photos.`
  );

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 transform hover:-translate-y-1.5">
      <div>
        {/* Vehicle Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
          <img
            src={vehicle.image}
            alt={vehicle.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          />
          {/* Badge */}
          {vehicle.badge && (
            <div className="absolute top-2 left-2 glass-panel px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-red-400 border border-red-500/30 uppercase tracking-wider">
              {vehicle.badge}
            </div>
          )}
          {/* Condition tag */}
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded-md text-[9px] sm:text-xs font-semibold text-gray-200 border border-white/10">
            {vehicle.condition}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-sm sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
              {vehicle.title}
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 flex items-center gap-1.5 sm:gap-2">
              <span className="font-semibold text-gray-300">{vehicle.color}</span>
              <span>•</span>
              <span>{vehicle.engine}</span>
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 py-1.5 sm:py-2 border-y border-white/5">
            <div className="text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-white/5">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 mx-auto text-red-400 mb-1" />
              <span className="text-[9px] sm:text-[11px] text-gray-400 block">Year</span>
              <span className="text-[10px] sm:text-xs font-bold text-white">{vehicle.year}</span>
            </div>
            <div className="text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-white/5">
              <Gauge className="w-3 h-3 sm:w-3.5 sm:h-3.5 mx-auto text-red-400 mb-1" />
              <span className="text-[9px] sm:text-[11px] text-gray-400 block">Mileage</span>
              <span className="text-[10px] sm:text-xs font-bold text-white truncate block">{vehicle.mileage}</span>
            </div>
            <div className="text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-white/5">
              <Fuel className="w-3 h-3 sm:w-3.5 sm:h-3.5 mx-auto text-red-400 mb-1" />
              <span className="text-[9px] sm:text-[11px] text-gray-400 block">Fuel</span>
              <span className="text-[10px] sm:text-xs font-bold text-white truncate block px-1">{vehicle.fuel.split(' ')[0]}</span>
            </div>
          </div>

          {/* Key Feature Bullets */}
          <ul className="hidden sm:block space-y-1.5 pt-1">
            {vehicle.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer & Pricing */}
      <div className="p-3.5 sm:p-5 pt-0 space-y-2.5 sm:space-y-3">
        <div className="flex items-baseline justify-between pt-1.5 sm:pt-2 border-t border-white/5">
          <div>
            <span className="text-[9px] sm:text-[11px] text-gray-400 uppercase tracking-wider block">Price</span>
            <span className="text-sm sm:text-lg font-extrabold text-white">
              {vehicle.isPriceContact ? (
                <span className="text-red-400 text-xs sm:text-base">Contact for Best Price</span>
              ) : (
                vehicle.price
              )}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          <button
            onClick={() => onSelect(vehicle)}
            className="py-2 px-1.5 sm:py-2.5 sm:px-3 rounded-lg sm:rounded-xl glass-panel text-white hover:bg-white/10 text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 border border-white/10"
          >
            <span>Full Specs</span>
            <ArrowUpRight className="w-3 sm:w-3.5 sm:h-3.5" />
          </button>
          <a
            href={`https://wa.me/94755331445?text=${whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-1.5 sm:py-2.5 sm:px-3 rounded-lg sm:rounded-xl bg-green-600 hover:bg-green-500 text-white text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-lg shadow-green-600/20"
          >
            <MessageSquare className="w-3 sm:w-3.5 sm:h-3.5" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}

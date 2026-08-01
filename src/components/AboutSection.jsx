import React from 'react';
import { Shield, Award, Users, CheckCircle, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/vehicles';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">
              OUR HERITAGE & TRUST
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Kurunegala's Premier <span className="text-gradient-red">Automotive Destination</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Established with a passion for excellence, <strong className="text-white">DEMO SALES WEB</strong> has grown to become North Western Province's most trusted dealer for Suzuki Wagon R hybrids and Japanese vehicle imports.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We specialize in retail sales, vehicle trade-ins, and wholesale bulk supply to sub-dealers across Sri Lanka. Every vehicle in our yard undergoes a comprehensive 150-point technical check to ensure 100% peace of mind.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-4 rounded-2xl flex items-start gap-3 border border-white/5">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm">Verified Auction Sheets</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Original Japanese export documents & genuine mileage.</p>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-2xl flex items-start gap-3 border border-white/5">
                <Award className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm">Unmatched Pricing</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Direct import pricing without intermediary markups.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Showroom Image Spotlight */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000"
                  alt="DEMO SALES WEB Showroom"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel p-5 rounded-2xl border border-white/15 shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-extrabold text-white text-lg">
                    ★
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm block">Top Rated Dealer</span>
                    <span className="text-gray-400 text-xs">Kurunegala, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Customer Testimonials Grid */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">
              CLIENT TESTIMONIALS
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              What Our Customers Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic">"{t.comment}"</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="text-white font-bold text-sm block">{t.name}</span>
                  <span className="text-gray-400 text-xs">{t.location} • <strong className="text-red-400">{t.vehicle}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

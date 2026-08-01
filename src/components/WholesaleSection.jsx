import React from 'react';
import { Truck, ShieldCheck, FileCheck, PhoneCall, Building2 } from 'lucide-react';

export default function WholesaleSection() {
  return (
    <section id="wholesale" className="py-24 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wholesale Container Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-red-500/30 text-xs font-bold text-red-400 uppercase tracking-widest">
                <Truck className="w-3.5 h-3.5" />
                <span>B2B Wholesale & Bulk Supply</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Bulk Vehicle Supply for <span className="text-gradient-red">Dealers & Retailers</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Are you a car dealership, leasing agency, or fleet manager sourcing Suzuki Wagon R units or Japanese auction inventory in bulk? DEMO SALES WEB offers direct container shipments, wholesale pricing packages, and expedited clearance documentation.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="glass-panel p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                  <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs sm:text-sm">Clear Customs & Docs</h4>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 sm:mt-0 leading-normal">Complete import clearance paperwork ready for registration.</p>
                  </div>
                </div>

                <div className="glass-panel p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs sm:text-sm">Special Bulk Discounts</h4>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 sm:mt-0 leading-normal">Margin-friendly dealer rates for 3+ vehicle purchases.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/94755331445?text=Hello%20DEMO%20SALES%20WEB,%20I%20am%20a%20dealer%20inquiring%20about%20Wholesale%20Bulk%20Vehicle%20Prices."
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-green-600/30 flex items-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contact Wholesale Desk</span>
                </a>
              </div>
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
                  alt="Wholesale vehicle transport fleet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">DIRECT IMPORTER</span>
                    <span className="text-lg font-bold text-white">Full Container Load (FCL) Delivery Across Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

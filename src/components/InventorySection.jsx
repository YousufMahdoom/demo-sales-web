import React, { useState } from 'react';
import { VEHICLES_DATA } from '../data/vehicles';
import VehicleCard from './VehicleCard';
import VehicleModal from './VehicleModal';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';

export default function InventorySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVehicle, setActiveVehicle] = useState(null);

  const filteredVehicles = VEHICLES_DATA.filter((vehicle) => {
    const matchesCategory =
      selectedCategory === 'all' || vehicle.category === selectedCategory;
    const matchesSearch =
      vehicle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.engine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="inventory" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">
            AVAILABLE SHOWROOM STOCK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Explore Our <span className="text-gradient-red">Vehicle Collection</span>
          </h2>
          <p className="text-gray-400 text-base">
            Browse our latest Suzuki Wagon R models (FX, FZ, Stingray) and premium Japanese imports ready for immediate delivery in Kurunegala.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-12 glass-panel p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Vehicles ({VEHICLES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('wagonr')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === 'wagonr'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Suzuki Wagon R ({VEHICLES_DATA.filter((v) => v.category === 'wagonr').length})
            </button>
            <button
              onClick={() => setSelectedCategory('other')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === 'other'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Other Japanese Imports ({VEHICLES_DATA.filter((v) => v.category === 'other').length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model, color..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

        </div>

        {/* Vehicles Grid */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelect={(v) => setActiveVehicle(v)}
            />
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-3xl mt-8 border border-white/5">
            <p className="text-gray-400 text-lg font-medium">No vehicles matching your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-xl bg-red-600 text-white font-bold text-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <VehicleModal
        vehicle={activeVehicle}
        onClose={() => setActiveVehicle(null)}
      />
    </section>
  );
}

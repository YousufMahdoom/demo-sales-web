import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/vehicles';
import { Maximize2, X } from 'lucide-react';

export default function GallerySection() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">
            VISUAL SHOWCASE & DELIVERIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Photo & Media <span className="text-gradient-red">Gallery</span>
          </h2>
          <p className="text-gray-400 text-base">
            Take a look inside our Kurunegala showroom, recent vehicle handovers, and Japanese import arrivals.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-6">
                <span className="self-end p-1.5 sm:p-2 rounded-full glass-panel text-white">
                  <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-lg font-bold text-white mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full glass-panel rounded-3xl border border-white/10 overflow-hidden text-white p-4">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full glass-panel text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black">
              <img src={activePhoto.image} alt={activePhoto.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">{activePhoto.category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{activePhoto.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

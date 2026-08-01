import React, { useState } from 'react';
import { RefreshCw, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function SellTradeSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleModel: '',
    year: '',
    mileage: '',
    askingPrice: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappMessage = encodeURIComponent(
      `Hello DEMO SALES WEB! I want to Sell / Trade-in my vehicle:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Vehicle: ${formData.vehicleModel} (${formData.year})\n` +
      `• Mileage: ${formData.mileage} km\n` +
      `• Expected Valuation: ${formData.askingPrice}\n` +
      `• Notes: ${formData.notes}`
    );

    window.open(`https://wa.me/94755331445?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="sell-trade" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">
              EASY VEHICLE TRADE-IN & DIRECT PURCHASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Sell or Trade-In <span className="text-gradient-red">Your Vehicle</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Looking to upgrade to a new Suzuki Wagon R FX or FZ? We offer top market valuations and hassle-free instant settlements for your current car in Kurunegala.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 pt-2">
              <div className="flex items-start gap-3 glass-panel p-3.5 rounded-xl lg:bg-transparent lg:p-0 lg:border-none lg:rounded-none">
                <div className="w-8 h-8 rounded-xl bg-red-600/20 border border-red-500/30 text-red-500 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Submit Vehicle Details</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Fill out the valuation form with model, year, and mileage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 glass-panel p-3.5 rounded-xl lg:bg-transparent lg:p-0 lg:border-none lg:rounded-none">
                <div className="w-8 h-8 rounded-xl bg-red-600/20 border border-red-500/30 text-red-500 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Instant Valuation</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Bring your vehicle to our showroom or request remote estimation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 glass-panel p-3.5 rounded-xl lg:bg-transparent lg:p-0 lg:border-none lg:rounded-none">
                <div className="w-8 h-8 rounded-xl bg-red-600/20 border border-red-500/30 text-red-500 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Instant Settlement</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Get paid on the spot or apply full value towards your new Wagon R.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Valuation Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Free Vehicle Valuation Quote</h3>
                  <p className="text-gray-400 text-xs">Receive direct offer from DEMO SALES WEB</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto" />
                  <h4 className="text-2xl font-bold text-white">Valuation Request Sent!</h4>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    We have redirected your details to our WhatsApp team. You can also visit our showroom in Kurunegala.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs uppercase"
                  >
                    Submit Another Vehicle
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ruwan Perera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="0755331445"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1">Vehicle Make & Model</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Toyota Vitz / Wagon R"
                        value={formData.vehicleModel}
                        onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1">Manufacture Year</label>
                      <input
                        type="number"
                        required
                        placeholder="e.g. 2018"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1">Mileage (km)</label>
                      <input
                        type="text"
                        placeholder="e.g. 45,000 km"
                        value={formData.mileage}
                        onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Expected Price (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Rs. 5,500,000"
                      value={formData.askingPrice}
                      onChange={(e) => setFormData({ ...formData, askingPrice: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Additional Details / Options</label>
                    <textarea
                      rows={3}
                      placeholder="Condition, registration status, color..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Valuation Inquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Share2, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    const text = encodeURIComponent(
      `Hello DEMO SALES WEB!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/94755331445?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">
            GET IN TOUCH WITH US
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Visit Our <span className="text-gradient-red">Showroom in Kurunegala</span>
          </h2>
          <p className="text-gray-400 text-base">
            Have questions about our Suzuki Wagon R inventory or want to schedule a test drive? Contact our team directly or stop by our location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Showroom Address</h4>
                    <p className="text-gray-300 text-xs mt-0.5 leading-relaxed">
                      DEMO SALES WEB, Dambulla Road / Colombo Road, Kurunegala, North Western Province, Sri Lanka.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Phone Numbers</h4>
                    <p className="text-gray-300 text-xs mt-0.5">
                      <a href="tel:0755331445" className="hover:text-red-400 transition-colors">0755331445</a> / <a href="tel:+94755331445" className="hover:text-red-400 transition-colors">+94755331445</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-600/20 text-green-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">WhatsApp Business</h4>
                    <p className="text-gray-300 text-xs mt-0.5">
                      <a href="https://wa.me/94755331445" target="_blank" rel="noreferrer" className="text-green-400 hover:underline">
                        0755331445 (Instant Chat)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Opening Hours</h4>
                    <p className="text-gray-300 text-xs mt-0.5">
                      Monday – Saturday: 8:30 AM – 6:00 PM <br />
                      Sunday: 9:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/1Jq4RvinxM/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-gray-300 hover:text-white hover:border-blue-500/40 text-xs font-semibold transition-all"
                  >
                    <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/azytion?igsh=MWpodXVzcW1rczBqeg=="
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-gray-300 hover:text-white hover:border-pink-500/40 text-xs font-semibold transition-all"
                  >
                    <svg className="w-4 h-4 text-pink-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@azytion?_r=1&_t=ZS-98Vb3lAT3KP"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-gray-300 hover:text-white hover:border-purple-500/40 text-xs font-semibold transition-all"
                  >
                    <svg className="w-4 h-4 text-teal-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.05 1.12.97 2.62 1.48 4.11 1.58V9.52c-1.57-.17-3.08-.85-4.22-1.96-.06-.06-.11-.12-.17-.18-.01.55-.01 1.11-.01 1.66v6.1c.07 2.05-1.01 4.05-2.8 5.05-1.95 1.14-4.5.95-6.27-.47-1.9-1.47-2.61-4.08-1.74-6.32.74-1.95 2.76-3.26 4.86-3.25.75-.01 1.49.15 2.19.46v4.06c-.66-.34-1.42-.48-2.15-.36-1.12.15-2.05.99-2.31 2.09-.37 1.4.45 2.91 1.84 3.33 1.25.4 2.69-.17 3.23-1.32.14-.3.2-.62.21-.95V.02h.02z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Contact Form */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Send an Inquiry</h3>

              {sent ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-gray-300 text-xs">Our team will respond on WhatsApp shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-300 font-semibold block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-300 font-semibold block mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="0755331445"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 font-semibold block mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 font-semibold block mb-1">Message / Vehicle Inquiry</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us which vehicle you are interested in..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Showroom</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="aspect-[16/9] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-xl">
              <iframe
                title="DEMO SALES WEB Location Map Kurunegala"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63301.76189912781!2d80.328325!3d7.486307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a1e74f17789%3A0xb23ed01a88b50f7e!2sKurunegala%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

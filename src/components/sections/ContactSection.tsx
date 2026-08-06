'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, FormEvent, useState } from 'react';

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello DEMO SALES WEB!%0A%0AName: ${formState.name}%0APhone: ${formState.phone}%0AEmail: ${formState.email}%0AMessage: ${formState.message}`;
    window.open(`https://wa.me/94755331445?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative z-10 bg-black/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
        >
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-mono">
            GET IN TOUCH WITH US
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Visit Our <span className="text-gradient-red">Showroom in Kurunegala</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Have questions about our inventory or want to schedule a test drive? Contact our team
            directly or stop by our location.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info Column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_QUART }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">Contact Information</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: 'fa-location-dot',
                    color: 'bg-red-600/20 text-red-500',
                    title: 'Showroom Address',
                    content: 'DEMO SALES WEB, Dambulla Road / Colombo Road, Kurunegala, North Western Province, Sri Lanka.',
                  },
                  {
                    icon: 'fa-phone',
                    color: 'bg-red-600/20 text-red-500',
                    title: 'Phone Numbers',
                    content: '0755331445 / +94755331445',
                    link: 'tel:0755331445',
                  },
                  {
                    icon: 'fa-brands fa-whatsapp',
                    color: 'bg-green-600/20 text-green-400',
                    title: 'WhatsApp Business',
                    content: '0755331445 (Instant Chat)',
                    link: 'https://wa.me/94755331445',
                  },
                  {
                    icon: 'fa-regular fa-clock',
                    color: 'bg-red-600/20 text-red-500',
                    title: 'Opening Hours',
                    content: 'Mon–Sat: 8:30 AM – 6:00 PM\nSunday: 9:00 AM – 2:00 PM',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: EASE_OUT_QUART }}
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <i className={`${item.icon}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-300 text-xs mt-0.5 hover:text-red-400 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-xs mt-0.5 whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                  {[
                    { href: 'https://www.facebook.com/share/1Jq4RvinxM/', icon: 'fa-brands fa-facebook', label: 'Facebook', color: 'text-blue-500' },
                    { href: 'https://www.instagram.com/azytion', icon: 'fa-brands fa-instagram', label: 'Instagram', color: 'text-pink-500' },
                    { href: 'https://www.tiktok.com/@azytion', icon: 'fa-brands fa-tiktok', label: 'TikTok', color: 'text-teal-400' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-gray-300 hover:text-white text-xs font-semibold transition-all duration-300 hover:border-white/20"
                    >
                      <i className={`${s.icon} ${s.color} text-base`} />
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_QUART }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-300 font-semibold block mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="John Doe"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-300 font-semibold block mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                      placeholder="0755331445"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-300 font-semibold block mb-1.5">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="name@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-300 font-semibold block mb-1.5">Message / Vehicle Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell us which vehicle you are interested in..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full min-h-[52px] rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all duration-300"
                  whileHover={{ scale: 1.01, boxShadow: '0 16px 32px hsl(0 80% 50% / 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? (
                    <>
                      <i className="fa-solid fa-check" />
                      <span>Sent! Redirecting to WhatsApp…</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-brands fa-whatsapp text-lg" />
                      <span>Send Inquiry via WhatsApp</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Map Embed */}
            <div className="aspect-[16/9] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6374!2d80.3625!3d7.4862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33ed7a9d7c6fb%3A0x5d4a9b1f!2sKurunegala%2C+Sri+Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DEMO SALES WEB Showroom Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

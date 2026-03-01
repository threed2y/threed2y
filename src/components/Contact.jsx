import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative" style={{ background: 'linear-gradient(180deg, #0d0b08 0%, #100e0b 100%)' }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.025]"
        style={{ fontSize: '25rem', fontFamily: '"Shippori Mincho"', fontWeight: 800, color: '#c9a84c', lineHeight: 1 }}
      >縁</div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-blood" />
            <span className="chapter-label">Final Chapter — Connection</span>
          </div>
          <h2 className="brush-heading text-5xl md:text-6xl">
            Let's<br />
            <span className="text-gold">Connect</span>
          </h2>
          <p className="font-display text-xs text-sumi-500 tracking-[0.3em] mt-2">縁 — En (Fate / Connection)</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-body text-lg text-ash italic leading-relaxed mb-10 border-l-2 border-blood/50 pl-5">
              "Every great journey begins with a single message. I am actively seeking internships,
              collaborations, and full-time roles in data science and analytics."
            </p>

            <div className="space-y-5">
              {[
                { Icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                { Icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
                { Icon: MapPin, label: personal.location, href: null },
                { Icon: Github, label: 'github.com/threed2y', href: personal.github },
              ].map(({ Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(139,26,26,0.3)', background: 'rgba(139,26,26,0.06)' }}
                  >
                    <Icon size={15} className="text-blood" />
                  </div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="font-body text-sm text-ash hover:text-rice-100 transition-colors group-hover:text-rice-100"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="font-body text-sm text-ash">{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="ink-btn text-sm">GitHub ↗</a>
              <a href={personal.huggingface} target="_blank" rel="noopener noreferrer" className="ink-btn text-sm">HuggingFace ↗</a>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={e => { e.preventDefault(); window.location.href = `mailto:${personal.email}`; }}
              className="ink-card panel-border p-7 space-y-5"
              style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-blood group-hover:w-full transition-all duration-700" />

              {[
                { id: 'name', label: '名前 — Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'メール — Email', type: 'email', placeholder: 'you@example.com' },
              ].map(f => (
                <div key={f.id}>
                  <label className="chapter-label block mb-2">{f.label}</label>
                  <input type={f.type} required
                    className="w-full bg-sumi-800 px-4 py-3 text-sm font-body text-rice-100 placeholder-sumi-400 focus:outline-none transition-colors"
                    style={{ border: '1px solid rgba(94,80,72,0.4)' }}
                    placeholder={f.placeholder}
                    onFocus={e => e.target.style.borderColor = 'rgba(139,26,26,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(94,80,72,0.4)'}
                  />
                </div>
              ))}

              <div>
                <label className="chapter-label block mb-2">言葉 — Message</label>
                <textarea rows={4} required
                  className="w-full bg-sumi-800 px-4 py-3 text-sm font-body text-rice-100 placeholder-sumi-400 focus:outline-none resize-none transition-colors"
                  style={{ border: '1px solid rgba(94,80,72,0.4)' }}
                  placeholder="What's on your mind?"
                  onFocus={e => e.target.style.borderColor = 'rgba(139,26,26,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(94,80,72,0.4)'}
                />
              </div>

              <button type="submit" className="ink-btn-blood w-full text-sm font-display tracking-widest">
                SEND MESSAGE — 送信
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-paper-100 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 halftone-red rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="chapter-divider mb-4">
            <span className="panel-red px-4 py-1.5">
              <span className="manga-title text-white text-lg">FINAL CHAPTER</span>
            </span>
          </div>
          <div className="flex items-end gap-4 flex-wrap">
            <h2 className="manga-title text-[clamp(3rem,8vw,5rem)] text-ink-900 leading-none">CONNECT</h2>
            <span className="sfx text-6xl text-ink-900/10 mb-2">WHOOSH!</span>
          </div>
          <div className="manga-caption text-ink-500 mt-1">Let's work together — 一緒に働こう</div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

            {/* Thought bubble text */}
            <div className="thought-bubble p-5 mb-6">
              <p className="font-body italic text-ink-700 leading-relaxed text-base">
                "Every great story starts with a single panel. I'm actively seeking internships,
                collaborations, and full-time roles in data science."
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ink-900" />
                <span className="w-1.5 h-1.5 rounded-full bg-ink-600" />
                <span className="w-1 h-1 rounded-full bg-ink-400" />
              </div>
            </div>

            {/* Contact info panels */}
            <div className="space-y-2">
              {[
                { Icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                { Icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
                { Icon: MapPin, label: personal.location, href: null },
                { Icon: Github, label: 'github.com/threed2y', href: personal.github },
              ].map(({ Icon, label, href }) => (
                <div key={label} className="panel flex items-center gap-3 px-4 py-3 group hover:border-red-manga transition-colors">
                  <div className="w-8 h-8 bg-ink-900 flex items-center justify-center flex-shrink-0 group-hover:bg-red-manga transition-colors">
                    <Icon size={14} color="white" />
                  </div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="font-mono text-xs text-ink-700 hover:text-red-manga transition-colors"
                    >{label}</a>
                  ) : (
                    <span className="font-mono text-xs text-ink-700">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={e => { e.preventDefault(); window.location.href = `mailto:${personal.email}`; }}
              className="panel-thick bg-white p-6 space-y-4"
            >
              {[
                { id: 'name', label: 'YOUR NAME', type: 'text', placeholder: 'e.g. Miyamoto Musashi' },
                { id: 'email', label: 'YOUR EMAIL', type: 'email', placeholder: 'you@example.com' },
              ].map(f => (
                <div key={f.id}>
                  <label className="manga-caption block mb-1.5">{f.label}</label>
                  <input type={f.type} required placeholder={f.placeholder}
                    className="w-full border-[2px] border-ink-900 bg-paper-100 px-3 py-2.5 font-body text-sm text-ink-900 placeholder-ink-400 transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="manga-caption block mb-1.5">YOUR MESSAGE</label>
                <textarea rows={4} required placeholder="What's on your mind?"
                  className="w-full border-[2px] border-ink-900 bg-paper-100 px-3 py-2.5 font-body text-sm text-ink-900 placeholder-ink-400 resize-none transition-all"
                />
              </div>

              <button type="submit" className="btn-manga w-full text-base tracking-widest">
                SEND IT! 送信
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

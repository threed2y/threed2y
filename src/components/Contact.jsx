import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#fafaf8' }}>
      <div className="halftone-red absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
        style={{ transform: 'translate(-30%, 30%)' }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="chapter-divider mb-4">
            <span className="panel-red px-4 py-1.5">
              <span className="manga-title text-white text-lg">FINAL CHAPTER</span>
            </span>
          </div>
          <div className="flex items-end flex-wrap gap-2">
            <h2 className="manga-title leading-none" style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)' }}>CONNECT</h2>
            <span className="sfx mb-1" style={{ fontSize: '4rem', opacity: 0.08 }}>WHOOSH!</span>
          </div>
          <div className="manga-caption mt-1">Let's work together — 一緒に働こう</div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="thought-bubble p-5 mb-6">
              <p className="font-serif text-base text-ink-500 italic leading-relaxed">
                "Every great story starts with a single panel. I'm actively seeking internships,
                collaborations, and full-time roles in data science."
              </p>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-2 h-2 rounded-full bg-ink-900 inline-block" />
                <span className="w-1.5 h-1.5 rounded-full bg-ink-400 inline-block" />
                <span className="w-1 h-1 rounded-full bg-ink-300 inline-block" />
              </div>
            </div>

            <div className="space-y-2">
              {[
                { Icon: Mail,   label: personal.email,            href: 'mailto:' + personal.email },
                { Icon: Phone,  label: personal.phone,            href: 'tel:' + personal.phone },
                { Icon: MapPin, label: personal.location,         href: null },
                { Icon: Github, label: 'github.com/threed2y',     href: personal.github },
              ].map(({ Icon, label, href }) => (
                <div key={label} className="panel flex items-center gap-3 px-4 py-3 group hover:border-red-manga transition-colors">
                  <div className="w-8 h-8 bg-ink-900 flex items-center justify-center flex-shrink-0 group-hover:bg-red-manga transition-colors">
                    <Icon size={14} color="white" />
                  </div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="font-mono text-xs text-ink-500 hover:text-red-manga transition-colors no-underline"
                    >{label}</a>
                  ) : (
                    <span className="font-mono text-xs text-ink-500">{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-manga-outline text-sm">GitHub ↗</a>
              <a href={personal.huggingface} target="_blank" rel="noopener noreferrer" className="btn-manga-outline text-sm">HuggingFace ↗</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form
              onSubmit={e => { e.preventDefault(); window.location.href = 'mailto:' + personal.email; }}
              className="panel-thick bg-white p-6 space-y-4"
            >
              {[
                { id: 'name',  label: 'YOUR NAME',  type: 'text',  placeholder: 'e.g. Miyamoto Musashi' },
                { id: 'email', label: 'YOUR EMAIL', type: 'email', placeholder: 'you@example.com' },
              ].map(f => (
                <div key={f.id}>
                  <label className="manga-caption block mb-1.5">{f.label}</label>
                  <input type={f.type} required placeholder={f.placeholder}
                    className="w-full px-3 py-2.5 font-body text-sm text-ink-900 placeholder-ink-400 bg-paper-200 transition-all"
                    style={{ border: '2px solid #0a0806' }}
                  />
                </div>
              ))}
              <div>
                <label className="manga-caption block mb-1.5">YOUR MESSAGE</label>
                <textarea rows={4} required placeholder="What's on your mind?"
                  className="w-full px-3 py-2.5 font-body text-sm text-ink-900 placeholder-ink-400 bg-paper-200 resize-none transition-all"
                  style={{ border: '2px solid #0a0806' }}
                />
              </div>
              <button type="submit" className="btn-manga w-full tracking-widest">
                SEND IT! 送信
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

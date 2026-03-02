import { motion } from 'framer-motion';
import { personal } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-paper-100 overflow-hidden pt-14">

      <div className="halftone absolute inset-0 pointer-events-none" />
      <div className="absolute top-14 left-0 right-0 h-1 bg-ink-900" />
      <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-red-manga opacity-60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-rows-[auto_1fr_auto] gap-5 min-h-[calc(100vh-56px)]">

        {/* Chapter banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="panel-red flex items-center justify-between px-5 py-2"
        >
          <span className="font-mono text-xs text-white/70 tracking-widest hidden sm:block">CHAPTER 001</span>
          <span className="manga-title text-white text-lg">ORIGIN STORY</span>
          <span className="font-mono text-xs text-white/70 tracking-widest hidden sm:block">DATA SCIENTIST</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

          {/* Name panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 panel-thick relative flex flex-col justify-between p-6 sm:p-8 min-h-72"
            style={{ background: '#0a0806' }}
          >
            <div className="speed-lines absolute inset-0 opacity-40" />
            <div
              className="absolute top-0 right-0 w-16 h-16"
              style={{ background: '#cc1a1a', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            />
            <div className="relative z-10">
              <div className="manga-caption mb-4" style={{ color: 'rgba(232,228,220,0.5)' }}>// INTRODUCING</div>
              <h1 className="manga-title-outline" style={{ fontSize: 'clamp(4rem, 11vw, 7.5rem)' }}>RUPESH</h1>
              <h1 className="manga-title text-red-manga" style={{ fontSize: 'clamp(4rem, 11vw, 7.5rem)' }}>PANDEY</h1>
              <p className="font-body text-paper-200 text-base leading-relaxed max-w-sm italic mt-4">
                "{personal.bio}"
              </p>
            </div>
            <div className="relative z-10 flex justify-end mt-4">
              <span className="sfx-red text-5xl opacity-50">DATA!</span>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="panel-thick stripe-bg p-5"
            >
              <div className="manga-caption mb-3">STATUS PANEL</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: '6+', label: 'PROJECTS' },
                  { stat: '8',  label: 'REPOS' },
                  { stat: '1',  label: 'INTERNSHIP' },
                  { stat: '6.58', label: 'GPA' },
                ].map(s => (
                  <div key={s.label} className="panel p-3 text-center">
                    <div className="manga-title text-4xl text-red-manga">{s.stat}</div>
                    <div className="manga-caption mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="thought-bubble p-5 flex-1"
            >
              <div className="manga-caption mb-2">INNER MONOLOGUE</div>
              <p className="font-serif text-base text-ink-500 italic leading-relaxed">
                "The path of mastery is forged through data, one model at a time..."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-ink-900 inline-block" />
                <span className="w-1.5 h-1.5 rounded-full bg-ink-500 inline-block" />
                <span className="w-1 h-1 rounded-full bg-ink-300 inline-block" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
              className="panel flex items-center justify-between px-4 py-3"
              style={{ background: '#fde8e8', borderColor: '#cc1a1a' }}
            >
              <span className="manga-caption" style={{ color: '#cc1a1a' }}>LOCATION</span>
              <span className="font-mono text-xs text-ink-600">Vadodara, Gujarat 🇮🇳</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-manga animate-pulse" />
                <span className="manga-caption" style={{ color: '#cc1a1a' }}>OPEN</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="panel-thick flex flex-wrap gap-3 items-center justify-between p-4"
          style={{ background: '#f2f0eb' }}
        >
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-manga">VIEW MY WORK</a>
            <a href={`mailto:${personal.email}`} className="btn-manga-outline">GET IN TOUCH</a>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="ink-tag">GitHub ↗</a>
            <a href={personal.huggingface} target="_blank" rel="noopener noreferrer" className="ink-tag">HuggingFace ↗</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-ink-900" />
    </section>
  );
}

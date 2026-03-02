import { motion } from 'framer-motion';
import { personal } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-paper-100 overflow-hidden pt-14">

      {/* Full page halftone bg */}
      <div className="absolute inset-0 halftone pointer-events-none" />

      {/* Top-left decorative panel lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-ink-900" />
      <div className="absolute top-1 left-0 w-full h-[2px] bg-red-manga opacity-60" />

      {/* Main manga panel grid layout */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 min-h-[calc(100vh-56px)] grid grid-rows-[auto_1fr_auto] py-8 gap-6">

        {/* ── ROW 1: Chapter banner ── */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="panel-red px-5 py-2 flex items-center justify-between"
        >
          <span className="font-mono text-xs text-white/80 tracking-[0.3em]">CHAPTER 001</span>
          <span className="manga-title text-white text-lg">ORIGIN STORY</span>
          <span className="font-mono text-xs text-white/80 tracking-[0.3em]">DATA SCIENTIST</span>
        </motion.div>

        {/* ── ROW 2: Main panels ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

          {/* BIG name panel — takes 7 cols */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 panel-thick relative flex flex-col justify-between p-6 sm:p-8 min-h-[320px] lg:min-h-0"
            style={{ background: '#0a0806' }}
          >
            {/* Speed lines decoration */}
            <div className="absolute inset-0 speed-lines opacity-30" />

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16"
              style={{ background: '#cc1a1a', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            />

            <div className="relative z-10">
              <div className="manga-caption text-paper-300/60 mb-4">// INTRODUCING</div>
              <h1 className="manga-title-outline text-[clamp(4rem,12vw,8rem)] leading-none mb-2">
                RUPESH
              </h1>
              <h1 className="manga-title text-[clamp(4rem,12vw,8rem)] leading-none text-red-manga mb-6">
                PANDEY
              </h1>
              <p className="font-body text-paper-200 text-base sm:text-lg leading-relaxed max-w-sm italic">
                "{personal.bio}"
              </p>
            </div>

            {/* SFX bottom right */}
            <div className="relative z-10 flex justify-end mt-6">
              <span className="sfx-red text-5xl opacity-60">DATA!</span>
            </div>
          </motion.div>

          {/* Right column — stacked panels */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Status panel */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="panel-thick p-5 stripe-bg relative"
            >
              <div className="manga-caption mb-3">STATUS PANEL</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: '6+', label: 'PROJECTS' },
                  { stat: '8', label: 'REPOS' },
                  { stat: '1', label: 'INTERNSHIP' },
                  { stat: '6.58', label: 'GPA' },
                ].map(s => (
                  <div key={s.label} className="panel p-3 text-center">
                    <div className="manga-title text-4xl text-red-manga">{s.stat}</div>
                    <div className="manga-caption text-ink-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote thought bubble */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="thought-bubble p-5 flex-1"
            >
              <div className="manga-caption mb-2">INNER MONOLOGUE</div>
              <p className="font-serif text-base text-ink-800 italic leading-relaxed">
                "The path of mastery is forged through data, one model at a time..."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ink-900 inline-block" />
                <span className="w-1.5 h-1.5 rounded-full bg-ink-900/60 inline-block" />
                <span className="w-1 h-1 rounded-full bg-ink-900/30 inline-block" />
              </div>
            </motion.div>

            {/* Location badge */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
              className="panel flex items-center justify-between px-4 py-3"
              style={{ background: '#fde8e8', borderColor: '#cc1a1a' }}
            >
              <span className="manga-caption text-red-manga">LOCATION</span>
              <span className="font-mono text-xs text-ink-800">Vadodara, Gujarat 🇮🇳</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-manga animate-pulse" />
                <span className="manga-caption text-red-manga">AVAILABLE</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── ROW 3: CTA bar ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="panel-thick p-4 flex flex-wrap gap-3 items-center justify-between"
          style={{ background: '#f2f0eb' }}
        >
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-manga">VIEW MY WORK</a>
            <a href={`mailto:${personal.email}`} className="btn-manga-outline">GET IN TOUCH</a>
          </div>
          <div className="flex gap-2 flex-wrap">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="ink-tag hover:bg-ink-900 hover:text-paper-50 transition-colors cursor-pointer"
            >GitHub ↗</a>
            <a href={personal.huggingface} target="_blank" rel="noopener noreferrer"
              className="ink-tag hover:bg-ink-900 hover:text-paper-50 transition-colors cursor-pointer"
            >HuggingFace ↗</a>
          </div>
        </motion.div>

      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-ink-900" />
    </section>
  );


import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data';

const quotes = [
  { text: "The path of mastery is forged in silence.", jp: "道は沈黙の中で鍛えられる" },
  { text: "Data does not lie. Only those who read it carelessly.", jp: "データは嘘をつかない" },
  { text: "A single model, perfectly trained, defeats a thousand assumptions.", jp: "完璧なモデルは千の仮定を破る" },
];

export default function Hero() {
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setQuoteIdx(i => (i + 1) % quotes.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background texture layers */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #c9a84c 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #c9a84c 0px, transparent 1px, transparent 60px)',
        }}
      />

      {/* Large ink wash background character */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontSize: 'clamp(200px, 35vw, 500px)',
          fontFamily: '"Shippori Mincho", serif',
          fontWeight: 800,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(94,80,72,0.12)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        武
      </div>

      {/* Blood splatter accent — top right */}
      <div className="absolute top-20 right-1/3 w-64 h-64 rounded-full bg-blood/5 blur-[80px] pointer-events-none animate-flicker" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-blood/4 blur-[60px] pointer-events-none" />

      {/* Vertical JP text — far left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 opacity-30">
        <span className="jp-accent">データ科学者</span>
        <div className="w-px h-20 bg-sumi-500" />
        <span className="jp-accent">統計学</span>
      </div>

      {/* Main content — offset left like a manga panel */}
      <div className="relative max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center pt-20">

        {/* Left: Text */}
        <div>
          {/* Chapter label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-blood" />
            <span className="chapter-label">Chapter 01 — Origin</span>
          </motion.div>

          {/* Name — big manga-style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="brush-heading text-6xl md:text-7xl lg:text-8xl leading-none mb-2">
              Rupesh
            </h1>
            <h1 className="brush-heading text-6xl md:text-7xl lg:text-8xl leading-none text-gold mb-2">
              Pandey
            </h1>
            <div className="font-display text-sm text-ash tracking-[0.3em] uppercase mb-8">
              ルペシュ・パンデー
            </div>
          </motion.div>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg text-rice-200 italic mb-8 leading-relaxed max-w-sm border-l-2 border-blood/60 pl-4"
          >
            {personal.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="ink-btn-blood font-display text-sm">
              View My Work
            </a>
            <a href={`mailto:${personal.email}`} className="ink-btn font-display text-sm">
              Get In Touch
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 grid grid-cols-4 gap-4 border-t border-sumi-600/40 pt-8"
          >
            {[
              { v: '6+', l: 'Projects' },
              { v: '8', l: 'Repos' },
              { v: '1', l: 'Internship' },
              { v: '6.58', l: 'GPA' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl font-bold text-gold">{s.v}</div>
                <div className="font-mono text-xs text-sumi-400 tracking-widest uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Floating quote panel — like a manga thought bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="ink-card panel-border p-8 relative">
            {/* Corner marks */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blood/60" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blood/60" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blood/60" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-blood/60" />

            <div className="text-center py-8 px-4">
              {/* Large decorative kanji */}
              <div className="font-display text-8xl text-sumi-600 mb-6 leading-none select-none">道</div>

              {/* Rotating quote */}
              <motion.div
                key={quoteIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-body italic text-rice-200 text-lg leading-relaxed mb-4">
                  "{quotes[quoteIdx].text}"
                </p>
                <p className="font-display text-xs text-sumi-400 tracking-widest">
                  {quotes[quoteIdx].jp}
                </p>
              </motion.div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {quotes.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === quoteIdx ? 'bg-blood' : 'bg-sumi-600'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Floating status badge */}
          <div className="mt-4 flex justify-end">
            <div className="flex items-center gap-2 bg-sumi-800/80 border border-sumi-600/40 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-flicker" />
              <span className="font-mono text-xs text-ash tracking-widest">SEEKING OPPORTUNITIES</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="font-mono text-xs tracking-widest text-ash">SCROLL</span>
        <div className="w-px h-10 bg-ash animate-brush" />
      </div>
    </section>
  );
}

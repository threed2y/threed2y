import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data';

const roles = ['Data Scientist', 'Statistician', 'ML Engineer', 'Problem Solver'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = roles[roleIdx];
    let i = typing ? 0 : word.length;
    let timer;

    if (typing) {
      timer = setInterval(() => {
        i++;
        setDisplayed(word.slice(0, i));
        if (i >= word.length) {
          clearInterval(timer);
          setTimeout(() => setTyping(false), 1800);
        }
      }, 70);
    } else {
      timer = setInterval(() => {
        i--;
        setDisplayed(word.slice(0, i));
        if (i <= 0) {
          clearInterval(timer);
          setRoleIdx((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }, 40);
    }

    return () => clearInterval(timer);
  }, [roleIdx, typing]);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#b8ff3c 1px, transparent 1px), linear-gradient(90deg, #b8ff3c 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-acid/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-ember/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-ink-800 border border-ink-600 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs text-ink-100">Available for opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-ink-50 leading-none mb-4"
        >
          Rupesh<br />
          <span className="text-acid">Pandey</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-lg md:text-2xl text-ink-100 mb-6 h-8 flex items-center justify-center"
        >
          <span className="text-acid/60">// </span>
          <span>{displayed}</span>
          <span className="w-0.5 h-6 bg-acid ml-1 animate-blink inline-block" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-base md:text-lg text-ink-100 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>
          <a href={`mailto:${personal.email}`} className="btn-ghost">
            Get In Touch
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-20 flex flex-wrap gap-8 justify-center"
        >
          {[
            { label: 'Projects Shipped', value: '6+' },
            { label: 'GitHub Repos', value: '8' },
            { label: 'Internship', value: '1' },
            { label: 'GPA', value: '6.58' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-black text-acid">{stat.value}</div>
              <div className="font-body text-xs text-ink-100 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-ink-100">scroll</span>
        <div className="w-px h-8 bg-ink-100 animate-pulse" />
      </div>
    </section>
  );
}

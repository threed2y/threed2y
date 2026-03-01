import { useState, useEffect } from 'react';
import { personal } from '../data';

const navLinks = [
  { label: 'Projects', href: '#projects', jp: '作品' },
  { label: 'Skills', href: '#skills', jp: '技' },
  { label: 'Experience', href: '#experience', jp: '道' },
  { label: 'Contact', href: '#contact', jp: '連絡' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sumi-900/95 backdrop-blur-sm border-b border-sumi-600/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-blood opacity-80 rotate-3 group-hover:rotate-6 transition-transform" />
            <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-rice-50 text-sm z-10">
              武
            </div>
          </div>
          <span className="font-display font-bold text-rice-100 tracking-wide hidden sm:block">
            Rupesh<span className="text-gold">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group flex flex-col items-center gap-0.5"
            >
              <span className="font-mono text-xs text-sumi-400 group-hover:text-gold transition-colors">{l.jp}</span>
              <span className="font-body text-sm text-ash group-hover:text-rice-100 transition-colors tracking-wide">{l.label}</span>
            </a>
          ))}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-btn text-xs py-1.5 px-4"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-ash p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-sumi-800/98 border-t border-sumi-600/40 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href}
              className="flex items-center gap-3 text-ash hover:text-rice-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-display text-gold text-sm">{l.jp}</span>
              <span className="font-body text-base">{l.label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

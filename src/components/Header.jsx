import { useState, useEffect } from 'react';
import { personal } from '../data';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-md border-b border-ink-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="font-display font-bold text-xl text-ink-50 flex items-center gap-2">
          <span className="w-7 h-7 bg-acid rounded-md flex items-center justify-center text-ink-900 text-sm font-black">R</span>
          <span className="hidden sm:block">Rupesh<span className="text-acid">.</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm text-ink-100 hover:text-acid transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs py-2 px-4"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink-100 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink-800/95 backdrop-blur-md border-t border-ink-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm text-ink-100 hover:text-acid transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

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
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-paper-100/95 backdrop-blur-sm border-b-[2.5px] border-ink-900' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="panel w-8 h-8 flex items-center justify-center bg-ink-900 group-hover:bg-red-manga transition-colors">
            <span className="manga-title text-paper-50 text-lg leading-none">R</span>
          </div>
          <span className="manga-title text-xl text-ink-900 hidden sm:block">
            RUPESH<span className="text-red-manga">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a key={l.label} href={l.href}
              className="font-mono text-xs px-4 py-1.5 text-ink-600 hover:text-ink-900 hover:bg-paper-300 transition-all border border-transparent hover:border-ink-900 tracking-wider"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="btn-manga text-sm ml-3 py-1.5 px-4"
          >
            GITHUB
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 panel bg-paper-50" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <div className={`w-5 h-[2.5px] bg-ink-900 transition-all mb-1.5 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-[2.5px] bg-ink-900 transition-all mb-1.5 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-[2.5px] bg-ink-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-paper-100 border-t-[2.5px] border-ink-900 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="font-mono text-sm py-2.5 px-3 text-ink-800 hover:bg-paper-300 border-b border-ink-900/10 tracking-wider"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="btn-manga text-sm mt-3 text-center"
          >
            GITHUB ↗
          </a>
        </div>
      )}
    </header>
  );
}

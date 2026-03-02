import { useState, useEffect } from 'react';
import { personal } from '../data';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',  href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-paper-100/95 backdrop-blur-sm border-b-4 border-ink-900' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

        <a href="#top" className="flex items-center gap-2 group no-underline">
          <div className="w-8 h-8 bg-ink-900 border-2 border-ink-900 flex items-center justify-center group-hover:bg-red-manga transition-colors">
            <span className="manga-title text-paper-50 text-base">R</span>
          </div>
          <span className="manga-title text-xl text-ink-900 hidden sm:block">
            RUPESH<span className="text-red-manga">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a key={l.label} href={l.href}
              className="font-mono text-xs px-3 py-1.5 text-ink-500 hover:text-ink-900 hover:bg-paper-300 border border-transparent hover:border-ink-900 transition-all tracking-widest no-underline"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-manga text-sm py-1.5 px-4 ml-2">
            GITHUB
          </a>
        </nav>

        <button className="md:hidden p-2 panel bg-paper-50" onClick={() => setOpen(!open)} aria-label="menu">
          <div className={`w-5 h-0.5 bg-ink-900 transition-all mb-1.5 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-0.5 bg-ink-900 transition-all mb-1.5 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-ink-900 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper-100 border-t-4 border-ink-900 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="font-mono text-sm py-2.5 px-3 text-ink-700 hover:bg-paper-300 border-b border-ink-900/10 tracking-wider no-underline"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-manga text-sm mt-3 text-center">
            GITHUB ↗
          </a>
        </div>
      )}
    </header>
  );
}

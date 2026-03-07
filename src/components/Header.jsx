import { useState, useEffect } from 'react';
import { personal } from '../data';

const NAV = [
  { label: 'Case Files', href: '#projects' },
  { label: 'Arsenal',    href: '#skills' },
  { label: 'Record',     href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [open,     setOpen]       = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid #2e2e2e' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 32, height: 32, border: '1px solid #c41e1e',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 10px rgba(196,30,30,0.3)',
          }}>
            <span style={{ fontFamily: "'Special Elite', cursive", color: '#c41e1e', fontSize: '1rem' }}>R</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Special Elite', cursive", color: '#ede9e0', fontSize: '0.9rem', letterSpacing: '0.12em', lineHeight: 1 }}>RUPESH PANDEY</div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", color: '#888', fontSize: '0.52rem', letterSpacing: '0.2em', lineHeight: 1.4 }}>DATA DETECTIVE</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }} className="hdr-nav">
          {NAV.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.65rem', letterSpacing: '0.15em',
              color: '#aaa', textDecoration: 'none',
              padding: '0.4rem 0.9rem',
              transition: 'color 0.2s',
              border: '1px solid transparent',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#e8e4dc'; e.currentTarget.style.borderColor = '#2e2e2e'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#7a7a7a'; e.currentTarget.style.borderColor = 'transparent'; }}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="btn-noir" style={{ marginLeft: '0.75rem', padding: '0.35rem 1rem', fontSize: '0.65rem' }}
          >GITHUB</a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="hdr-burger"
          style={{ background: 'none', border: '1px solid #404040', padding: '0.4rem 0.5rem', cursor: 'crosshair', display: 'none' }}
        >
          {[0,1,2].map(i => (
            <div key={i} style={{ width: 18, height: 1, background: '#aaa', marginBottom: i < 2 ? 4 : 0,
              transition: 'all 0.2s',
              transform: open && i === 0 ? 'rotate(45deg) translate(3px, 5px)' : open && i === 2 ? 'rotate(-45deg) translate(3px, -5px)' : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: '#0a0a0a', borderTop: '1px solid #2e2e2e', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {NAV.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: "'Share Tech Mono', monospace", fontSize: '0.75rem',
              letterSpacing: '0.15em', color: '#aaa', textDecoration: 'none',
              padding: '0.6rem 0', borderBottom: '1px solid #1a1a1a',
            }}>{l.label.toUpperCase()}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 760px) { .hdr-nav { display: none !important; } .hdr-burger { display: block !important; } }
      `}</style>
    </header>
  );
}

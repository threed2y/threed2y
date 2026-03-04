import { useState, useEffect } from 'react';
import { personal } from '../data';

const NAV = [
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const bar = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    background: scrolled ? 'rgba(245,241,234,0.97)' : 'rgba(245,241,234,0.85)',
    backdropFilter: 'blur(6px)',
    borderBottom: scrolled ? '3px solid #1a1612' : '3px solid transparent',
    transition: 'all .25s ease',
  };

  return (
    <header style={bar}>
      <div style={{ maxWidth:'72rem', margin:'0 auto', padding:'0 1.5rem', height:56, display:'flex', alignItems:'center', justifyContent:'space-between' }}>

        {/* Logo */}
        <a href="#top" style={{ display:'flex', alignItems:'center', gap:'.6rem', textDecoration:'none' }}>
          <div style={{ width:30, height:30, background:'#1a1612', border:'2px solid #1a1612', display:'flex', alignItems:'center', justifyContent:'center' }}
            onMouseEnter={e => e.currentTarget.style.background='#cc1a1a'}
            onMouseLeave={e => e.currentTarget.style.background='#1a1612'}
          >
            <span style={{ fontFamily:"'Bangers',cursive", color:'#f5f1ea', fontSize:'1rem' }}>R</span>
          </div>
          <span style={{ fontFamily:"'Bangers',cursive", fontSize:'1.25rem', color:'#1a1612', letterSpacing:'.05em' }}>
            RUPESH<span style={{ color:'#cc1a1a' }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display:'flex', alignItems:'center', gap:'.2rem' }} className="desktop-nav">
          {NAV.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily:"'Share Tech Mono',monospace", fontSize:'.68rem', padding:'.35rem .8rem',
              color:'#5c534a', textDecoration:'none', letterSpacing:'.12em',
              border:'1px solid transparent', transition:'all .18s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color='#1a1612'; e.currentTarget.style.borderColor='#1a1612'; e.currentTarget.style.background='#eae5dc'; }}
              onMouseLeave={e => { e.currentTarget.style.color='#5c534a'; e.currentTarget.style.borderColor='transparent'; e.currentTarget.style.background='transparent'; }}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-manga" style={{ marginLeft:'.6rem', padding:'.35rem 1rem', fontSize:'.8rem' }}>
            GITHUB
          </a>
        </nav>

        {/* Mobile burger */}
        <button style={{ background:'none', border:'2px solid #1a1612', padding:'.4rem .5rem', cursor:'pointer', display:'none' }}
          className="mobile-burger" onClick={() => setOpen(!open)} aria-label="menu"
        >
          <div style={{ width:18, height:2, background:'#1a1612', marginBottom:4, transition:'all .2s', transform: open ? 'rotate(45deg) translate(4px,6px)' : 'none' }}/>
          <div style={{ width:18, height:2, background:'#1a1612', marginBottom:4, transition:'all .2s', opacity: open ? 0 : 1 }}/>
          <div style={{ width:18, height:2, background:'#1a1612', transition:'all .2s', transform: open ? 'rotate(-45deg) translate(4px,-6px)' : 'none' }}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background:'#f5f1ea', borderTop:'3px solid #1a1612', padding:'1rem 1.5rem', display:'flex', flexDirection:'column', gap:'.25rem' }}>
          {NAV.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily:"'Share Tech Mono',monospace", fontSize:'.8rem', padding:'.6rem .75rem',
              color:'#3d3530', textDecoration:'none', letterSpacing:'.1em',
              borderBottom:'1px solid rgba(10,8,6,.08)',
            }}>
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-manga" style={{ marginTop:'.75rem', textAlign:'center', fontSize:'.85rem' }}>
            GITHUB ↗
          </a>
        </div>
      )}

      <style>{`
        @media (max-width:760px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}

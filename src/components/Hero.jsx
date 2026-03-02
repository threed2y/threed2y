import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personal } from '../data';

function useCodeforces() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://codeforces.com/api/user.info?handles=sleepysaurus')
      .then(r => r.json())
      .then(json => { if (json.status === 'OK') setData(json.result[0]); })
      .catch(() => {});
  }, []);
  return data;
}

function useLeetCode() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/kurosaki-kun')
      .then(r => r.json())
      .then(json => { if (json.status === 'success') setData(json); })
      .catch(() => {});
  }, []);
  return data;
}

function AnimatedCount({ target }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!target) return;
    const num = parseInt(target);
    if (isNaN(num)) return;
    let current = 0;
    const step = Math.ceil(num / 45);
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(current);
    }, 25);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}</>;
}

const CF_COLORS = {
  newbie: '#999', pupil: '#3b3', specialist: '#1aa', expert: '#55f',
  'candidate master': '#a0a', master: '#f80', 'international master': '#f80',
  grandmaster: '#f22', 'international grandmaster': '#f22', 'legendary grandmaster': '#f22',
};

export default function Hero() {
  const cf = useCodeforces();
  const lc = useLeetCode();
  const cfColor = CF_COLORS[cf?.rank?.toLowerCase()] || '#8a7d72';

  return (
    <section id="top" style={{
      background: '#f5f2ed',
      minHeight: '100vh',
      paddingTop: '56px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Subtle halftone */}
      <div className="halftone" style={{ position: 'absolute', inset: 0, opacity: 0.035, pointerEvents: 'none' }} />
      {/* Top ink lines */}
      <div style={{ position: 'absolute', top: 56, left: 0, right: 0, height: 4, background: '#1a1612', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 60, left: 0, right: 0, height: 2, background: '#cc1a1a', opacity: 0.8, zIndex: 1 }} />

      {/* Inner wrapper fills remaining height */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '72rem',
        margin: '0 auto',
        width: '100%',
        padding: '0.875rem 1.5rem',
        gap: '0.875rem',
        boxSizing: 'border-box',
      }}>

        {/* Chapter banner */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          className="panel-red"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1.25rem', flexShrink: 0 }}
        >
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.25em' }}>CHAPTER 001</span>
          <span className="manga-title" style={{ color: 'white', fontSize: '1.15rem' }}>ORIGIN STORY</span>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.25em' }}>DATA SCIENTIST</span>
        </motion.div>

        {/* Main 2-col grid — grows to fill */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: '0.875rem',
          minHeight: 0,
        }}>

          {/* LEFT — name panel, warm dark not harsh black */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.1 }}
            className="panel-thick"
            style={{
              background: '#2a231b',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.75rem 2rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="speed-lines" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: 72, height: 72, background: '#cc1a1a', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(210,195,175,0.45)', marginBottom: '0.75rem' }}>
                // INTRODUCING
              </div>
              <h1 style={{
                fontFamily: "'Bangers', cursive",
                fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                lineHeight: 0.92,
                color: '#f5f2ed',
                WebkitTextStroke: '2px #f5f2ed',
                textShadow: '4px 4px 0 rgba(0,0,0,0.35)',
                letterSpacing: '0.04em',
              }}>RUPESH</h1>
              <h1 style={{
                fontFamily: "'Bangers', cursive",
                fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                lineHeight: 0.92,
                color: '#cc1a1a',
                textShadow: '3px 3px 0 rgba(0,0,0,0.4)',
                letterSpacing: '0.04em',
                marginBottom: '1.25rem',
              }}>PANDEY</h1>
              <p style={{ fontFamily: "'Kalam', cursive", fontStyle: 'italic', color: '#c0b09a', lineHeight: 1.65, fontSize: '0.95rem', maxWidth: '340px' }}>
                "{personal.bio}"
              </p>
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <span className="sfx-red" style={{ fontSize: '3.5rem', opacity: 0.35 }}>DATA!</span>
            </div>
          </motion.div>

          {/* RIGHT column — fills height, no empty space */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>

            {/* Stats row — 4 boxes */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 }}
              className="panel-thick stripe-bg"
              style={{ padding: '0.875rem', flexShrink: 0 }}
            >
              <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8a7d72', marginBottom: '0.6rem' }}>STATUS PANEL</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.5rem' }}>
                {[['6+','PROJECTS'],['8','REPOS'],['1','INTERN'],['6.58','GPA']].map(([v, l]) => (
                  <div key={l} className="panel" style={{ textAlign: 'center', padding: '0.5rem 0.25rem', background: '#faf8f3' }}>
                    <div className="manga-title" style={{ fontSize: '1.6rem', color: '#cc1a1a', lineHeight: 1 }}>{v}</div>
                    <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: '0.52rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8a7d72', marginTop: '0.2rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CP Stats — Codeforces + LeetCode side by side */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.26 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', flexShrink: 0 }}
            >
              {/* Codeforces */}
              <div className="panel-thick" style={{ background: '#fff', overflow: 'hidden' }}>
                <div style={{ background: '#1e3a5f', padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="manga-title" style={{ color: 'white', fontSize: '0.8rem' }}>CODEFORCES</span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: 'rgba(255,255,255,0.45)' }}>CF</span>
                </div>
                <div style={{ padding: '0.75rem' }}>
                  <div className="manga-title" style={{ fontSize: '2.4rem', lineHeight: 1, color: cf?.rating ? cfColor : '#c8bfb4' }}>
                    {cf?.rating ? <AnimatedCount target={cf.rating} /> : <span style={{ fontSize: '1.2rem', color: '#c0b09a' }}>Loading…</span>}
                  </div>
                  <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'capitalize', color: cfColor, marginTop: '0.2rem' }}>
                    {cf?.rank || '—'}
                  </div>
                  <a href="https://codeforces.com/profile/sleepysaurus" target="_blank" rel="noopener noreferrer"
                    className="ink-tag" style={{ fontSize: '0.55rem', marginTop: '0.5rem', display: 'inline-block', textDecoration: 'none' }}>
                    sleepysaurus ↗
                  </a>
                </div>
              </div>

              {/* LeetCode */}
              <div className="panel-thick" style={{ background: '#fff', overflow: 'hidden' }}>
                <div style={{ background: '#f89820', padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="manga-title" style={{ color: 'white', fontSize: '0.8rem' }}>LEETCODE</span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: 'rgba(255,255,255,0.55)' }}>LC</span>
                </div>
                <div style={{ padding: '0.75rem' }}>
                  <div className="manga-title" style={{ fontSize: '2.4rem', lineHeight: 1, color: lc ? '#f89820' : '#c8bfb4' }}>
                    {lc ? <AnimatedCount target={lc.totalSolved} /> : <span style={{ fontSize: '1.2rem', color: '#c0b09a' }}>Loading…</span>}
                  </div>
                  <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#8a7d72', marginTop: '0.2rem' }}>
                    {lc ? `${lc.easySolved}E · ${lc.mediumSolved}M · ${lc.hardSolved}H` : 'problems solved'}
                  </div>
                  <a href="https://leetcode.com/u/kurosaki-kun/" target="_blank" rel="noopener noreferrer"
                    className="ink-tag" style={{ fontSize: '0.55rem', marginTop: '0.5rem', display: 'inline-block', textDecoration: 'none' }}>
                    kurosaki-kun ↗
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Thought bubble — fills remaining vertical space */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.33 }}
              className="thought-bubble"
              style={{ flex: 1, padding: '1rem', background: '#fffdf9', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8a7d72', marginBottom: '0.5rem' }}>INNER MONOLOGUE</div>
                <p style={{ fontFamily: "'Shippori Mincho', serif", fontStyle: 'italic', fontSize: '0.9rem', color: '#5c534a', lineHeight: 1.75 }}>
                  "The path of mastery is forged through data, one model at a time..."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.75rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a1612', display: 'inline-block' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8a7d72', display: 'inline-block' }} />
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c8bfb4', display: 'inline-block' }} />
              </div>
            </motion.div>

            {/* Location bar */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              className="panel"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 1rem', background: '#fff5f5', borderColor: '#cc1a1a', flexShrink: 0 }}
            >
              <span style={{ fontFamily: "'Shippori Mincho', serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc1a1a' }}>LOCATION</span>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#3d3530' }}>Vadodara, Gujarat 🇮🇳</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#cc1a1a', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: "'Shippori Mincho', serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc1a1a' }}>OPEN TO WORK</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* CTA bar */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="panel-thick"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1.25rem', background: '#eae6df', flexShrink: 0 }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="#projects" className="btn-manga">VIEW MY WORK</a>
            <a href={`mailto:${personal.email}`} className="btn-manga-outline">GET IN TOUCH</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="ink-tag" style={{ textDecoration: 'none' }}>GitHub ↗</a>
            <a href={personal.huggingface} target="_blank" rel="noopener noreferrer" className="ink-tag" style={{ textDecoration: 'none' }}>HuggingFace ↗</a>
          </div>
        </motion.div>

      </div>

      {/* Bottom border */}
      <div style={{ height: 4, background: '#1a1612', flexShrink: 0 }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        @media (max-width: 900px) {
          .hero-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

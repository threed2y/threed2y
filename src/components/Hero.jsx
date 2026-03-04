import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personal } from '../data';

/* ── API hooks ─────────────────────────────────────────────────── */

function useCodeforces(handle) {
  const [data, setData] = useState(null);
  const [err,  setErr]  = useState(false);
  useEffect(() => {
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then(r => r.json())
      .then(j => { j.status === 'OK' ? setData(j.result[0]) : setErr(true); })
      .catch(() => setErr(true));
  }, [handle]);
  return { data, err };
}

function useLeetCode(username) {
  const [data, setData] = useState(null);
  const [err,  setErr]  = useState(false);
  useEffect(() => {
    // alfa-leetcode-api — reliable CORS-friendly proxy
    fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`)
      .then(r => r.json())
      .then(j => {
        if (j.solvedProblem !== undefined) {
          setData({
            total:  j.solvedProblem,
            easy:   j.easySolved,
            medium: j.mediumSolved,
            hard:   j.hardSolved,
          });
        } else { setErr(true); }
      })
      .catch(() => setErr(true));
  }, [username]);
  return { data, err };
}

/* ── Animated counter ──────────────────────────────────────────── */
function Count({ to }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!to) return;
    let cur = 0;
    const steps = 50;
    const inc   = Math.ceil(to / steps);
    const id = setInterval(() => {
      cur += inc;
      if (cur >= to) { setN(to); clearInterval(id); }
      else setN(cur);
    }, 20);
    return () => clearInterval(id);
  }, [to]);
  return <>{n}</>;
}

/* ── CF rank colour map ────────────────────────────────────────── */
const CF_CLR = {
  newbie: '#999', pupil: '#2a2', specialist: '#0bb',
  expert: '#55f', 'candidate master': '#a0a',
  master: '#f80', 'international master': '#f80',
  grandmaster: '#f33', 'international grandmaster': '#f33',
  'legendary grandmaster': '#f33',
};

/* ══════════════════════════════════════════════════════════════════
   HERO COMPONENT
══════════════════════════════════════════════════════════════════ */
export default function Hero() {
  const cf = useCodeforces('sleepysaurus');
  const lc = useLeetCode('kurosaki-kun');

  const cfRating = cf.data?.rating;
  const cfRank   = cf.data?.rank || '';
  const cfClr    = CF_CLR[cfRank.toLowerCase()] || '#8a7d72';

  return (
    <section id="top" style={{
      background: '#f5f1ea',
      minHeight: '100vh',
      paddingTop: 56,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* faint halftone bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #0a0806 1px, transparent 1px)',
        backgroundSize: '10px 10px', opacity: 0.03,
      }}/>

      {/* ink lines under header */}
      <div style={{ position:'absolute', top:56, left:0, right:0, height:4, background:'#1a1612', zIndex:1 }}/>
      <div style={{ position:'absolute', top:60, left:0, right:0, height:2, background:'#cc1a1a', opacity:.75, zIndex:1 }}/>

      {/* ── flex inner shell ───────────────────────────────────── */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        maxWidth: '72rem', margin: '0 auto', width: '100%',
        padding: '1rem 1.5rem',
        gap: '0.875rem',
        boxSizing: 'border-box',
      }}>

        {/* ── Chapter banner ── */}
        <motion.div
          initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }} transition={{ duration:.35 }}
          style={{
            background:'#cc1a1a', border:'3px solid #0a0806', boxShadow:'4px 4px 0 #0a0806',
            display:'flex', alignItems:'center', justifyContent:'space-between',
            padding:'0.45rem 1.25rem', flexShrink:0,
          }}
        >
          <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.65rem', color:'rgba(255,255,255,.7)', letterSpacing:'.25em' }}>CHAPTER 001</span>
          <span style={{ fontFamily:"'Bangers',cursive", fontSize:'1.15rem', color:'white', letterSpacing:'.05em' }}>ORIGIN STORY</span>
          <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.65rem', color:'rgba(255,255,255,.7)', letterSpacing:'.25em' }}>DATA SCIENTIST</span>
        </motion.div>

        {/* ── Two-column grid — fills remaining height ── */}
        <div style={{
          flex:1, display:'grid',
          gridTemplateColumns:'7fr 5fr',
          gap:'0.875rem', minHeight:0,
        }} className="hero-cols">

          {/* ── LEFT: name panel ── */}
          <motion.div
            initial={{ opacity:0, scale:.97 }} animate={{ opacity:1, scale:1 }}
            transition={{ duration:.45, delay:.1 }}
            style={{
              background:'#28221b',
              border:'4px solid #1a1612', boxShadow:'5px 5px 0 #1a1612',
              display:'flex', flexDirection:'column', justifyContent:'space-between',
              padding:'1.75rem 2rem', position:'relative', overflow:'hidden',
            }}
          >
            {/* speed lines */}
            <div style={{
              position:'absolute', inset:0, pointerEvents:'none',
              background:'repeating-linear-gradient(90deg,transparent,transparent 4px,rgba(255,255,255,.03) 4px,rgba(255,255,255,.03) 5px)',
            }}/>
            {/* red corner */}
            <div style={{ position:'absolute', top:0, right:0, width:72, height:72, background:'#cc1a1a', clipPath:'polygon(100% 0,0 0,100% 100%)' }}/>

            <div style={{ position:'relative', zIndex:1 }}>
              <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.6rem', letterSpacing:'.25em', textTransform:'uppercase', color:'rgba(200,185,165,.4)', marginBottom:'.75rem' }}>
                // INTRODUCING
              </div>
              <h1 style={{
                fontFamily:"'Bangers',cursive",
                fontSize:'clamp(3.2rem,9vw,7rem)',
                lineHeight:.9, letterSpacing:'.04em',
                color:'#f5f1ea', WebkitTextStroke:'2px #f5f1ea',
                textShadow:'4px 4px 0 rgba(0,0,0,.4)',
                margin:0,
              }}>RUPESH</h1>
              <h1 style={{
                fontFamily:"'Bangers',cursive",
                fontSize:'clamp(3.2rem,9vw,7rem)',
                lineHeight:.9, letterSpacing:'.04em',
                color:'#cc1a1a',
                textShadow:'3px 3px 0 rgba(0,0,0,.45)',
                margin:'0 0 1.1rem',
              }}>PANDEY</h1>
              <p style={{ fontFamily:"'Kalam',cursive", fontStyle:'italic', color:'#b8a898', lineHeight:1.7, fontSize:'.95rem', maxWidth:'340px' }}>
                "{personal.bio}"
              </p>
            </div>

            <div style={{ position:'relative', zIndex:1, display:'flex', justifyContent:'flex-end', marginTop:'.75rem' }}>
              <span style={{ fontFamily:"'Bangers',cursive", color:'#cc1a1a', fontSize:'3rem', letterSpacing:'.06em', WebkitTextStroke:'1px #0a0806', textShadow:'2px 2px 0 rgba(0,0,0,.3)', opacity:.4 }}>
                DATA!
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT column ── */}
          <div style={{ display:'flex', flexDirection:'column', gap:'0.875rem' }}>

            {/* Stats row */}
            <motion.div
              initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:.18 }}
              style={{
                background:'#fff', border:'4px solid #1a1612', boxShadow:'4px 4px 0 #1a1612',
                padding:'.875rem', flexShrink:0,
                backgroundImage:'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(10,8,6,.02) 10px,rgba(10,8,6,.02) 11px)',
              }}
            >
              <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.58rem', letterSpacing:'.22em', textTransform:'uppercase', color:'#8a7d72', marginBottom:'.6rem' }}>STATUS PANEL</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'.45rem' }}>
                {[['6+','PROJECTS'],['8','REPOS'],['1','INTERN'],['6.58','GPA']].map(([v,l]) => (
                  <div key={l} style={{ background:'#f8f5f0', border:'2px solid #1a1612', textAlign:'center', padding:'.5rem .25rem' }}>
                    <div style={{ fontFamily:"'Bangers',cursive", fontSize:'1.7rem', color:'#cc1a1a', lineHeight:1, letterSpacing:'.04em' }}>{v}</div>
                    <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.5rem', letterSpacing:'.14em', textTransform:'uppercase', color:'#8a7d72', marginTop:'.2rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CP panels */}
            <motion.div
              initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:.26 }}
              style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'.875rem', flexShrink:0 }}
            >
              {/* Codeforces */}
              <div style={{ background:'#fff', border:'4px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', overflow:'hidden' }}>
                <div style={{ background:'#1e3a5f', padding:'.4rem .75rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontFamily:"'Bangers',cursive", color:'white', fontSize:'.78rem', letterSpacing:'.06em' }}>CODEFORCES</span>
                  <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.5rem', color:'rgba(255,255,255,.4)' }}>CF</span>
                </div>
                <div style={{ padding:'.75rem' }}>
                  <div style={{ fontFamily:"'Bangers',cursive", fontSize:'2.5rem', lineHeight:1, color: cfRating ? cfClr : '#c0b0a0', letterSpacing:'.04em' }}>
                    {cfRating
                      ? <Count to={cfRating}/>
                      : cf.err ? <span style={{ fontSize:'1rem', color:'#c0b0a0' }}>N/A</span>
                      : <span style={{ fontSize:'1rem', color:'#c0b0a0' }}>…</span>
                    }
                  </div>
                  <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.58rem', letterSpacing:'.12em', textTransform:'capitalize', color: cfRating ? cfClr : '#8a7d72', marginTop:'.2rem' }}>
                    {cfRank || (cf.err ? 'unavailable' : 'loading')}
                  </div>
                  <a href="https://codeforces.com/profile/sleepysaurus" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.55rem', padding:'1px 7px', border:'1.5px solid #1a1612', color:'#1a1612', display:'inline-block', marginTop:'.5rem', textDecoration:'none' }}>
                    sleepysaurus ↗
                  </a>
                </div>
              </div>

              {/* LeetCode */}
              <div style={{ background:'#fff', border:'4px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', overflow:'hidden' }}>
                <div style={{ background:'#f89820', padding:'.4rem .75rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontFamily:"'Bangers',cursive", color:'white', fontSize:'.78rem', letterSpacing:'.06em' }}>LEETCODE</span>
                  <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.5rem', color:'rgba(255,255,255,.5)' }}>LC</span>
                </div>
                <div style={{ padding:'.75rem' }}>
                  <div style={{ fontFamily:"'Bangers',cursive", fontSize:'2.5rem', lineHeight:1, color: lc.data ? '#f89820' : '#c0b0a0', letterSpacing:'.04em' }}>
                    {lc.data
                      ? <Count to={lc.data.total}/>
                      : lc.err ? <span style={{ fontSize:'1rem', color:'#c0b0a0' }}>N/A</span>
                      : <span style={{ fontSize:'1rem', color:'#c0b0a0' }}>…</span>
                    }
                  </div>
                  <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.58rem', letterSpacing:'.1em', color:'#8a7d72', marginTop:'.2rem' }}>
                    {lc.data
                      ? `${lc.data.easy}E · ${lc.data.medium}M · ${lc.data.hard}H`
                      : lc.err ? 'unavailable' : 'loading...'}
                  </div>
                  <a href="https://leetcode.com/u/kurosaki-kun/" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.55rem', padding:'1px 7px', border:'1.5px solid #1a1612', color:'#1a1612', display:'inline-block', marginTop:'.5rem', textDecoration:'none' }}>
                    kurosaki-kun ↗
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Thought bubble — grows to fill */}
            <motion.div
              initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:.33 }}
              style={{
                flex:1, background:'#fffdf8',
                border:'2.5px solid #1a1612', borderRadius:16,
                padding:'1rem', position:'relative',
                display:'flex', flexDirection:'column', justifyContent:'space-between',
              }}
            >
              {/* bubble tail */}
              <div style={{ position:'absolute', bottom:-14, left:28, width:12, height:12, background:'#fffdf8', border:'2.5px solid #1a1612', borderRadius:'50%' }}/>
              <div>
                <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.58rem', letterSpacing:'.22em', textTransform:'uppercase', color:'#8a7d72', marginBottom:'.5rem' }}>INNER MONOLOGUE</div>
                <p style={{ fontFamily:"'Shippori Mincho',serif", fontStyle:'italic', fontSize:'.9rem', color:'#5c534a', lineHeight:1.8, margin:0 }}>
                  "The path of mastery is forged through data, one model at a time..."
                </p>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:'.3rem', marginTop:'.75rem' }}>
                <span style={{ width:8, height:8, borderRadius:'50%', background:'#1a1612', display:'inline-block' }}/>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#8a7d72', display:'inline-block' }}/>
                <span style={{ width:4, height:4, borderRadius:'50%', background:'#c8bfb4', display:'inline-block' }}/>
              </div>
            </motion.div>

            {/* Location bar */}
            <motion.div
              initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:.4 }}
              style={{
                background:'#fff4f4', border:'2.5px solid #cc1a1a',
                display:'flex', alignItems:'center', justifyContent:'space-between',
                padding:'.55rem 1rem', flexShrink:0,
              }}
            >
              <span style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.58rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#cc1a1a' }}>LOCATION</span>
              <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.68rem', color:'#3d3530' }}>Vadodara, Gujarat 🇮🇳</span>
              <div style={{ display:'flex', alignItems:'center', gap:'.4rem' }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:'#cc1a1a', display:'inline-block', animation:'blink 2s infinite' }}/>
                <span style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.58rem', letterSpacing:'.18em', textTransform:'uppercase', color:'#cc1a1a' }}>OPEN TO WORK</span>
              </div>
            </motion.div>

          </div>{/* end right */}
        </div>{/* end 2-col */}

        {/* ── CTA bar ── */}
        <motion.div
          initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.5 }}
          style={{
            background:'#eae5dc', border:'4px solid #1a1612', boxShadow:'4px 4px 0 #1a1612',
            display:'flex', flexWrap:'wrap', gap:'.75rem',
            alignItems:'center', justifyContent:'space-between',
            padding:'.875rem 1.25rem', flexShrink:0,
          }}
        >
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.75rem' }}>
            <a href="#projects" className="btn-manga">VIEW MY WORK</a>
            <a href={`mailto:${personal.email}`} className="btn-manga-outline">GET IN TOUCH</a>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem' }}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="ink-tag" style={{ textDecoration:'none' }}>GitHub ↗</a>
            <a href={personal.huggingface} target="_blank" rel="noopener noreferrer" className="ink-tag" style={{ textDecoration:'none' }}>HuggingFace ↗</a>
          </div>
        </motion.div>

      </div>{/* end inner */}

      {/* bottom ink bar */}
      <div style={{ height:4, background:'#1a1612', flexShrink:0 }}/>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        @media (max-width:860px) {
          .hero-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

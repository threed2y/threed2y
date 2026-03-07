import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personal } from '../data';

function useCodeforces(handle) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then(r => r.json()).then(j => { if (j.status === 'OK') setData(j.result[0]); }).catch(() => {});
  }, [handle]);
  return data;
}
function useLeetCode(username) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`)
      .then(r => r.json()).then(j => {
        if (j.solvedProblem !== undefined)
          setData({ total: j.solvedProblem, easy: j.easySolved, medium: j.mediumSolved, hard: j.hardSolved });
      }).catch(() => {});
  }, [username]);
  return data;
}
function Count({ to }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!to) return;
    let c = 0; const step = Math.ceil(to / 50);
    const id = setInterval(() => { c += step; if (c >= to) { setN(to); clearInterval(id); } else setN(c); }, 20);
    return () => clearInterval(id);
  }, [to]);
  return <>{n}</>;
}
const CF_CLR = {
  newbie: '#aaa', pupil: '#6c6', specialist: '#2cc', expert: '#88f',
  'candidate master': '#d9d', master: '#fa0', 'international master': '#fa0',
  grandmaster: '#f55',
};
function Typewriter({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const target = texts[idx];
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2000); return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35); return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) { setDeleting(false); setIdx((idx + 1) % texts.length); }
  }, [displayed, deleting, idx, texts]);
  return <span style={{ borderRight: '2px solid #cc2222', paddingRight: 3 }}>{displayed}</span>;
}

const LBL = { fontFamily:"'Share Tech Mono',monospace", fontSize:'0.6rem', color:'#888', letterSpacing:'0.25em', marginBottom:'0.5rem' };
const DIM = { fontFamily:"'Share Tech Mono',monospace", fontSize:'0.55rem', color:'#666', letterSpacing:'0.15em' };

export default function Hero() {
  const cf = useCodeforces('sleepysaurus');
  const lc = useLeetCode('kurosaki-kun');
  const cfRank = cf?.rank || '';
  const cfRating = cf?.rating;
  const cfClr = CF_CLR[cfRank.toLowerCase()] || '#aaa';

  return (
    <section id="top" style={{ minHeight:'100vh', paddingTop:60, background:'#080808', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column' }}>
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(ellipse 70% 50% at 18% 72%, rgba(204,34,34,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 78% 22%, rgba(255,255,255,0.02) 0%, transparent 60%)' }}/>
      <div className="rain-bg" style={{ position:'absolute', inset:0, pointerEvents:'none', opacity:0.45 }}/>
      <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:2, height:'45%', background:'linear-gradient(to bottom, rgba(255,255,200,0.15), transparent)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', top:60, left:'50%', transform:'translateX(-50%)', width:280, height:280, background:'radial-gradient(circle, rgba(255,255,200,0.05) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div className="scanlines" style={{ position:'absolute', inset:0, pointerEvents:'none', opacity:0.22 }}/>

      <div style={{ flex:1, display:'flex', flexDirection:'column', maxWidth:'72rem', margin:'0 auto', width:'100%', padding:'2rem 1.5rem 1.5rem', gap:'1.25rem', boxSizing:'border-box', position:'relative', zIndex:1 }}>

        {/* header strip */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }}
          style={{ display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid #2c2c2c', paddingBottom:'0.75rem' }}>
          <span style={LBL}>CASE FILE #001</span>
          <span style={LBL}>CLASSIFIED · DATA DIVISION</span>
          <span style={LBL}>VADODARA, GJ</span>
        </motion.div>

        {/* main grid */}
        <div style={{ flex:1, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', minHeight:0 }} className="hero-main">

          {/* LEFT */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>

            {/* Name */}
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.2 }} style={{ position:'relative' }}>
              <div style={{ position:'absolute', top:0, bottom:0, left:-16, width:3, background:'#cc2222', boxShadow:'0 0 16px rgba(204,34,34,0.7)' }}/>
              <div style={LBL}>SUBJECT IDENTIFICATION</div>
              <h1 style={{ fontFamily:"'Special Elite',cursive", fontSize:'clamp(3.2rem, 8vw, 6.5rem)', lineHeight:0.88, color:'#ede9e0', letterSpacing:'0.04em', textShadow:'3px 3px 0 #000, 0 0 40px rgba(237,233,224,0.1)', margin:0 }}>
                RUPESH<br/>
                <span style={{ color:'#cc2222', textShadow:'0 0 25px rgba(204,34,34,0.6), 3px 3px 0 #000' }}>PANDEY</span>
              </h1>
              <div style={{ marginTop:'0.75rem', fontFamily:"'Share Tech Mono',monospace", fontSize:'0.8rem', color:'#c0c0c0', letterSpacing:'0.1em', minHeight:'1.2em' }}>
                <Typewriter texts={['DATA SCIENTIST','STATISTICIAN','ML ENGINEER','PROBLEM SOLVER']} />
              </div>
            </motion.div>

            {/* Dossier */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.4 }}
              className="case-file" style={{ padding:'1.1rem 1.25rem', flex:1 }}>
              <div style={{ ...LBL, borderBottom:'1px solid #2c2c2c', paddingBottom:'0.5rem', marginBottom:'0.75rem' }}>▸ SUBJECT PROFILE — CONFIDENTIAL</div>
              <p style={{ fontFamily:"'Libre Baskerville',serif", fontStyle:'italic', color:'#c0c0c0', lineHeight:1.85, fontSize:'0.88rem', margin:0 }}>
                "{personal.bio}"
              </p>
              <div style={{ marginTop:'1rem', display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                {[['LOCATION','Vadodara, Gujarat, India'],['INSTITUTION','MS University of Baroda'],['STATUS','Open to Opportunities']].map(([k,v]) => (
                  <div key={k} style={{ display:'flex', alignItems:'baseline', gap:'0.25rem' }}>
                    <span style={{ ...DIM, flexShrink:0, color:'#888' }}>{k}</span>
                    <span className="leader"/>
                    <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.6rem', color:'#bbb' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:'1rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:'#cc2222', display:'inline-block', boxShadow:'0 0 10px rgba(204,34,34,0.9)', animation:'flicker 3s infinite' }}/>
                <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.62rem', color:'#e04040', letterSpacing:'0.18em' }}>ACTIVE · TAKING CASES</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.6 }}
              style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap' }}>
              <a href="#projects" className="btn-noir">VIEW CASE FILES</a>
              <a href={`mailto:${personal.email}`} className="btn-noir" style={{ borderColor:'#585858', color:'#c0c0c0' }}>OPEN A CASE</a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>

            {/* Stat boxes */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.3 }}
              style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'0.75rem' }}>
              {[['6+','CASES SOLVED'],['8','EVIDENCE FILES'],['1','FIELD MISSION'],['6.58','GRADE SCORE']].map(([v,l]) => (
                <div key={l} style={{ border:'1px solid #383838', background:'#111', padding:'1rem', textAlign:'center', position:'relative', overflow:'hidden', transition:'border-color 0.2s, box-shadow 0.2s', boxShadow:'0 2px 12px rgba(0,0,0,0.4)', cursor:'default' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='#cc2222'; e.currentTarget.style.boxShadow='0 0 18px rgba(204,34,34,0.18)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='#383838'; e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.4)'; }}>
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg, transparent, #cc2222, transparent)' }}/>
                  <div style={{ fontFamily:"'Special Elite',cursive", fontSize:'2.1rem', color:'#ede9e0', lineHeight:1 }}>{v}</div>
                  <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.52rem', color:'#888', letterSpacing:'0.15em', marginTop:'0.35rem' }}>{l}</div>
                </div>
              ))}
            </motion.div>

            {/* CP panels */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.45 }}
              style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
              {/* CF */}
              <div style={{ border:'1px solid #383838', background:'#111', overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,0.4)' }}>
                <div style={{ background:'#0e1e30', padding:'0.45rem 0.85rem', borderBottom:'1px solid #1a3050', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontFamily:"'Special Elite',cursive", color:'#7ac0f0', fontSize:'0.75rem', letterSpacing:'0.06em' }}>CODEFORCES</span>
                  <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.52rem', color:'#3a5878' }}>CF</span>
                </div>
                <div style={{ padding:'0.85rem' }}>
                  <div style={{ fontFamily:"'Special Elite',cursive", fontSize:'2.4rem', lineHeight:1, color: cfRating ? cfClr : '#404040' }}>
                    {cfRating ? <Count to={cfRating}/> : <span style={{ fontSize:'1rem', color:'#555' }}>—</span>}
                  </div>
                  <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.58rem', color: cfRating ? cfClr : '#555', letterSpacing:'0.12em', textTransform:'capitalize', marginTop:'0.25rem' }}>
                    {cfRank || <span style={{ color:'#555' }}>loading…</span>}
                  </div>
                  <a href="https://codeforces.com/profile/sleepysaurus" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.54rem', color:'#888', textDecoration:'none', display:'inline-block', marginTop:'0.55rem', letterSpacing:'0.1em', borderBottom:'1px solid #383838', transition:'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#7ac0f0'}
                    onMouseLeave={e => e.currentTarget.style.color='#888'}>sleepysaurus ↗</a>
                </div>
              </div>
              {/* LC */}
              <div style={{ border:'1px solid #383838', background:'#111', overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,0.4)' }}>
                <div style={{ background:'#1c1200', padding:'0.45rem 0.85rem', borderBottom:'1px solid #3a2800', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontFamily:"'Special Elite',cursive", color:'#f8a030', fontSize:'0.75rem', letterSpacing:'0.06em' }}>LEETCODE</span>
                  <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.52rem', color:'#4a3000' }}>LC</span>
                </div>
                <div style={{ padding:'0.85rem' }}>
                  <div style={{ fontFamily:"'Special Elite',cursive", fontSize:'2.4rem', lineHeight:1, color: lc ? '#f8a030' : '#404040' }}>
                    {lc ? <Count to={lc.total}/> : <span style={{ fontSize:'1rem', color:'#555' }}>—</span>}
                  </div>
                  <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.58rem', color: lc ? '#aaa' : '#555', letterSpacing:'0.1em', marginTop:'0.25rem' }}>
                    {lc ? `${lc.easy}E · ${lc.medium}M · ${lc.hard}H` : <span style={{ color:'#555' }}>loading…</span>}
                  </div>
                  <a href="https://leetcode.com/u/kurosaki-kun/" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.54rem', color:'#888', textDecoration:'none', display:'inline-block', marginTop:'0.55rem', letterSpacing:'0.1em', borderBottom:'1px solid #383838', transition:'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#f8a030'}
                    onMouseLeave={e => e.currentTarget.style.color='#888'}>kurosaki-kun ↗</a>
                </div>
              </div>
            </motion.div>

            {/* Evidence board */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.55 }}
              className="case-file" style={{ flex:1, padding:'1rem' }}>
              <div style={{ ...LBL, marginBottom:'0.75rem' }}>▸ EVIDENCE BOARD</div>
              {[
                { label:'GitHub Repository',  sub:'github.com/threed2y',          href:personal.github,             clr:'#c8c4bc' },
                { label:'HuggingFace Models', sub:'huggingface.co/sleepysaurus',  href:personal.huggingface,        clr:'#f8a030' },
                { label:'Email Channel',       sub:personal.email,                 href:`mailto:${personal.email}`,  clr:'#cc2222' },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ display:'flex', alignItems:'center', gap:'0.75rem', padding:'0.6rem 1rem', borderBottom:'1px solid #222', textDecoration:'none', transition:'background 0.2s', marginLeft:'-1rem', marginRight:'-1rem' }}
                  onMouseEnter={e => e.currentTarget.style.background='#1a1a1a'}
                  onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                  <div style={{ width:5, height:5, borderRadius:'50%', background:item.clr, flexShrink:0, boxShadow:`0 0 8px ${item.clr}99` }}/>
                  <div>
                    <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.64rem', color:'#c0c0c0', letterSpacing:'0.1em' }}>{item.label}</div>
                    <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.54rem', color:'#777', marginTop:'0.1rem' }}>{item.sub}</div>
                  </div>
                  <span style={{ marginLeft:'auto', fontFamily:"'Share Tech Mono',monospace", fontSize:'0.62rem', color:'#555' }}>↗</span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom ticker */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.8 }}
          style={{ borderTop:'1px solid #242424', paddingTop:'0.75rem', display:'flex', alignItems:'center', gap:'1.5rem', overflow:'hidden' }}>
          <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.55rem', color:'#cc2222', letterSpacing:'0.2em', flexShrink:0 }}>// DISPATCH</span>
          {['Python · R · SQL','Machine Learning','Statistical Analysis','Data Viz','Regression · Time Series','Available for hire'].map((t,i) => (
            <span key={i} style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.55rem', color:'#666', letterSpacing:'0.12em', flexShrink:0 }}>
              {t} <span style={{ color:'#404040', margin:'0 0.25rem' }}>·</span>
            </span>
          ))}
        </motion.div>
      </div>
      <style>{`@media(max-width:860px){.hero-main{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

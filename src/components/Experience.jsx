import { motion } from 'framer-motion';
import { experience, education } from '../data';

const TYPE_CFG = {
  Internship: { bg:'#1a1612', label:'INTERN' },
  Leadership: { bg:'#cc1a1a', label:'LEADER' },
  Athletics:  { bg:'#3d3530', label:'SPORT' },
  Education:  { bg:'#3d3530', label:'STUDY' },
};

export default function Experience() {
  const all = [
    ...experience,
    ...education.map(e => ({
      role: e.degree, company: e.institution, period: e.period, type:'Education',
      highlights: e.gpa ? ['GPA: ' + e.gpa, ...(e.courses||[]).slice(0,3)] : (e.courses||[]).slice(0,3),
    })),
  ];

  return (
    <section id="experience" style={{ background:'#eae5dc', padding:'5rem 1.5rem', position:'relative' }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'radial-gradient(circle, #1a1612 1px, transparent 1px)', backgroundSize:'9px 9px', opacity:.025,
      }}/>
      <div style={{ maxWidth:'56rem', margin:'0 auto', position:'relative' }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:'2.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1rem' }}>
            <div style={{ flex:1, height:'2.5px', background:'#1a1612' }}/>
            <div style={{ background:'#cc1a1a', border:'3px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', padding:'.4rem 1.25rem' }}>
              <span style={{ fontFamily:"'Bangers',cursive", color:'white', fontSize:'1rem', letterSpacing:'.05em' }}>CHAPTER 004</span>
            </div>
            <div style={{ flex:1, height:'2.5px', background:'#1a1612' }}/>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', flexWrap:'wrap', gap:'.5rem' }}>
            <h2 style={{ fontFamily:"'Bangers',cursive", fontSize:'clamp(2.8rem,7vw,4.5rem)', lineHeight:.95, color:'#1a1612', letterSpacing:'.04em', textShadow:'3px 3px 0 rgba(10,8,6,.1)', margin:0 }}>THE PATH</h2>
            <span style={{ fontFamily:"'Bangers',cursive", fontSize:'clamp(2.5rem,6vw,4rem)', color:'rgba(10,8,6,.06)', letterSpacing:'.06em', lineHeight:1 }}>DASH!</span>
          </div>
          <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.62rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#8a7d72', marginTop:'.3rem' }}>Experience & education — 経験</div>
        </motion.div>

        <div style={{ position:'relative' }}>
          {/* timeline spine */}
          <div style={{ position:'absolute', left:19, top:0, bottom:0, width:'2.5px', background:'#1a1612' }}/>

          <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
            {all.map((item, i) => {
              const cfg = TYPE_CFG[item.type] || TYPE_CFG.Education;
              return (
                <motion.div key={i}
                  initial={{ opacity:0, x:-18 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i*.07 }}
                  style={{ position:'relative', paddingLeft:'3.5rem' }}
                >
                  <div style={{ position:'absolute', left:0, top:0, width:40, height:40, border:'2.5px solid #1a1612', background:cfg.bg, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.5rem', color:'white', textAlign:'center', lineHeight:1.3 }}>{cfg.label}</span>
                  </div>
                  <div style={{ background:'#fff', border:'4px solid #1a1612', padding:'1.1rem', transition:'box-shadow .15s,transform .15s' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow='5px 5px 0 #cc1a1a'; e.currentTarget.style.transform='translate(-1px,-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='none'; }}
                  >
                    <div style={{ display:'flex', alignItems:'start', justifyContent:'space-between', flexWrap:'wrap', gap:'.4rem', marginBottom:'.25rem' }}>
                      <h3 style={{ fontFamily:"'Bangers',cursive", fontSize:'1.15rem', color:'#1a1612', letterSpacing:'.04em', margin:0 }}>{item.role.toUpperCase()}</h3>
                      <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.58rem', padding:'1px 7px', background:'#1a1612', color:'#f5f1ea', letterSpacing:'.05em' }}>{item.type.toUpperCase()}</span>
                    </div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem', alignItems:'center', marginBottom:'.75rem' }}>
                      <span style={{ fontFamily:"'Kalam',cursive", fontSize:'.9rem', fontStyle:'italic', color:'#cc1a1a' }}>{item.company}</span>
                      <span style={{ color:'#c8bfb4' }}>·</span>
                      <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.65rem', color:'#8a7d72' }}>{item.period}</span>
                    </div>
                    <ul style={{ listStyle:'none', margin:0, padding:0, borderTop:'1.5px solid rgba(10,8,6,.08)', paddingTop:'.6rem', display:'flex', flexDirection:'column', gap:'.35rem' }}>
                      {item.highlights.map((h, j) => (
                        <li key={j} style={{ display:'flex', gap:'.5rem', fontFamily:"'Kalam',cursive", fontSize:'.85rem', color:'#5c534a', lineHeight:1.55 }}>
                          <span style={{ color:'#cc1a1a', fontWeight:700, flexShrink:0 }}>▶</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

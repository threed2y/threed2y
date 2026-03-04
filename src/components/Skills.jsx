import { motion } from 'framer-motion';
import { skills } from '../data';

const KANJI = ['数', '学', '視', '器'];
const SFXS  = ['CRUNCH!', 'ZAP!', 'BOOM!', 'CLICK!'];

export default function Skills() {
  return (
    <section id="skills" style={{ background:'#f5f1ea', padding:'5rem 1.5rem', position:'relative', overflow:'hidden' }}>
      {/* red halftone blob */}
      <div style={{
        position:'absolute', top:'-80px', right:'-80px', width:300, height:300, borderRadius:'50%',
        backgroundImage:'radial-gradient(circle, #cc1a1a 1px, transparent 1px)', backgroundSize:'6px 6px', opacity:.07, pointerEvents:'none',
      }}/>
      <div style={{ maxWidth:'72rem', margin:'0 auto', position:'relative' }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:'2.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1rem' }}>
            <div style={{ flex:1, height:'2.5px', background:'#1a1612' }}/>
            <div style={{ background:'#cc1a1a', border:'3px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', padding:'.4rem 1.25rem' }}>
              <span style={{ fontFamily:"'Bangers',cursive", color:'white', fontSize:'1rem', letterSpacing:'.05em' }}>CHAPTER 003</span>
            </div>
            <div style={{ flex:1, height:'2.5px', background:'#1a1612' }}/>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', flexWrap:'wrap', gap:'.5rem' }}>
            <h2 style={{ fontFamily:"'Bangers',cursive", fontSize:'clamp(2.8rem,7vw,4.5rem)', lineHeight:.95, color:'#1a1612', letterSpacing:'.04em', textShadow:'3px 3px 0 rgba(10,8,6,.1)', margin:0 }}>ARSENAL</h2>
            <span style={{ fontFamily:"'Bangers',cursive", fontSize:'clamp(2.5rem,6vw,4rem)', color:'rgba(10,8,6,.06)', letterSpacing:'.06em', lineHeight:1 }}>SLASH!</span>
          </div>
          <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.62rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#8a7d72', marginTop:'.3rem' }}>Technical skills — 技術スキル</div>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem' }} className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div key={skill.category}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*.1 }}
              style={{ background:'#fff', border:'4px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', overflow:'hidden', transition:'box-shadow .15s,transform .15s', cursor:'default' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow='6px 6px 0 #cc1a1a'; e.currentTarget.style.transform='translate(-1px,-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow='4px 4px 0 #1a1612'; e.currentTarget.style.transform='none'; }}
            >
              <div style={{ background:'#1a1612', padding:'.65rem .9rem', display:'flex', alignItems:'center', justifyContent:'space-between', transition:'background .2s' }}
                onMouseEnter={e => e.currentTarget.style.background='#cc1a1a'}
                onMouseLeave={e => e.currentTarget.style.background='#1a1612'}
              >
                <span style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'2rem', fontWeight:700, color:'white' }}>{KANJI[i]}</span>
                <span style={{ fontFamily:"'Bangers',cursive", fontSize:'.75rem', color:'rgba(255,255,255,.25)', letterSpacing:'.08em' }}>{SFXS[i]}</span>
              </div>
              <div style={{ padding:'.9rem' }}>
                <div style={{ fontFamily:"'Bangers',cursive", fontSize:'.82rem', color:'#1a1612', letterSpacing:'.04em', marginBottom:'.25rem' }}>{skill.category.toUpperCase()}</div>
                <div style={{ width:'2rem', height:'2px', background:'#cc1a1a', marginBottom:'.65rem' }}/>
                <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'.35rem' }}>
                  {skill.items.map(item => (
                    <li key={item} style={{ display:'flex', alignItems:'center', gap:'.45rem' }}>
                      <span style={{ width:5, height:5, background:'#1a1612', flexShrink:0, display:'inline-block' }}/>
                      <span style={{ fontFamily:"'Kalam',cursive", fontSize:'.82rem', color:'#5c534a' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.skills-grid{grid-template-columns:repeat(2,1fr) !important;}}@media(max-width:480px){.skills-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

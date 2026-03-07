import { motion } from 'framer-motion';
import { skills } from '../data';

const GLYPHS = ['01', '10', '11', '00'];

export default function Skills() {
  return (
    <section id="skills" style={{ background:'#0a0a0a', padding:'5rem 1.5rem', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(0,0,0,0.35), transparent 20%, transparent 80%, rgba(0,0,0,0.35))', pointerEvents:'none' }}/>

      <div style={{ maxWidth:'72rem', margin:'0 auto', position:'relative' }}>
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:'3rem' }}>
          <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.6rem', color:'#888', letterSpacing:'0.25em', marginBottom:'0.5rem' }}>OPERATIVE TOOLKIT</div>
          <h2 style={{ fontFamily:"'Special Elite',cursive", fontSize:'clamp(2.5rem, 6vw, 4rem)', color:'#ede9e0', letterSpacing:'0.04em', textShadow:'2px 2px 0 #000', margin:'0 0 0.4rem' }}>ARSENAL</h2>
          <div style={{ width:'3rem', height:2, background:'#cc2222', boxShadow:'0 0 10px rgba(204,34,34,0.55)' }}/>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1px', background:'#252525' }} className="sk-grid">
          {skills.map((skill, i) => (
            <motion.div key={skill.category}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i * 0.1 }}
              style={{ background:'#0e0e0e', padding:'1.5rem', position:'relative', overflow:'hidden', transition:'background 0.2s', cursor:'default' }}
              onMouseEnter={e => e.currentTarget.style.background='#141414'}
              onMouseLeave={e => e.currentTarget.style.background='#0e0e0e'}
            >
              <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg, #cc2222, transparent)' }}/>
              {/* Glyph watermark — legible but subtle */}
              <div style={{ position:'absolute', top:'0.8rem', right:'0.9rem', fontFamily:"'Share Tech Mono',monospace", fontSize:'1.4rem', color:'#242424', letterSpacing:'0.05em', userSelect:'none' }}>
                {GLYPHS[i]}
              </div>
              <div style={{ fontFamily:"'Special Elite',cursive", fontSize:'1.1rem', color:'#ede9e0', letterSpacing:'0.04em', marginBottom:'0.3rem' }}>{skill.category}</div>
              <div style={{ width:'1.5rem', height:'1px', background:'#cc2222', marginBottom:'1rem' }}/>
              <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'0.45rem' }}>
                {skill.items.map(item => (
                  <li key={item} style={{ display:'flex', alignItems:'baseline', gap:'0.5rem' }}>
                    <span style={{ color:'#cc2222', fontSize:'0.52rem', flexShrink:0 }}>▸</span>
                    {/* was #7a7a7a — bumped to #aaa */}
                    <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.7rem', color:'#aaa', letterSpacing:'0.06em' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.sk-grid{grid-template-columns:repeat(2,1fr) !important;}}@media(max-width:480px){.sk-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

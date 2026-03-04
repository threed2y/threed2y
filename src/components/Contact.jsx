import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  return (
    <section id="contact" style={{ background:'#f5f1ea', padding:'5rem 1.5rem', position:'relative', overflow:'hidden' }}>
      <div style={{
        position:'absolute', bottom:'-60px', left:'-60px', width:250, height:250, borderRadius:'50%',
        backgroundImage:'radial-gradient(circle,#cc1a1a 1px,transparent 1px)', backgroundSize:'6px 6px', opacity:.07, pointerEvents:'none',
      }}/>
      <div style={{ maxWidth:'56rem', margin:'0 auto', position:'relative' }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:'2.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1rem' }}>
            <div style={{ flex:1, height:'2.5px', background:'#1a1612' }}/>
            <div style={{ background:'#cc1a1a', border:'3px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', padding:'.4rem 1.25rem' }}>
              <span style={{ fontFamily:"'Bangers',cursive", color:'white', fontSize:'1rem', letterSpacing:'.05em' }}>FINAL CHAPTER</span>
            </div>
            <div style={{ flex:1, height:'2.5px', background:'#1a1612' }}/>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', flexWrap:'wrap', gap:'.5rem' }}>
            <h2 style={{ fontFamily:"'Bangers',cursive", fontSize:'clamp(2.8rem,7vw,4.5rem)', lineHeight:.95, color:'#1a1612', letterSpacing:'.04em', textShadow:'3px 3px 0 rgba(10,8,6,.1)', margin:0 }}>CONNECT</h2>
            <span style={{ fontFamily:"'Bangers',cursive", fontSize:'clamp(2.5rem,6vw,4rem)', color:'rgba(10,8,6,.06)', letterSpacing:'.06em', lineHeight:1 }}>WHOOSH!</span>
          </div>
          <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.62rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#8a7d72', marginTop:'.3rem' }}>Let's work together — 一緒に働こう</div>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', alignItems:'start' }} className="contact-grid">

          {/* Left */}
          <motion.div initial={{ opacity:0, x:-18 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <div style={{ background:'#fffdf8', border:'2.5px solid #1a1612', borderRadius:16, padding:'1.1rem', marginBottom:'1.5rem', position:'relative' }}>
              <div style={{ position:'absolute', bottom:-14, left:28, width:12, height:12, background:'#fffdf8', border:'2.5px solid #1a1612', borderRadius:'50%' }}/>
              <p style={{ fontFamily:"'Shippori Mincho',serif", fontStyle:'italic', fontSize:'.9rem', color:'#5c534a', lineHeight:1.8, margin:0 }}>
                "Every great story starts with a single panel. I'm actively seeking internships, collaborations, and full-time roles in data science."
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:'.3rem', marginTop:'.6rem' }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:'#1a1612', display:'inline-block' }}/>
                <span style={{ width:5, height:5, borderRadius:'50%', background:'#8a7d72', display:'inline-block' }}/>
                <span style={{ width:3, height:3, borderRadius:'50%', background:'#c8bfb4', display:'inline-block' }}/>
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'.4rem' }}>
              {[
                { Icon:Mail,   label:personal.email,        href:'mailto:'+personal.email },
                { Icon:Phone,  label:personal.phone,        href:'tel:'+personal.phone },
                { Icon:MapPin, label:personal.location,     href:null },
                { Icon:Github, label:'github.com/threed2y', href:personal.github },
              ].map(({ Icon, label, href }) => (
                <div key={label} style={{ display:'flex', alignItems:'center', gap:'.75rem', padding:'.65rem 1rem', background:'#fff', border:'2.5px solid #1a1612', transition:'border-color .18s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor='#cc1a1a'}
                  onMouseLeave={e => e.currentTarget.style.borderColor='#1a1612'}
                >
                  <div style={{ width:30, height:30, background:'#1a1612', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'background .18s' }}
                    onMouseEnter={e => e.currentTarget.style.background='#cc1a1a'}
                    onMouseLeave={e => e.currentTarget.style.background='#1a1612'}
                  >
                    <Icon size={13} color="white"/>
                  </div>
                  {href
                    ? <a href={href} target={href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                        style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.7rem', color:'#5c534a', textDecoration:'none', transition:'color .18s' }}
                        onMouseEnter={e => e.currentTarget.style.color='#cc1a1a'}
                        onMouseLeave={e => e.currentTarget.style.color='#5c534a'}
                      >{label}</a>
                    : <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.7rem', color:'#5c534a' }}>{label}</span>
                  }
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity:0, x:18 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <form onSubmit={e => { e.preventDefault(); window.location.href='mailto:'+personal.email; }}
              style={{ background:'#fff', border:'4px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', padding:'1.5rem', display:'flex', flexDirection:'column', gap:'1rem' }}
            >
              {[
                { id:'name',  label:'YOUR NAME',  type:'text',  ph:'e.g. Miyamoto Musashi' },
                { id:'email', label:'YOUR EMAIL', type:'email', ph:'you@example.com' },
              ].map(f => (
                <div key={f.id}>
                  <label style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.6rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#8a7d72', display:'block', marginBottom:'.4rem' }}>{f.label}</label>
                  <input type={f.type} required placeholder={f.ph}
                    style={{ width:'100%', border:'2px solid #1a1612', background:'#f8f5f0', padding:'.6rem .75rem', fontFamily:"'Kalam',cursive", fontSize:'.9rem', color:'#1a1612', boxSizing:'border-box', outline:'none', transition:'box-shadow .18s' }}
                    onFocus={e => e.currentTarget.style.boxShadow='3px 3px 0 #1a1612'}
                    onBlur={e => e.currentTarget.style.boxShadow='none'}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.6rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#8a7d72', display:'block', marginBottom:'.4rem' }}>YOUR MESSAGE</label>
                <textarea rows={4} required placeholder="What's on your mind?"
                  style={{ width:'100%', border:'2px solid #1a1612', background:'#f8f5f0', padding:'.6rem .75rem', fontFamily:"'Kalam',cursive", fontSize:'.9rem', color:'#1a1612', resize:'none', boxSizing:'border-box', outline:'none', transition:'box-shadow .18s' }}
                  onFocus={e => e.currentTarget.style.boxShadow='3px 3px 0 #1a1612'}
                  onBlur={e => e.currentTarget.style.boxShadow='none'}
                />
              </div>
              <button type="submit" className="btn-manga" style={{ width:'100%', textAlign:'center', fontSize:'1rem', letterSpacing:'.1em' }}>
                SEND IT! 送信
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:700px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

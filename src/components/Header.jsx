import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-40px' }} transition={{ duration:.38, delay: index*.07 }}
      style={{ background:'#fff', border:'4px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', display:'flex', flexDirection:'column', position:'relative', transition:'box-shadow .15s,transform .15s', overflow:'hidden' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow='6px 6px 0 #cc1a1a'; e.currentTarget.style.transform='translate(-1px,-1px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow='4px 4px 0 #1a1612'; e.currentTarget.style.transform='none'; }}
    >
      {/* number stamp */}
      <div style={{ position:'absolute', top:'.75rem', right:'.75rem', width:30, height:30, background:'#1a1612', display:'flex', alignItems:'center', justifyContent:'center', zIndex:2 }}>
        <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.65rem', color:'#f5f1ea' }}>{String(index+1).padStart(2,'0')}</span>
      </div>

      {project.featured && (
        <div style={{ position:'absolute', top:0, left:0, background:'#cc1a1a', padding:'1px 10px', zIndex:2 }}>
          <span style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.58rem', letterSpacing:'.18em', textTransform:'uppercase', color:'white' }}>FEATURED</span>
        </div>
      )}

      <div style={{ padding:'1.1rem', paddingTop: project.featured ? '1.75rem' : '1.1rem', display:'flex', flexDirection:'column', flex:1 }}>
        <h3 style={{ fontFamily:"'Bangers',cursive", fontSize:'1.35rem', color:'#1a1612', letterSpacing:'.04em', lineHeight:1.1, paddingRight:'2.5rem', margin:'0 0 .3rem' }}>
          {project.title.toUpperCase()}
        </h3>
        <div style={{ width:'3rem', height:'2.5px', background:'#1a1612', marginBottom:'.7rem', transition:'width .3s,background .3s' }}
          ref={el => el && el.closest('[data-hovered]') && (el.style.width='100%')}
        />
        <p style={{ fontFamily:"'Kalam',cursive", fontSize:'.88rem', fontStyle:'italic', color:'#5c534a', lineHeight:1.6, flex:1, marginBottom:'1rem', margin:'0 0 .9rem' }}>
          {project.description}
        </p>
        {project.stars && (
          <div style={{ display:'flex', alignItems:'center', gap:'.4rem', marginBottom:'.6rem' }}>
            <Star size={11} fill="#cc1a1a" stroke="#cc1a1a"/>
            <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.65rem', color:'#8a7d72' }}>{project.stars} stars</span>
          </div>
        )}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem', marginBottom:'.85rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.6rem', padding:'1px 7px', border:'1.5px solid #1a1612', color:'#1a1612', letterSpacing:'.04em' }}>{tag}</span>
          ))}
        </div>
        <div style={{ display:'flex', gap:'1rem', paddingTop:'.7rem', borderTop:'2px solid rgba(10,8,6,.08)', marginTop:'auto' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ display:'flex', alignItems:'center', gap:'.4rem', fontFamily:"'Share Tech Mono',monospace", fontSize:'.65rem', color:'#8a7d72', textDecoration:'none', transition:'color .15s' }}
            onMouseEnter={e => e.currentTarget.style.color='#1a1612'}
            onMouseLeave={e => e.currentTarget.style.color='#8a7d72'}
          >
            <Github size={12}/> CODE
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              style={{ display:'flex', alignItems:'center', gap:'.4rem', fontFamily:"'Share Tech Mono',monospace", fontSize:'.65rem', color:'#cc1a1a', textDecoration:'none', transition:'color .15s' }}
              onMouseEnter={e => e.currentTarget.style.color='#e83030'}
              onMouseLeave={e => e.currentTarget.style.color='#cc1a1a'}
            >
              <ExternalLink size={12}/> LIVE DEMO
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

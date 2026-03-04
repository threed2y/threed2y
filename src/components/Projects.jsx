import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" style={{ background:'#eae5dc', padding:'5rem 1.5rem', position:'relative' }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(10,8,6,.02) 10px,rgba(10,8,6,.02) 11px)',
      }}/>
      <div style={{ maxWidth:'72rem', margin:'0 auto', position:'relative' }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:'2.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1rem' }}>
            <div style={{ flex:1, height:'2.5px', background:'#1a1612' }}/>
            <div style={{ background:'#cc1a1a', border:'3px solid #1a1612', boxShadow:'4px 4px 0 #1a1612', padding:'.4rem 1.25rem' }}>
              <span style={{ fontFamily:"'Bangers',cursive", color:'white', fontSize:'1rem', letterSpacing:'.05em' }}>CHAPTER 002</span>
            </div>
            <div style={{ flex:1, height:'2.5px', background:'#1a1612' }}/>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', flexWrap:'wrap', gap:'.5rem' }}>
            <h2 style={{ fontFamily:"'Bangers',cursive", fontSize:'clamp(2.8rem,7vw,4.5rem)', lineHeight:.95, color:'#1a1612', letterSpacing:'.04em', textShadow:'3px 3px 0 rgba(10,8,6,.1)', margin:0 }}>PROJECTS</h2>
            <span style={{ fontFamily:"'Bangers',cursive", fontSize:'clamp(2.5rem,6vw,4rem)', color:'rgba(10,8,6,.06)', letterSpacing:'.06em', lineHeight:1 }}>BANG!</span>
          </div>
          <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.62rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#8a7d72', marginTop:'.3rem' }}>Selected works — 作品集</div>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1.25rem' }} className="proj-grid">
          {displayed.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
        </div>

        {!showAll && projects.length > 4 && (
          <div style={{ textAlign:'center', marginTop:'2.5rem' }}>
            <button onClick={() => setShowAll(true)} className="btn-manga-outline">
              SHOW ALL ({projects.length - 4} MORE)
            </button>
          </div>
        )}
      </div>
      <style>{`@media(max-width:600px){.proj-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

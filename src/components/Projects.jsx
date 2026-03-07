import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" style={{ background: '#080808', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div className="scanlines" style={{ position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none' }}/>
      <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: '#888', letterSpacing: '0.25em', marginBottom: '0.5rem' }}>CASE FILE ARCHIVE</div>
          <h2 style={{ fontFamily: "'Special Elite', cursive", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#ede9e0', letterSpacing: '0.04em', textShadow: '2px 2px 0 #000', margin: '0 0 0.3rem' }}>
            CASE FILES
          </h2>
          <div style={{ width: '3rem', height: 2, background: '#c41e1e', boxShadow: '0 0 8px rgba(196,30,30,0.5)', marginBottom: '0.5rem' }}/>
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#888', letterSpacing: '0.15em' }}>Selected investigations — evidence on file</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#282828' }} className="proj-grid">
          {displayed.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
        </div>

        {!showAll && projects.length > 4 && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button onClick={() => setShowAll(true)} className="btn-noir">
              OPEN ARCHIVE ({projects.length - 4} MORE FILES)
            </button>
          </div>
        )}
      </div>
      <style>{`@media(max-width:640px){.proj-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

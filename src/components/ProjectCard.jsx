import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ background: '#0e0e0e', padding: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'background 0.2s', cursor: 'default' }}
      onMouseEnter={e => e.currentTarget.style.background = '#111'}
      onMouseLeave={e => e.currentTarget.style.background = '#0d0d0d'}
    >
      {/* top accent line — lights up red on hover */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: project.featured ? 'linear-gradient(90deg,#c41e1e,transparent)' : '#1a1a1a', transition: 'background 0.3s' }}/>

      {/* case number */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.1em' }}>
        #{String(index + 1).padStart(3, '0')}
      </div>

      {project.featured && (
        <div style={{ marginBottom: '0.6rem' }}>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.52rem', color: '#c41e1e', letterSpacing: '0.2em', border: '1px solid #c41e1e', padding: '1px 8px' }}>
            PRIORITY CASE
          </span>
        </div>
      )}

      <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: '1.2rem', color: '#ede9e0', letterSpacing: '0.04em', margin: '0 0 0.5rem', lineHeight: 1.2, paddingRight: '2rem' }}>
        {project.title}
      </h3>

      <div style={{ width: '2rem', height: '1px', background: '#c41e1e', marginBottom: '0.75rem' }}/>

      <p style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '0.82rem', color: '#aaa', lineHeight: 1.7, margin: '0 0 1rem' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
        {project.tags.map(tag => (
          <span key={tag} className="noir-tag">{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid #1a1a1a' }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#888', textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#aaa'}
          onMouseLeave={e => e.currentTarget.style.color = '#4a4a4a'}
        >
          <Github size={11}/> EVIDENCE
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#c41e1e', textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e83030'}
            onMouseLeave={e => e.currentTarget.style.color = '#c41e1e'}
          >
            <ExternalLink size={11}/> LIVE SCENE
          </a>
        )}
      </div>
    </motion.div>
  );
}

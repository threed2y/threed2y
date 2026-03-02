import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="panel-thick group flex flex-col h-full bg-white hover:shadow-[6px_6px_0_#cc1a1a] transition-all duration-200"
    >
      <div className="absolute top-3 right-3 w-8 h-8 bg-ink-900 flex items-center justify-center z-10">
        <span className="font-mono text-xs text-paper-50">{String(index + 1).padStart(2, '0')}</span>
      </div>

      {project.featured && (
        <div className="absolute top-0 left-0 bg-red-manga px-3 py-0.5 z-10">
          <span className="manga-caption" style={{ color: 'white' }}>FEATURED</span>
        </div>
      )}

      <div className="p-5 pt-8 flex flex-col h-full">
        <h3 className="manga-title text-2xl text-ink-900 mb-1 leading-tight group-hover:text-red-manga transition-colors pr-8">
          {project.title.toUpperCase()}
        </h3>

        <div className="w-12 h-0.5 bg-ink-900 group-hover:w-full group-hover:bg-red-manga transition-all duration-300 mb-3" style={{ height: '2.5px' }} />

        <p className="font-body text-sm text-ink-500 leading-relaxed flex-grow mb-4 italic">
          {project.description}
        </p>

        {project.stars && (
          <div className="flex items-center gap-1.5 mb-3">
            <Star size={11} className="fill-red-manga stroke-red-manga" />
            <span className="font-mono text-xs text-ink-400">{project.stars} stars</span>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="ink-tag">{tag}</span>
          ))}
        </div>

        <div className="flex gap-4 pt-3 mt-auto" style={{ borderTop: '2px solid rgba(10,8,6,0.1)' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-ink-400 hover:text-ink-900 transition-colors no-underline"
          >
            <Github size={12} /> CODE
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-red-manga hover:text-red-light transition-colors no-underline"
            >
              <ExternalLink size={12} /> LIVE DEMO
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="ink-card panel-border group relative flex flex-col h-full"
      style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
    >
      {/* Top accent line */}
      {project.featured && (
        <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blood to-transparent" />
      )}

      {/* Panel number — manga style */}
      <div className="absolute top-4 right-5 font-display text-4xl font-bold select-none"
        style={{ color: 'rgba(94,80,72,0.2)', WebkitTextStroke: '1px rgba(94,80,72,0.15)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="p-6 flex flex-col h-full">
        {/* Chapter marker */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-px bg-blood/60" />
          <span className="chapter-label">{project.featured ? 'Featured' : 'Project'}</span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-rice-50 mb-3 group-hover:text-gold transition-colors duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-base text-ash leading-relaxed flex-grow mb-5 italic">
          {project.description}
        </p>

        {/* Stars */}
        {project.stars && (
          <div className="flex items-center gap-1.5 text-gold/60 mb-4">
            <Star size={11} />
            <span className="font-mono text-xs">{project.stars}</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="tag-sumi">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 border-t border-sumi-600/30 pt-4 mt-auto">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-sumi-400 hover:text-gold transition-colors"
          >
            <Github size={13} />
            <span>Source</span>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-sumi-400 hover:text-blood transition-colors"
            >
              <ExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group flex flex-col h-full relative overflow-hidden"
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="text-xs font-mono text-acid/70 bg-acid/10 border border-acid/20 rounded px-2 py-0.5">
            featured
          </span>
        </div>
      )}

      {/* Number */}
      <div className="font-mono text-5xl font-black text-ink-700 select-none mb-4 group-hover:text-ink-600 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-ink-50 mb-2 group-hover:text-acid transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-ink-100 leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      {/* Stars */}
      {project.stars && (
        <div className="flex items-center gap-1 text-acid/60 mb-4">
          <Star size={12} />
          <span className="font-mono text-xs">{project.stars}</span>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-ink-100 hover:text-acid transition-colors"
        >
          <Github size={14} />
          Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-ink-100 hover:text-acid transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

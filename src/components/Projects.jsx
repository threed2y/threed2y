import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Background kanji watermark */}
      <div className="absolute right-8 top-20 select-none pointer-events-none opacity-[0.03]"
        style={{ fontSize: '20rem', fontFamily: '"Shippori Mincho"', fontWeight: 800, color: '#c9a84c', lineHeight: 1 }}
      >作</div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-blood" />
            <span className="chapter-label">Chapter 02 — Works</span>
          </div>
          <h2 className="brush-heading text-5xl md:text-6xl">
            Selected<br />
            <span className="text-gold">Projects</span>
          </h2>
          <p className="font-display text-xs text-sumi-500 tracking-[0.3em] mt-2">作品集</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayed.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {!showAll && projects.length > 4 && (
          <div className="text-center mt-12">
            <button onClick={() => setShowAll(true)} className="ink-btn text-sm">
              View All Works ({projects.length - 4} more)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

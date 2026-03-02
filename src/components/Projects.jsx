import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative" style={{ background: '#f2f0eb' }}>
      <div className="stripe-bg absolute inset-0 opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="chapter-divider mb-4">
            <span className="panel-red px-4 py-1.5">
              <span className="manga-title text-white text-lg">CHAPTER 002</span>
            </span>
          </div>
          <div className="flex items-end flex-wrap gap-2">
            <h2 className="manga-title leading-none" style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)' }}>PROJECTS</h2>
            <span className="sfx mb-1" style={{ fontSize: '4rem', opacity: 0.08 }}>BANG!</span>
          </div>
          <div className="manga-caption mt-1">Selected works — 作品集</div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {displayed.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {!showAll && projects.length > 4 && (
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(true)} className="btn-manga-outline">
              SHOW ALL ({projects.length - 4} MORE)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

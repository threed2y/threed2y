import { motion } from 'framer-motion';
import { skills } from '../data';

const ICONS = {
  'Data & Analytics': '数',
  'Machine Learning': '学',
  'Visualization & BI': '視',
  'Tools & Platforms': '器',
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative" style={{ background: 'linear-gradient(180deg, #0d0b08 0%, #161310 50%, #0d0b08 100%)' }}>
      <div className="absolute left-8 top-20 select-none pointer-events-none opacity-[0.03]"
        style={{ fontSize: '20rem', fontFamily: '"Shippori Mincho"', fontWeight: 800, color: '#c9a84c', lineHeight: 1 }}
      >技</div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-blood" />
            <span className="chapter-label">Chapter 03 — Arsenal</span>
          </div>
          <h2 className="brush-heading text-5xl md:text-6xl">
            Technical<br />
            <span className="text-gold">Skills</span>
          </h2>
          <p className="font-display text-xs text-sumi-500 tracking-[0.3em] mt-2">技術</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="ink-card panel-border group p-6 relative"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              {/* Large kanji icon */}
              <div className="font-display text-5xl font-bold mb-4 transition-all duration-300 group-hover:text-gold"
                style={{ color: 'rgba(94,80,72,0.35)' }}
              >
                {ICONS[skill.category]}
              </div>

              <h3 className="font-display font-bold text-sm text-rice-200 mb-1 tracking-wide">
                {skill.category}
              </h3>
              <div className="w-8 h-0.5 bg-blood/50 mb-4" />

              <ul className="space-y-2">
                {skill.items.map(item => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="text-blood/50 text-xs">—</span>
                    <span className="font-body text-sm text-ash">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

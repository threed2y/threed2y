import { motion } from 'framer-motion';
import { experience, education } from '../data';

const typeKanji = { Internship: '修', Leadership: '将', Athletics: '体', Education: '学' };
const typeColor = { Internship: '#8b1a1a', Leadership: '#c9a84c', Athletics: '#7a3b1e', Education: '#5a5048' };

export default function Experience() {
  const all = [
    ...experience.map(e => ({ ...e })),
    ...education.map(e => ({ role: e.degree, company: e.institution, period: e.period, type: 'Education', location: e.location || 'Vadodara', highlights: e.courses ? [`GPA: ${e.gpa || '—'}`, ...e.courses.slice(0, 3).map(c => c)] : [], edu: e })),
  ];

  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute right-8 bottom-20 select-none pointer-events-none opacity-[0.03]"
        style={{ fontSize: '18rem', fontFamily: '"Shippori Mincho"', fontWeight: 800, color: '#c9a84c', lineHeight: 1 }}
      >道</div>

      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-blood" />
            <span className="chapter-label">Chapter 04 — The Path</span>
          </div>
          <h2 className="brush-heading text-5xl md:text-6xl">
            Experience<br />
            <span className="text-gold">& Journey</span>
          </h2>
          <p className="font-display text-xs text-sumi-500 tracking-[0.3em] mt-2">経験の道</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* The path — vertical sword line */}
          <div className="absolute left-7 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, #8b1a1a 10%, rgba(94,80,72,0.4) 50%, #8b1a1a 90%, transparent)' }}
          />

          <div className="space-y-8">
            {all.map((item, i) => {
              const kanji = typeKanji[item.type] || '道';
              const accent = typeColor[item.type] || '#5a5048';
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Kanji node */}
                  <div className="absolute left-0 w-14 h-14 flex items-center justify-center"
                    style={{ background: '#161310', border: `1px solid ${accent}40` }}
                  >
                    <span className="font-display text-2xl font-bold" style={{ color: accent }}>{kanji}</span>
                  </div>

                  <div className="ink-card p-5 relative group hover:border-gold/30 transition-colors duration-300">
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: accent + '60' }} />

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold text-rice-50 text-base leading-tight">{item.role}</h3>
                      <span className="font-mono text-xs px-2 py-0.5 tracking-widest"
                        style={{ color: accent, background: accent + '15', border: `1px solid ${accent}30` }}
                      >
                        {item.type.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                      <span className="font-body text-sm italic" style={{ color: accent === '#c9a84c' ? '#c9a84c' : '#9e9488' }}>{item.company}</span>
                      <span className="text-sumi-500">·</span>
                      <span className="font-mono text-xs text-sumi-400">{item.period}</span>
                    </div>

                    <ul className="space-y-1.5">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm text-ash font-body leading-relaxed">
                          <span className="flex-shrink-0 mt-1" style={{ color: accent + '80' }}>—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

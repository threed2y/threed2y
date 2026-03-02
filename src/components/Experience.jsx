import { motion } from 'framer-motion';
import { experience, education } from '../data';

const TYPE_STYLE = {
  Internship: { bg: '#0a0806', label: 'INTERN' },
  Leadership: { bg: '#cc1a1a', label: 'LEADER' },
  Athletics:  { bg: '#3d3530', label: 'ATHLETE' },
  Education:  { bg: '#3d3530', label: 'STUDY' },
};

export default function Experience() {
  const all = [
    ...experience,
    ...education.map(e => ({
      role: e.degree,
      company: e.institution,
      period: e.period,
      type: 'Education',
      location: e.location || 'Vadodara',
      highlights: e.gpa
        ? ['GPA: ' + e.gpa, ...(e.courses || []).slice(0, 3)]
        : (e.courses || []).slice(0, 3),
    })),
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#f2f0eb' }}>
      <div className="halftone absolute inset-0 opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="chapter-divider mb-4">
            <span className="panel-red px-4 py-1.5">
              <span className="manga-title text-white text-lg">CHAPTER 004</span>
            </span>
          </div>
          <div className="flex items-end flex-wrap gap-2">
            <h2 className="manga-title leading-none" style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)' }}>THE PATH</h2>
            <span className="sfx mb-1" style={{ fontSize: '4rem', opacity: 0.08 }}>DASH!</span>
          </div>
          <div className="manga-caption mt-1">Experience & education — 経験</div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 bg-ink-900" style={{ width: '2.5px' }} />

          <div className="space-y-6">
            {all.map((item, i) => {
              const style = TYPE_STYLE[item.type] || TYPE_STYLE.Education;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-0 w-10 h-10 border-2 border-ink-900 flex items-center justify-center"
                    style={{ background: style.bg }}
                  >
                    <span className="font-mono text-center leading-tight" style={{ fontSize: '0.55rem', color: 'white' }}>
                      {style.label}
                    </span>
                  </div>

                  <div className="panel-thick bg-white hover:shadow-[5px_5px_0_#cc1a1a] transition-all duration-200 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="manga-title text-lg text-ink-900 leading-tight">
                        {item.role.toUpperCase()}
                      </h3>
                      <span className="ink-tag-fill">{item.type.toUpperCase()}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="font-body text-sm italic text-red-manga">{item.company}</span>
                      <span className="text-ink-400">·</span>
                      <span className="font-mono text-xs text-ink-400">{item.period}</span>
                    </div>
                    <ul className="space-y-1.5 pt-2" style={{ borderTop: '1.5px solid rgba(10,8,6,0.1)' }}>
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 font-body text-sm text-ink-500 leading-relaxed">
                          <span className="text-red-manga font-bold flex-shrink-0">▶</span>
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

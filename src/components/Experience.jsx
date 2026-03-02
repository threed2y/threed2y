import { motion } from 'framer-motion';
import { experience, education } from '../data';

const TYPE_STYLE = {
  Internship: { bg: '#0a0806', text: 'white', label: 'INTERN' },
  Leadership: { bg: '#cc1a1a', text: 'white', label: 'LEADER' },
  Athletics:  { bg: '#3d3530', text: 'white', label: 'ATHLETE' },
  Education:  { bg: '#f2f0eb', text: '#0a0806', label: 'STUDY' },
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
        ? [`GPA: ${e.gpa}`, ...(e.courses || []).slice(0, 3)]
        : (e.courses || []).slice(0, 3),
    })),
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-paper-200 relative">
      <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="chapter-divider mb-4">
            <span className="panel-red px-4 py-1.5">
              <span className="manga-title text-white text-lg">CHAPTER 004</span>
            </span>
          </div>
          <div className="flex items-end gap-4 flex-wrap">
            <h2 className="manga-title text-[clamp(3rem,8vw,5rem)] text-ink-900 leading-none">THE PATH</h2>
            <span className="sfx text-6xl text-ink-900/10 mb-2">DASH!</span>
          </div>
          <div className="manga-caption text-ink-500 mt-1">Experience & education — 経験</div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical ink line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2.5px] bg-ink-900" />

          <div className="space-y-6">
            {all.map((item, i) => {
              const style = TYPE_STYLE[item.type] || TYPE_STYLE.Education;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pl-14"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 w-10 h-10 border-[2.5px] border-ink-900 flex items-center justify-center"
                    style={{ background: style.bg }}
                  >
                    <span className="font-mono text-[9px] font-bold leading-tight text-center px-0.5"
                      style={{ color: style.text }}
                    >{style.label}</span>
                  </div>

                  {/* Card */}
                  <div className="panel-thick bg-white group hover:shadow-[5px_5px_0_#cc1a1a] transition-all duration-200">
                    <div className="p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h3 className="manga-title text-lg text-ink-900 leading-tight">
                          {item.role.toUpperCase()}
                        </h3>
                        <span className="ink-tag-fill font-mono text-[10px]">{item.type.toUpperCase()}</span>
                      </div>

                      <div className="flex flex-wrap gap-x-3 gap-y-0.5 mb-3">
                        <span className="font-body text-sm text-red-manga italic">{item.company}</span>
                        <span className="text-ink-400">·</span>
                        <span className="font-mono text-xs text-ink-500">{item.period}</span>
                      </div>

                      <ul className="space-y-1.5 border-t-[1.5px] border-ink-900/10 pt-2">
                        {item.highlights.map((h, j) => (
                          <li key={j} className="flex gap-2 text-sm text-ink-600 font-body leading-relaxed">
                            <span className="text-red-manga flex-shrink-0 font-bold">▶</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
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

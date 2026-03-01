import { motion } from 'framer-motion';
import { Briefcase, Users, Award, GraduationCap } from 'lucide-react';
import { experience, education } from '../data';

const typeIcon = {
  Internship: Briefcase,
  Leadership: Users,
  Athletics: Award,
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-acid mb-3">// background</p>
          <h2 className="section-heading">Experience<span className="text-acid">.</span></h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ink-600" />

          <div className="space-y-10">
            {experience.map((item, i) => {
              const Icon = typeIcon[item.type] || Briefcase;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-12 h-12 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center">
                    <Icon size={18} className="text-acid" />
                  </div>

                  <div className="card">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-display font-bold text-ink-50">{item.role}</h3>
                      <span className="font-mono text-xs text-acid/70 bg-acid/10 px-2 py-0.5 rounded border border-acid/20">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="font-body text-sm text-acid">{item.company}</span>
                      <span className="font-mono text-xs text-ink-100 self-center">·</span>
                      <span className="font-mono text-xs text-ink-100">{item.period}</span>
                      <span className="font-mono text-xs text-ink-100 self-center">·</span>
                      <span className="font-body text-xs text-ink-100">{item.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm text-ink-100 font-body leading-relaxed">
                          <span className="text-acid/50 flex-shrink-0 mt-1">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}

            {/* Education */}
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (experience.length + i) * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 w-12 h-12 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center">
                  <GraduationCap size={18} className="text-acid" />
                </div>
                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-ink-50">{edu.degree}</h3>
                    <span className="font-mono text-xs text-acid/70 bg-acid/10 px-2 py-0.5 rounded border border-acid/20">
                      Education
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="font-body text-sm text-acid">{edu.institution}</span>
                    <span className="font-mono text-xs text-ink-100 self-center">·</span>
                    <span className="font-mono text-xs text-ink-100">{edu.period}</span>
                    {edu.gpa && (
                      <>
                        <span className="font-mono text-xs text-ink-100 self-center">·</span>
                        <span className="font-mono text-xs text-ink-100">GPA: {edu.gpa}</span>
                      </>
                    )}
                  </div>
                  {edu.courses && (
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((c) => (
                        <span key={c} className="tag">{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

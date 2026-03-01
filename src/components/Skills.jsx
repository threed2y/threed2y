import { motion } from 'framer-motion';
import { BarChart2, Brain, PieChart, Wrench } from 'lucide-react';
import { skills } from '../data';

const iconMap = { BarChart2, Brain, PieChart, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-ink-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-acid mb-3">// technical stack</p>
          <h2 className="section-heading">Skills<span className="text-acid">.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group"
              >
                <div className="w-10 h-10 rounded-xl bg-acid/10 border border-acid/20 flex items-center justify-center mb-5 group-hover:bg-acid/20 transition-colors">
                  {Icon && <Icon size={18} className="text-acid" />}
                </div>
                <h3 className="font-display font-bold text-sm text-ink-50 mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-acid/60 flex-shrink-0" />
                      <span className="font-body text-sm text-ink-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

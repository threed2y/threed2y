import { motion } from 'framer-motion';
import { skills } from '../data';

const KANJI = ['数', '学', '視', '器'];
const SFXS = ['CRUNCH!', 'ZAP!', 'BOOM!', 'CLICK!'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-paper-100 relative overflow-hidden">

      {/* Big halftone bg dot */}
      <div className="absolute right-0 top-0 w-96 h-96 halftone-red rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="chapter-divider mb-4">
            <span className="panel-red px-4 py-1.5">
              <span className="manga-title text-white text-lg">CHAPTER 003</span>
            </span>
          </div>
          <div className="flex items-end gap-4 flex-wrap">
            <h2 className="manga-title text-[clamp(3rem,8vw,5rem)] text-ink-900 leading-none">ARSENAL</h2>
            <span className="sfx text-6xl text-ink-900/10 mb-2">SLASH!</span>
          </div>
          <div className="manga-caption text-ink-500 mt-1">Technical skills — 技術スキル</div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="panel-thick bg-white group hover:shadow-[6px_6px_0_#cc1a1a] transition-all duration-200"
            >
              {/* Kanji header block */}
              <div className="bg-ink-900 p-3 flex items-center justify-between group-hover:bg-red-manga transition-colors duration-200">
                <span className="font-serif text-3xl text-paper-50 font-bold">{KANJI[i]}</span>
                <span className="sfx text-sm text-paper-50/40">{SFXS[i]}</span>
              </div>

              <div className="p-4">
                <h3 className="manga-title text-sm text-ink-900 mb-1 leading-tight">
                  {skill.category.toUpperCase()}
                </h3>
                <div className="w-8 h-[2px] bg-red-manga mb-3" />

                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 bg-ink-900 flex-shrink-0 group-hover/item:bg-red-manga transition-colors" />
                      <span className="font-body text-sm text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

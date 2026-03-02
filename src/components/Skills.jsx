import { motion } from 'framer-motion';
import { skills } from '../data';

const KANJI = ['数', '学', '視', '器'];
const SFXS  = ['CRUNCH!', 'ZAP!', 'BOOM!', 'CLICK!'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#fafaf8' }}>
      <div className="halftone-red absolute right-0 top-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ transform: 'translate(30%, -30%)' }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="chapter-divider mb-4">
            <span className="panel-red px-4 py-1.5">
              <span className="manga-title text-white text-lg">CHAPTER 003</span>
            </span>
          </div>
          <div className="flex items-end flex-wrap gap-2">
            <h2 className="manga-title leading-none" style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)' }}>ARSENAL</h2>
            <span className="sfx mb-1" style={{ fontSize: '4rem', opacity: 0.08 }}>SLASH!</span>
          </div>
          <div className="manga-caption mt-1">Technical skills — 技術スキル</div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="panel-thick bg-white group hover:shadow-[6px_6px_0_#cc1a1a] transition-all duration-200 overflow-hidden"
            >
              <div className="bg-ink-900 p-3 flex items-center justify-between group-hover:bg-red-manga transition-colors duration-200">
                <span className="font-serif text-3xl font-bold text-white">{KANJI[i]}</span>
                <span className="manga-title text-sm opacity-30" style={{ color: 'white' }}>{SFXS[i]}</span>
              </div>
              <div className="p-4">
                <div className="manga-title text-sm text-ink-900 mb-1">{skill.category.toUpperCase()}</div>
                <div className="mb-3" style={{ width: '2rem', height: '2px', background: '#cc1a1a' }} />
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ink-900 flex-shrink-0 group-hover:bg-red-manga transition-colors" />
                      <span className="font-body text-sm text-ink-500">{item}</span>
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

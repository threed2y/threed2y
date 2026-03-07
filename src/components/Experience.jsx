import { motion } from 'framer-motion';
import { experience, education } from '../data';

const TYPE_CFG = {
  Internship: { clr: '#c41e1e', label: 'FIELD WORK' },
  Leadership: { clr: '#b8943c', label: 'COMMAND' },
  Athletics:  { clr: '#4a7a4a', label: 'PHYSICAL' },
  Education:  { clr: '#7a7a7a', label: 'ACADEMY' },
};

export default function Experience() {
  const all = [
    ...experience,
    ...education.map(e => ({
      role: e.degree, company: e.institution, period: e.period, type: 'Education',
      highlights: e.gpa ? ['GPA: ' + e.gpa, ...(e.courses || []).slice(0, 3)] : (e.courses || []).slice(0, 3),
    })),
  ];

  return (
    <section id="experience" style={{ background: '#080808', padding: '5rem 1.5rem', position: 'relative' }}>
      <div className="rain-bg" style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none' }}/>

      <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: '#888', letterSpacing: '0.25em', marginBottom: '0.5rem' }}>OPERATIVE HISTORY</div>
          <h2 style={{ fontFamily: "'Special Elite', cursive", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#ede9e0', letterSpacing: '0.04em', textShadow: '2px 2px 0 #000', margin: '0 0 0.3rem' }}>THE RECORD</h2>
          <div style={{ width: '3rem', height: 2, background: '#c41e1e', boxShadow: '0 0 8px rgba(196,30,30,0.5)' }}/>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline spine */}
          <div style={{ position: 'absolute', left: 15, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #c41e1e, #2e2e2e, transparent)' }}/>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {all.map((item, i) => {
              const cfg = TYPE_CFG[item.type] || TYPE_CFG.Education;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ paddingLeft: '3rem', position: 'relative' }}
                >
                  {/* Node */}
                  <div style={{ position: 'absolute', left: 8, top: 6, width: 15, height: 15, border: `1px solid ${cfg.clr}`, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 8px ${cfg.clr}44` }}>
                    <div style={{ width: 5, height: 5, background: cfg.clr }}/>
                  </div>

                  <div style={{ border: '1px solid #303030', background: '#0e0e0e', padding: '1.1rem 1.25rem', position: 'relative', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#2e2e2e'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#1a1a1a'}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 2, background: cfg.clr, opacity: 0.6 }}/>
                    <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: '1.05rem', color: '#ede9e0', letterSpacing: '0.04em', margin: 0 }}>{item.role}</h3>
                      <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.52rem', color: cfg.clr, letterSpacing: '0.15em', border: `1px solid ${cfg.clr}44`, padding: '1px 7px' }}>{cfg.label}</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '0.8rem', fontStyle: 'italic', color: '#aaa' }}>{item.company}</span>
                      <span style={{ color: '#555' }}>·</span>
                      <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: '#888', letterSpacing: '0.08em' }}>{item.period}</span>
                    </div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid #1a1a1a', paddingTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {item.highlights.map((h, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.5rem', fontFamily: "'Libre Baskerville', serif", fontSize: '0.8rem', color: '#aaa', lineHeight: 1.6, fontStyle: 'italic' }}>
                          <span style={{ color: cfg.clr, flexShrink: 0 }}>▸</span> {h}
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

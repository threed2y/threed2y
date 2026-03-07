import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#0a0a0a', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* red fog bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 200, background: 'radial-gradient(ellipse at bottom, rgba(196,30,30,0.06), transparent)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: '#888', letterSpacing: '0.25em', marginBottom: '0.5rem' }}>OPEN A CASE</div>
          <h2 style={{ fontFamily: "'Special Elite', cursive", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#ede9e0', letterSpacing: '0.04em', textShadow: '2px 2px 0 #000', margin: '0 0 0.3rem' }}>CONTACT</h2>
          <div style={{ width: '3rem', height: 2, background: '#c41e1e', boxShadow: '0 0 8px rgba(196,30,30,0.5)' }}/>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ border: '1px solid #303030', background: '#0e0e0e', padding: '1.25rem', marginBottom: '1.25rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 2, background: '#c41e1e', opacity: 0.5 }}/>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: '#888', letterSpacing: '0.25em', marginBottom: '0.75rem' }}>▸ INTAKE STATEMENT</div>
              <p style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', color: '#aaa', lineHeight: 1.8, fontSize: '0.85rem', margin: 0 }}>
                "Every great investigation begins with a single lead. I'm actively seeking new cases — internships, collaborations, and full-time roles in data science."
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a' }}>
              {[
                { Icon: Mail,   label: 'Electronic Mail', val: personal.email,            href: 'mailto:' + personal.email },
                { Icon: Phone,  label: 'Voice Channel',   val: personal.phone,            href: 'tel:' + personal.phone },
                { Icon: MapPin, label: 'Field Office',    val: personal.location,         href: null },
                { Icon: Github, label: 'Evidence Vault',  val: 'github.com/threed2y',     href: personal.github },
              ].map(({ Icon, label, val, href }) => (
                <div key={label} style={{ background: '#0e0e0e', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#111'}
                  onMouseLeave={e => e.currentTarget.style.background = '#0d0d0d'}
                >
                  <Icon size={13} color="#c41e1e"/>
                  <div>
                    <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.52rem', color: '#888', letterSpacing: '0.15em' }}>{label}</div>
                    {href
                      ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#aaa'}
                          onMouseLeave={e => e.currentTarget.style.color = '#7a7a7a'}
                        >{val}</a>
                      : <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: '#aaa' }}>{val}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={e => { e.preventDefault(); window.location.href = 'mailto:' + personal.email; }}
              style={{ border: '1px solid #303030', background: '#0e0e0e', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #c41e1e, transparent)' }}/>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: '#888', letterSpacing: '0.25em' }}>▸ FILE A REPORT</div>

              {[
                { id: 'name',  label: 'OPERATIVE NAME',  type: 'text',  ph: 'Your name' },
                { id: 'email', label: 'CONTACT CHANNEL', type: 'email', ph: 'your@email.com' },
              ].map(f => (
                <div key={f.id}>
                  <label style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.52rem', color: '#888', letterSpacing: '0.2em', display: 'block', marginBottom: '0.35rem' }}>{f.label}</label>
                  <input type={f.type} required placeholder={f.ph}
                    style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2e2e2e', padding: '0.6rem 0.8rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem', color: '#aaa', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => e.currentTarget.style.borderColor = '#c41e1e'}
                    onBlur={e => e.currentTarget.style.borderColor = '#2e2e2e'}
                  />
                </div>
              ))}

              <div>
                <label style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.52rem', color: '#888', letterSpacing: '0.2em', display: 'block', marginBottom: '0.35rem' }}>CASE DESCRIPTION</label>
                <textarea rows={4} required placeholder="Describe your case..."
                  style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2e2e2e', padding: '0.6rem 0.8rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem', color: '#aaa', resize: 'none', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#c41e1e'}
                  onBlur={e => e.currentTarget.style.borderColor = '#2e2e2e'}
                />
              </div>

              <button type="submit" className="btn-noir" style={{ width: '100%', textAlign: 'center', fontSize: '0.78rem', letterSpacing: '0.18em' }}>
                TRANSMIT REPORT
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:700px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

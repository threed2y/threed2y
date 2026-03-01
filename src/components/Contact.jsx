import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-ink-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-acid mb-3">// say hello</p>
          <h2 className="section-heading">Contact<span className="text-acid">.</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-ink-100 text-base leading-relaxed mb-8">
              I'm actively looking for internships, freelance projects, and full-time roles in data science and analytics. 
              Whether you have an interesting problem or just want to connect — my inbox is always open.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
                { icon: MapPin, label: personal.location, href: null },
                { icon: Github, label: 'github.com/threed2y', href: personal.github },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-acid/10 border border-acid/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-acid" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="font-body text-sm text-ink-100 hover:text-acid transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="font-body text-sm text-ink-100">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${personal.email}`;
              }}
              className="card space-y-4"
            >
              <div>
                <label className="font-mono text-xs text-ink-100 mb-1.5 block">name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-ink-700 border border-ink-600 rounded-xl px-4 py-3 text-sm font-body text-ink-50 placeholder-ink-100 focus:outline-none focus:border-acid/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-ink-100 mb-1.5 block">email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-ink-700 border border-ink-600 rounded-xl px-4 py-3 text-sm font-body text-ink-50 placeholder-ink-100 focus:outline-none focus:border-acid/60 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-ink-100 mb-1.5 block">message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-ink-700 border border-ink-600 rounded-xl px-4 py-3 text-sm font-body text-ink-50 placeholder-ink-100 focus:outline-none focus:border-acid/60 transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { personal } from '../data';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-8" style={{ background: '#0a0806', borderTop: '4px solid #cc1a1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center" style={{ background: '#cc1a1a', border: '3px solid #cc1a1a' }}>
              <span className="manga-title text-white text-xl">R</span>
            </div>
            <div>
              <div className="manga-title text-paper-50 text-xl">RUPESH PANDEY</div>
              <div className="manga-caption" style={{ color: '#3d3530' }}>DATA SCIENTIST · ルペシュ</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: 'GITHUB',      href: personal.github },
              { label: 'HUGGINGFACE', href: personal.huggingface },
              { label: 'EMAIL',       href: 'mailto:' + personal.email },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest no-underline transition-colors hover:text-red-manga"
                style={{ color: '#3d3530' }}
              >{l.label}</a>
            ))}
          </div>
        </div>
        <div className="pt-4 text-center" style={{ borderTop: '1px solid #2c2620' }}>
          <span className="font-mono text-xs tracking-widest" style={{ color: '#2c2620' }}>
            © {new Date().getFullYear()} · TO BE CONTINUED... · 次回に続く →
          </span>
        </div>
      </div>
    </footer>
  );
}

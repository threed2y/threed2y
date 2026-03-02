import { personal } from '../data';

export default function Footer() {
  return (
    <footer className="bg-ink-900 border-t-4 border-red-manga px-4 sm:px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3">
            <div className="panel-red w-10 h-10 flex items-center justify-center">
              <span className="manga-title text-white text-xl">R</span>
            </div>
            <div>
              <div className="manga-title text-paper-50 text-xl">RUPESH PANDEY</div>
              <div className="manga-caption text-ink-400" style={{ color: '#5c534a' }}>DATA SCIENTIST · ルペシュ</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { label: 'GITHUB', href: personal.github },
              { label: 'HUGGINGFACE', href: personal.huggingface },
              { label: 'EMAIL', href: `mailto:${personal.email}` },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-ink-400 hover:text-red-manga transition-colors tracking-wider"
                style={{ color: '#5c534a' }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-ink-700 text-center">
          <span className="font-mono text-xs tracking-widest" style={{ color: '#3d3530' }}>
            © {new Date().getFullYear()} · TO BE CONTINUED... · 次回に続く →
          </span>
        </div>
      </div>
    </footer>
  );
}

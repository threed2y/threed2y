import { personal } from '../data';

export default function Footer() {
  return (
    <footer className="border-t px-6 py-10" style={{ borderColor: 'rgba(94,80,72,0.3)', background: '#100e0b' }}>
      <div className="max-w-6xl mx-auto">
        {/* Top divider with kanji */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex-1 h-px bg-sumi-700" />
          <span className="font-display text-2xl text-sumi-600">武</span>
          <div className="flex-1 h-px bg-sumi-700" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="font-display font-bold text-rice-100 mb-1">Rupesh Pandey</div>
            <div className="font-mono text-xs text-sumi-400 tracking-widest">ルペシュ・パンデー · DATA SCIENTIST</div>
          </div>

          <div className="flex items-center gap-6">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-sumi-400 hover:text-gold transition-colors tracking-wider"
            >
              GITHUB
            </a>
            <div className="w-px h-4 bg-sumi-700" />
            <a href={personal.huggingface} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-sumi-400 hover:text-gold transition-colors tracking-wider"
            >
              HUGGINGFACE
            </a>
            <div className="w-px h-4 bg-sumi-700" />
            <a href={`mailto:${personal.email}`}
              className="font-mono text-xs text-sumi-400 hover:text-blood transition-colors tracking-wider"
            >
              EMAIL
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-sumi-600 tracking-widest">
            © {new Date().getFullYear()} · FORGED WITH REACT + VITE · 「剣の道は終わりなし」
          </p>
        </div>
      </div>
    </footer>
  );
}

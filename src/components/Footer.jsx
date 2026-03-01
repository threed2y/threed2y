import { personal } from '../data';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-ink-100">
          © {new Date().getFullYear()} Rupesh Pandey — Built with React + Vite
        </div>
        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-ink-100 hover:text-acid transition-colors"
          >
            <Github size={13} />
            threed2y
          </a>
          <a
            href={personal.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-100 hover:text-acid transition-colors"
          >
            🤗 sleepysaurus
          </a>
        </div>
      </div>
    </footer>
  );
}

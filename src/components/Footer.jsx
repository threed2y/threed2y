import { personal } from '../data';

export default function Footer() {
  return (
    <footer style={{ background:'#050505', borderTop:'1px solid #282828', padding:'2.5rem 1.5rem', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg, transparent, #cc2222 30%, #cc2222 70%, transparent)', opacity:0.6 }}/>
      <div style={{ maxWidth:'72rem', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1.5rem' }}>

        <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
          <div style={{ width:30, height:30, border:'1px solid #cc2222', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 10px rgba(204,34,34,0.25)' }}>
            <span style={{ fontFamily:"'Special Elite',cursive", color:'#cc2222', fontSize:'0.95rem' }}>R</span>
          </div>
          <div>
            <div style={{ fontFamily:"'Special Elite',cursive", color:'#ede9e0', fontSize:'0.88rem', letterSpacing:'0.1em' }}>RUPESH PANDEY</div>
            <div style={{ fontFamily:"'Share Tech Mono',monospace", color:'#666', fontSize:'0.52rem', letterSpacing:'0.18em', marginTop:'0.1rem' }}>DATA DETECTIVE · VADODARA</div>
          </div>
        </div>

        <div style={{ display:'flex', gap:'1.5rem' }}>
          {[
            { label:'GITHUB',      href: personal.github },
            { label:'HUGGINGFACE', href: personal.huggingface },
            { label:'EMAIL',       href: 'mailto:' + personal.email },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.6rem', color:'#888', textDecoration:'none', letterSpacing:'0.15em', transition:'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color='#cc2222'}
              onMouseLeave={e => e.currentTarget.style.color='#888'}
            >{l.label}</a>
          ))}
        </div>

        <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'0.52rem', color:'#555', letterSpacing:'0.15em' }}>
          © {new Date().getFullYear()} · CASE CLOSED · END OF RECORD
        </div>
      </div>
    </footer>
  );
}

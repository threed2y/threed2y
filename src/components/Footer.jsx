import { personal } from '../data';

export default function Footer() {
  return (
    <footer style={{ background:'#1a1612', borderTop:'4px solid #cc1a1a', padding:'2.5rem 1.5rem' }}>
      <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1.5rem', marginBottom:'1.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.75rem' }}>
            <div style={{ width:38, height:38, background:'#cc1a1a', border:'3px solid #cc1a1a', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ fontFamily:"'Bangers',cursive", color:'white', fontSize:'1.25rem' }}>R</span>
            </div>
            <div>
              <div style={{ fontFamily:"'Bangers',cursive", fontSize:'1.15rem', color:'#f5f1ea', letterSpacing:'.05em' }}>RUPESH PANDEY</div>
              <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:'.58rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#3d3530', marginTop:'.15rem' }}>DATA SCIENTIST · ルペシュ</div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'1.5rem' }}>
            {[
              { label:'GITHUB',      href:personal.github },
              { label:'HUGGINGFACE', href:personal.huggingface },
              { label:'EMAIL',       href:'mailto:'+personal.email },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.65rem', color:'#3d3530', textDecoration:'none', letterSpacing:'.15em', transition:'color .18s' }}
                onMouseEnter={e => e.currentTarget.style.color='#cc1a1a'}
                onMouseLeave={e => e.currentTarget.style.color='#3d3530'}
              >{l.label}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid #2c2620', paddingTop:'1rem', textAlign:'center' }}>
          <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'.62rem', color:'#2c2620', letterSpacing:'.15em' }}>
            © {new Date().getFullYear()} · TO BE CONTINUED... · 次回に続く →
          </span>
        </div>
      </div>
    </footer>
  );
}

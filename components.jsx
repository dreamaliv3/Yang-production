// components.jsx — shared components

function useTheme() {
  const [theme, setTheme] = React.useState(document.body.getAttribute('data-theme') || 'light');
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.getAttribute('data-theme') || 'light');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);
  return theme;
}

function Brand() {
  const theme = useTheme();
  const isDark = theme === 'dark';
  return (
    <div className="brand">
      <img src={isDark ? 'assets/logo-white.png' : 'assets/logo-gold.png'} alt="Yang Production" className="brand-logo" />
    </div>
  );
}

function Nav({ route, go, openContact }) {
  const theme = useTheme();
  const isDark = theme === 'dark';
  const links = [
    { id: 'home', label: 'Index' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button onClick={() => go('home')} style={{background:'none',border:0,cursor:'pointer',padding:0,color:'inherit',justifySelf:'start'}}>
          <Brand />
        </button>
        <div className="nav-links">
          {links.map(l => (
            <button key={l.id} className="nav-link" data-active={route === l.id || (l.id === 'work' && route === 'project')} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'10px',justifySelf:'end'}}>
          <button
            onClick={() => {
              const current = document.body.getAttribute('data-theme');
              document.body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
            }}
            style={{background:'none',border:'1px solid var(--line-strong)',borderRadius:'999px',padding:'6px 12px',cursor:'pointer',color:'var(--text-dim)',fontSize:'13px',fontWeight:500,transition:'all .2s',display:'flex',alignItems:'center',gap:'6px'}}
            title="Toggle dark/light mode"
          >
            <span style={{fontSize:'14px'}}>{isDark ? '☼' : '◑'}</span>
          </button>
          <button className="nav-cta" onClick={() => go('contact')}>
            <span className="dot" />
            <span>Available</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ go }) {
  const theme = useTheme();
  const isDark = theme === 'dark';
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-mark-img">
          <img src={isDark ? 'assets/logo-white.png' : 'assets/logo-black.png'} alt="Yang Production" />
        </div>
        <div className="footer-grid">
          <div>
            <div className="foot-h">Studio</div>
            <div className="foot-list" style={{maxWidth:'40ch',color:'var(--text-dim)'}}>
              A Singapore-based film studio for conferences, corporate moments, and brand storytelling. Trusted by Airbus, Mirxes, Hai Robotics, and others.
            </div>
          </div>
          <div>
            <div className="foot-h">Pages</div>
            <div className="foot-list">
              <a onClick={() => go('home')}>Index</a>
              <a onClick={() => go('work')}>Selected Work</a>
              <a onClick={() => go('about')}>About</a>
              <a onClick={() => go('contact')}>Contact</a>
            </div>
          </div>
          <div>
            <div className="foot-h">Contact</div>
            <div className="foot-list">
              <a href="mailto:contact@yangproduction.com">contact@yangproduction.com</a>
              <a>Singapore</a>
            </div>
          </div>
          <div>
            <div className="foot-h">Elsewhere</div>
            <div className="foot-list">
              <a href="https://www.instagram.com/yangproductionsg" target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="https://youtube.com/playlist?list=PLpjHb1EYn-wKBpRMMn85jS1MN8fHvXLPo" target="_blank" rel="noreferrer">YouTube ↗</a>
              <a href="https://www.linkedin.com/company/yang-production" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://gallery.yangproduction.com/" target="_blank" rel="noreferrer">Photo Gallery ↗</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 Yang Production · Singapore</div>
          <div>Concept redesign · v1.0</div>
        </div>
      </div>
    </footer>
  );
}

function Thumb({ project, label }) {
  if (project.youtubeId) {
    return (
      <div style={{position:'relative',width:'100%',paddingBottom:'56.25%',background:'#000',borderRadius:'inherit',overflow:'hidden'}}>
        <iframe
          src={"https://www.youtube.com/embed/" + project.youtubeId + "?rel=0&modestbranding=1"}
          title={project.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',borderRadius:'inherit'}}
        />
      </div>
    );
  }
  return (
    <div className={"thumb thumb-" + project.thumb}>
      <div className="thumb-corners">
        <span>{project.tags || ((project.type||'').toUpperCase() + ' / ' + project.year)}</span>
        <span>&#9679; REC &middot; {project.runtime}</span>
      </div>
      <div className="thumb-tag">{label || project.location}</div>
    </div>
  );
}

function WorkCard({ project, span = 6, openProject }) {
  const klass = `work-card span-${span}`;
  return (
    <article className={klass} onClick={() => openProject(project.id)}>
      <div className="work-thumb">
        <div className="work-thumb-img">
          <Thumb project={project} />
        </div>
        <div className="work-arrow">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="work-meta">
        <div>
          <div className="work-name">{project.name} <em>{project.italic}</em></div>
          <div className="work-tags">{project.client}</div>
        </div>
        <div className="work-info">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  );
}

function Lightbox({ open, onClose, project }) {
  if (!open) return null;
  return (
    <div className="lbx-bg" onClick={onClose}>
      <div className="lbx-card" onClick={(e) => e.stopPropagation()}>
        <div className={`thumb thumb-${project ? project.thumb : 1}`} style={{height:'100%'}}>
          <div className="thumb-corners"><span>SHOWREEL · 2025</span><span>04:32</span></div>
          <div className="thumb-name" style={{fontSize:'48px'}}>Showreel <i>2025</i></div>
          <div className="thumb-tag">Press play (placeholder)</div>
        </div>
        <button className="lbx-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}



Object.assign(window, { Brand, Nav, Footer, Thumb, WorkCard, Lightbox });

// components.jsx — shared components

function Brand({ theme }) {
  return (
    <div className="brand">
      <img src={theme === 'dark' ? 'assets/logo-white.png' : 'assets/logo-gold.png'} alt="Yang Production" className="brand-logo" />
    </div>
  );
}

function Nav({ route, go, theme }) {
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
          <Brand theme={theme} />
        </button>
        <div className="nav-links">
          {links.map(l => (
            <button key={l.id} className="nav-link" data-active={route === l.id || (l.id === 'work' && route === 'project')} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => go('contact')}>
          <span className="dot" />
          <span>Available</span>
        </button>
      </div>
    </nav>
  );
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'fixed',
        left: '16px',
        bottom: '16px',
        zIndex: 30,
        background: 'var(--surface)',
        border: '1px solid var(--line-strong)',
        borderRadius: '12px',
        padding: '10px 14px',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.04em',
        color: 'var(--text-dim)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'color .2s, border-color .2s'
      }}
    >
      {theme === 'dark' ? '☀ Light' : '☾ Dark'}
    </button>
  );
}

function Footer({ go, theme }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-mark-img">
          <img src={theme === 'dark' ? 'assets/logo-white.png' : 'assets/logo-black.png'} alt="Yang Production" />
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
        </div>
      </div>
    </footer>
  );
}

function Thumb({ project, label }) {
  if (project.youtube) {
    return (
      <div
        className={`thumb thumb-${project.thumb || 1}`}
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${project.youtube}/maxresdefault.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="thumb-corners">
          <span>{`${(project.type||'').toUpperCase()} / ${project.year}`}</span>
          <span>{project.runtime ? `● REC · ${project.runtime}` : '● PLAY'}</span>
        </div>
        <div className="thumb-tag">{label || project.location}</div>
      </div>
    );
  }
  return (
    <div className={`thumb thumb-${project.thumb}`}>
      <div className="thumb-corners">
        <span>{project.tags || `${(project.type||'').toUpperCase()} / ${project.year}`}</span>
        <span>● REC · {project.runtime}</span>
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
        <div style={{width:'100%',height:'100%',background:'#000',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <iframe
            style={{width:'100%',height:'100%',border:0}}
            src={`https://www.youtube.com/embed/${window.SHOWREEL_YT}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button className="lbx-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

Object.assign(window, { Brand, Nav, ThemeToggle, Footer, Thumb, WorkCard, Lightbox });

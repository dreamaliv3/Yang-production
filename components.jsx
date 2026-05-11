// components.jsx — shared components

function Brand({ theme }) {
  return (
    <div className="brand">
      <img src={theme === 'dark' ? 'assets/logo-white.png' : 'assets/logo-gold.png'} alt="Yang Production" className="brand-logo" />
    </div>
  );
}

function Nav({ route, go, theme, onToggleTheme }) {
  const links = [
    { id: 'home', label: 'Index' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];
  const SunIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
  const MoonIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-brand-btn" onClick={() => go('home')} style={{background:'none',border:0,cursor:'pointer',padding:0,color:'inherit',justifySelf:'start'}}>
          <Brand theme={theme} />
        </button>
        <div className="nav-links">
          {links.map(l => (
            <button key={l.id} className="nav-link" data-active={route === l.id || (l.id === 'work' && route === 'project')} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <div className="nav-mobile-hide" style={{justifySelf:'end',display:'flex',alignItems:'center',gap:'10px'}}>
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{background:'none',border:0,cursor:'pointer',color:'var(--text-dim)',display:'flex',alignItems:'center',padding:'6px',borderRadius:'6px',transition:'color .2s'}}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
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

function PhotoLightbox({ event, onClose }) {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => { setIdx(0); }, [event]);
  React.useEffect(() => {
    if (!event) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  setIdx(i => (i - 1 + event.photos.length) % event.photos.length);
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % event.photos.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [event]);
  if (!event) return null;
  const prev = () => setIdx(i => (i - 1 + event.photos.length) % event.photos.length);
  const next = () => setIdx(i => (i + 1) % event.photos.length);
  return (
    <div className="lbx-bg" onClick={onClose}>
      <div className="photo-lbx" onClick={e => e.stopPropagation()}>
        <button className="lbx-close" onClick={onClose}>×</button>
        <div className="photo-lbx-img" style={{backgroundImage:`url(${event.photos[idx]})`}} />
        <div className="photo-lbx-controls">
          <button className="photo-lbx-btn" onClick={prev}>←</button>
          <span className="photo-lbx-counter mono">{idx + 1} / {event.photos.length}</span>
          <button className="photo-lbx-btn" onClick={next}>→</button>
        </div>
        <div className="photo-lbx-footer">
          <div>
            <div style={{fontWeight:600,fontSize:'14px'}}>{event.name}</div>
            <div style={{fontSize:'12px',opacity:0.5,marginTop:'2px'}}>{event.subtitle}</div>
          </div>
          <a href={event.gallery} target="_blank" rel="noreferrer" className="photo-lbx-gallery-link">
            View full gallery ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileFloat({ theme, onToggleTheme, go }) {
  const SunIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
  const MoonIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
  return (
    <div className="mobile-float">
      <button className="mobile-float-btn mobile-float-icon" onClick={onToggleTheme} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
      <button className="mobile-float-btn" onClick={() => go('contact')}>
        <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 8px rgba(74,222,128,0.6)',flexShrink:0}} />
        <span>Available</span>
      </button>
    </div>
  );
}

Object.assign(window, { Brand, Nav, Footer, Thumb, WorkCard, Lightbox, PhotoLightbox, MobileFloat });

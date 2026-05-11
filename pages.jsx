// pages.jsx — all page components

function HomePage({ go, openProject, openReel }) {
  const featured = window.PROJECTS.slice(0, 6);
  return (
    <main className="page-fade">
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-meta">
            <div className="hero-meta-l mono" style={{fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>
              <span>OUR SHOWREEL · 2024</span>
              <span>SINGAPORE · 1°21′N 103°49′E</span>
            </div>
            <div className="mono" style={{fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase',color:'var(--text-mute)'}}>
              EST. 2019 · INDEX 001
            </div>
          </div>

          <div className="hero-reel">
            <iframe
              className="hero-reel-video"
              style={{width:'100%',aspectRatio:'16/9',border:0,display:'block'}}
              src={`https://www.youtube.com/embed/${window.SHOWREEL_YT}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="hero-reel-caption">
            <span className="micro" style={{color:'var(--accent)'}}>● OUR SHOWREEL</span>
            <span className="reel-runtime mono">2024 · 04:32</span>
          </div>

          <div className="hero-headline">
            <h1 className="hero-h1">
              Films for the<br/>
              <em>moments</em> that<br/>
              matter <span className="small">— Yang Production, a Singapore studio.</span>
            </h1>
            <div className="hero-side">
              <p>We make films and photographs for conferences, corporate openings, brand moments, and the people who lead them. Considered, fast, dependable.</p>
              <div className="hero-stats">
                <div className="hero-stat"><div className="num">120<span style={{color:'var(--accent)'}}>+</span></div><div className="lbl">Events filmed</div></div>
                <div className="hero-stat"><div className="num">7</div><div className="lbl">Years in studio</div></div>
                <div className="hero-stat"><div className="num">4<span style={{color:'var(--accent)'}}>hr</span></div><div className="lbl">Same-day SLA</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO / POSITIONING */}
      <section className="band band-tint manifesto">
        <div className="wrap">
          <div className="manifesto-inner">
            We work with companies who treat their <em>biggest moments</em> like they matter — keynotes, openings, launches, summits — and we make the films that carry those moments forward into the year ahead.
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num"><b>02 /</b> SELECTED WORK</div>
            <h2 className="sec-title">Recent <em>films</em> &amp; events</h2>
            <button className="sec-link" onClick={() => go('work')}>VIEW ALL ↗</button>
          </div>
          <div className="work-grid">
            <WorkCard project={featured[0]} span={7} openProject={openProject} />
            <WorkCard project={featured[1]} span={5} openProject={openProject} />
            <WorkCard project={featured[2]} span={5} openProject={openProject} />
            <WorkCard project={featured[3]} span={7} openProject={openProject} />
            <WorkCard project={featured[4]} span={6} openProject={openProject} />
            <WorkCard project={featured[5]} span={6} openProject={openProject} />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-band">
        <div className="clients-row">
          {[...window.CLIENTS, ...window.CLIENTS].map((c, i) => (
            <div className="client-logo" key={i}>{c}<span className="accent-dot">.</span></div>
          ))}
        </div>
      </section>

      {/* PHOTOGRAPHY */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num"><b>02b /</b> STILLS</div>
            <h2 className="sec-title">Selected <em>photography</em></h2>
            <a className="sec-link" href="https://gallery.yangproduction.com/" target="_blank" rel="noreferrer">VIEW GALLERY ↗</a>
          </div>
          <div className="work-grid">
            <div className="work-card span-4 tall"><div className="work-thumb"><div className="work-thumb-img"><div className="thumb thumb-2"><div className="thumb-corners"><span>STILL · 01</span><span>FRAME</span></div><div className="thumb-name" style={{fontSize:'18px',opacity:0.85}}>Conference floor</div></div></div></div></div>
            <div className="work-card span-4 tall"><div className="work-thumb"><div className="work-thumb-img"><div className="thumb thumb-6"><div className="thumb-corners"><span>STILL · 02</span><span>FRAME</span></div><div className="thumb-name" style={{fontSize:'18px',opacity:0.85}}>Keynote</div></div></div></div></div>
            <div className="work-card span-4 tall"><div className="work-thumb"><div className="work-thumb-img"><div className="thumb thumb-9"><div className="thumb-corners"><span>STILL · 03</span><span>FRAME</span></div><div className="thumb-name" style={{fontSize:'18px',opacity:0.85}}>Portrait set</div></div></div></div></div>
          </div>
          <p style={{marginTop:'32px',color:'var(--text-dim)',fontSize:'15px',maxWidth:'56ch'}}>
            Editorial photography for press, social, and archive — full curated galleries delivered through our private client portal. <a href="https://gallery.yangproduction.com/" target="_blank" rel="noreferrer" style={{color:'var(--accent)',borderBottom:'1px solid var(--accent)'}}>Browse the gallery →</a>
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="band band-soft sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num"><b>03 /</b> CAPABILITIES</div>
            <h2 className="sec-title">What we <em>make</em></h2>
            <span className="micro">SIX SERVICES</span>
          </div>
          <div className="services-grid">
            {window.SERVICES.map(s => (
              <div className="svc" key={s.num}>
                <div className="svc-num">{s.num} —</div>
                <div className="svc-name">{s.name.replace(s.italic, '')} <em>{s.italic}</em></div>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-deliver">{s.deliver}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="band band-ink sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num"><b>04 /</b> APPROACH</div>
            <h2 className="sec-title">How we <em>work</em></h2>
            <span className="micro">FOUR PHASES</span>
          </div>
          <div className="process-grid">
            {window.PROCESS.map(p => (
              <div className="step" key={p.num}>
                <div className="step-num">{p.num} —</div>
                <div className="step-name">{p.name}</div>
                <p className="step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div className="micro" style={{marginBottom:'24px'}}>05 / NEXT</div>
          <h2 className="cta-headline">
            Have a <em>moment</em><br/>worth filming?
          </h2>
          <div className="cta-row">
            <p style={{color:'var(--text-dim)',maxWidth:'42ch',margin:0,fontSize:'17px',lineHeight:1.5}}>
              Tell us about the event. We respond within one business day with a tailored quote and timeline.
            </p>
            <button className="cta-btn" onClick={() => go('contact')}>
              Start a project <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkPage({ openProject }) {
  const [filter, setFilter] = React.useState('all');
  const filters = ['all', 'conference', 'trade show', 'brand', 'summit', 'corporate', 'awards', 'workshop'];
  const filtered = window.PROJECTS.filter(p => filter === 'all' ? true : (p.type || '').toLowerCase() === filter);
  return (
    <main className="page-fade">
      <section className="page-head">
        <div className="wrap">
          <div className="page-eyebrow">INDEX 002 · WORK</div>
          <h1 className="page-title" style={{textTransform:'uppercase',letterSpacing:'-0.015em'}}>Selected work<br/>2019 — 2026</h1>
          <p className="page-sub">A working archive of films and photographs for conferences, corporate openings, brand launches, and the people behind them. Filter by format below.</p>
          <div className="filter-bar" style={{marginTop:'48px'}}>
            {filters.map(f => (
              <button key={f} className="filter-chip" data-active={filter === f} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All Work' : f.replace(/\b\w/g, c => c.toUpperCase())}
              </button>
            ))}
            <span style={{flex:1}} />
            <span className="filter-chip" style={{cursor:'default',color:'var(--text-mute)'}}>{filtered.length} projects</span>
          </div>
        </div>
      </section>

      <section style={{paddingBottom:'120px'}}>
        <div className="wrap">
          <div className="work-grid">
            {filtered.map((p, i) => {
              const pattern = [7, 5, 5, 7, 6, 6, 8, 4, 4, 8, 6, 6];
              return <WorkCard key={p.id} project={p} span={pattern[i % pattern.length]} openProject={openProject} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectPage({ projectId, go, openProject }) {
  const project = window.PROJECTS.find(p => p.id === projectId) || window.PROJECTS[0];
  const idx = window.PROJECTS.findIndex(p => p.id === project.id);
  const next = window.PROJECTS[(idx + 1) % window.PROJECTS.length];
  const prev = window.PROJECTS[(idx - 1 + window.PROJECTS.length) % window.PROJECTS.length];

  return (
    <main className="page-fade">
      <div className="wrap">
        <button className="pd-back" onClick={() => go('work')}>← Back to Work</button>
        <div className="pd-head">
          <div className="pd-meta-top">
            <span><b>{project.client}</b></span>
            <span>{project.year}</span>
            <span>{project.type}</span>
            <span>{project.location}</span>
            {project.runtime && <span>{project.runtime}</span>}
          </div>
          <h1 className="pd-title">{project.name} <em>{project.italic}</em></h1>
        </div>

        <div className="pd-hero">
          {project.youtube ? (
            <div style={{position:'relative',paddingBottom:'56.25%',height:0,overflow:'hidden',borderRadius:'4px',background:'#000'}}>
              <iframe
                style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}}
                src={`https://www.youtube.com/embed/${project.youtube}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <Thumb project={project} label="HERO FILM · CLICK TO PLAY" />
          )}
        </div>

        <div className="pd-body">
          <aside className="pd-sidebar">
            <div className="pd-sb-block">
              <div className="lbl">Client</div>
              <div className="val">{project.client}</div>
            </div>
            <div className="pd-sb-block">
              <div className="lbl">Year</div>
              <div className="val">{project.year}</div>
            </div>
            <div className="pd-sb-block">
              <div className="lbl">Format</div>
              <div className="val">{project.type}</div>
            </div>
            <div className="pd-sb-block">
              <div className="lbl">Location</div>
              <div className="val">{project.location}</div>
            </div>
            <div className="pd-sb-block">
              <div className="lbl">Scope</div>
              <ul>
                {(project.scope || ['Full-session coverage','Highlight reel','Photography']).map(s => <li key={s}>— {s}</li>)}
              </ul>
            </div>
            <div className="pd-sb-block">
              <div className="lbl">Production</div>
              <div className="val" style={{fontFamily:'var(--font-mono)',fontSize:'12px',color:'var(--text-dim)',lineHeight:1.6}}>{project.deliverables || '6 cameras · multi-day shoot · full delivery package'}</div>
            </div>
          </aside>

          <div className="pd-content">
            <p className="pd-lead">{project.lead || `${project.client} engaged Yang Production for ${(project.type||'').toLowerCase()} coverage. The brief was to capture the moment — and to deliver a film that would carry the work forward long after the event closed.`}</p>
            {(project.body || ['We deployed a full multi-camera rig with on-site direction and a producer in the room. The edit was led by a cinematic restraint — long lenses, considered framing, music that carries pace without dictating it.','Final delivery included the principal highlight film, social cutdowns, and a curated stills package. The work has since played in the lobby, on socials, and in the press kit.']).map((b, i) => (
              <p key={i}>{b}</p>
            ))}

            {project.pull && (
              <blockquote className="pd-pull">
                "{project.pull}"
                <cite>— {project.pullCite}</cite>
              </blockquote>
            )}

            <div className="pd-stills">
              <div className="pd-still wide"><div className={`thumb thumb-${((project.thumb % 12) + 1)}`}><div className="thumb-corners"><span>FRAME · 01</span><span>STILL</span></div><div className="thumb-name" style={{fontSize:'18px',opacity:0.8}}>Production still</div></div></div>
              <div className="pd-still"><div className={`thumb thumb-${((project.thumb + 1) % 12) + 1}`}><div className="thumb-corners"><span>FRAME · 02</span><span>STILL</span></div></div></div>
              <div className="pd-still"><div className={`thumb thumb-${((project.thumb + 2) % 12) + 1}`}><div className="thumb-corners"><span>FRAME · 03</span><span>STILL</span></div></div></div>
            </div>

            <p style={{marginTop:'24px'}}>Selected stills above. The full delivery includes additional production photography, broadcast-grade masters, and social-ready cutdowns. Contact for the complete archive.</p>
          </div>
        </div>
      </div>

      <div className="pd-nextprev">
        <div className="pd-np" onClick={() => openProject(prev.id)}>
          <div className="lbl">← Previous project</div>
          <div className="name">{prev.name} <em>{prev.italic}</em></div>
        </div>
        <div className="pd-np right" onClick={() => openProject(next.id)}>
          <div className="lbl">Next project →</div>
          <div className="name">{next.name} <em>{next.italic}</em></div>
        </div>
      </div>
    </main>
  );
}

function AboutPage({ go }) {
  return (
    <main className="page-fade">
      <section className="page-head">
        <div className="wrap">
          <div className="page-eyebrow">INDEX 003 · ABOUT</div>
          <h1 className="page-title">A studio, <em>not</em><br/>a production line</h1>
        </div>
      </section>

      <section className="about-lead">
        <div className="wrap">
          <div className="about-lead-text">
            Yang Production is a Singapore-based film studio for companies who care about the way their <em>biggest moments</em> are remembered.
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <div className="micro" style={{marginBottom:'24px'}}>OUR APPROACH</div>
              <p style={{fontSize:'17px',lineHeight:1.7,color:'var(--text-dim)',margin:0,maxWidth:'48ch'}}>
                We started Yang Production in 2018 with one principle: do the work like the work matters. That means showing up early, knowing the room, and treating every cut like it might be the one a CEO sees first.
              </p>
              <p style={{fontSize:'17px',lineHeight:1.7,color:'var(--text-dim)',marginTop:'18px',maxWidth:'48ch'}}>
                Seven years later, the team has filmed over 120 events for companies including Airbus, Mirxes, and Hai Robotics — and the principle hasn't changed. We're a small studio on purpose. Every project gets a producer in the room, a director on the day, and a partner who answers their phone.
              </p>
            </div>
            <div className="about-portrait">
              <div className="thumb thumb-3">
                <div className="thumb-corners"><span>STUDIO · 2024</span><span>STILL</span></div>
                <div className="thumb-name" style={{fontSize:'22px'}}>Studio portrait</div>
                <div className="thumb-tag">PLACEHOLDER</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-num"><b>—</b> CAPABILITIES</div>
            <h2 className="sec-title">What we <em>bring</em></h2>
            <span className="micro">FULL STUDIO</span>
          </div>
          {[
            {lbl:'Direction', val:'Lead director on every shoot. Pre-pro walk-through, shot list, run-of-show scoped to the day.'},
            {lbl:'Multi-cam', val:'Multi-camera rigs scaled to the brief — keynotes, panels, breakouts. Synced audio. ISO files retained for archive.'},
            {lbl:'On-site edit', val:'Edit bay in-room when the brief calls for same-day social cuts. 4-hour SLA on keynote moments.'},
            {lbl:'Photography', val:'Editorial stills crew runs alongside the film team. Curated press selects within 48 hours.'},
            {lbl:'Audio', val:'Broadcast-grade audio direction. Lavs on principals, room mics on panels, RF backups on every channel.'},
            {lbl:'Post', val:'Cinematic colour, restraint-led editing, original sound design when the brief calls for it.'}
          ].map(c => (
            <div className="about-cap-row" key={c.lbl}>
              <div className="lbl">{c.lbl}</div>
              <div className="val">{c.val}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2 className="cta-headline">Let's <em>talk</em>.</h2>
          <div className="cta-row">
            <p style={{color:'var(--text-dim)',maxWidth:'42ch',margin:0,fontSize:'17px',lineHeight:1.5}}>
              We respond within one business day. Briefs as short as a paragraph are welcome.
            </p>
            <button className="cta-btn" onClick={() => go('contact')}>Start a project <span className="arrow">↗</span></button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  const [services, setServices] = React.useState({});
  const [otherText, setOtherText] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const toggle = (s) => setServices(prev => ({ ...prev, [s]: !prev[s] }));
  const svcList = ['Conference Coverage','Highlight Reel','Same-day Cuts','Photography','Interviews','Brand Film','Live Feed'];

  if (submitted) {
    return (
      <main className="page-fade">
        <section className="page-head">
          <div className="wrap" style={{textAlign:'center',padding:'120px 0'}}>
            <div className="page-eyebrow" style={{color:'var(--accent)'}}>BRIEF RECEIVED</div>
            <h1 className="page-title" style={{maxWidth:'18ch',margin:'0 auto'}}>Thank you. We'll <em>be in touch</em>.</h1>
            <p className="page-sub" style={{margin:'32px auto 0',maxWidth:'46ch'}}>Expect a reply within one business day. In the meantime, you can reach us directly at hello@yangproduction.com.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-fade">
      <section className="page-head">
        <div className="wrap">
          <div className="page-eyebrow">INDEX 004 · CONTACT</div>
          <h1 className="page-title">Tell us about <em>the moment</em></h1>
          <p className="page-sub">A short brief is enough to start. We'll respond with a quote and timeline.</p>
        </div>
      </section>

      <section style={{paddingBottom:'40px'}}>
        <div className="wrap">
          <div className="contact-grid">
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="form-row">
                <label className="lbl">01 / Name</label>
                <input className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-row">
                <label className="lbl">02 / Company</label>
                <input className="form-input" placeholder="Where you work" />
              </div>
              <div className="form-row">
                <label className="lbl">03 / Email</label>
                <input type="email" className="form-input" placeholder="you@company.com" required />
              </div>
              <div className="form-row">
                <label className="lbl">04 / Event</label>
                <input className="form-input" placeholder="Conference, opening, brand film…" required />
              </div>
              <div className="form-row">
                <label className="lbl">05 / Dates</label>
                <input className="form-input" placeholder="Approximate or fixed" />
              </div>
              <div className="form-row">
                <label className="lbl">06 / Services</label>
                <div>
                  <div className="form-chips">
                    {svcList.map(s => (
                      <button type="button" key={s} className="form-chip" data-on={!!services[s]} onClick={() => toggle(s)}>{s}</button>
                    ))}
                    <button type="button" className="form-chip" data-on={!!services['Other']} onClick={() => toggle('Other')}>Other</button>
                  </div>
                  {services['Other'] && (
                    <input
                      className="form-input"
                      style={{marginTop:'12px',width:'100%'}}
                      placeholder="Please describe what you need…"
                      value={otherText}
                      onChange={e => setOtherText(e.target.value)}
                    />
                  )}
                </div>
              </div>
              <div className="form-row">
                <label className="lbl">07 / Budget</label>
                <div className="form-chips">
                  {['< S$10k','S$10–25k','S$25–50k','S$50k+','Open to discuss'].map(b => (
                    <button type="button" key={b} className="form-chip" data-on={budget === b} onClick={() => setBudget(b)}>{b}</button>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <label className="lbl">08 / Brief</label>
                <textarea className="form-text" placeholder="A paragraph or three about the event, the goals, and the deliverables you have in mind." />
              </div>
              <button className="form-submit" type="submit">Send brief <span>↗</span></button>
            </form>

            <aside className="contact-info">
              <div className="contact-info-block">
                <div className="lbl">Direct</div>
                <div className="val"><a href="mailto:contact@yangproduction.com" style={{color:'inherit'}}>contact<em>@</em>yangproduction.com</a></div>
              </div>
              <div className="contact-info-block">
                <div className="lbl">Elsewhere</div>
                <div className="val" style={{display:'flex',flexDirection:'column',gap:'10px',fontSize:'15px',color:'var(--text-dim)',fontFamily:'var(--font-body)',fontWeight:400}}>
                  <a href="https://www.instagram.com/yangproductionsg" target="_blank" rel="noreferrer">Instagram ↗</a>
                  <a href="https://youtube.com/playlist?list=PLpjHb1EYn-wKBpRMMn85jS1MN8fHvXLPo" target="_blank" rel="noreferrer">YouTube portfolio ↗</a>
                  <a href="https://www.linkedin.com/company/yang-production" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                  <a href="https://gallery.yangproduction.com/" target="_blank" rel="noreferrer">Photo gallery ↗</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomePage, WorkPage, ProjectPage, AboutPage, ContactPage });

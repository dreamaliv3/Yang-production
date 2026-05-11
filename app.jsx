// app.jsx — root, routing, tweaks

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "type": "editorial"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState('home');
  const [projectId, setProjectId] = useState(null);
  const [reelOpen, setReelOpen] = useState(false);

  // Apply theme/type to body + swap favicon to match
  useEffect(() => {
    document.body.setAttribute('data-theme', t.theme || 'light');
    document.body.setAttribute('data-type', t.type || 'editorial');
  }, [t.theme, t.type]);

  // Hash routing
  useEffect(() => {
    const apply = () => {
      const h = (window.location.hash || '').replace(/^#\/?/, '');
      if (!h) { setRoute('home'); return; }
      if (h.startsWith('project/')) {
        setProjectId(h.split('/')[1]);
        setRoute('project');
      } else if (['home','work','about','contact'].includes(h)) {
        setRoute(h);
      }
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  const go = (r) => {
    window.location.hash = '#/' + (r === 'home' ? '' : r);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const openProject = (id) => {
    window.location.hash = '#/project/' + id;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const toggleTheme = () => setTweak('theme', t.theme === 'dark' ? 'light' : 'dark');
  const theme = t.theme || 'light';

  let page = null;
  if (route === 'home') page = <HomePage go={go} openProject={openProject} openReel={() => setReelOpen(true)} />;
  else if (route === 'work') page = <WorkPage openProject={openProject} />;
  else if (route === 'project') page = <ProjectPage projectId={projectId} go={go} openProject={openProject} />;
  else if (route === 'about') page = <AboutPage go={go} />;
  else if (route === 'contact') page = <ContactPage />;

  const currentProject = window.PROJECTS.find(p => p.id === projectId) || window.PROJECTS[0];

  return (
    <>
      <Nav route={route} go={go} theme={theme} onToggleTheme={toggleTheme} />
      {page}
      <Footer go={go} theme={theme} />

      <Lightbox open={reelOpen} onClose={() => setReelOpen(false)} project={currentProject} />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={['light','dark','accent']}
          onChange={(v) => setTweak('theme', v)}
        />
        <TweakSection label="Typography" />
        <TweakSelect
          label="Pairing"
          value={t.type}
          options={[
            { value: 'editorial', label: 'SF Pro (Apple, default)' },
            { value: 'modern', label: 'IvyOra + Inter' },
            { value: 'grotesk', label: 'Bodoni Moda + Inter' }
          ]}
          onChange={(v) => setTweak('type', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

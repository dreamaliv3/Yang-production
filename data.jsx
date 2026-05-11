// data.jsx — projects + content data

const SHOWREEL_YT = 'HvDPylyb-z4';

const PROJECTS = [
  {
    id: 'switch-2024',
    name: 'Deal Fridays',
    italic: '× SEEDS Capital',
    photos: [
      'https://images.pixieset.com/319815201/d5cbab452a1be136e08a2a946c76de62-xxlarge.jpg',
      'https://images.pixieset.com/319815201/01d510d5b11bb9e89bc308730b90d566-xxlarge.jpg',
      'https://images.pixieset.com/319815201/b1988e69ba4935702a8fb95f73dadcb9-xxlarge.jpg',
    ],
    client: 'SG Growth Capital (via KrAsia)',
    year: '2024',
    type: 'Conference',
    location: 'Marina Bay Sands · Singapore',
    runtime: '3:12',
    youtube: 'Jm0HwMGZ1D4',
    scope: ['Multi-day conference coverage', 'Sponsor highlight film', 'On-site interviews', 'Same-day social cuts', 'Photography'],
    deliverables: '3 cameras · multi-day shoot · highlight + social pack',
    thumb: 1,
    lead: 'Singapore Week of Innovation and Technology (SWITCH) is one of APAC\'s flagship deep-tech events. KrAsia engaged Yang Production on behalf of SG Growth Capital to capture their presence across the floor — keynotes, fireside chats, deal moments, and the energy of climate-tech and healthcare founders meeting capital.',
    body: [
      'We deployed a three-camera team across the SG Growth Capital stage and lounge, with a producer in the room for fast direction. Output was tuned for two audiences at once: a polished sponsor highlight reel for SGGC, and same-day social cuts that KrAsia and SGGC could ship while the show was still running.',
      'The film leans into the people — founders, investors, the deal-fridays moments — with composed framing and unobtrusive coverage. Lavs on principals, lounge audio for the ambient texture, and a colour pass that holds the venue\'s warmth without flattening the SWITCH brand.'
    ],
    pull: 'A team that understood the deal energy and translated it on screen.',
    pullCite: 'SG Growth Capital'
  },
  {
    id: 'ifbs-2024',
    name: 'Italian Food &',
    italic: 'Beverage Singapore',
    client: 'Italian Food & Beverage Singapore (IFBS)',
    year: '2024',
    type: 'Trade Show',
    location: 'Singapore',
    runtime: '4:32',
    youtube: 'NWJuq1Ch0a8',
    scope: ['Full-session coverage', 'Highlight reel', 'Same-day social cuts', 'On-site interviews'],
    deliverables: '3 cameras • 4-day shoot • 47 deliverables',
    thumb: 1,
    lead: 'A four-day flagship gathering for brokerage leadership across APAC. The brief: capture the energy of the floor, the substance of the keynotes, and turn it around fast enough to feed three days of social.',
    body: [
      'We deployed a three-camera rig across two stages and the breakout halls, with a dedicated edit bay running on-site. Same-day social cuts went out within four hours of each keynote — the first time IFBS has shipped content faster than the press cycle.',
      'The highlight reel was built around three principal speakers and the closing panel. Pace was set by the music and the cuts; the camera stayed close enough to feel the room without ever crowding the speaker.'
    ],
    pull: 'Yang and his team didn\'t just document the event. They translated it.',
    pullCite: 'Head of Communications, IFBS'
  },
  {
    id: 'mirxes-opening',
    name: 'Mirxes',
    italic: 'Opening',
    client: 'Mirxes',
    year: '2024',
    type: 'Brand',
    location: 'Singapore',
    runtime: '2:18',
    youtube: 'TR_-2bVq0HM',
    scope: ['Full event coverage', 'Highlight film', 'Photography', 'Press kit'],
    deliverables: '3 cameras • 1-day shoot • Full press package',
    thumb: 2,
    lead: 'The opening of Mirxes\' new headquarters — a milestone moment for one of Singapore\'s most-watched biotech firms. We were brought in to capture it for press, internal comms, and investor materials in a single shoot.',
    body: [
      'The event ran tight — ribbon cutting, three speeches, lab tour, reception. Three cameras, three photographers, one producer. We delivered the press-ready highlight film within 36 hours and a full stills package by the end of the week.',
      'The film leans on architectural restraint — long lenses, considered framing, and a score that doesn\'t announce itself. It\'s designed to play in the lobby on loop without ever fatiguing the room.'
    ],
    pull: 'They understood the moment without us having to brief them.',
    pullCite: 'Director of Brand, Mirxes'
  },
  {
    id: 'silmo-2024',
    name: 'SILMO',
    italic: '',
    client: 'SILMO Singapore',
    year: '2024',
    type: 'Trade Show',
    location: 'Marina Bay Sands',
    runtime: '3:04',
    youtube: 'WxR7FbtH8Ic',
    scope: ['Trade show coverage', 'Brand films (3)', 'Booth interviews', 'Social cutdowns'],
    deliverables: '2 cameras • 3-day shoot • 22 deliverables',
    thumb: 3,
    lead: 'The first SILMO Singapore — the international optics and eyewear show\'s APAC debut. A debut event needs a debut film: one that establishes the show\'s identity for years to come.'
  },
  {
    id: 'hai-robotics',
    name: 'Hai Robotics',
    italic: 'SG Opening',
    client: 'Hai Robotics',
    year: '2024',
    type: 'Brand',
    location: 'Singapore',
    runtime: '2:48',
    youtube: 'uNhwZyQrUwg',
    scope: ['Opening ceremony', 'Facility tour film', 'Executive interviews', 'Photography'],
    deliverables: '3 cameras • 2-day shoot • Bilingual edit',
    thumb: 4
  },
  {
    id: 'apsr-2023',
    name: 'APSR 2023',
    italic: 'Highlight',
    client: 'Asian Pacific Society of Respirology',
    year: '2023',
    type: 'Conference',
    location: 'Suntec',
    runtime: '5:21',
    youtube: '9z17JTqvyQc',
    scope: ['Conference coverage', 'Daily highlight reels', 'Speaker spotlights', '38 talk recordings'],
    deliverables: '3 cameras • 5-day shoot • 60+ deliverables',
    thumb: 5
  },
  {
    id: 'airbus-aircalin',
    name: 'Airbus',
    italic: 'Aircalin',
    client: 'Airbus',
    year: '2023',
    type: 'Brand',
    location: 'Toulouse / Singapore',
    runtime: '1:54',
    youtube: '5K3Q5AF7kMI',
    scope: ['Aircraft delivery film', 'Press kit', 'Stills', 'Interview package'],
    deliverables: '2 cameras • 2-location shoot',
    thumb: 6
  },
  {
    id: 'sabs-teaser',
    name: 'SABS',
    italic: 'Teaser',
    client: 'SABS Summit',
    year: '2024',
    type: 'Summit',
    location: 'Singapore',
    runtime: '0:48',
    youtube: 'BaPYCRtsGZ4',
    scope: ['Concept', 'Direction', 'Pre-event teaser', 'Social pack'],
    deliverables: 'Teaser film • 6 social variants',
    thumb: 7
  },
  {
    id: 'optima-werkz',
    name: 'Optima',
    italic: 'Werkz',
    client: 'Optima Werkz',
    year: '2023',
    type: 'Brand',
    location: 'Singapore',
    runtime: '2:12',
    youtube: 'CA5zdkejDDo',
    scope: ['Brand film', 'Director-led shoot', 'Photography'],
    deliverables: 'Brand film • Stills package',
    thumb: 8
  },
  {
    id: 'fintech-fest',
    name: 'Finmo',
    italic: 'FX Volatility',
    client: 'Confidential',
    year: '2024',
    type: 'Corporate',
    location: 'Singapore',
    runtime: '3:16',
    youtube: 'Fq7LWJLY2mk',
    scope: ['Festival coverage', 'Sponsor reels', 'Stage capture', 'Same-day cuts'],
    deliverables: '3 cameras • 4-day shoot',
    thumb: 9
  },
  {
    id: 'biotech-summit',
    name: 'World Crane &',
    italic: 'Transport Summit',
    client: 'Confidential',
    year: '2023',
    type: 'Summit',
    location: 'Singapore',
    runtime: '4:02',
    youtube: 'xKA-meDMa5c',
    scope: ['Two-day conference', 'Highlight film', 'Photography'],
    deliverables: '3 cameras • 2-day shoot',
    thumb: 11
  },
  {
    id: 'awards-night',
    name: 'SIA Soaring Stars',
    italic: 'Awards',
    client: 'Confidential',
    year: '2024',
    type: 'Awards',
    location: 'Sentosa',
    runtime: '3:48',
    youtube: '6KeFqBWkcF4',
    scope: ['Awards ceremony', 'Red-carpet stills', 'Winner spotlights'],
    deliverables: '2 cameras • Live + post',
    thumb: 12
  },
  {
    id: 'food-japan',
    name: 'Food Japan',
    italic: '2023',
    client: 'Confidential',
    year: '2023',
    type: 'Trade Show',
    location: 'Singapore',
    youtube: 'Dt7VEKeAWVk',
    scope: ['Trade show coverage', 'Highlight reel', 'Photography'],
    deliverables: 'Multi-camera shoot',
    thumb: 2
  },
  {
    id: 'alibaba-hackathon',
    name: 'Alibaba Cloud',
    italic: 'AI Hackathon',
    photos: [
      'https://images.pixieset.com/75124119/d89eb4d232abf7b518dca0a702dce466-xxlarge.jpg',
      'https://images.pixieset.com/75124119/acfe400e54512c2b95181b1129540b92-xxlarge.jpg',
      'https://images.pixieset.com/75124119/8efc511b8fe2933b76cef9b2d7db4193-touch.jpg',
    ],
    client: 'Alibaba Cloud',
    year: '2025',
    type: 'Workshop',
    location: 'Singapore',
    youtube: 'V7Ypfam4nvY',
    scope: ['Event coverage', 'Highlight film', 'Same-day cuts'],
    deliverables: 'Multi-camera shoot',
    thumb: 3
  },
  {
    id: 'gear-festival',
    name: 'GEAR',
    italic: 'Future City Festival',
    client: 'Confidential',
    year: '2024',
    type: 'Workshop',
    location: 'Singapore',
    youtube: 'fSik-GTwJ2k',
    scope: ['Festival coverage', 'Highlight film', 'Photography'],
    deliverables: 'Multi-camera shoot',
    thumb: 4
  }
];

const SERVICES = [
  {
    num: '01',
    name: 'Conference Coverage',
    italic: 'Coverage',
    desc: 'Multi-camera capture across keynotes, panels, breakouts, and the floor. Synced audio, broadcast-grade direction, archived footage you can mine for years.',
    deliver: 'Full session masters · ISO files · backup'
  },
  {
    num: '02',
    name: 'Highlight Reels',
    italic: 'Reels',
    desc: 'Short-form films that capture an event\'s arc — the energy, the speakers, the room. Cut for your audience, not for the algorithm.',
    deliver: '60s · 90s · 3-min cuts · vertical variants'
  },
  {
    num: '03',
    name: 'Same-day Cuts',
    italic: 'Cuts',
    desc: 'Social-ready edits delivered while the event is still running. On-site edit bay, a producer in the room, four-hour turnaround on keynote moments.',
    deliver: 'Vertical · square · captions · 4hr SLA'
  },
  {
    num: '04',
    name: 'On-site Interviews',
    italic: 'Interviews',
    desc: 'Quiet rooms, considered framing, the right questions. We capture the people behind the program — speakers, sponsors, attendees — for press and post-event content.',
    deliver: 'Single-cam or two-cam · branded set'
  },
  {
    num: '05',
    name: 'Photography',
    italic: 'Stills',
    desc: 'Editorial photography for press kits, social, and archive. Coverage of the event, the people, the room — delivered as a curated set, not a dump.',
    deliver: 'Edited gallery · press selects · raws on request'
  },
  {
    num: '06',
    name: 'Brand Films',
    italic: 'Films',
    desc: 'Director-led films for product launches, openings, and brand stories. Concept through delivery, scoped to your moment.',
    deliver: 'Concept · script · shoot · post · sound'
  }
];

const CLIENTS = [
  'Airbus', 'Mirxes', 'SG Growth Capital', 'Optima Werkz', 'IFBS',
  'SILMO', 'APSR', 'SABS', 'Aircalin', 'Marina Bay Sands',
  'Suntec Singapore', 'EDB Singapore'
];

const PROCESS = [
  { num: '01', name: 'Brief', italic: '', desc: 'A real conversation about what the moment is, who it\'s for, and what the work needs to do after the event ends.' },
  { num: '02', name: 'Pre-pro', italic: '', desc: 'Walk-through, shot list, run-of-show, kit and crew sized to the day. We arrive knowing the room.' },
  { num: '03', name: 'Capture', italic: '', desc: 'On-site team led by a producer. Edit bay in-room when same-day cuts are part of the brief.' },
  { num: '04', name: 'Deliver', italic: '', desc: 'Files where you need them, when you need them. We don\'t disappear after the wrap.' }
];

const REDESIGN_NOTES = [
  {
    num: '01',
    title: 'A real hero, not a static image',
    before: 'Currently the homepage opens with a single still image and dives straight into a grid of YouTube tiles. There is no value proposition above the fold.',
    after: 'Editorial reel hero with playable showreel, runtime metadata, and a 3-line headline that establishes positioning ("Films for the moments that matter"). Visitors know in 5 seconds what you do.'
  },
  {
    num: '02',
    title: 'Drop the Wix branding bar',
    before: 'The "This site was created with Wix" bar at the top is killing perceived value on a B2B site. Corporate buyers notice.',
    after: 'Custom domain, custom shell, full brand control. Either move off Wix to a developer-built site (Webflow, Framer, Next.js), or use a Wix Studio template with the bar removed.'
  },
  {
    num: '03',
    title: 'Projects become case studies',
    before: 'Each project is just a YouTube tile with a title — no client, scope, deliverables, or context. Buyers can\'t tell what you actually did.',
    after: 'Each project gets its own page: hero film, sticky meta sidebar (client, year, scope, deliverables, runtime), narrative, stills gallery, pull quote, next/prev. This is the single biggest credibility upgrade.'
  },
  {
    num: '04',
    title: 'Show client logos prominently',
    before: 'Airbus, Mirxes, Hai Robotics — these are real trust signals — and they\'re only visible if you read the project titles.',
    after: 'A dedicated logo band on the homepage. Buyers scan for names they recognize before they scan anything else.'
  },
  {
    num: '05',
    title: 'Sell the services explicitly',
    before: 'There is no services section. Visitors have to infer what you offer from the videos.',
    after: 'Six clearly-named services with deliverables listed: Conference Coverage, Highlight Reels, Same-day Cuts, Interviews, Photography, Brand Films. Particularly important: same-day social cuts is a real differentiator — it gets its own card.'
  },
  {
    num: '06',
    title: 'A clear, low-friction CTA',
    before: 'Currently there is no obvious next step. Visitors who like the work have to dig for a contact page.',
    after: 'Inquiry form with a structured project brief (event type, dates, services, budget band) on a dedicated /contact page, plus a persistent CTA in the nav and a final CTA band before the footer.'
  },
  {
    num: '07',
    title: 'A real positioning + about voice',
    before: 'The current site doesn\'t tell us who Yang is or why this studio exists. It feels like a portfolio dump.',
    after: 'A short manifesto on the homepage and a proper About page with a point of view ("trusted, creative, professional") expressed through writing — not just stated as a list of adjectives.'
  },
  {
    num: '08',
    title: 'Performance + SEO foundations',
    before: 'Wix sites carry a lot of weight, and the current single-page structure means there\'s no way to rank for "conference videographer Singapore", "event highlight reel", etc.',
    after: 'Per-project pages with structured metadata, fast-loading custom build, image optimization, and proper schema for LocalBusiness + VideoObject. Each case study is an SEO surface in its own right.'
  },
  {
    num: '09',
    title: 'A design system, not a Wix template',
    before: 'The visual language is generic — no consistent type scale, color discipline, or grid.',
    after: 'Strict Swiss grid, two-font system (Manrope + Instrument Serif italic for editorial accents), monospace metadata, three-color palette anchored on a single warm gold accent. The work is the hero — chrome stays out of its way.'
  }
];

const PHOTO_EVENTS = [
  {
    id: 'mpt-conference',
    name: 'MPT Conference',
    subtitle: 'Navigating Uncertainty',
    gallery: 'https://gallery.yangproduction.com/mptconferenceonnavigatinguncertainty/',
    cover: 'https://images.pixieset.com/69644919/0f96cf63de2b27fc7231b92f53448073-xxlarge.jpg',
    photos: [
      'https://images.pixieset.com/69644919/0f96cf63de2b27fc7231b92f53448073-xxlarge.jpg',
      'https://images.pixieset.com/69644919/ae285d39fdc99dee52f9047819cfd8a9-xxlarge.jpg',
      'https://images.pixieset.com/69644919/370ef4961d36a5fa8ec52dc8501ccf7f-xxlarge.jpg',
      'https://images.pixieset.com/69644919/7184ab21e517983035bd29e687694d3c-xxlarge.jpg',
      'https://images.pixieset.com/69644919/0bb5dd0bf6ec589350e2ceffbfe10335-xxlarge.jpg',
    ]
  },
  {
    id: 'gala-life-science',
    name: 'Gala Life Science Seminar',
    subtitle: 'Singapore 2025',
    gallery: 'https://gallery.yangproduction.com/251119galalifescienceseminarsingapore2025/',
    cover: 'https://images.pixieset.com/049630401/59b0a847f103dc2731bc8b595f0c4a1c-xxlarge.jpg',
    photos: [
      'https://images.pixieset.com/049630401/59b0a847f103dc2731bc8b595f0c4a1c-xxlarge.jpg',
      'https://images.pixieset.com/049630401/dc74b2fe026a3a816c7ead119c3372cf-xxlarge.jpg',
      'https://images.pixieset.com/049630401/cf1510d984a3ce99d87a17fe51589b25-xxlarge.jpg',
      'https://images.pixieset.com/049630401/df1ae3a776b5b2418cc7e64736d2316c-xxlarge.jpg',
      'https://images.pixieset.com/049630401/54c76fc3aa278187f87041ef6aae1212-xxlarge.jpg',
    ]
  },
  {
    id: 'switch-booth',
    name: 'SWITCH',
    subtitle: 'Booth Coverage',
    gallery: 'https://gallery.yangproduction.com/251029switchboothphotos/',
    cover: 'https://images.pixieset.com/319815201/d5cbab452a1be136e08a2a946c76de62-xxlarge.jpg',
    photos: [
      'https://images.pixieset.com/319815201/d5cbab452a1be136e08a2a946c76de62-xxlarge.jpg',
      'https://images.pixieset.com/319815201/01d510d5b11bb9e89bc308730b90d566-xxlarge.jpg',
      'https://images.pixieset.com/319815201/b1988e69ba4935702a8fb95f73dadcb9-xxlarge.jpg',
      'https://images.pixieset.com/319815201/f12ccfa1981751540e3972b40392dd2e-xxlarge.jpg',
      'https://images.pixieset.com/319815201/6bfe4dee38ae5845fae684d7314ce952-xxlarge.jpg',
    ]
  }
];

window.SHOWREEL_YT = SHOWREEL_YT;
window.PROJECTS = PROJECTS;
window.SERVICES = SERVICES;
window.CLIENTS = CLIENTS;
window.PROCESS = PROCESS;
window.REDESIGN_NOTES = REDESIGN_NOTES;
window.PHOTO_EVENTS = PHOTO_EVENTS;

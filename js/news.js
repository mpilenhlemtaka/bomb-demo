
// ── DATA ──────────────────────────────────────────────────────────────────
const ARTICLES = [
  {
    tag: 'Awards', type: 'inhouse',
    title: 'Shaka iLembe Sweeps the 2024 SAFTAs With a Record-Breaking 12 Awards',
    excerpt: 'The most ever won by a single production in one ceremony. We look back at the making of a landmark.',
    author: 'The Bomb Shelter', date: 'Feb 2024', read: '8 min',
    img: '//assets/Shaka-Ilembe_S1_2023_EPG_1920x1080-min-1140x570.jpg',
    href: 'article.html', featured: true
  },
  {
    tag: 'Industry', type: 'external',
    title: 'How South African Television Found Its Epic Voice',
    excerpt: 'Screen Africa profiles the production companies reshaping the continent\'s drama landscape — with The Bomb Shelter front and centre.',
    author: 'Screen Africa', date: 'Jan 2024', read: '6 min',
    img: '/assets/isibaya__34-940x527.jpg',
    href: 'https://screenafrica.com', source: 'Screen Africa'
  },
  {
    tag: 'Production', type: 'inhouse',
    title: 'Behind the Beads: Crafting the World of Shaka iLembe',
    excerpt: 'Our costume, set and research teams on the two-year process of building a 19th-century Zulu kingdom from scratch.',
    author: 'The Bomb Shelter', date: 'Nov 2023', read: '11 min',
    img: '/assets/Shaka-Ilembe_S1_2023_EPG_1920x1080-min-1140x570.jpg',
    href: 'article.html'
  },
  {
    tag: 'Archive', type: 'inhouse',
    title: 'Yizo-Yizo at 25: The Series That Changed Everything',
    excerpt: 'A quarter century after it first aired on SABC 1, we revisit the raw, controversial township drama that rewrote the rules of South African television.',
    author: 'The Bomb Shelter', date: 'Oct 2023', read: '14 min',
    img: '/assets/yizo__21-940x527.jpg',
    href: 'article.html'
  },
  {
    tag: 'Press', type: 'external',
    title: 'The Bomb Shelter Productions: Three Decades of Telling Africa\'s Stories',
    excerpt: 'A long-read profile on Angus Gibson and the company that defined a generation of South African screen culture.',
    author: 'Mail & Guardian', date: 'Sep 2023', read: '9 min',
    img: '',
    href: 'https://mg.co.za', source: 'Mail & Guardian'
  },
  {
    tag: 'Awards', type: 'external',
    title: 'SAFTA 2023: The Full List of Winners',
    excerpt: 'The Bomb Shelter takes home 7 awards including Best Drama Series for Isithembiso and Best Director.',
    author: 'Channel24', date: 'Aug 2023', read: '4 min',
    img: '',
    href: 'https://channel24.co.za', source: 'Channel24'
  },
  {
    tag: 'Film', type: 'inhouse',
    title: 'Back of the Moon: Revisiting Sophiatown\'s Last Dance',
    excerpt: 'Director Angus Gibson on returning to 1950s Johannesburg, the jazz, the shebeens and the love story at the centre of a vanished world.',
    author: 'The Bomb Shelter', date: 'Jul 2023', read: '10 min',
    img: '/assets/Back-of-the-Moon-pic.jpg',
    href: 'article.html'
  },
  {
    tag: 'Documentary', type: 'external',
    title: 'Amandla! Turns 21: A Revolution Still Singing',
    excerpt: 'The Sundance Grand Jury Prize winner remains one of the most important documents of the apartheid resistance. A retrospective look.',
    author: 'Variety', date: 'Jun 2023', read: '7 min',
    img: '/assets/amandla-800-800-450-450-crop-fill.jpg',
    href: 'https://variety.com', source: 'Variety'
  },
  {
    tag: 'Industry', type: 'inhouse',
    title: 'Pan-African Production: What It Actually Takes',
    excerpt: 'From Uganda to Ivory Coast to the DRC — producing across the continent requires more than a passport. Our team on the logistics, relationships and craft behind cross-border storytelling.',
    author: 'The Bomb Shelter', date: 'May 2023', read: '12 min',
    img: '',
    href: 'article.html'
  },
];

const TAGS = ['All', 'In-House', 'External', 'Awards', 'Production', 'Industry', 'Archive', 'Film', 'Documentary'];

// ── FILTER ────────────────────────────────────────────────────────────────
let activeFilter = 'All';
const filterBar = document.getElementById('filter-bar');

function buildFilters() {
  filterBar.innerHTML = '';
  TAGS.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'f-btn' + (tag === activeFilter ? ' active' : '');
    btn.textContent = tag;
    btn.addEventListener('click', () => {
      activeFilter = tag;
      buildFilters();
      renderGrid();
    });
    filterBar.appendChild(btn);
  });
}

// ── GRID ──────────────────────────────────────────────────────────────────
const grid = document.getElementById('articles-grid');
const countEl = document.getElementById('article-count');

function filtered() {
  if (activeFilter === 'All') return ARTICLES;
  if (activeFilter === 'In-House') return ARTICLES.filter(a => a.type === 'inhouse');
  if (activeFilter === 'External') return ARTICLES.filter(a => a.type === 'external');
  return ARTICLES.filter(a => a.tag === activeFilter);
}

function renderGrid() {
  const list = filtered();
  countEl.textContent = `${list.length} article${list.length !== 1 ? 's' : ''}`;
  grid.innerHTML = '';
  list.forEach(a => {
    const isExt = a.type === 'external';
    const card = document.createElement('a');
    card.className = 'article-card';
    card.href = isExt ? a.href : a.href;
    if (isExt) { card.target = '_blank'; card.rel = 'noopener noreferrer'; }

    card.innerHTML = `
      <div class="card-img ${!a.img ? 'no-img' : ''}">
        ${a.img
          ? `<img src="${a.img}" alt="${a.title}" loading="lazy" />`
          : `<span>No Image</span>`
        }
      </div>
      <div class="card-tag">
        ${a.tag}
        ${isExt ? `<span class="card-source-badge">↗ ${a.source}</span>` : ''}
      </div>
      <div class="card-title">${a.title}</div>
      <div class="card-excerpt">${a.excerpt}</div>
      <div class="card-meta">
        <span class="card-author">${a.author}</span>
        <span class="card-date">${a.date}</span>
        <span class="card-read">${a.read}</span>
        ${isExt ? '<span class="card-ext-icon">↗</span>' : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── DATE ──────────────────────────────────────────────────────────────────
const d = new Date();
document.getElementById('todays-date').textContent =
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// ── GRAIN ─────────────────────────────────────────────────────────────────
const gc = document.getElementById('grain');
const gx = gc.getContext('2d');
gc.width = window.innerWidth; gc.height = window.innerHeight;
window.addEventListener('resize', () => { gc.width = window.innerWidth; gc.height = window.innerHeight; });
(function grain() {
  const w = gc.width, h = gc.height;
  const d = gx.createImageData(w, h);
  for (let i = 0; i < d.data.length; i += 4) {
    const v = Math.random() * 255 | 0;
    d.data[i] = d.data[i+1] = d.data[i+2] = v;
    d.data[i+3] = Math.random() < 0.55 ? 18 + (Math.random() * 42|0) : 0;
  }
  gx.putImageData(d, 0, 0);
  requestAnimationFrame(grain);
})();

// ── SPROCKETS ─────────────────────────────────────────────────────────────
function buildSprockets() {
  ['sp-l','sp-r'].forEach(id => {
    const el = document.getElementById(id);
    el.innerHTML = '';
    const n = Math.ceil(window.innerHeight / 24);
    for (let i = 0; i < n; i++) {
      const h = document.createElement('div'); h.className = 'sp'; el.appendChild(h);
    }
  });
}
buildSprockets();
window.addEventListener('resize', buildSprockets);

buildFilters();
renderGrid();

// ─── DATA ───────────────────────────────────────────────────────────────
const SLIDES = [
  // TV 10
  { cat: 'TV', title: 'SHAKA ILEMBE', date: '2023–2025',
    img: '../assets/lemogang-tsipa-plays-shaka.jpg' },
  { cat: 'TV', title: 'THE ROAD', date: '2015–2016',
    img: '../assets/The_Road_03.jpg' },
  { cat: 'TV', title: 'ISITHEMBISO', date: '2017–2020',
    img: '../assets/isthembiso_mzansi-magic-cast.png' },
  { cat: 'TV', title: 'AYEYE', date: '2015–2021',
    img: '../assets/Ayeye_08-940x527.jpg' },
  { cat: 'TV', title: 'ISIBAYA', date: '2013–2025',
    img: '../assets/isibaya__34-940x527.jpg' },
  { cat: 'TV', title: 'SOUL BUDDYZ', date: '2007–2013',
    img: '../assets/soulb__01-940x527.jpg' },
  { cat: 'TV', title: 'SHUGA', date: '2009–2023',
    img: '../assets/shuga__05-940x527.jpg' },
  { cat: 'TV', title: "JACOB'S CROSS", date: '2007–2013',
    img: '../assets/jacobs__37-940x527.jpg' },
  { cat: 'TV', title: 'ZONE 14', date: '2023–2025',
    img: '../assets/zone__48-940x527.jpg' },
  { cat: 'TV', title: 'YIZO-YIZO', date: '1999–2004',
    img: '../assets/yizo__21-940x527.jpg' },

  // FILM 6
  { cat: 'FILM', title: 'BACK OF THE MOON', date: '2019',
    img: '../assets/Back-of-the-Moon-pic.jpg' },
  { cat: 'FILM', title: 'LOVE & BROKEN BONES', date: '2016',
    img: '../assets/LoveandBrokenBones_06.jpg' },
  { cat: 'FILM', title: 'SEKALI LE MEOKGO', date: '2006',
    img: '../assets/sekalli__13-940x527.jpg' },
  { cat: 'FILM', title: 'TRANSIT CAFE', date: '2001',
    img: '../assets/transitC_03-940x527.jpg' },
  { cat: 'FILM', title: 'PORTRAIT OF A YOUNG MAN DROWNING', date: '1999',
    img: '../assets/portrait-meshack-940x527.jpg' },
  { cat: 'FILM', title: 'IN DESERT & WILDERNESS', date: '2001',
    img: '../assets/In-desert-1-640x359.jpg' },

  // DOCUMENTARIES 8
  { cat: 'DOCUMENTARIES', title: '42 UP', date: '2021',
    img: '../assets/ChatGPT-Image-Aug-15-2025-10_47_02-AM-640x640.png' },
  { cat: 'DOCUMENTARIES', title: 'FREEDOM SQUARE & BACK OF THE MOON', date: '2021',
    img: '../assets/freedom_sq_03.jpg' },
  { cat: 'DOCUMENTARIES', title: 'LA TOMA (THE SIEGE)', date: '2021',
    img: '../assets/latoma__03-940x527.jpg' },
  { cat: 'DOCUMENTARIES', title: 'BURNING MAN', date: '2019',
    img: '../assets/burnm__03-940x527.jpg' },
  { cat: 'DOCUMENTARIES', title: '7, 14, 21, 28 — UP SOUTH AFRICA', date: '2021',
    img: '../assets/71421__01-940x480.jpg' },
  { cat: 'DOCUMENTARIES', title: 'AMANDLA! A REVOLUTION IN FOUR PART HARMONY', date: '2002',
    img: '../assets/amandla-800-800-450-450-crop-fill.jpg',},
  { cat: 'DOCUMENTARIES', title: 'SOWETO: A HISTORY', date: '2021',
    img: '../assets/Soweto-1-800x800.jpg' },
  { cat: 'DOCUMENTARIES', title: 'MANDELA, SON OF AFRICA, FATHER OF A NATION', date: '1996',
    img: '../assets/Mandela (1996)_files/MV5BMTQzNTkwODY5MV5BMl5BanBnXkFtZTcwMTg0NzgwMw@@._V1_.jpg' },


  // COMMERCIAL — 26
  { cat: 'COMMERCIAL', title: 'WONI - MUSIC', date: '2019', img: '../assets/woni_music_video-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'WAR CHILD', date: '1993', img: '../assets/war_child-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'SOWETO ALL STARS', date: '2009', img: '../assets/Soweto_all_Stars-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'BHEKI', date: '2011', img: '../assets/Bheki-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'MTN - MARVIN', date: '2016', img: '../assets/MTN_Marvin-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'TIA', date: '', img: '../assets/TIA-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'VODACOM - SUMMER LOVING', date: '1994', img: '../assets/Vodacom_Summer_Loving-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'MTN - COMMUNITY TABLES', date: '1999', img: '../assets/MTN_Community_Tables-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'NEDBANK - SHARLTO', date: '2009', img: '../assets/Nedbank-Sharlto-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'NEDBANK - JOHN KANI', date: '2004', img: '../assets/Nedbank_John_Kani-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'SAB BE THE MENTOR', date: '2000', img: '../assets/SAB_Be_a_Mentor-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'MORVITE', date: '2008', img: '../assets/morevite-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'MTN - UGANDA', date: '2002', img: '../assets/mtn_uganda-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'PLAY', date: '2007', img: '../assets/play-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'SASOL', date: '2010', img: '../assets/sasol-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'AMSTEL APPRENTICE', date: '2003', img: '../assets/Amstel_Apprentice-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'ENGEN FRIENDS', date: '2009', img: '../assets/Engen-Friends-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'VODACOM SUMMER LOVIN', date: '2011', img: '../assets/Vodacom-Summer-Lovin-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'DSTV RAP BATTLE', date: '2010', img: '../assets/DSTV-Rap-Battle-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'VODACOM 20TH ANNIVERSARY', date: '2009', img: '../assets/Vodacom-20th-Anniversary-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'IMC 2', date: '2009', img: '../assets/IMC_2-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'MTN DOORMAN', date: '2013', img: '../assets/MTN_Doorman-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'MTN FIFA LOVE STORY', date: '2010', img: '../assets/MTN_lovestory-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'PEAK MILK', date: '1999', img: '../assets/peak_milk-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'PRIMUS', date: '2001', img: '../assets/Primus-640x359.jpg' },
  { cat: 'COMMERCIAL', title: 'FNB - AN ODE TO THE MAINSTREAM MARKET', date: '2012', img: '../assets/FNB_An_Ode-640x359.jpg' },

  // MUSIC VIDEO — 11
  { cat: 'MUSIC VIDEO', title: 'MNATEBAWEN - KHULI CHANA ', date: '2012', img: '../assets/KHULI.jpeg' },
  { cat: 'MUSIC VIDEO', title: 'POWA - TUMI', date: '2011', img: '../assets/POWA.jpeg' },
  { cat: 'MUSIC VIDEO', title: 'TEMPERATURE RISING - LES NUBIANS', date: '2003', img: '../assets/LES.jpeg' },
  { cat: 'MUSIC VIDEO', title: 'NKAIKETSAND - THEMBI SEETE', date: '2001', img: '../assets/download (1).jpeg' },
  { cat: 'MUSIC VIDEO', title: 'GHETTO FABULOUS - ZOLA', date: '2000', img: '../assets/download.jpeg' },
  { cat: 'MUSIC VIDEO', title: 'BLOMA NICE (SURE NTOMBAZANA) - THEMBI & WANDA', date: '2000', img: '../assets/sddefault.jpg' },
  { cat: 'MUSIC VIDEO', title: 'UN GAOU A PARIS - MAGIC SYSTEMS', date: '2001', img: '../assets/51GrCINlDZL._UF894,1000_QL80_.jpg' },
  { cat: 'MUSIC VIDEO', title: 'VICT0RY LAP - AKA', date: '2011', img: '../assets/1636655953-47_AKA_Victory_Lap_Remix_Lyrics_3.jpeg' },
  { cat: 'MUSIC VIDEO', title: 'SHAYIZANDLA - THEMBI SEETE', date: '1999', img: '../assets/images.jpeg' },
  { cat: 'MUSIC VIDEO', title: 'HAZZADAZZ MOVE - KHULI CHANA', date: '2012', img: '../assets/khulichana-ep215.jpg' },
  { cat: 'MUSIC VIDEO', title: 'MPINTSHI MPONTSHO - MDU', date: '2002', img: '../assets/500x500-000000-80-0-0.jpg' },

  // MUSEUM INSTALLATIONS — 3
  { cat: 'MUSEUM INSTALLATIONS', title: 'LILLIESLEAF MUSEUM', date: '2009', img: '../assets/lillies-leaf-House-view-2-800x738.jpg' },
  { cat: 'MUSEUM INSTALLATIONS', title: 'HECTOR PIETERSON MESUEM', date: '2002', img: '../assets/hector__01-940x480.jpg' },
  { cat: 'MUSEUM INSTALLATIONS', title: 'APARTHEID MESUEM', date: '2004', img: '../assets/apart__09-940x480.jpg' },
];

const CATEGORIES = ['ALL', 'TV', 'FILM', 'DOCUMENTARIES', 'COMMERCIAL', 'MUSIC VIDEO', 'MUSEUM INSTALLATIONS'];

//

// ─── STATE ───────────────────────────────────────────────────────────────
let currentCat = 'ALL';
let filteredSlides = [...SLIDES];
let currentIndex = 0;
let autoTimer = null;
const INTERVAL = 5500;

// ─── ELEMENTS ────────────────────────────────────────────────────────────
const hero         = document.getElementById('hero');
const catBar       = document.getElementById('category-bar');
const thumbStrip   = document.getElementById('thumb-strip');
const metaCategory = document.getElementById('meta-category');
const metaTitle    = document.getElementById('meta-title');
const metaDate     = document.getElementById('meta-date');
const progressFill = document.getElementById('progress-fill');
const filmCounter  = document.getElementById('film-counter');
const counterCur   = document.getElementById('counter-current');
const counterTotal = document.getElementById('counter-total');
const frameNum     = document.getElementById('frame-num');
const flash        = document.getElementById('flash');

// ─── SPROCKET HOLES ───────────────────────────────────────────────────────
function buildSprockets() {
  const count = Math.ceil(window.innerHeight / 28);
  ['sprocket-left','sprocket-right'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const hole = document.createElement('div');
        hole.className = 'sprocket-hole';
        el.appendChild(hole);
      }
    }
  });
}
buildSprockets();
window.addEventListener('resize', buildSprockets);

// ─── FILM GRAIN (WebGL-style via canvas) ─────────────────────────────────
const grainCanvas = document.getElementById('grain-canvas');
const ctx = grainCanvas.getContext('2d');
let grainAnim;

function resizeGrain() {
  grainCanvas.width  = window.innerWidth;
  grainCanvas.height = window.innerHeight;
}
resizeGrain();
window.addEventListener('resize', resizeGrain);

function renderGrain() {
  const w = grainCanvas.width;
  const h = grainCanvas.height;
  const imageData = ctx.createImageData(w, h);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const v = (Math.random() * 255) | 0;
    data[i]   = v;
    data[i+1] = v;
    data[i+2] = v;
    data[i+3] = Math.random() < 0.6 ? 30 + (Math.random() * 50 | 0) : 0;
  }
  ctx.putImageData(imageData, 0, 0);
  grainAnim = requestAnimationFrame(renderGrain);
}
renderGrain();

// ─── BUILD SLIDES ─────────────────────────────────────────────────────────
let slideEls = [];
let thumbEls = [];

function buildSlides() {
  hero.innerHTML       = '';
  thumbStrip.innerHTML = '';
  slideEls = [];
  thumbEls = [];

  filteredSlides.forEach((s, i) => {
    // main slide
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.src = s.img;
    img.alt = s.title;
    slide.appendChild(img);
    hero.appendChild(slide);
    slideEls.push(slide);

    // thumbnail
    const thumb = document.createElement('div');
    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
    const tImg = document.createElement('img');
    tImg.src = s.img;
    tImg.alt = s.title;
    thumb.appendChild(tImg);
    thumb.addEventListener('click', () => goTo(i));
    thumbStrip.appendChild(thumb);
    thumbEls.push(thumb);
  });

  counterTotal.textContent = String(filteredSlides.length).padStart(2, '0');
  updateMeta(0);
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────
function buildCategories() {
  catBar.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat === currentCat ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      currentCat = cat;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filteredSlides = cat === 'ALL' ? [...SLIDES] : SLIDES.filter(s => s.cat === cat);
      currentIndex = 0;
      buildSlides();
      resetTimer();
    });
    catBar.appendChild(btn);
  });
}
buildCategories();

// ─── GO TO SLIDE ──────────────────────────────────────────────────────────
function goTo(index, noFlash) {
  if (!filteredSlides.length) return;
  slideEls[currentIndex].classList.remove('active');
  thumbEls[currentIndex].classList.remove('active');

  currentIndex = (index + filteredSlides.length) % filteredSlides.length;

  slideEls[currentIndex].classList.add('active');
  thumbEls[currentIndex].classList.add('active');

  // scroll thumb into view
  thumbEls[currentIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  updateMeta(currentIndex);
  triggerFlash();
  resetProgress();
}

function triggerFlash() {
  flash.classList.remove('go');
  void flash.offsetWidth; // reflow
  flash.classList.add('go');
}

function updateMeta(i) {
  const s = filteredSlides[i];
  if (!s) return;

  metaCategory.textContent = s.cat;
  metaDate.textContent     = s.date;

  metaTitle.classList.remove('changing');
  void metaTitle.offsetWidth;
  metaTitle.textContent = s.title;
  metaTitle.classList.add('changing');

  counterCur.textContent = String(i + 1).padStart(2, '0');
  frameNum.textContent   = `FRAME ${String(i + 1).padStart(4, '0')} — 35mm`;
}

// ─── AUTO ADVANCE ─────────────────────────────────────────────────────────
let progressStart = null;
let progressRaf   = null;

function resetProgress() {
  progressFill.style.transition = 'none';
  progressFill.style.width = '0%';
  void progressFill.offsetWidth;
  progressFill.style.transition = `width ${INTERVAL}ms linear`;
  progressFill.style.width = '100%';
}

function resetTimer() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goTo(currentIndex + 1), INTERVAL);
  resetProgress();
}

// ─── KEYBOARD NAV ─────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { goTo(currentIndex + 1); resetTimer(); }
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { goTo(currentIndex - 1); resetTimer(); }
});

// ─── TOUCH SWIPE ──────────────────────────────────────────────────────────
let touchX = null;
hero.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; });
hero.addEventListener('touchend',   e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) { goTo(currentIndex + (dx < 0 ? 1 : -1)); resetTimer(); }
  touchX = null;
});

// ─── INIT ─────────────────────────────────────────────────────────────────
buildSlides();
resetTimer();



// ─── GRAIN ────────────────────────────────────────────────────────────────
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
    d.data[i+3] = Math.random() < 0.55 ? 18 + (Math.random() * 42 | 0) : 0;
  }
  gx.putImageData(d, 0, 0);
  requestAnimationFrame(grain);
})();

// ─── SPROCKETS ────────────────────────────────────────────────────────────
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

// ─── PERF STRIP ───────────────────────────────────────────────────────────
const perf = document.getElementById('perf');
(function buildPerf() {
  const n = Math.ceil(window.innerHeight / 22);
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span'); perf.appendChild(s);
  }
})();

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => observer.observe(el));

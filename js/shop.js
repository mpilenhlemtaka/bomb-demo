// ── SVG ICONS ─────────────────────────────────────────────────────────────
const ICONS = {
  cap: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 45 Q40 20 65 45" stroke="#f0ece4" stroke-width="2" fill="none"/>
    <path d="M15 45 Q40 52 65 45" stroke="#f0ece4" stroke-width="1.5" fill="rgba(240,236,228,0.08)"/>
    <rect x="10" y="44" width="8" height="4" rx="1" fill="rgba(240,236,228,0.2)"/>
    <line x1="40" y1="22" x2="40" y2="32" stroke="#f0ece4" stroke-width="1.5"/>
    <circle cx="40" cy="21" r="2" fill="#c8281e"/>
  </svg>`,
  bucket: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 30 L18 58 Q40 64 62 58 L58 30 Z" stroke="#f0ece4" stroke-width="1.5" fill="rgba(240,236,228,0.06)"/>
    <path d="M20 30 Q40 24 60 30" stroke="#f0ece4" stroke-width="2" fill="none"/>
    <line x1="20" y1="38" x2="60" y2="38" stroke="#f0ece4" stroke-width="0.8" opacity="0.3"/>
    <circle cx="40" cy="28" r="3" fill="rgba(200,40,30,0.6)"/>
  </svg>`,
  hoodie: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 22 Q40 16 52 22 L60 30 L55 32 L55 62 L25 62 L25 32 L20 30 Z" stroke="#f0ece4" stroke-width="1.5" fill="rgba(240,236,228,0.06)"/>
    <path d="M28 22 Q34 28 40 28 Q46 28 52 22" stroke="#f0ece4" stroke-width="1.5" fill="none"/>
    <line x1="37" y1="30" x2="37" y2="50" stroke="#f0ece4" stroke-width="1" opacity="0.4"/>
    <line x1="43" y1="30" x2="43" y2="50" stroke="#f0ece4" stroke-width="1" opacity="0.4"/>
  </svg>`,
  tote: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="32" width="44" height="34" rx="2" stroke="#f0ece4" stroke-width="1.5" fill="rgba(240,236,228,0.06)"/>
    <path d="M30 32 Q30 20 40 20 Q50 20 50 32" stroke="#f0ece4" stroke-width="1.5" fill="none"/>
    <text x="40" y="54" text-anchor="middle" font-size="10" fill="rgba(200,40,30,0.7)" font-family="serif">b•mb</text>
  </svg>`,
  book: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="14" width="38" height="52" rx="2" stroke="#f0ece4" stroke-width="1.5" fill="rgba(240,236,228,0.06)"/>
    <rect x="22" y="14" width="6" height="52" fill="rgba(200,40,30,0.25)"/>
    <line x1="30" y1="28" x2="50" y2="28" stroke="#f0ece4" stroke-width="1" opacity="0.4"/>
    <line x1="30" y1="34" x2="50" y2="34" stroke="#f0ece4" stroke-width="1" opacity="0.3"/>
    <line x1="30" y1="40" x2="44" y2="40" stroke="#f0ece4" stroke-width="1" opacity="0.3"/>
  </svg>`,
  print: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="14" width="52" height="52" stroke="#f0ece4" stroke-width="1.5" fill="rgba(240,236,228,0.04)"/>
    <rect x="18" y="18" width="44" height="44" stroke="rgba(240,236,228,0.2)" stroke-width="0.5" fill="none"/>
    <circle cx="40" cy="40" r="14" stroke="rgba(200,40,30,0.5)" stroke-width="1.5" fill="none"/>
    <line x1="14" y1="14" x2="30" y2="30" stroke="rgba(240,236,228,0.1)" stroke-width="0.5"/>
    <line x1="66" y1="14" x2="50" y2="30" stroke="rgba(240,236,228,0.1)" stroke-width="0.5"/>
  </svg>`,
  mug: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 28 L20 60 Q40 66 60 60 L60 28 Z" stroke="#f0ece4" stroke-width="1.5" fill="rgba(240,236,228,0.06)"/>
    <path d="M60 34 Q72 34 72 44 Q72 54 60 54" stroke="#f0ece4" stroke-width="1.5" fill="none"/>
    <text x="40" y="50" text-anchor="middle" font-size="9" fill="rgba(200,40,30,0.6)" font-family="serif">b•mb</text>
  </svg>`,
};

// ── PRODUCTS ──────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1, cat: 'Headwear', name: 'b•mb Snapback Cap', icon: 'cap',
    desc: 'Six-panel structured snapback. Embroidered b•mb logo on the front. Adjustable back strap. One size fits most.',
    price: 490, sizes: ['One Size'], ribbon: 'Bestseller', soldOut: false
  },
  {
    id: 2, cat: 'Headwear', name: 'b•mb Bucket Hat', icon: 'bucket',
    desc: 'Unstructured cotton twill bucket hat. Woven b•mb label on the brim. Perfect for the Jozi sun.',
    price: 450, sizes: ['S/M', 'L/XL'], ribbon: null, soldOut: false
  },
  {
    id: 3, cat: 'Apparel', name: 'Bomb Shelter Hoodie', icon: 'hoodie',
    desc: '380gsm heavyweight cotton fleece. Screen-printed logo. Kangaroo pocket. Made in South Africa.',
    price: 990, sizes: ['S', 'M', 'L', 'XL', 'XXL'], ribbon: 'New', soldOut: false
  },
  {
    id: 4, cat: 'Apparel', name: 'The Sheltered Hoodie', icon: 'hoodie',
    desc: 'Limited edition hoodie featuring the iconic Yizo-Yizo era logo, screen-printed on heavyweight fleece. A collector\'s piece.',
    price: 1150, sizes: ['S', 'M', 'L', 'XL'], ribbon: 'Limited', soldOut: false
  },
  {
    id: 5, cat: 'Accessories', name: 'b•mb Tote Bag', icon: 'tote',
    desc: 'Heavyweight 12oz natural canvas. Screen-printed b•mb logo. Reinforced handles. 42 × 38cm.',
    price: 320, sizes: ['One Size'], ribbon: null, soldOut: false
  },
  {
    id: 6, cat: 'Accessories', name: 'The Bomb Shelter Mug', icon: 'mug',
    desc: '350ml ceramic mug. Dishwasher safe. The b•mb logo in matte finish on both sides. For the long nights in the edit suite.',
    price: 280, sizes: ['One Size'], ribbon: null, soldOut: false
  },
  {
    id: 7, cat: 'Print & Books', name: 'Three Decades: The b•mb Archive', icon: 'book',
    desc: 'A 280-page hardcover retrospective of The Bomb Shelter Productions — 1996 to 2024. Behind-the-scenes photography, essays, scripts and production notes. Numbered edition.',
    price: 1850, sizes: ['Hardcover'], ribbon: 'Limited', soldOut: false
  },
  {
    id: 8, cat: 'Print & Books', name: 'Shaka iLembe: The Art of the Series', icon: 'book',
    desc: 'The official companion book to Shaka iLembe Season 1. Costume design, set photography, script extracts, historical research and interviews with the creative team. 220 pages.',
    price: 1450, sizes: ['Hardcover'], ribbon: 'New', soldOut: false
  },
  {
    id: 9, cat: 'Print & Books', name: 'Yizo-Yizo: A Script Archive', icon: 'book',
    desc: 'The original shooting scripts from Yizo-Yizo Seasons 1–3, with annotations and director\'s notes. A piece of South African television history. Softcover, 320 pages.',
    price: 980, sizes: ['Softcover'], ribbon: null, soldOut: false
  },
  {
    id: 10, cat: 'Print & Books', name: 'b•mb Film Still — Shaka iLembe', icon: 'print',
    desc: 'Museum-quality archival pigment print on 300gsm Hahnemühle cotton rag. Numbered and signed. 50 × 70cm. Supplied in a protective tube.',
    price: 2200, sizes: ['50×70cm'], ribbon: 'Collector', soldOut: false
  },
  {
    id: 11, cat: 'Print & Books', name: 'b•mb Film Still — Back of the Moon', icon: 'print',
    desc: 'Archival pigment print from the 2019 feature film. Signed by the director. 40 × 60cm. Numbered edition of 50.',
    price: 1950, sizes: ['40×60cm'], ribbon: 'Collector', soldOut: false
  },
  {
    id: 12, cat: 'Accessories', name: 'b•mb Tote + Cap Bundle', icon: 'tote',
    desc: 'The full kit — one canvas tote bag and one snapback cap. Bundle price saves you R90 versus buying separately.',
    price: 720, sizes: ['One Size'], ribbon: 'Bundle', soldOut: false
  },
];

const CATS = ['All', 'Apparel', 'Headwear', 'Accessories', 'Print & Books'];

// ── FAQ DATA ───────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Where do you ship?', a: 'We currently ship within South Africa only. We use The Courier Guy and Aramex for all deliveries. Delivery typically takes 3–5 business days to major centres and 5–7 business days to outlying areas.' },
  { q: 'How much is shipping?', a: 'Standard shipping is R95 flat rate nationwide. Free shipping on all orders over R1,500. Express next-day delivery is available to Johannesburg, Cape Town and Durban for R180.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard), EFT via PayFast, Ozow instant EFT, and SnapScan. All transactions are secured and processed in ZAR.' },
  { q: 'Can I return or exchange an item?', a: 'Yes. We accept returns and exchanges within 14 days of receipt, provided items are unused and in original packaging. Books and limited-edition prints are non-returnable. Contact us at shop@thebombshelter.co.za to initiate a return.' },
  { q: 'Are the books available in stores?', a: 'Selected titles are available at Exclusive Books branches in Johannesburg and Cape Town. However, the signed and numbered editions are exclusively available through this store.' },
  { q: 'How do I care for my hoodie or cap?', a: 'All apparel should be washed at 30°C on a gentle cycle and air-dried. Do not tumble dry. Screen-printed items should be turned inside out before washing to preserve the print.' },
  { q: 'Are the film prints actually signed?', a: 'Yes — all collector\'s prints are signed by the director and come with a certificate of authenticity. Each print is numbered as part of a strictly limited edition and will not be reprinted.' },
  { q: 'How long does processing take?', a: 'Orders are processed and dispatched within 2 business days. During high-volume periods (awards season, new releases) please allow up to 4 business days. You will receive an email with your tracking number once your order has shipped.' },
];

// ── CART STATE ─────────────────────────────────────────────────────────────
let cart = [];
let activeFilter = 'All';

// ── UTILITIES ──────────────────────────────────────────────────────────────
function fmt(n) { return `R${n.toLocaleString('en-ZA', { minimumFractionDigits: 0 })}`; }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

function bumpCount() {
  const c = document.getElementById('cart-count');
  c.classList.remove('bump');
  void c.offsetWidth;
  c.classList.add('bump');
}

// ── FILTER ─────────────────────────────────────────────────────────────────
const filterBar = document.getElementById('filter-bar');
function buildFilters() {
  filterBar.innerHTML = '';
  CATS.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'f-btn' + (cat === activeFilter ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeFilter = cat;
      buildFilters();
      renderProducts();
    });
    filterBar.appendChild(btn);
  });
}

// ── PRODUCTS ───────────────────────────────────────────────────────────────
const productGrid = document.getElementById('product-grid');

function renderProducts() {
  const list = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === activeFilter);

  productGrid.innerHTML = '';

  list.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${idx * 0.04}s`;

    // selected size state per product
    let selectedSize = p.sizes.length === 1 ? p.sizes[0] : null;

    const sizeHtml = p.sizes.length === 1
      ? `<div class="size-row"><div class="size-btn selected">${p.sizes[0]}</div></div>`
      : `<div class="size-row">${p.sizes.map(s =>
          `<button class="size-btn" data-size="${s}">${s}</button>`
        ).join('')}</div>`;

    card.innerHTML = `
      <div class="product-img">
        <div class="product-visual">
          ${ICONS[p.icon] || ''}
          <span class="product-visual-label">${p.name.split(' ').slice(-1)[0]}</span>
        </div>
        <div class="frame-badge">▣ ${String(p.id).padStart(4,'0')}</div>
        ${p.ribbon ? `<div class="product-ribbon">${p.ribbon}</div>` : ''}
        ${p.soldOut ? `<div class="sold-out-overlay"><span>Sold Out</span></div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price">${fmt(p.price)} <span>ZAR</span></div>
        ${sizeHtml}
        <button class="add-btn" data-id="${p.id}" ${p.soldOut ? 'disabled' : ''}>
          ${p.soldOut ? 'Sold Out' : '+ Add to Cart'}
        </button>
      </div>
    `;

    // size selection
    card.querySelectorAll('.size-btn[data-size]').forEach(btn => {
      btn.addEventListener('click', () => {
        card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = btn.dataset.size;
        card.querySelector('.add-btn').disabled = false;
      });
    });
    // multi-size: disable add until size chosen
    if (p.sizes.length > 1 && !p.soldOut) {
      card.querySelector('.add-btn').disabled = true;
      card.querySelector('.add-btn').textContent = 'Select a Size';
      card.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          card.querySelector('.add-btn').textContent = '+ Add to Cart';
        });
      });
    }

    // add to cart
    card.querySelector('.add-btn')?.addEventListener('click', () => {
      if (!selectedSize && p.sizes.length > 1) return;
      addToCart(p, selectedSize || p.sizes[0]);
    });

    productGrid.appendChild(card);
  });
}

// ── CART LOGIC ─────────────────────────────────────────────────────────────
function addToCart(product, size) {
  const key = `${product.id}-${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, product, size, qty: 1 });
  }
  updateCartUI();
  showToast(`▣ ${product.name} added to cart`);
  bumpCount();
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  updateCartUI();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(key);
  else updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal   = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping   = subtotal >= 1500 ? 0 : (subtotal === 0 ? 0 : 95);
  const total      = subtotal + shipping;

  // count badge
  document.getElementById('cart-count').textContent = totalItems;

  // items list
  const list = document.getElementById('cart-items-list');
  if (cart.length === 0) {
    list.innerHTML = `<div class="cart-empty">
      <p>Your cart is empty</p>
      <small>▣ Add something to get started</small>
    </div>`;
  } else {
    list.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-thumb">${ICONS[item.product.icon] || ''}</div>
        <div class="ci-info">
          <div class="ci-name">${item.product.name}</div>
          <div class="ci-sub">${item.size} · ${item.product.cat}</div>
          <div class="ci-price">${fmt(item.product.price * item.qty)}</div>
          <div class="ci-controls">
            <button class="qty-btn" data-key="${item.key}" data-delta="-1">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" data-key="${item.key}" data-delta="1">+</button>
            <button class="ci-remove" data-key="${item.key}">Remove</button>
          </div>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => changeQty(btn.dataset.key, parseInt(btn.dataset.delta)));
    });
    list.querySelectorAll('.ci-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(btn.dataset.key));
    });
  }

  // summary
  const summary = document.getElementById('cart-summary');
  summary.innerHTML = `
    <div class="cart-row label"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
    <div class="cart-row label"><span>Shipping ${subtotal >= 1500 ? '(Free!)' : ''}</span><span>${shipping === 0 && subtotal > 0 ? 'Free' : shipping === 0 ? '—' : fmt(shipping)}</span></div>
    <div class="cart-row total"><span>Total</span><span>${fmt(total)}</span></div>
  `;

  document.getElementById('checkout-btn').disabled = cart.length === 0;
}

// ── CART DRAWER ────────────────────────────────────────────────────────────
function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cart-toggle-btn').addEventListener('click', openCart);
document.getElementById('cart-close-btn').addEventListener('click', closeCart);
document.getElementById('cart-backdrop').addEventListener('click', closeCart);
document.getElementById('continue-btn').addEventListener('click', closeCart);
document.getElementById('checkout-btn').addEventListener('click', () => {
  showToast('▣ Checkout integration coming soon');
});

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqGrid = document.getElementById('faq-grid');
FAQS.forEach(faq => {
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `
    <button class="faq-q">
      <span class="faq-q-text">${faq.q}</span>
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-a"><p>${faq.a}</p></div>
  `;
  item.querySelector('.faq-q').addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    faqGrid.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
  faqGrid.appendChild(item);
});

// ── GRAIN ──────────────────────────────────────────────────────────────────
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
    d.data[i+3] = Math.random() < 0.55 ? 18 + (Math.random() * 40|0) : 0;
  }
  gx.putImageData(d, 0, 0);
  requestAnimationFrame(grain);
})();

// ── SPROCKETS ──────────────────────────────────────────────────────────────
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

// ── INIT ───────────────────────────────────────────────────────────────────
buildFilters();
renderProducts();
updateCartUI();

// ═══════════════════════════════════════════════════════════════════
// HAMBURGER MENU TOGGLE
// ═══════════════════════════════════════════════════════════════════

(function() {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  
  if (!nav || !navLinks) return;
  
  let hamburger = document.querySelector('.hamburger');
  
  if (!hamburger) {
    hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(hamburger);
  }
  
  hamburger.addEventListener('click', function() {
    const isOpen = this.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });
  
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
  });
})();
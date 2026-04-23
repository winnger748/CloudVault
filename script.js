const hamburger = document.querySelector('.cv-hamburger');
  const navLinks = document.querySelector('.cv-nav-links');
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.cssText = open
      ? ''
      : 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(3,7,15,0.97);backdrop-filter:blur(20px);padding:2rem;gap:1.5rem;border-bottom:1px solid rgba(0,212,255,0.12);z-index:99';
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
      if (navLinks.style.display === 'flex' && window.innerWidth < 769) navLinks.style.cssText = '';
    });
  });
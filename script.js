
  // scroll progress wire
  const fill = document.getElementById('wire-fill');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    fill.style.height = pct + '%';
  });
 
  // mobile menu
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
 
  // reveal on scroll
  const cards = document.querySelectorAll('.cat-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => { if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('reveal'), i*70); io.unobserve(e.target); } });
  }, {threshold:0.2});
  cards.forEach(c => io.observe(c));

(() => {
  const nav = document.querySelector('.section-nav');
  if (!nav) return;
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let scrollPending = false;

  function updateActiveSection() {
    const threshold = Math.min(window.innerHeight * 0.3, 220);
    let active = 0;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= threshold) active = index;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
      active = sections.length - 1;
    }
    links.forEach((link, index) => {
      link.classList.toggle('active', index === active);
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollPending = false;
  }

  function requestNavUpdate() {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(updateActiveSection);
  }

  addEventListener('scroll', requestNavUpdate, { passive: true });
  addEventListener('resize', requestNavUpdate, { passive: true });
  addEventListener('load', requestNavUpdate);
  updateActiveSection();

  const spotlight = document.querySelector('.spotlight');
  const allowPointerEffect = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  let pointerPending = false;
  let x = 0;
  let y = 0;
  addEventListener('pointermove', event => {
    if (!spotlight || !allowPointerEffect.matches) return;
    x = event.clientX;
    y = event.clientY;
    if (pointerPending) return;
    pointerPending = true;
    requestAnimationFrame(() => {
      spotlight.style.setProperty('--mouse-x', `${x}px`);
      spotlight.style.setProperty('--mouse-y', `${y}px`);
      pointerPending = false;
    });
  }, { passive: true });
})();

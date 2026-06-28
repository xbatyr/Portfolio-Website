// Reveal elements as they scroll into view.
// Above-the-fold items are revealed synchronously so the hero never depends on
// an async observer firing; everything else is handled by IntersectionObserver
// (with a scroll-based fallback for older browsers).
export function initReveal() {
  const items = Array.from(document.querySelectorAll('.reveal'));
  if (!items.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const reveal = (el) => el.classList.add('is-visible');
  const inView = (el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight * 0.92 && r.bottom > 0;
  };

  // Reveal whatever is already on screen immediately (covers the hero).
  items.forEach((el) => inView(el) && reveal(el));
  const remaining = () => items.filter((el) => !el.classList.contains('is-visible'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    remaining().forEach((el) => io.observe(el));
  } else {
    const onScroll = () => {
      remaining().forEach((el) => inView(el) && reveal(el));
      if (!remaining().length) window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}

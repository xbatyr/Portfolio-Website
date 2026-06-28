// Animated preloader that fakes a smooth load progress, then reveals the page.
export function initPreloader() {
  const el = document.getElementById('preloader');
  if (!el) return Promise.resolve();

  const bar = el.querySelector('.preloader__bar span');
  const count = el.querySelector('.preloader__count');
  document.body.classList.add('is-loading');

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return new Promise((resolve) => {
    let progress = 0;
    const finish = () => {
      el.classList.add('is-done');
      document.body.classList.remove('is-loading');
      resolve();
    };

    if (reduce) {
      if (bar) bar.style.width = '100%';
      if (count) count.textContent = '100%';
      setTimeout(finish, 150);
      return;
    }

    const tick = setInterval(() => {
      progress += Math.random() * 18 + 6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(tick);
        if (bar) bar.style.width = '100%';
        if (count) count.textContent = '100%';
        setTimeout(finish, 350);
      } else {
        if (bar) bar.style.width = progress + '%';
        if (count) count.textContent = Math.floor(progress) + '%';
      }
    }, 130);
  });
}

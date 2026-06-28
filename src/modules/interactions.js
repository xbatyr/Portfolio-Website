// Micro-interactions: 3D tilt, magnetic buttons, card spotlight, role typewriter, year.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export function initInteractions() {
  setYear();
  initRoleRotator();
  if (!fine || reduce) return;
  initTilt();
  initMagnetic();
  initSpotlight();
}

function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// Rotating, typewritten job roles in the hero.
function initRoleRotator() {
  const host = document.getElementById('roleRotator');
  if (!host) return;
  const roles = ['ML / AI Engineer', 'Researcher', 'Mathematician', 'Systems Builder'];
  const span = host.querySelector('.hero__role');
  if (!span) return;

  if (reduce) {
    span.textContent = roles[0];
    return;
  }

  let r = 0;
  let i = 0;
  let deleting = false;

  const loop = () => {
    const word = roles[r];
    span.textContent = word.slice(0, i);

    if (!deleting && i < word.length) {
      i++;
      setTimeout(loop, 75);
    } else if (!deleting && i === word.length) {
      deleting = true;
      setTimeout(loop, 1600);
    } else if (deleting && i > 0) {
      i--;
      setTimeout(loop, 38);
    } else {
      deleting = false;
      r = (r + 1) % roles.length;
      setTimeout(loop, 280);
    }
  };
  loop();
}

// 3D tilt for elements with [data-tilt].
function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    const max = 12;
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${py * -max}deg) rotateY(${px * max}deg) translateZ(8px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// Magnetic pull for buttons with [data-magnetic].
function initMagnetic() {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = 0.35;
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// Cursor-following spotlight on cards.
function initSpotlight() {
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}

import './style.css';

import { initPreloader } from './modules/preloader.js';
import { initCursor } from './modules/cursor.js';
import { initNeural } from './modules/neural.js';
import { initNavigation } from './modules/navigation.js';
import { initReveal } from './modules/reveal.js';
import { initCounters } from './modules/counters.js';
import { initInteractions } from './modules/interactions.js';
import { initI18n } from './modules/i18n.js';

// Things that don't depend on the intro finishing can start immediately.
function boot() {
  initI18n();
  initCursor();
  initNeural();
  initNavigation();
  initInteractions();

  // Reveal + counters look best kicked off once the preloader clears,
  // so the first viewport animates in rather than appearing mid-load.
  initPreloader().then(() => {
    initReveal();
    initCounters();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

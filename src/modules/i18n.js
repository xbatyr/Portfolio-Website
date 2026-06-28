// Lightweight i18n: EN / RU / KZ. No dependencies.
// Translatable text carries data-i18n (textContent) or data-i18n-html (innerHTML).
// The hero role rotator lives here too, since its words are translated content.

const STORAGE_KEY = 'bk-lang';
const SUPPORTED = ['en', 'ru', 'kz'];

const translations = {
  en: {
    'nav.about': 'About',
    'nav.expertise': 'Expertise',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",

    'hero.badge': 'Available for select collaborations',
    'hero.title': 'Engineering intelligence<br>from <span class="grad-text">first principles.</span>',
    'hero.rolesLabel': "I'm Batyrlan —",
    'hero.desc':
      'I bridge pure mathematics and cutting-edge AI to design robust, scalable, and genuinely intelligent systems — from research notebook to production at scale.',
    'hero.ctaPrimary': 'Explore my work',
    'hero.ctaSecondary': 'Get in touch',
    'hero.scroll': 'Scroll',
    'hero.chipUptime': '99.9% uptime',
    'hero.chipLatency': '< 40ms latency',
    roles: ['ML / AI Engineer', 'Researcher', 'Mathematician', 'Systems Builder'],

    'stats.experience': 'Year of experience',
    'stats.models': 'Models in production',
    'stats.stacks': 'Tech stacks mastered',
    'stats.reliability': 'Production reliability',

    'about.eyebrow': '01 — About',
    'about.title': 'Math is the language.<br><span class="grad-text">AI is the application.</span>',
    'about.lead':
      "I'm a machine-learning engineer and researcher who treats every model as a theorem to be proven. My background in pure mathematics lets me reason about systems where others guess — turning fuzzy problems into precise, well-behaved architectures.",
    'about.text':
      'From transformer internals and optimization theory to distributed training and low-latency inference, I work across the full stack of modern AI. I care about correctness, reproducibility, and shipping research that actually survives contact with production.',
    'about.list1': 'Deep learning & large language models',
    'about.list2': 'Optimization, probability & applied mathematics',
    'about.list3': 'Scalable MLOps & real-time inference systems',
    'about.list4': 'Research → production, end to end',

    'exp.eyebrow': '02 — Expertise',
    'exp.title': 'What I bring to the table',
    'exp.sub': 'A full-spectrum skill set across research, engineering, and infrastructure.',
    'exp.deepT': 'Deep Learning',
    'exp.deepD': 'Transformers, diffusion, GNNs and beyond — architected, trained, and tuned for real performance.',
    'exp.llmT': 'LLMs & NLP',
    'exp.llmD': 'Fine-tuning, RAG, alignment and evaluation pipelines for language models that ship.',
    'exp.cvT': 'Computer Vision',
    'exp.cvD': 'Detection, segmentation and multimodal perception with production-grade accuracy.',
    'exp.mathT': 'Applied Mathematics',
    'exp.mathD': 'Optimization, linear algebra and probability as the foundation for every model decision.',
    'exp.mlopsT': 'MLOps & Infra',
    'exp.mlopsD': 'Reproducible pipelines, distributed training and low-latency serving at scale.',
    'exp.dataT': 'Data Engineering',
    'exp.dataD': 'Robust ingestion, feature stores and streaming pipelines that feed hungry models.',

    'work.eyebrow': '03 — Selected work',
    'work.title': "Things I've built",
    'work.sub': 'A few projects where math, models, and engineering came together.',
    'work.soonBadge': 'In progress',
    'work.soonTitle': 'Coming soon',
    'work.soonText':
      "I'm putting the finishing touches on a few projects worth showing. Check back shortly.",

    'contact.eyebrow': '04 — Contact',
    'contact.title': "Let's build something <span class=\"grad-text\">intelligent.</span>",
    'contact.sub':
      "Have a hard problem, a research idea, or a product that needs real ML? I'd love to hear about it.",

    'footer.tagline': 'crafted with math & caffeine.',
    'footer.top': 'Back to top ↑',
  },

  ru: {
    'nav.about': 'Обо мне',
    'nav.expertise': 'Навыки',
    'nav.work': 'Проекты',
    'nav.contact': 'Контакты',
    'nav.cta': 'Связаться',

    'hero.badge': 'Открыт к интересным проектам',
    'hero.title': 'Создаю интеллект<br>из <span class="grad-text">первых принципов.</span>',
    'hero.rolesLabel': 'Я Батырлан —',
    'hero.desc':
      'Соединяю чистую математику и передовой ИИ, чтобы строить надёжные, масштабируемые и по-настоящему умные системы — от исследовательского ноутбука до продакшена.',
    'hero.ctaPrimary': 'Смотреть проекты',
    'hero.ctaSecondary': 'Связаться',
    'hero.scroll': 'Вниз',
    'hero.chipUptime': '99.9% аптайм',
    'hero.chipLatency': '< 40мс задержка',
    roles: ['ML/AI инженер', 'Исследователь', 'Математик', 'Архитектор систем'],

    'stats.experience': 'Год опыта',
    'stats.models': 'Моделей в проде',
    'stats.stacks': 'Технологий в стеке',
    'stats.reliability': 'Надёжность в проде',

    'about.eyebrow': '01 — Обо мне',
    'about.title': 'Математика — язык.<br><span class="grad-text">ИИ — применение.</span>',
    'about.lead':
      'Я ML-инженер и исследователь, для которого каждая модель — это теорема, которую нужно доказать. Математическая база позволяет рассуждать там, где другие просто гадают, превращая размытые задачи в точные и предсказуемые архитектуры.',
    'about.text':
      'От внутреннего устройства трансформеров и теории оптимизации до распределённого обучения и low-latency инференса — я работаю на всём стеке современного ИИ. Ценю корректность, воспроизводимость и исследования, которые выживают в продакшене.',
    'about.list1': 'Глубокое обучение и большие языковые модели',
    'about.list2': 'Оптимизация, вероятность и прикладная математика',
    'about.list3': 'Масштабируемый MLOps и real-time инференс',
    'about.list4': 'От исследования до продакшена, под ключ',

    'exp.eyebrow': '02 — Навыки',
    'exp.title': 'Что я умею',
    'exp.sub': 'Полный спектр навыков: исследования, инженерия и инфраструктура.',
    'exp.deepT': 'Глубокое обучение',
    'exp.deepD': 'Трансформеры, диффузия, GNN и не только — проектирую, обучаю и настраиваю под реальную производительность.',
    'exp.llmT': 'LLM и NLP',
    'exp.llmD': 'Файн-тюнинг, RAG, выравнивание и оценка языковых моделей, готовых к продакшену.',
    'exp.cvT': 'Компьютерное зрение',
    'exp.cvD': 'Детекция, сегментация и мультимодальное восприятие с точностью уровня продакшена.',
    'exp.mathT': 'Прикладная математика',
    'exp.mathD': 'Оптимизация, линейная алгебра и вероятность как основа каждого решения модели.',
    'exp.mlopsT': 'MLOps и инфра',
    'exp.mlopsD': 'Воспроизводимые пайплайны, распределённое обучение и low-latency сервинг в масштабе.',
    'exp.dataT': 'Дата-инженерия',
    'exp.dataD': 'Надёжный сбор данных, feature store и стриминговые пайплайны для прожорливых моделей.',

    'work.eyebrow': '03 — Проекты',
    'work.title': 'Мои проекты',
    'work.sub': 'Несколько проектов на стыке математики, моделей и инженерии.',
    'work.soonBadge': 'В работе',
    'work.soonTitle': 'Скоро',
    'work.soonText':
      'Заканчиваю несколько проектов, которые не стыдно показать. Загляни чуть позже.',

    'contact.eyebrow': '04 — Контакты',
    'contact.title': 'Давайте создадим что-то <span class="grad-text">умное.</span>',
    'contact.sub':
      'Есть сложная задача, исследовательская идея или продукт, которому нужен настоящий ML? Расскажите — буду рад.',

    'footer.tagline': 'сделано на математике и кофеине.',
    'footer.top': 'Наверх ↑',
  },

  kz: {
    'nav.about': 'Мен туралы',
    'nav.expertise': 'Дағдылар',
    'nav.work': 'Жобалар',
    'nav.contact': 'Байланыс',
    'nav.cta': 'Хабарласу',

    'hero.badge': 'Қызықты жобаларға ашықпын',
    'hero.title': 'Зияткерлікті<br><span class="grad-text">түбегейлі принциптерден</span> құрамын',
    'hero.rolesLabel': 'Мен Батырланмын —',
    'hero.desc':
      'Таза математика мен заманауи ЖИ-ді біріктіріп, сенімді, ауқымды әрі шынайы зияткер жүйелер құрамын — зерттеу кезеңінен бастап өндіріске дейін.',
    'hero.ctaPrimary': 'Жобаларды көру',
    'hero.ctaSecondary': 'Хабарласу',
    'hero.scroll': 'Төмен',
    'hero.chipUptime': '99.9% аптайм',
    'hero.chipLatency': '< 40мс кідіріс',
    roles: ['ML/AI инженер', 'Зерттеуші', 'Математик', 'Жүйе сәулетшісі'],

    'stats.experience': 'Жыл тәжірибе',
    'stats.models': 'Продакшндегі модель',
    'stats.stacks': 'Меңгерілген технология',
    'stats.reliability': 'Өндірістегі сенімділік',

    'about.eyebrow': '01 — Мен туралы',
    'about.title': 'Математика — тіл.<br><span class="grad-text">ЖИ — оның қолданысы.</span>',
    'about.lead':
      'Мен әр модельді дәлелденуі тиіс теорема деп санайтын ML-инженер әрі зерттеушімін. Математикалық негізім басқалар тек болжайтын жерде ой жүгіртіп, бұлыңғыр мәселелерді нақты әрі сенімді архитектураларға айналдыруға мүмкіндік береді.',
    'about.text':
      'Трансформерлердің ішкі құрылымы мен оптимизация теориясынан бастап үлестірілген оқыту мен төмен кідірісті инференске дейін — заманауи ЖИ-дің барлық деңгейінде жұмыс істеймін. Дұрыстықты, қайталанымдылықты және өндірісте шыдайтын зерттеулерді бағалаймын.',
    'about.list1': 'Терең оқыту және үлкен тілдік модельдер',
    'about.list2': 'Оптимизация, ықтималдық және қолданбалы математика',
    'about.list3': 'Ауқымды MLOps және нақты уақыттағы инференс',
    'about.list4': 'Зерттеуден өндіріске дейін, толық цикл',

    'exp.eyebrow': '02 — Дағдылар',
    'exp.title': 'Не істей аламын',
    'exp.sub': 'Зерттеу, инженерия және инфрақұрылым бойынша толық дағдылар жиынтығы.',
    'exp.deepT': 'Терең оқыту',
    'exp.deepD': 'Трансформерлер, диффузия, GNN және т.б. — нақты өнімділікке арнап жобалаймын, оқытамын және баптаймын.',
    'exp.llmT': 'LLM және NLP',
    'exp.llmD': 'Тілдік модельдерді баптау, RAG, туралау және бағалау — өндіріске дайын.',
    'exp.cvT': 'Компьютерлік көру',
    'exp.cvD': 'Анықтау, сегментация және мультимодалды қабылдау — өндірістік дәлдікпен.',
    'exp.mathT': 'Қолданбалы математика',
    'exp.mathD': 'Оптимизация, сызықтық алгебра және ықтималдық — әр модель шешімінің негізі.',
    'exp.mlopsT': 'MLOps және инфра',
    'exp.mlopsD': 'Қайталанатын пайплайндар, үлестірілген оқыту және ауқымды төмен кідірісті сервинг.',
    'exp.dataT': 'Дерек инженериясы',
    'exp.dataD': 'Сенімді деректер жинау, feature store және ашқарақ модельдерді қоректендіретін ағынды пайплайндар.',

    'work.eyebrow': '03 — Жобалар',
    'work.title': 'Менің жобаларым',
    'work.sub': 'Математика, модельдер мен инженерия тоғысқан бірнеше жоба.',
    'work.soonBadge': 'Жұмыс үстінде',
    'work.soonTitle': 'Жақында',
    'work.soonText':
      'Көрсетуге тұрарлық бірнеше жобаны аяқтап жатырмын. Сәл кейінірек оралыңыз.',

    'contact.eyebrow': '04 — Байланыс',
    'contact.title': 'Бірге <span class="grad-text">ақылды</span> нәрсе жасайық.',
    'contact.sub':
      'Күрделі мәселе, зерттеу идеясы немесе нағыз ML қажет өнім бар ма? Айтып беріңіз — қуана тыңдаймын.',

    'footer.tagline': 'математика мен кофеинмен жасалған.',
    'footer.top': 'Жоғарыға ↑',
  },
};

let current = 'en';
let roleTimer = null;

export function initI18n() {
  const saved = localStorage.getItem(STORAGE_KEY);
  current = SUPPORTED.includes(saved) ? saved : 'en';

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => apply(btn.dataset.lang));
  });

  apply(current);
}

function apply(lang) {
  if (!SUPPORTED.includes(lang)) return;
  current = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang === 'kz' ? 'kk' : lang;

  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = dict[el.dataset.i18nHtml];
    if (v != null) el.innerHTML = v;
  });

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  startRoleRotator(dict.roles);
}

// Typewriter that cycles through the (translated) role list.
function startRoleRotator(roles) {
  const host = document.getElementById('roleRotator');
  const span = host && host.querySelector('.hero__role');
  if (!span || !roles || !roles.length) return;

  if (roleTimer) {
    clearTimeout(roleTimer);
    roleTimer = null;
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

    let delay;
    if (!deleting && i < word.length) {
      i++;
      delay = 75;
    } else if (!deleting && i === word.length) {
      deleting = true;
      delay = 1600;
    } else if (deleting && i > 0) {
      i--;
      delay = 38;
    } else {
      deleting = false;
      r = (r + 1) % roles.length;
      delay = 280;
    }
    roleTimer = setTimeout(loop, delay);
  };
  loop();
}

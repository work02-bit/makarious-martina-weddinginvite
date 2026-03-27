/*
  Makarious & Martina - app.js
  Edit CONFIG and T (translations) only.
*/

/* CONFIG ✏️ */
var CONFIG = {
  wedding     : new Date(2026, 3, 25, 19, 0, 0),
  musicSrc    : 'D:\work\wedding\WhatsApp Audio 2026-03-20 at 10.07.58 PM.mpeg',
  musicVolume : 1,
  musicStartAt: 0,
  autoPlay    : true,
  defaultLang : 'en'
};

/* TRANSLATIONS ✏️ */
var T = {
  en: {
    langSwitch  : 'Arabic',
    navHome     : 'Home',
    navCountdown: 'Countdown',
    navDetails  : 'Details',
    navInv      : 'Invitation',
    navVideo    : 'Video',
    navGallery  : 'Gallery',
    tap         : 'Tap to open',
    heroSub     : 'We are getting married',
    heroCta     : 'See countdown',
    cdTitle     : 'Counting the days',
    days        : 'Days',
    hours       : 'Hours',
    mins        : 'Minutes',
    secs        : 'Seconds',
    calTitle    : 'April 2026',
    weddingDay  : 'Wedding day - 25 April 2026',
    wkSun:'Sun', wkMon:'Mon', wkTue:'Tue', wkWed:'Wed',
    wkThu:'Thu', wkFri:'Fri', wkSat:'Sat',
    detTitle    : 'Wedding details',
    lblDate     : 'Date',
    lblTime     : 'Time',
    lblChurch   : 'Holy Ceremony',
    lblHall     : 'Wedding Reception',
    date        : 'Saturday, 25 April 2026',
    time        : '7 : 00 PM',
    churchName  : 'كنيسة الشهيد ابي سيفين بسفاجا',
    churchAddr  : '7.00 - Time',
    churchMap   : 'Open in Google Maps',
    hallName    : 'Al-Fayrouz Hall',
    hallAddr    : 'Next to Al-Khalidin Mosque in Safaga',
    hallMap     : 'Open in Google Maps',
    verse       : '"And above all these put on love, which binds everything together in perfect harmony."',
    verseRef    : 'Colossians 3:14',
    invTitle    : 'Wedding Invitation',
    invPh       : 'Add your invitation image in index.html',
    videoTitle  : 'Video Invitation',
    videoPh     : 'Add your video in index.html',
    galTitle    : 'Gallery',
    galDesc     : 'Photos from our memories.',
    musicBtn    : 'Play music',
    navGuestbook: 'Guestbook'
  },
  ar: {
    langSwitch  : 'English',
    navHome     : 'الرئيسية',
    navCountdown: 'العد التنازلي',
    navDetails  : 'التفاصيل',
    navInv      : 'الدعوة',
    navVideo    : 'الفيديو',
    navGallery  : 'الصور',
    tap         : 'اضغط لفتح الدعوة',
    heroSub     : 'بنتجوز',
    heroCta     : 'شوف باقي كام يوم',
    cdTitle     : 'كام يوم باقي',
    days        : 'يوم',
    hours       : 'ساعة',
    mins        : 'دقيقة',
    secs        : 'ثانية',
    calTitle    : 'ابريل 2026',
    weddingDay  : 'يوم الفرح - 25 ابريل 2026',
    wkSun:'احد', wkMon:'اتنين', wkTue:'تلاتة', wkWed:'اربعة',
    wkThu:'خميس', wkFri:'جمعة', wkSat:'سبت',
    detTitle    : 'تفاصيل الفرح',
    lblDate     : 'التاريخ',
    lblTime     : 'الوقت',
    lblChurch   : 'صلاة الأكليل',
    lblHall     : 'حفل الزفاف',
    date        : 'السبت 25 ابريل 2026',
    time        : '00 : 7 م',
    churchName  : 'كنيسة الشهيد ابي سيفين بسفاجا',
    churchAddr  : ' 00 : 7 م ',
    churchMap   : 'افتح الخريطة',
    hallName    : 'قاعة الفيروز',
    hallAddr    : 'بجوار مسجد الخالدين بسفاجا',
    hallMap     : 'افتح الخريطة',
    verse       : '"وفوق كل هذا البسوا المحبة التي هي رابطة الكمال"',
    verseRef    : 'كولوسي 3:14',
    invTitle    : 'دعوة الزفاف',
    invPh       : 'اضف صورة الدعوة في index.html',
    videoTitle  : 'فيديو الدعوة',
    videoPh     : 'اضف الفيديو في index.html',
    galTitle    : 'الصور',
    galDesc     : 'صور من ذكرياتنا.',
    musicBtn    : 'تشغيل الموسيقى',
    navGuestbook: 'كتاب التهاني'
  }
};

var ID_MAP = {
  navHome    : 'nav-home',
  navCountdown:'nav-countdown',
  navDetails : 'nav-details',
  navInv     : 'nav-invitation',
  navVideo   : 'nav-video',
  navGallery : 'nav-gallery',
  tap        : 'txt-tap',
  heroSub    : 'txt-hero-sub',
  heroCta    : 'txt-hero-cta',
  cdTitle    : 'txt-countdown-title',
  days       : 'txt-days',
  hours      : 'txt-hours',
  mins       : 'txt-mins',
  secs       : 'txt-secs',
  calTitle   : 'cal-title',
  weddingDay : 'txt-wedding-day',
  detTitle   : 'txt-details-title',
  lblDate    : 'txt-lbl-date',
  lblTime    : 'txt-lbl-time',
  lblChurch  : 'txt-lbl-church',
  lblHall    : 'txt-lbl-hall',
  date       : 'txt-date',
  time       : 'txt-time',
  churchName : 'txt-church-name',
  churchAddr : 'txt-church-addr',
  churchMap  : 'txt-church-map',
  hallName   : 'txt-hall-name',
  hallAddr   : 'txt-hall-addr',
  hallMap    : 'txt-hall-map',
  verse      : 'txt-verse',
  verseRef   : 'txt-verse-ref',
  invTitle   : 'txt-inv-title',
  invPh      : 'txt-inv-ph',
  videoTitle : 'txt-video-title',
  videoPh    : 'txt-video-ph',
  galTitle   : 'txt-gallery-title',
  galDesc    : 'txt-gallery-desc',
  musicBtn   : 'txt-music-btn',
  navGuestbook : 'nav-guestbook',
};

/* LANGUAGE */
var lang = 'en';
try { lang = localStorage.getItem('wedding-lang') || CONFIG.defaultLang; } catch(e) {}

function applyLang(l) {
  lang = l;
  var isAr = (l === 'ar');
  var root = document.getElementById('html-root');
  if (root) {
    root.setAttribute('lang', isAr ? 'ar' : 'en');
    root.setAttribute('dir',  isAr ? 'rtl' : 'ltr');
  }
  document.body.classList.toggle('ar', isAr);
  var btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = T[l].langSwitch;
  var t = T[l];
  var keys = Object.keys(ID_MAP);
  for (var i = 0; i < keys.length; i++) {
    var el = document.getElementById(ID_MAP[keys[i]]);
    if (el && t[keys[i]] !== undefined) el.textContent = t[keys[i]];
  }
  try { localStorage.setItem('wedding-lang', l); } catch(e) {}
  buildCalendar();
}

function toggleLang() { applyLang(lang === 'en' ? 'ar' : 'en'); }
var langBtn = document.getElementById('lang-toggle');
if (langBtn) langBtn.addEventListener('click', toggleLang);

/* ENVELOPE */
(function() {
  var overlay  = document.getElementById('envelope-overlay');
  var music    = document.getElementById('bg-music');
  var musicBtn = document.getElementById('music-btn');
  var opened   = false;

  function startMusic() {
    if (!music) return;
    music.volume = CONFIG.musicVolume;
    var p = music.play();
    if (p && p.then) {
      p.then(function() {
        if (CONFIG.musicStartAt > 0) music.currentTime = CONFIG.musicStartAt;
      }).catch(function() {});
    }
  }

  function open() {
    if (opened) return;
    opened = true;
    document.body.classList.add('inv-open');
    if (overlay) overlay.classList.add('opened');
    if (CONFIG.autoPlay) startMusic();
    setTimeout(function() {
      if (overlay) overlay.classList.add('hidden');
      document.body.classList.remove('inv-open');
      window.scrollTo(0, 0);
      if (musicBtn) musicBtn.classList.add('show');
      initVideoSync();
    }, 2400);
  }

  if (overlay) {
    overlay.addEventListener('click', open);
    overlay.addEventListener('touchstart', open, { passive: true });
  }
  if (musicBtn) {
    musicBtn.addEventListener('click', function() { startMusic(); musicBtn.classList.remove('show'); });
    if (music) music.addEventListener('playing', function() { musicBtn.classList.remove('show'); });
  }
})();

/* VIDEO SYNC */
function initVideoSync() {
  var bg = document.getElementById('bg-music');
  var vids = document.querySelectorAll('video');
  for (var i = 0; i < vids.length; i++) {
    (function(v) {
      v.addEventListener('play',  function() { if (bg) bg.pause(); });
      v.addEventListener('pause', function() { if (bg) bg.play().catch(function(){}); });
      v.addEventListener('ended', function() { if (bg) bg.play().catch(function(){}); });
    })(vids[i]);
  }
  window.addEventListener('message', function(e) {
    if (!e.data || typeof e.data !== 'string') return;
    try {
      var d = JSON.parse(e.data);
      if (d.event === 'infoDelivery' && d.info && d.info.playerState !== undefined) {
        var bg2 = document.getElementById('bg-music');
        if (d.info.playerState === 1) { if (bg2) bg2.pause(); }
        else if (d.info.playerState === 0 || d.info.playerState === 2) {
          if (bg2) bg2.play().catch(function(){});
        }
      }
    } catch(err) {}
  });
}

window.videoPulse = function(el) {
  var btn = el.querySelector('.video-ph-btn');
  if (!btn) return;
  btn.style.transform = 'scale(1.2)';
  btn.style.transition = 'transform 0.2s';
  setTimeout(function() { btn.style.transform = ''; }, 250);
};

/* COUNTDOWN */
(function() {
  var target = CONFIG.wedding;
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function tick() {
    var diff = target - new Date();
    if (diff <= 0) {
      var ids = ['cd-days','cd-hours','cd-mins','cd-secs'];
      for (var i = 0; i < ids.length; i++) { var e = document.getElementById(ids[i]); if (e) e.textContent = '00'; }
      return;
    }
    var dEl = document.getElementById('cd-days');
    var hEl = document.getElementById('cd-hours');
    var mEl = document.getElementById('cd-mins');
    var sEl = document.getElementById('cd-secs');
    if (dEl) dEl.textContent = Math.floor(diff / 86400000);
    if (hEl) hEl.textContent = pad(Math.floor(diff % 86400000 / 3600000));
    if (mEl) mEl.textContent = pad(Math.floor(diff % 3600000  /   60000));
    if (sEl) sEl.textContent = pad(Math.floor(diff %   60000  /    1000));
  }
  tick();
  setInterval(tick, 1000);
})();

/* CALENDAR */
function buildCalendar() {
  var daysEl = document.getElementById('cal-days');
  var wkEl   = document.getElementById('cal-weekdays');
  if (!daysEl || !wkEl) return;
  var w  = CONFIG.wedding;
  var wY = w.getFullYear(), wM = w.getMonth(), wD = w.getDate();
  var t  = T[lang];
  wkEl.innerHTML = '';
  var wks = ['wkSun','wkMon','wkTue','wkWed','wkThu','wkFri','wkSat'];
  for (var k = 0; k < wks.length; k++) {
    var s = document.createElement('span'); s.textContent = t[wks[k]]; wkEl.appendChild(s);
  }
  daysEl.innerHTML = '';
  var first = new Date(wY, wM, 1).getDay();
  var total = new Date(wY, wM + 1, 0).getDate();
  for (var i = 0; i < first; i++) {
    var emp = document.createElement('span'); emp.className = 'cal-day empty'; daysEl.appendChild(emp);
  }
  for (var d = 1; d <= total; d++) {
    var cell = document.createElement('span');
    cell.className = d === wD ? 'cal-day wedding' : 'cal-day';
    cell.textContent = d; daysEl.appendChild(cell);
  }
}

/* NAV TOGGLE */
(function() {
  var toggle = document.getElementById('nav-toggle');
  var links  = document.getElementById('nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function() { links.classList.toggle('open'); });
  var as = links.querySelectorAll('a');
  for (var i = 0; i < as.length; i++) {
    as[i].addEventListener('click', function() { links.classList.remove('open'); });
  }
})();

/* INIT */
document.addEventListener('DOMContentLoaded', function() { applyLang(lang); });


/* ═══════════════════════════════════════════════════════
   GUESTBOOK  —  paste this at the END of app.js
   ═══════════════════════════════════════════════════════
   Messages are stored in localStorage under the key
   'wedding-guestbook'. They live in the visitor's browser.

   NOTE: each visitor sees only the messages they submitted
   from their own device. This is intentional — no server
   needed, no privacy issues.
   ═══════════════════════════════════════════════════════ */

(function () {

  /* ── Storage key ────────────────────────────────── */
  var STORAGE_KEY = 'wedding-guestbook-makarious-martina';
  var MAX_MESSAGES = 100;

  /* ── Element refs ───────────────────────────────── */
  var form     = document.getElementById('gb-form');
  var nameInp  = document.getElementById('gb-name');
  var msgInp   = document.getElementById('gb-msg');
  var charsCnt = document.getElementById('gb-chars');
  var submitBtn= document.getElementById('gb-submit-btn');
  var list     = document.getElementById('gb-messages');
  var empty    = document.getElementById('gb-empty');

  if (!form) return; /* section not in page — skip */

  /* ── Load saved messages ────────────────────────── */
  function loadMessages() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  /* ── Save messages ──────────────────────────────── */
  function saveMessages(msgs) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs)); } catch (e) {}
  }

  /* ── Format date nicely ─────────────────────────── */
  function formatDate(iso) {
    try {
      var d = new Date(iso);
      return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (e) { return ''; }
  }

  /* ── Initial letter for avatar ──────────────────── */
  function initial(name) {
    return name.trim().charAt(0).toUpperCase();
  }

  /* ── Build one message card ─────────────────────── */
  function buildCard(msg, prepend) {
    var card = document.createElement('div');
    card.className = 'gb-msg-card';
    if (prepend) card.style.animationDelay = '0s';

    card.innerHTML =
      '<div class="gb-msg-header">' +
        '<div class="gb-msg-avatar">' + initial(msg.name) + '</div>' +
        '<span class="gb-msg-name">' + escHtml(msg.name) + '</span>' +
        '<span class="gb-msg-date">' + formatDate(msg.date) + '</span>' +
      '</div>' +
      '<p class="gb-msg-text">' + escHtml(msg.text) + '</p>';

    return card;
  }

  /* ── Escape HTML ────────────────────────────────── */
  function escHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ── Render all messages ────────────────────────── */
  function renderMessages() {
    var msgs = loadMessages();
    list.innerHTML = '';

    if (msgs.length === 0) {
      if (empty) empty.style.display = 'block';
      return;
    }
    if (empty) empty.style.display = 'none';

    /* Show newest first */
    var sorted = msgs.slice().reverse();
    for (var i = 0; i < sorted.length; i++) {
      list.appendChild(buildCard(sorted[i], false));
    }
  }

  /* ── Show toast ─────────────────────────────────── */
  function showToast(text) {
    var toast = document.getElementById('gb-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'gb-toast';
      toast.className = 'gb-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2800);
  }

  /* ── Character counter ──────────────────────────── */
  if (msgInp && charsCnt) {
    msgInp.addEventListener('input', function () {
      var len = msgInp.value.length;
      charsCnt.textContent = len + ' / 400';
      charsCnt.classList.toggle('near-limit', len > 350);
    });
  }

  /* ── Submit ─────────────────────────────────────── */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = nameInp ? nameInp.value.trim() : '';
    var text = msgInp  ? msgInp.value.trim()  : '';

    if (!name || !text) return;

    /* Build message object */
    var msg = {
      name: name,
      text: text,
      date: new Date().toISOString()
    };

    /* Save */
    var msgs = loadMessages();
    msgs.push(msg);
    if (msgs.length > MAX_MESSAGES) msgs = msgs.slice(-MAX_MESSAGES);
    saveMessages(msgs);

    /* Prepend card with animation */
    if (empty) empty.style.display = 'none';
    var card = buildCard(msg, true);
    if (list.firstChild) {
      list.insertBefore(card, list.firstChild);
    } else {
      list.appendChild(card);
    }

    /* Reset form */
    form.reset();
    if (charsCnt) charsCnt.textContent = '0 / 400';

    /* Toast */
    var isAr = document.getElementById('html-root').getAttribute('dir') === 'rtl';
    showToast(isAr ? 'شكراً! اتحفظت رسالتك ✓' : 'Thank you! Your blessing was saved ✓');

    /* Scroll to new card */
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    /* Disable button briefly */
    if (submitBtn) {
      submitBtn.disabled = true;
      setTimeout(function () { submitBtn.disabled = false; }, 2000);
    }
  });

  /* ── Initial render ─────────────────────────────── */
  renderMessages();

})();
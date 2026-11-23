(function () {
  'use strict';

  var DATA = window.BOARD;
  var ORDER = ['backlog', 'doing', 'review', 'done'];
  var state = { lang: 'pt', filter: 'all', query: '' };
  var INITIALS = '<span class="avatar initials" aria-hidden="true">GM</span>';

  var ICON = {
    exp: '<svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="11" rx="1.5"/><path d="M9 8V6h6v2"/></svg>',
    proj: '<svg viewBox="0 0 24 24"><path d="m9 8-4 4 4 4M15 8l4 4-4 4"/></svg>',
    edu: '<svg viewBox="0 0 24 24"><path d="m3 10 9-4 9 4-9 4z"/><path d="M7 12v4c3 2 7 2 10 0v-4"/></svg>',
    profile: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="3.2"/><path d="M6 19c1-3 3.4-4.4 6-4.4s5 1.4 6 4.4"/></svg>',
    highest: '<svg viewBox="0 0 24 24"><path d="m6 12 6-6 6 6M6 18l6-6 6 6"/></svg>',
    high: '<svg viewBox="0 0 24 24"><path d="m6 15 6-6 6 6"/></svg>',
    medium: '<svg viewBox="0 0 24 24"><path d="M6 10h12M6 15h12"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5 9.5 17 19 7"/></svg>',
    checkbox: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8 12 3 3 5-6"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    out: '<svg viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-8 8M17 14v5H5V7h5"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"/></svg>',
    trophy: '<svg viewBox="0 0 24 24"><path d="M5 12.5 9.5 17 19 7"/></svg>'
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function t() { return DATA[state.lang].ui; }
  function cards() { return DATA[state.lang].cards; }
  function labelClass(text) {
    var h = 0;
    for (var i = 0; i < text.length; i++) h = (h * 31 + text.toLowerCase().charCodeAt(i)) >>> 0;
    return 'l' + (h % 6);
  }
  function typeIcon(type) {
    return '<span class="type type-' + type + '" title="' + esc(t().types[type]) + '">' + ICON[type] + '</span>';
  }
  function prioIcon(prio) {
    return '<span class="prio prio-' + prio + '" title="' + esc(t().prio[prio]) + '">' + ICON[prio] + '</span>';
  }

  // ---------- Textos da interface ----------
  function applyUi() {
    var ui = t();
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'pt-BR';
    document.title = ui.title;
    document.querySelectorAll('[data-ui]').forEach(function (el) {
      var v = ui[el.getAttribute('data-ui')];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-ui-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', ui[el.getAttribute('data-ui-placeholder')]);
    });
    document.querySelectorAll('[data-ui-aria]').forEach(function (el) {
      el.setAttribute('aria-label', ui[el.getAttribute('data-ui-aria')]);
    });
    document.querySelectorAll('.cv-link').forEach(function (el) { el.setAttribute('href', ui.cvFile); });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === state.lang));
    });
  }

  // ---------- Quadro ----------
  function matches(card) {
    if (state.filter !== 'all' && card.type !== state.filter) return false;
    if (!state.query) return true;
    var hay = [card.key, card.title, card.desc, card.labels.join(' ')].join(' ').toLowerCase();
    return hay.indexOf(state.query) !== -1;
  }

  function cardHtml(c) {
    var done = (c.criteria || []).filter(function (x) { return x[1]; }).length;
    var total = (c.criteria || []).length;
    return '<button type="button" class="card" data-key="' + c.key + '" data-testid="card-' + c.key + '" aria-label="' + esc(c.key + ': ' + c.title) + '">' +
      '<span class="card-top">' + c.labels.map(function (l) { return '<span class="label ' + labelClass(l) + '">' + esc(l) + '</span>'; }).join('') + '</span>' +
      '<span class="card-title">' + esc(c.title) + '</span>' +
      '<span class="card-meta">' + typeIcon(c.type) + prioIcon(c.prio) +
        (total ? '<span class="card-progress">' + ICON.checkbox + done + '/' + total + '</span>' : '') +
        '<span class="card-key">' + c.key + '</span>' +
        INITIALS +
      '</span></button>';
  }

  function renderBoard() {
    var ui = t();
    var html = ORDER.map(function (status) {
      var list = cards().filter(function (c) { return c.status === status && matches(c); });
      return '<section class="column" data-status="' + status + '" aria-label="' + esc(ui.cols[status]) + '">' +
        '<h2 class="column-head"><span class="dot" aria-hidden="true"></span>' + esc(ui.cols[status]) +
        ' <span class="column-count">' + list.length + '</span></h2>' +
        (list.length ? list.map(cardHtml).join('') : '<p class="column-empty">' + esc(ui.empty) + '</p>') +
        '</section>';
    }).join('');
    document.getElementById('columns').innerHTML = html;
  }

  // ---------- Issue ----------
  var dialog = document.getElementById('issue');
  var body = document.getElementById('issueBody');
  var openKey = null;

  function issueHtml(c) {
    var ui = t();
    var h = '';
    h += '<div class="issue-head">' + typeIcon(c.type) + '<span>' + esc(ui.types[c.type]) + ' / ' + c.key + '</span><span class="spacer"></span>' +
      '<button type="button" class="icon-btn" data-action="copy" title="' + esc(ui.copyLink) + '" aria-label="' + esc(ui.copyLink) + '">' + ICON.link + '</button>' +
      '<button type="button" class="icon-btn" data-action="close" aria-label="' + esc(ui.close) + '">' + ICON.close + '</button></div>';

    h += '<div class="issue-body"><div class="issue-main">';
    h += '<h2 id="issue-title">' + esc(c.title) + '</h2>';

    if (c.about) {
      h += '<div class="about-head"><img class="about-photo" src="assets/gabriella-perfil.jpg" width="900" height="993" alt="Gabriella Maas"></div>';
    }
    h += '<div class="issue-section"><h3>' + esc(ui.description) + '</h3><p>' + esc(c.desc) + '</p>';
    h += '</div>';

    (c.sections || []).forEach(function (s) {
      h += '<div class="issue-section"><h3>' + esc(s.h) + '</h3>';
      if (s.p) h += '<p>' + esc(s.p) + '</p>';
      if (s.list) h += '<ul class="bullets">' + s.list.map(function (li) { return '<li>' + esc(li) + '</li>'; }).join('') + '</ul>';
      h += '</div>';
    });

    if (c.report) {
      var rows = DATA[state.lang].report.map(function (r) {
        if (r[0] === 'head') return '<div class="report-row report-head">' + esc(r[1]) + '</div>';
        if (r[0] === 'tc') return '<div class="report-row"><span class="tc-id">' + r[1] + '</span><span class="tc-kind">' + esc(r[2]) + '</span><span>' + esc(r[3]) + '</span></div>';
        return '<div class="report-row"><span class="mk mk-' + r[0] + '">' + r[1] + '</span><span>' + esc(r[2]) + '</span></div>';
      }).join('');
      h += '<div class="issue-section"><div class="report" data-testid="report"><div class="report-caption">' + esc(ui.report) + '</div>' + rows + '</div></div>';
    }

    if (c.skills) {
      h += '<div class="issue-section"><dl class="skills">' + c.skills.map(function (s) {
        return '<div><dt>' + esc(s[0]) + '</dt><dd>' + esc(s[1]) + '</dd></div>';
      }).join('') + '</dl></div>';
    }

    if (c.criteria) {
      h += '<div class="issue-section"><h3>' + esc(ui.criteria) + '</h3><ul class="checklist">' + c.criteria.map(function (x) {
        return '<li class="' + (x[1] ? 'done' : '') + '"><span class="check" aria-hidden="true">' + (x[1] ? ICON.check : '') + '</span>' +
          '<span class="visually-hidden">' + (x[1] ? '✓ ' : '○ ') + '</span><span>' + esc(x[0]) + '</span></li>';
      }).join('') + '</ul></div>';
    }

    if (c.tools) {
      h += '<div class="issue-section"><h3>' + esc(ui.tools) + '</h3><ul class="tools">' + c.tools.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    }

    if (c.codeFile) {
      h += '<div class="issue-section"><h3>' + esc(ui.code) + ': ' + esc(c.codeFile) + '</h3><pre class="code" id="codeBlock" data-testid="code">…</pre></div>';
    }

    if (c.actions === 'hire') {
      h += '<div class="issue-section"><div class="issue-links">' +
        '<a class="link-btn primary" href="mailto:gabriellamaas26@gmail.com">' + ICON.mail + 'gabriellamaas26@gmail.com</a>' +
        '<a class="link-btn" href="https://www.linkedin.com/in/gabriella-maas/" target="_blank" rel="noopener">' + ICON.out + 'LinkedIn</a>' +
        '<a class="link-btn" href="' + ui.cvFile + '" download>' + ICON.download + esc(ui.navCv) + '</a>' +
        '</div></div>';
    }
    if (c.links) {
      h += '<div class="issue-section"><h3>' + esc(ui.links) + '</h3><div class="issue-links">' + c.links.map(function (l) {
        return '<a class="link-btn" href="' + l[1] + '" target="_blank" rel="noopener">' + ICON.out + esc(l[0]) + '</a>';
      }).join('') + '</div></div>';
    }
    if (c.related) {
      h += '<div class="issue-section"><h3>' + esc(ui.related) + '</h3><div class="related">' + c.related.map(function (k) {
        var r = findCard(k);
        return r ? '<a class="related-card" href="#' + k + '">' + typeIcon(r.type) + '<span>' + esc(r.title) + '</span><span class="card-key">' + k + '</span></a>' : '';
      }).join('') + '</div></div>';
    }
    if (c.cta) {
      h += '<div class="cta"><div><strong>' + esc(ui.ctaTitle) + '</strong><p>' + esc(ui.ctaText) + '</p></div>' +
        '<a class="link-btn primary cv-link" href="' + ui.cvFile + '" download>' + ICON.download + esc(ui.navCv) + '</a></div>';
    }
    h += '</div>';

    h += '<aside class="issue-aside"><span class="status-pill st-' + c.status + '">' + esc(ui.cols[c.status]) + '</span>';
    h += '<dl class="fields">';
    h += '<div><dt>' + esc(ui.assignee) + '</dt><dd><span class="person">' + INITIALS + 'Gabriella Maas</span></dd></div>';
    h += '<div><dt>' + esc(ui.type) + '</dt><dd>' + typeIcon(c.type) + esc(ui.types[c.type]) + '</dd></div>';
    h += '<div><dt>' + esc(ui.priority) + '</dt><dd>' + prioIcon(c.prio) + esc(ui.prio[c.prio]) + '</dd></div>';
    (c.fields || []).forEach(function (f) {
      h += '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>';
    });
    h += '<div><dt>' + esc(ui.labels) + '</dt><dd>' + c.labels.map(function (l) { return '<span class="label ' + labelClass(l) + '">' + esc(l) + '</span>'; }).join('') + '</dd></div>';
    h += '</dl></aside></div>';
    return h;
  }

  var codeCache = null;
  function loadCode(file) {
    var el = document.getElementById('codeBlock');
    if (!el) return;
    if (codeCache) { el.textContent = codeCache; return; }
    fetch(file).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (text) {
      codeCache = text;
      var cur = document.getElementById('codeBlock');
      if (cur) cur.textContent = text;
    }).catch(function () {
      var cur = document.getElementById('codeBlock');
      if (cur) cur.textContent = '// ' + file;
    });
  }

  function findCard(key) {
    return cards().filter(function (c) { return c.key === key; })[0];
  }

  function openIssue(key) {
    var c = findCard(key);
    if (!c) return;
    openKey = key;
    body.innerHTML = issueHtml(c);
    if (c.codeFile) loadCode(c.codeFile);
    if (!dialog.open) dialog.showModal();
    if (location.hash !== '#' + key) history.replaceState(null, '', '#' + key);
    var closeBtn = body.querySelector('[data-action="close"]');
    if (closeBtn) closeBtn.focus();
  }

  function clearHash() {
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  }

  dialog.addEventListener('close', function () {
    var key = openKey;
    openKey = null;
    clearHash();
    var card = document.querySelector('.card[data-key="' + key + '"]');
    if (card) card.focus();
  });
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) { dialog.close(); return; }
    var btn = e.target.closest('[data-action]');
    if (!btn) return;
    if (btn.getAttribute('data-action') === 'close') dialog.close();
    if (btn.getAttribute('data-action') === 'copy') copyLink();
  });

  function toast(msg) {
    var el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { el.classList.remove('show'); }, 1800);
  }
  function copyLink() {
    var url = location.origin + location.pathname + '#' + openKey;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function () { toast(t().copied); }, function () { toast(url); });
    } else {
      toast(url);
    }
  }

  // ---------- Fundo do quadro ----------
  var BACKGROUNDS = [
    ['lilac', 'linear-gradient(135deg, #6E4FE6 0%, #9A6CEB 38%, #D98FD3 72%, #F7B7C9 100%)'],
    ['ocean', 'linear-gradient(135deg, #0B5394 0%, #1C7ED6 45%, #22B8CF 100%)'],
    ['sunset', 'linear-gradient(135deg, #E8590C 0%, #F76707 30%, #E64980 75%, #AE3EC9 100%)'],
    ['forest', 'linear-gradient(135deg, #1B5E3B 0%, #2F9E44 55%, #94D82D 100%)'],
    ['night', 'linear-gradient(135deg, #12103A 0%, #2B1B6B 55%, #5F3DC4 100%)'],
    ['candy', 'linear-gradient(135deg, #FCC2D7 0%, #E5DBFF 50%, #C5F6FA 100%)', true],
    ['graphite', '#3B3F4A'],
    ['peach', 'linear-gradient(135deg, #FFD8A8 0%, #FFA8A8 100%)', true],
    ['sky', 'linear-gradient(180deg, #A5D8FF 0%, #E7F5FF 100%)', true]
  ];
  var bgBtn = document.getElementById('bgBtn');
  var bgMenu = document.getElementById('bgMenu');
  var bgGrid = document.getElementById('bgGrid');
  var currentBg = 'lilac';

  function renderBgMenu() {
    var names = t().bgNames;
    bgGrid.innerHTML = BACKGROUNDS.map(function (b) {
      return '<button type="button" class="bg-swatch' + (b[2] ? ' light' : '') + '" data-bg="' + b[0] + '" aria-pressed="' + (b[0] === currentBg) + '" style="background:' + b[1] + '">' + esc(names[b[0]]) + '</button>';
    }).join('');
  }
  function applyBg(id) {
    var found = BACKGROUNDS.filter(function (b) { return b[0] === id; })[0] || BACKGROUNDS[0];
    currentBg = found[0];
    document.getElementById('columns').style.setProperty('--board', found[1]);
    bgGrid.querySelectorAll('.bg-swatch').forEach(function (s) {
      s.setAttribute('aria-pressed', String(s.getAttribute('data-bg') === currentBg));
    });
  }
  function setBgMenu(open) {
    bgBtn.setAttribute('aria-expanded', String(open));
    bgMenu.hidden = !open;
  }
  bgBtn.addEventListener('click', function () { setBgMenu(bgMenu.hidden); });
  bgGrid.addEventListener('click', function (e) {
    var s = e.target.closest('.bg-swatch');
    if (!s) return;
    applyBg(s.getAttribute('data-bg'));
    try { localStorage.setItem('board-bg', currentBg); } catch (err) { /* sem armazenamento */ }
  });
  document.addEventListener('click', function (e) {
    if (!bgMenu.hidden && !e.target.closest('.bg-picker')) setBgMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !bgMenu.hidden) { setBgMenu(false); bgBtn.focus(); }
  });

  // ---------- Eventos ----------
  document.getElementById('columns').addEventListener('click', function (e) {
    var card = e.target.closest('.card');
    if (card) openIssue(card.getAttribute('data-key'));
  });
  // Enter abre o card explicitamente (o Espaço continua com o comportamento nativo do botão).
  // Assim o teclado funciona igual em qualquer navegador e nos testes automatizados.
  document.getElementById('columns').addEventListener('keydown', function (e) {
    var card = e.target.closest('.card');
    if (card && e.key === 'Enter') {
      e.preventDefault();
      openIssue(card.getAttribute('data-key'));
    }
  });

  document.getElementById('filters').addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    state.filter = chip.getAttribute('data-filter');
    document.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
    renderBoard();
  });

  document.getElementById('search').addEventListener('input', function (e) {
    state.query = e.target.value.trim().toLowerCase();
    renderBoard();
  });

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      state.lang = b.getAttribute('data-lang');
      try { localStorage.setItem('lang', state.lang); } catch (e) { /* sem armazenamento */ }
      applyUi();
      renderBoard();
      renderBgMenu();
      if (openKey) openIssue(openKey);
    });
  });

  var menuBtn = document.getElementById('menuBtn');
  var sidebar = document.getElementById('sidebar');
  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    sidebar.classList.toggle('open', open);
  }
  menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
  sidebar.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') { setMenu(false); menuBtn.focus(); }
  });

  function fromHash() {
    var m = location.hash.match(/^#(GM-\d+)$/);
    if (m && findCard(m[1])) openIssue(m[1]);
    else if (dialog.open && location.hash === '#board') dialog.close();
  }
  window.addEventListener('hashchange', fromHash);

  // ---------- Início ----------
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* sem armazenamento */ }
  var urlLang = new URLSearchParams(location.search).get('lang');
  state.lang = DATA[urlLang] ? urlLang : (DATA[saved] ? saved : 'pt');
  applyUi();
  renderBoard();
  renderBgMenu();
  var savedBg = null;
  try { savedBg = localStorage.getItem('board-bg'); } catch (e) { /* sem armazenamento */ }
  applyBg(savedBg || 'lilac');
  fromHash();
})();

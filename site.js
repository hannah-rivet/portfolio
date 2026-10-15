/* Renders the home page and project pages from projects.js. No need to edit. */
(function () {
  var S = window.SITE, P = window.PROJECTS || [];

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'class') n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  function safeUrl(u) { return /^(https?:|mailto:|images\/|\.\/|[a-z0-9_\-\/]+\.html)/i.test(u) ? u : '#'; }

  function typeClass(t) { return (t || '').toLowerCase(); }

  function legend(p) {
    var items = [el('span', { class: 'legend-item' }, [el('span', { class: 'swatch ' + typeClass(p.type) }), document.createTextNode(p.type)])];
    if (p.region) items.push(el('span', { class: 'legend-item' }, [el('span', { class: 'swatch' }), document.createTextNode(p.region)]));
    if (p.status === 'in-progress') items.push(el('span', { class: 'badge', text: 'In progress' }));
    return el('div', { class: 'legend' }, items);
  }

  function finding(p) {
    if (!p.finding) return null;
    return el('div', { class: 'finding' }, [
      el('span', { class: 'num', text: p.finding.num }),
      el('span', { class: 'label', text: p.finding.label })
    ]);
  }

  function nav(active) {
    return el('nav', { class: 'sitenav', 'aria-label': 'Main' }, [el('div', { class: 'wrap' }, [
      el('a', { class: 'brand', href: 'index.html', text: S.name }),
      el('div', { class: 'links' }, [
        el('a', { href: 'index.html#projects', text: 'Projects' }),
        el('a', { href: 'index.html#about', text: 'About' }),
        S.email ? el('a', { href: 'mailto:' + S.email, text: 'Contact' }) : null
      ])
    ])]);
  }

  function footer() {
    var links = [];
    if (S.github) links.push(el('a', { href: safeUrl(S.github), text: 'GitHub' }));
    if (S.linkedin) links.push(el('a', { href: safeUrl(S.linkedin), text: 'LinkedIn' }));
    if (S.email) links.push(el('a', { href: 'mailto:' + S.email, text: 'Email' }));
    return el('footer', {}, [el('div', { class: 'wrap' }, [el('div', { class: 'row' }, [
      el('p', { text: S.footerNote }),
      el('div', { class: 'links' }, links)
    ])])]);
  }

  var contours = '<svg viewBox="0 0 400 400" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4">' +
    '<path d="M40,200 C40,110 120,40 210,40 C300,40 360,110 360,200 C360,290 300,350 210,350 C120,350 40,290 40,200 Z"/>' +
    '<path d="M90,200 C90,140 145,90 210,90 C275,90 320,140 320,200 C320,260 275,300 210,300 C145,300 90,260 90,200 Z"/>' +
    '<path d="M135,200 C135,165 170,135 210,135 C250,135 275,165 275,200 C275,235 250,265 210,265 C170,265 135,235 135,200 Z"/></svg>';

  function renderHome(root) {
    document.title = S.name + ' — ' + S.siteTitle;
    var hero = el('header', { class: 'hero' }, [
      (function () { var d = el('div', { class: 'hero-contours', style: 'color:var(--forest)' }); d.innerHTML = contours; return d; })(),
      el('div', { class: 'wrap hero-inner' }, [
        el('p', { class: 'hero-tag mono', text: S.tag }),
        el('h1', { text: S.headline }),
        el('p', { text: S.blurb })
      ])
    ]);
    var about = el('section', { class: 'intro', id: 'about' }, [el('div', { class: 'wrap' },
      S.about.map(function (t) { return el('p', { text: t }); }))]);

    var cards = P.map(function (p) {
      var actions = [el('a', { class: 'sheet-link', href: 'project.html?p=' + encodeURIComponent(p.slug), text: 'Read the project' })];
      (p.links || []).forEach(function (l) { actions.push(el('a', { class: 'sheet-link', href: safeUrl(l.url), text: l.label })); });
      return el('article', { class: 'sheet' }, [
        el('div', { class: 'sheet-head' }, [
          el('h2', {}, [el('a', { href: 'project.html?p=' + encodeURIComponent(p.slug), text: p.title })]),
          el('span', { class: 'sheet-ref mono', text: p.ref })
        ]),
        legend(p),
        el('p', { class: 'summary', text: p.summary }),
        finding(p),
        el('div', { class: 'card-actions' }, actions)
      ]);
    });
    var sheets = el('section', { class: 'sheets', id: 'projects' }, [el('div', { class: 'wrap' },
      [el('h2', { class: 'section-title', text: 'Projects' })].concat(cards))]);

    var main = el('main', {}, [hero, about, sheets]);
    root.replaceChildren(nav(), main, footer());
  }

  function listBlock(title, arr) {
    if (!arr || !arr.length) return null;
    return el('div', {}, [el('h3', { text: title }), el('ul', {}, arr.map(function (x) { return el('li', { text: x }); }))]);
  }

  function renderProject(root) {
    var slug = new URLSearchParams(location.search).get('p');
    var p = P.filter(function (x) { return x.slug === slug; })[0];
    if (!p) {
      document.title = 'Project not found — ' + S.name;
      root.replaceChildren(nav(), el('main', { class: 'project-page' }, [el('div', { class: 'wrap' }, [
        el('a', { class: 'back', href: 'index.html#projects', text: '← All projects' }),
        el('h1', { text: 'Project not found' })])]), footer());
      return;
    }
    document.title = p.title + ' — ' + S.name;
    var shots = (p.images || []).map(function (im) {
      return el('figure', { class: 'shot' }, [el('img', { src: safeUrl(im.src), alt: im.alt || '', loading: 'lazy' }),
        im.caption ? el('figcaption', { text: im.caption }) : null]);
    });
    var actions = (p.links || []).map(function (l) { return el('a', { class: 'sheet-link', href: safeUrl(l.url), text: l.label }); });
    var facts = [listBlock('Tools', p.tools), listBlock('Data', p.data)].filter(Boolean);
    var main = el('main', { class: 'project-page' }, [el('div', { class: 'wrap' }, [
      el('a', { class: 'back', href: 'index.html#projects', text: '← All projects' }),
      el('h1', { text: p.title }),
      el('div', { class: 'meta' }, [legend(p), el('span', { class: 'sheet-ref mono', text: p.ref })]),
      finding(p),
      el('div', { class: 'body' }, (p.body || []).map(function (t) { return el('p', { text: t }); })),
      actions.length ? el('div', { class: 'card-actions' }, actions) : null
    ].concat(shots).concat([facts.length ? el('div', { class: 'facts' }, facts) : null]))]);
    root.replaceChildren(nav(), main, footer());
  }

  var root = document.getElementById('app');
  if (!root) return;
  if (root.getAttribute('data-page') === 'project') renderProject(root); else renderHome(root);
})();

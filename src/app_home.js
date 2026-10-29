
  /* =====================================================================
     HOME PAGE, VERSE OF THE DAY, OBQ LITE (quick quiz) and the DEMO CONTEST
     ===================================================================== */
  var ICONS = {
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/>',
    tools: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.3-.7-.7-2.3z"/>',
    book: '<path d="M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3zM4 17a3 3 0 0 1 3-3h12"/>',
    text: '<path d="M4 6h16M4 10h16M4 14h10M4 18h7"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
    pulse: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    cloud: '<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'
  };
  function icon(name) { return '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>"; }

  /* ---------- opening pages ---------- */
  function goHomePage() { stopTimer(); stopSpeech(); paintHome(); show("home"); }
  function openBuilder(panelId) {
    paintDashboard(); show("dashboard");
    if (panelId) setTimeout(function () { var p = $(panelId); if (p) p.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
  }
  function openAdmin() { show("admin"); adminLoad(); }
  function openSaved() { goSetup(); setTimeout(function () { var p = $("savedBox"); if (p && !p.hidden) p.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60); }

  /* ---------- Home cards ---------- */
  var HOME_CARDS = [
    { id: "setup",    icon: "sliders", t: "hSetup",    d: "hSetupD",    lite: false, go: goSetup },
    { id: "lite",     icon: "bolt",    t: "hLite",     d: "hLiteD",     lite: true,  go: function () { openLite(); } },
    { id: "demo",     icon: "trophy",  t: "hDemo",     d: "hDemoD",     lite: true,  go: function () { runDemo(); } },
    { id: "saved",    icon: "star",    t: "hSaved",    d: "hSavedD",    lite: false, go: openSaved },
    { id: "builder",  icon: "tools",   t: "hBuilder",  d: "hBuilderD",  lite: false, go: function () { openBuilder(""); } },
    { id: "bank",     icon: "book",    t: "hBank",     d: "hBankD",     lite: false, go: function () { openBuilder("panelBank"); } },
    { id: "kb",       icon: "text",    t: "hKb",       d: "hKbD",       lite: false, go: function () { openBuilder("panelKb"); } },
    { id: "results",  icon: "chart",   t: "hResults",  d: "hResultsD",  lite: false, go: function () { openBuilder("panelHist"); } },
    { id: "activity", icon: "pulse",   t: "hActivity", d: "hActivityD", lite: false, go: function () { openBuilder("panelActivity"); } },
    { id: "firebase", icon: "cloud",   t: "hOwn",      d: "hOwnD",      lite: false, go: function () { openBuilder("panelOwn"); } },
    { id: "settings", icon: "gear",    t: "hSettings", d: "hSettingsD", lite: true,  go: function () { openSettings(); } },
    { id: "help",     icon: "help",    t: "hHelp",     d: "hHelpD",     lite: true,  go: function () { show("qmguide"); } },
    { id: "admin",    icon: "shield",  t: "hAdmin",    d: "hAdminD",    lite: false, adminOnly: true, go: openAdmin }
  ];
  function paintHome() {
    var li = S.edition === "lite";
    $("homeWelcome").textContent = T("homeWelcome", { name: (user && user.name) || "" });
    var box = $("homeCards"); clear(box);
    HOME_CARDS.forEach(function (c) {
      if ((li && !c.lite) || (c.adminOnly && !isAdmin)) return;
      var b = el("button", "cardbtn"); b.type = "button"; b.setAttribute("data-card", c.id);
      b.insertAdjacentHTML("beforeend", icon(c.icon));
      var tx = el("span", "ctext"); tx.appendChild(el("span", "ct", T(c.t))); tx.appendChild(el("span", "cd", T(c.d))); b.appendChild(tx);
      b.addEventListener("click", c.go); box.appendChild(b);
    });
    $("goDash").hidden = li; $("homeLogo").hidden = $("logo").hidden; if (!$("logo").hidden) $("homeLogo").src = $("logo").src;
    paintVerse();
  }

  /* ---------- Verse of the Day ---------- */
  var votdOffset = 0, votdCache = {};
  function votdIndex() { var d = new Date(); return (Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000) + votdOffset) % VERSE_OF_THE_DAY.length; }
  function kbVerse(books, code, ch, v1, v2) {
    var bk = books[code]; if (!bk) return null;
    var parts = [], n;
    for (n = v1; n <= v2; n++) {
      var hit = bk.v.filter(function (x) { return x[0] === ch && parseInt(x[1], 10) === n; })[0];
      if (!hit) return null; parts.push(hit[2]);
    }
    return parts.join(" ");
  }
  function showVerse(text, ref, src) { $("votdText").textContent = text; $("votdRef").textContent = ref; $("votdSrc").textContent = src ? " - " + src : ""; $("votdBox").classList.toggle("rtl", /[\u0590-\u08FF]/.test(text)); }
  function paintVerse() {
    var v = VERSE_OF_THE_DAY[votdIndex()], ref = v[0] + " " + v[1] + ":" + v[2] + (v[3] > v[2] ? "-" + v[3] : "");
    showVerse("\u201C" + v[4] + "\u201D", ref, VERSE_OF_THE_DAY_SOURCE);
    if (!kbMeta.some(function (m) { return m.lang === ui; })) return;                          // a Bible text in the interface language: show the verse from it
    var idx = votdIndex(), key = ui + "|" + idx, code = codeOfEnglish(v[0]), meta = kbMeta.filter(function (m) { return m.lang === ui; })[0];
    function put(hit) {
      if (!hit || votdIndex() !== idx) return;
      var shown = ((hit.book && hit.book.n) || v[0]) + " " + v[1] + ":" + v[2] + (v[3] > v[2] ? "-" + v[3] : "");
      showVerse("\u201C" + hit.text + "\u201D", shown, meta.name);
    }
    if (votdCache[key] !== undefined) { put(votdCache[key]); return; }
    kbLoadMerged(ui).then(function (books) {
      var t = kbVerse(books, code, v[1], v[2], v[3]); votdCache[key] = t ? { text: t, book: books[code] } : null; put(votdCache[key]);
    }).catch(function () {});
  }

  /* ---------- Demo contest: the 10-question sample, one tap ---------- */
  function runDemo() {
    var c = { qm: (user && user.name) || "", event: T("srcSample"), date: todayISO(), parts: 1, uiLang: ui, quizLang: "en", quizLangLabel: "English", mode: "individual", style: "normal",
              scope: "any", books: [], numQ: ROUNDS_SAMPLE.length, source: "sample", sample: true, saveResults: false };
    quizLang = "en"; track("sample_quiz");
    startQuiz(c, finalizeRounds(JSON.parse(JSON.stringify(ROUNDS_SAMPLE))));
  }

  /* ---------- OBQ Lite: a quick quiz in Simple style with almost no setup ---------- */
  var lite = { mode: "individual", numQ: 0, langPick: "en" };
  function liteCfg() {
    var lp = pickLang("lLang", "lOther"), part = $("lPart").value, preset = part === "bible" || part === "nt" || part === "ot";
    var c = { qm: (user && user.name) || "", event: normName($("lName").value) || T("liteDefaultName"), date: todayISO(), parts: 0, uiLang: ui, quizLang: lp.val, quizLangLabel: lp.label,
              mode: lite.mode, style: "simple", scope: preset ? part : "b1", books: preset ? [] : [part], numQ: lite.numQ, source: "", sample: false, saveResults: ownConnected(), lite: true, readAloud: speechOK && $("lRead").checked };
    if (!lp.val) c.source = "";
    else if (c.quizLang === "en" && S.builtInBank) c.source = "builtin";
    else if (kbMeta.some(function (m) { return m.lang === c.quizLang; })) c.source = "kb";
    else if (bank.some(function (q) { return q.lang === c.quizLang || q.lang === ""; })) c.source = "bank";
    return c;
  }
  function paintLite() {
    if (!lite.numQ) lite.numQ = S.questionCounts[0];
    langOptions($("lLang"), lite.langPick, true); $("lOtherWrap").hidden = $("lLang").value !== "other";
    var ps = $("lPart"), pv = ps.value || "bible"; clear(ps);
    [["bible", "scBible"], ["nt", "scNT"], ["ot", "scOT"]].forEach(function (p) { var o = el("option", null, T(p[1])); o.value = p[0]; ps.appendChild(o); });
    var sep = el("option", null, "- " + T("liteOneBook") + " -"); sep.disabled = true; ps.appendChild(sep);
    ALL_BOOKS.forEach(function (b) { var o = el("option", null, b); o.value = b; ps.appendChild(o); });
    ps.value = pv;
    var qc = $("lCounts"); clear(qc);
    S.questionCounts.forEach(function (n) {
      var b = el("button", null, String(n)); b.type = "button"; b.setAttribute("aria-pressed", n === lite.numQ ? "true" : "false");
      b.addEventListener("click", function () { lite.numQ = n; paintLite(); }); qc.appendChild(b);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".mode[data-lmode]"), function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lmode") === lite.mode ? "true" : "false"); });
    $("lReadWrap").hidden = !speechOK; refreshVoicePickers(); liteAvail();
  }
  function liteAvail() {
    var c = liteCfg(), t = $("liteAvail"); $("liteErr").textContent = ""; t.textContent = "";
    if (!c.quizLang) return;
    if (!c.source) { t.textContent = T("liteNone"); return; }
    if (c.source === "kb") { var have = scopeCodes(c).filter(function (code) { return kbHas(c.quizLang, code); }); t.textContent = have.length ? T("kbAvail", { n: have.length }) : T("kbNone"); return; }
    var n = buildPool(c).length; t.textContent = n ? T("avail", { n: n }) : T("availNone");
  }
  function openLite() { paintLite(); show("lite"); }
  function liteStart() {
    var c = liteCfg(), box = $("liteErr");
    if (!c.quizLang) { box.textContent = T("errOtherLang"); return; }
    if (!c.source) { box.textContent = T("liteNone"); return; }
    box.textContent = ""; beginWith(c, box, true);
  }
  function wireHome() {
    $("votdNext").addEventListener("click", function () { votdOffset++; paintVerse(); });
    $("lLang").addEventListener("change", function () { lite.langPick = $("lLang").value; $("lOtherWrap").hidden = lite.langPick !== "other"; liteAvail(); });
    $("lOther").addEventListener("input", liteAvail); $("lPart").addEventListener("change", liteAvail);
    Array.prototype.forEach.call(document.querySelectorAll(".mode[data-lmode]"), function (b) { b.addEventListener("click", function () { lite.mode = b.getAttribute("data-lmode"); paintLite(); }); });
    $("liteStart").addEventListener("click", liteStart); $("liteHome").addEventListener("click", goHomePage);
  }

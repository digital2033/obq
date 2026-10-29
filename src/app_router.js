
  /* =====================================================================
     TOP NAVIGATION (icons) and PAGE ADDRESSES (deep links)
     /instructions  /settings  /profile  /my-quizzes  /results  /setup  /quick-quiz  /admin
     /builder  /builder/questionbank  /builder/knowledge-base  /builder/results  /builder/firebase  /builder/activity  /builder/remote
     ===================================================================== */
  var BASE_PATH = window.__OBQ_BASE || (location.pathname.replace(/[^\/]*$/, "") || "/");
  var routingOK = S.edition !== "basic" && !!window.__OBQ_BASE && /^https?:$/.test(location.protocol) && !!(window.history && window.history.pushState);
  var routing = false, pendingRoute = "";
  var PANEL_ROUTE = { panelBank: "builder/questionbank", panelKb: "builder/knowledge-base", panelHist: "builder/results", panelOwn: "builder/firebase", panelActivity: "builder/activity", panelRemote: "builder/remote" };
  var ROUTE_TABLE = {
    "": function () { goHomePage(); },
    "instructions": function () { openQmGuide(); },
    "settings": function () { openSettings(); },
    "profile": function () { openSettings("setProfile"); },
    "my-quizzes": function () { openMyQuizzes(); },
    "results": function () { openBuilder("panelHist"); },
    "setup": function () { goSetup(); },
    "quick-quiz": function () { openLite(); },
    "admin": function () { if (isAdmin) openAdmin(); else goHomePage(); },
    "builder": function () { openBuilder(""); },
    "builder/questionbank": function () { openBuilder("panelBank"); },
    "builder/knowledge-base": function () { openBuilder("panelKb"); },
    "builder/results": function () { openBuilder("panelHist"); },
    "builder/firebase": function () { openBuilder("panelOwn"); },
    "builder/activity": function () { openBuilder("panelActivity"); },
    "builder/remote": function () { openBuilder("panelRemote"); }
  };
  var NAV_OF_ROUTE = { "": "goHome", "instructions": "goHelp", "my-quizzes": "goQuizzes", "results": "goResults", "builder/results": "goResults", "settings": "goSettings", "profile": "goProfile", "admin": "goAdmin", "setup": "goQuizzes" };
  function currentRoute() {
    var p = location.pathname; if (p.indexOf(BASE_PATH) === 0) p = p.slice(BASE_PATH.length);
    return p.replace(/index\.html$/, "").replace(/^\/+|\/+$/g, "");
  }
  function routeUrl(route) { return BASE_PATH + route; }
  function markNav(route) {
    var id = NAV_OF_ROUTE[route] || (route.indexOf("builder") === 0 ? "goDash" : "");
    Array.prototype.forEach.call(document.querySelectorAll("#tbRight .navlink"), function (a) { if (a.id === id) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  }
  function setUrl(route) {                                        // called by the page-opening functions; adds the page's address to the browser history
    if (routing) { markNav(route); return; }
    if (routingOK) { try { if (currentRoute() !== route) window.history.pushState({ obq: 1 }, "", routeUrl(route) || BASE_PATH); } catch (e) { routingOK = false; } }
    markNav(route);
  }
  function applyRoute(route) {
    var f = ROUTE_TABLE[route], known = !!f; routing = true;
    try { (f || ROUTE_TABLE[""])(); } finally { routing = false; }
    markNav(known ? route : "");
  }
  function resetUrl() { if (routingOK) { try { window.history.replaceState(null, "", BASE_PATH); } catch (e) {} } }

  /* the top bar: an icon in front of every item, real links (so "open in a new tab" works), a user name and My Profile */
  var NAV_ROUTE_OF_ID = { goHome: "", goHelp: "instructions", goQuizzes: "my-quizzes", goResults: "results", goDash: "builder", goAdmin: "admin", goSettings: "settings", goProfile: "profile" };
  function wireNav() {
    Array.prototype.forEach.call(document.querySelectorAll("#tbRight [data-icon]"), function (n) { n.insertAdjacentHTML("afterbegin", icon(n.getAttribute("data-icon"), 16)); });
    Object.keys(NAV_ROUTE_OF_ID).forEach(function (id) { var a = $(id); a.setAttribute("href", routeUrl(NAV_ROUTE_OF_ID[id]) || BASE_PATH); });
    $("tbRight").addEventListener("click", function (e) {         // a plain click is handled by the app; ctrl/cmd/shift/middle click opens the page's address in a new tab
      var a = e.target.closest && e.target.closest("a.navlink");
      if (a && !(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button === 1)) e.preventDefault();
    });
    $("goQuizzes").addEventListener("click", function () { openMyQuizzes(); });
    $("goResults").addEventListener("click", function () { openBuilder("panelHist"); });
    $("goProfile").addEventListener("click", function () { openSettings("setProfile"); });
    window.addEventListener("popstate", function () {
      if (!routingOK) return;
      var sc = document.body.getAttribute("data-screen");
      if (sc === "game" || sc === "end") { try { window.history.pushState({ obq: 1 }, "", location.href); } catch (e) {} return; }          // the Back button must not leave a quiz
      if (!user) { pendingRoute = currentRoute(); return; }
      applyRoute(currentRoute());
    });
  }
  function paintNavTitles() {                                     // names for icon-only (narrow) screens
    Array.prototype.forEach.call(document.querySelectorAll("#tbRight .navlink"), function (a) { a.title = a.textContent.trim(); a.setAttribute("aria-label", a.textContent.trim()); });
  }

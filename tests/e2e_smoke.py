"""Smoke test inside a sandboxed frame (like the claude.ai page): sign up, skip login, run the sample quiz with remote keys.
   pip install playwright && playwright install chromium     then:   python tests/e2e_smoke.py   (after building)"""
import os, subprocess, sys, time
from playwright.sync_api import sync_playwright
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "dist")
srv = subprocess.Popen([sys.executable, "-m", "http.server", "8799", "--directory", root], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
try:
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page(viewport={"width": 1200, "height": 760}); errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.route("**/host.html", lambda r: r.fulfill(status=200, content_type="text/html", body='<iframe id="f" src="/index.html" style="width:1100px;height:700px;border:0" sandbox="allow-scripts allow-downloads allow-modals"></iframe>'))
        pg.route("**/*", lambda r: r.abort() if not r.request.url.startswith("http://localhost") else r.fallback())
        pg.goto("http://localhost:8799/host.html"); pg.wait_for_timeout(800)
        f = pg.frame_locator("#f"); screen = lambda: pg.frames[1].evaluate("document.body.dataset.screen")
        assert screen() == "auth"
        if f.locator("#authOffline").is_visible(): f.locator("#authOfflineGo").click(); pg.wait_for_timeout(300)      # a build with Firebase settings cannot reach Firebase here: continue with a local account
        f.locator("#tabUp").click(); f.locator("#upName").fill("Ann"); f.locator("#upEmail").fill("ann@e.org"); f.locator("#upOrg").fill("X")
        f.locator("#upCountry").fill("IN"); f.locator("#upUsage").select_option("school"); f.locator("#upPass").fill("abcdef")
        f.locator("#upTermsLink").click(); pg.frames[1].evaluate("document.getElementById('termsBody').scrollTop=99999"); pg.wait_for_timeout(200); f.locator("#termsAccept").click()
        f.locator("#btnUp").click(); pg.wait_for_timeout(600)
        assert screen() == "home", "sign-up button did not work (expected the Home page)"
        f.locator("[data-card=demo]").click(); pg.wait_for_timeout(400)
        assert screen() == "game"
        for _ in range(140):
            pg.frames[1].evaluate("document.dispatchEvent(new KeyboardEvent('keydown',{key:'PageDown',bubbles:true}))"); pg.wait_for_timeout(10)
        assert screen() == "end", "remote keys did not reach the final screen"
        assert not errs, errs
        print("OK"); b.close()
finally:
    srv.terminate()

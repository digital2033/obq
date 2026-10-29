"""Builds dist/index.html (one self-contained file) from the working parts in src/.
Run:  python3 tools/assemble.py
"""
import base64, os, re, sys

BASIC = "--basic" in sys.argv          # python tools/assemble.py --basic  ->  dist/obq-basic.html: the very basic version (name, quick quiz, results; no login)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
SRC = os.path.join(ROOT, "src")


def rd(name):
    with open(os.path.join(SRC, name), encoding="utf-8") as f:
        return f.read()


# 1. styles: the base styles (orange palette, right-to-left friendly) + the Studio additions
css = rd("css_base.css")
css += "\n" + rd("css_new.css")

# 2. configuration blocks (settings, interface text, questions) - they go at the very top
# Optional private files (never committed, see .gitignore): private/firebase.config.json = your Firebase web config,
# private/bank.key (or env OBQ_BANK_KEY) = the key for src/cfg3_bank.enc.json, private/cfg3_bank.js = a different bank for local tests. Without a Firebase file the app runs in local mode.
PRIV = os.path.join(ROOT, "private")
bank_file = os.path.join(PRIV, "cfg3_bank.js")
enc_file = os.path.join(SRC, "cfg3_bank.enc.json")
bank_key = os.environ.get("OBQ_BANK_KEY", "").strip()
key_file = os.path.join(PRIV, "bank.key")
if not bank_key and os.path.exists(key_file): bank_key = open(key_file, encoding="utf-8").read().strip()
if os.path.exists(bank_file):
    bank_src = open(bank_file, encoding="utf-8").read(); print("question bank: PRIVATE override (private/cfg3_bank.js)")
elif os.path.exists(enc_file) and bank_key:
    import json as _j
    enc = _j.load(open(enc_file, encoding="utf-8"))
    parts = [bank_key[i:i + 4] for i in range(0, len(bank_key), 4)][::-1]          # light obfuscation only; the page needs the key to decrypt
    bank_src = ("/* built-in question bank, encrypted. rows: %d */\nvar STARTER_BANK = [];\nvar BANK_ENC = %s;\nvar BANK_PASS = %s.reverse().join(\"\");\n"
                % (enc["rows"], _j.dumps({"iv": enc["iv"], "ct": enc["ct"]}), _j.dumps(parts)))
    print("question bank: ENCRYPTED full bank (%d questions) - key found" % enc["rows"])
else:
    bank_src = rd("cfg3_bank.js"); print("question bank: sample bank (src/cfg3_bank.js)" + (" - encrypted bank present but no key (OBQ_BANK_KEY / private/bank.key)" if os.path.exists(enc_file) else ""))
cfg = "\n".join([rd(n) for n in ["cfg1.js", "cfg2_en.js", "cfg2_hi_ml.js", "cfg2_or_ta.js", "cfg2_te_pa_bn.js", "cfg2_ne_ur_mr.js", "cfg2_extra.js", "cfg3.js"]] + [bank_src, rd("cfg4_verses.js")])
site_file = os.path.join(PRIV, "site.config.json")           # optional: {"operatorName": "...", "contactEmail": "...", "announcement": {"title": "...", "text": "...", "date": "2026-12-01", "linkText": "...", "linkUrl": "https://..."}}
if os.path.exists(site_file):
    import json as _s
    site = _s.load(open(site_file, encoding="utf-8"))
    for k in ("operatorName", "contactEmail"):
        if site.get(k): cfg = re.sub(r"(%s: )\"[^\"]*\"" % k, lambda m: m.group(1) + _s.dumps(str(site[k])), cfg, count=1)
    if isinstance(site.get("announcement"), dict):
        cfg = re.sub(r"announcement: \{[^{}]*\},", lambda m: "announcement: " + _s.dumps(site["announcement"], ensure_ascii=False) + ",", cfg, count=1)
    print("site details: PRIVATE (private/site.config.json)")
fb_file = os.path.join(PRIV, "firebase.config.json")
if BASIC:
    cfg = cfg.replace('edition: "full"', 'edition: "basic"', 1).replace("requireLogin: true,", "requireLogin: false,", 1)
    print("basic version: no login, no Firebase")
elif os.path.exists(fb_file):
    import json
    fbc = json.load(open(fb_file, encoding="utf-8"))
    fbc = fbc.get("firebaseConfig", fbc)
    keys = ["apiKey", "authDomain", "projectId", "storageBucket", "messagingSenderId", "appId", "measurementId"]
    block = "firebase: { " + ", ".join('%s: %s' % (k, json.dumps(str(fbc.get(k, "")))) for k in keys) + " },"
    cfg, n = re.subn(r"firebase: \{[^{}]*\},", lambda m: block, cfg, count=1)
    print("firebase config:", "PRIVATE (private/firebase.config.json)" if n else "NOT APPLIED")
else:
    print("firebase config: none (local mode)")

# 3. engine
engine = "\n".join(rd(n) for n in ["app1.js", "app2.js", "app_kb.js", "app_saved.js", "app_own.js", "app_home.js", "app_settings.js", "app_router.js", "app3.js", "app4.js"])

# 3b. logo (assets/) embedded as a small data URI, plus a favicon
import io
m = re.search(r"rows: (\d+)", bank_src); bank_count = "{:,}".format(int(m.group(1))) if m else "many"
def logo_uris():
    path = os.path.join(ROOT, "assets", "OBQ_Oral_Bible_Quiz_Logo.png")
    if not os.path.exists(path): return None, None
    from PIL import Image
    im = Image.open(path).convert("RGBA"); w = 560; im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.quantize(256, method=Image.FASTOCTREE, dither=Image.NONE).save(buf, "PNG", optimize=True)
    fav = Image.new("RGBA", (64, 64), (27, 20, 16, 255)); lg = im.copy(); lg.thumbnail((60, 60)); fav.alpha_composite(lg, ((64 - lg.width) // 2, (64 - lg.height) // 2))
    fb = io.BytesIO(); fav.save(fb, "PNG", optimize=True)
    enc = lambda b: "data:image/png;base64," + base64.b64encode(b).decode("ascii")
    return enc(buf.getvalue()), enc(fb.getvalue())
logo_uri, fav_uri = logo_uris()
if logo_uri: cfg = cfg.replace('logo: "@logo"', 'logo: "' + logo_uri + '"')
else: cfg = cfg.replace('logo: "@logo"', 'logo: ""')

# 4. Excel template embedded as base64 (so "Download Excel template" works offline and on any host)
tpl = os.path.join(ROOT, "templates", "question-bank-template.xlsx")
if os.path.exists(tpl):
    b64 = base64.b64encode(open(tpl, "rb").read()).decode("ascii")
    engine = engine.replace('"/*TEMPLATE_B64*/"', '"' + b64 + '"')
else:
    print("warning: template not found, placeholder kept", file=sys.stderr)

fonts = ""
for fam, w in [("DM+Sans", "400;500;700;800"), ("Noto+Sans+Devanagari", "400;700"), ("Noto+Sans+Malayalam", "400;700"),
               ("Noto+Sans+Oriya", "400;700"), ("Noto+Sans+Tamil", "400;700"), ("Noto+Sans+Telugu", "400;700"),
               ("Noto+Sans+Gurmukhi", "400;700"), ("Noto+Sans+Bengali", "400;700"), ("Noto+Sans+Kannada", "400;700"), ("Noto+Naskh+Arabic", "400;700")]:
    fonts += '<link href="https://fonts.googleapis.com/css2?family=%s:wght@%s&display=swap" rel="stylesheet">\n' % (fam, w)

TITLE = re.search(r'appName:\s*"(.*?)"', cfg).group(1)
html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="dark">
<meta name="theme-color" content="#1B1410">
{("<link rel=icon type=image/png href=" + chr(34) + fav_uri + chr(34) + ">") if fav_uri else ""}
<title>{TITLE}</title>
<script id="quiz-config">
{cfg}
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
{fonts}<style>
{css}
</style>
</head>
{rd("body.html").replace("<!--QMGUIDE-->", rd("guide_qm.html").replace("{{BANK_COUNT}}", bank_count)).replace("<!--TERMS-->", rd("terms.html"))}
<script>
{engine}
</script>
</body>
</html>
"""
os.makedirs(os.path.join(ROOT, "dist"), exist_ok=True)
out = os.path.join(ROOT, "dist", "obq-basic.html" if BASIC else "index.html")
with open(out, "w", encoding="utf-8") as f:
    f.write(html)
print("built", out, len(html.encode("utf-8")), "bytes")

// Checks the Bible text reader against real USFM files.
//   node tests/kb_parse.js /path/to/folder-with-usfm-files
// (Bible texts are not stored in this repo - bring your own.)
const fs = require("fs"), path = require("path");
const dir = process.argv[2];
if (!dir || !fs.existsSync(dir)) { console.log("usage: node tests/kb_parse.js <folder with .usfm files>"); process.exit(0); }
const root = path.join(__dirname, "..", "src");
const src = fs.readFileSync(path.join(root, "app_kb.js"), "utf8"), cfg = fs.readFileSync(path.join(root, "cfg1.js"), "utf8");
const api = new Function(cfg + `
function normName(s){return String(s==null?"":s).replace(/\\s+/g," ").trim();}
var ALL_BOOKS=QUIZ_BOOKS_OT.concat(QUIZ_BOOKS_NT);
function $(){} function el(){} function clear(){} function shuffle(a){return a.slice()} function ekey(){return "x"} function TQ(k){return k}
` + src + "; return {parseUSFM, CODES, genKbQuestions};")();
let books = {}, verses = 0, leaks = 0;
for (const f of fs.readdirSync(dir).filter(f => /\.(usfm|sfm)$/i.test(f))) {
  const b = api.parseUSFM(fs.readFileSync(path.join(dir, f), "utf8"));
  if (api.CODES.indexOf(b.code) < 0) continue;
  books[b.code] = { n: b.name, v: b.verses }; verses += b.verses.length;
  b.verses.forEach(v => { if (/\\/.test(v[2])) leaks++; });
}
console.log("books:", Object.keys(books).length, "verses:", verses, "verses with leftover markers:", leaks);
console.log(api.genKbQuestions(books, api.CODES.slice(), 4, "xx").map(q => q.q.slice(0, 90) + " => " + q.a).join("\n"));
if (Object.keys(books).length < 60 || leaks) { console.error("FAILED"); process.exit(1); }
console.log("OK");

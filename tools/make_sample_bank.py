"""Makes data/sample-question-bank.xlsx: a few questions per book, taken from a full bank, with every kind of question.
   Run:  python3 tools/make_sample_bank.py private/YOUR-FULL-BANK.xlsx [questions-per-book]"""
import collections, os, sys
from openpyxl import Workbook, load_workbook
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
src = sys.argv[1]; per = int(sys.argv[2]) if len(sys.argv) > 2 else 3
ws = (lambda wb: wb["Questions"] if "Questions" in wb.sheetnames else wb[wb.sheetnames[0]])(load_workbook(src, read_only=True, data_only=True))
rows = [list(r) for r in ws.iter_rows(values_only=True)]
head, body = rows[0], [r for r in rows[1:] if any(c not in (None, "") for c in r)]
col = {str(h).strip().lower(): i for i, h in enumerate(head)}
by_book = collections.defaultdict(list)
for r in body: by_book[str(r[col["book"]] or "")].append(r)
def kind(r): return (str(r[col["category"]]), str(r[col["level"]] or ""))
kinds = collections.Counter(kind(r) for r in body)
def cat(r): return str(r[col["category"]]).lower()
def regular(r): return str(r[col["level"]] or "").strip().lower() in ("", "regular")
out = []
for book, items in by_book.items():
    picked = []
    def take(pred, key=None):
        for r in sorted([x for x in items if x not in picked and pred(x)], key=key or (lambda x: 0)):
            picked.append(r); return
    take(lambda r: "multiple" in cat(r) and regular(r))                 # one regular multiple choice
    take(lambda r: cat(r).startswith("one") and regular(r))             # one regular question
    take(lambda r: True, key=lambda r: kinds[kind(r)])                  # then the rarest kind, so every kind appears in the sample
    out += picked[:per]
wb = Workbook(); w = wb.active; w.title = "Questions"; w.append(head)
for r in out: w.append(r)
os.makedirs(os.path.join(ROOT, "data"), exist_ok=True); wb.save(os.path.join(ROOT, "data", "sample-question-bank.xlsx"))
print("sample bank:", len(out), "questions from", len(by_book), "books")

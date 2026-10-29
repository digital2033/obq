# Changelog

## v1.0.0 - Oral Bible Quiz (OBQ), first public release

A web app for leading live Bible quizzes for groups who learn by listening. It is one installable page that also works offline, with 11 interface languages.

### Highlights
- **Home page** with an introduction, a Verse of the Day, a button for every feature and built-in instructions for Quiz Masters.
- **OBQ Lite** (a quick quiz with almost no setup) and a **Simple** quiz style for new Quiz Masters and children's groups; a **Demo Contest** to try every kind of question.
- **Read aloud** with the device's own voices, a voice picker and a fallback for Marathi and Nepali.
- **Settings** with an editable profile, theme (dark, light or device), font, text size, sound, read-aloud speed, keep-awake and an analytics on/off switch.
- **Terms and Conditions** accepted at sign-up in a read-first pop-up, including the analytics notice.

### Running a quiz
- A fixed question mix for 10, 20 or 30 questions: regular, multiple choice, trivia, 50:50, short answer with hints, Who am I?, multi-part and difficult (changeable in settings). Simple style uses only regular and multiple-choice questions at 1 point each.
- Step guide and tooltips explain what is missing at each step; points instructions for clue-based and multi-part questions.
- Timer with sound, full screen from the first question with an exit button, landscape layout that fits one screen.
- Keyboard and presentation-remote control, including `R` for read aloud.
- Individuals or Groups, names typed once and ticked later, live points table, undo of a point, "nobody answered".
- Results as **PDF** and **CSV**, kept on the Quiz Master's device, with an optional send to the Quiz Master's own Firebase project (step-by-step instructions inside the app).
- **Saved quizzes:** templates, scheduled events, frozen questions, **Start now**, **Open in setup**, and **Save this quiz to redo later**. The setup form clears after saving or finishing.

### Questions
- Built-in English bank of 1,390 questions covering all 66 books, shipped **encrypted** (`src/cfg3_bank.enc.json`), plus a plain-text sample of 198 questions.
- **Excel template** with the categories One answer, Multiple choice, Short answer with hints, Clue based and Multi-part, and the levels Regular, Trivia and Difficult; upload with row-by-row error reports.
- **Bible text knowledge base:** upload USFM, USFX, USX or plain text (or a zip), import a bundle, or use the **Bible Brain browser** (country, then language, then the USX and plain-text filesets, with a count of the others). Questions are generated as "complete the verse" and "which book".

### Accounts and privacy (optional Firebase)
- Local mode (no cloud) or Firebase: sign-up, sign-in, **forgot password**, **email-link (passwordless) sign-in**, email confirmation.
- Sign-in records, a count of quiz set-ups (no points, no names), saved quizzes and question-bank sync.
- Participant names and points stay on the device unless the Quiz Master sends them to their own Firebase project.
- **Admin screen** with usage counts and CSV downloads (admins only).

### Build and publishing
- Python build scripts in `tools/`; the app is built into one HTML file and an installable web app (`dist/`).
- GitHub Action that publishes with GitHub Pages.
- Secrets and private files stay out of the repository: Firebase config (`FIREBASE_CONFIG_JSON`), the key for the encrypted bank (`OBQ_BANK_KEY`) and the operator details for the Terms (`SITE_CONFIG_JSON`), or the local `private/` folder.
- Database security rules are not included in this repository: write rules for your own Firebase project (see "Firebase setup" in the README).

### Interface languages
English, Hindi, Malayalam, Odia, Tamil, Telugu, Punjabi, Bengali, Nepali, Urdu and Marathi. Labels that have no translation yet fall back to English.

### Known limits
- Read aloud depends on the voices installed on the device; some languages (for example Odia and Punjabi) have few voices.
- The Terms and Conditions are English only and are a draft: have them reviewed before launch.
- Some recently added labels are English only in the other interface languages.
- The Bible Brain browser was written from the public documentation and tested against a simulated service.

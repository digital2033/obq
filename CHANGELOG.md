# Changelog

## v1.3.0 - top navigation, page addresses, install

### Added
- **Top bar with icons** in the order Home, Instructions, My Quizzes, Quiz Results, Quiz Builder, language chooser, Settings, user name, My Profile, Sign out. It adapts to its width (full labels, compact, icons only).
- **Page addresses:** `/instructions`, `/settings`, `/profile`, `/my-quizzes`, `/results`, `/setup`, `/quick-quiz`, `/builder`, `/builder/questionbank`, `/builder/knowledge-base`, `/builder/results`, `/builder/firebase`, `/builder/activity`, `/builder/remote`. Direct links, bookmarks, reloads and the Back button work; an address opened before sign-in opens after it; Back never leaves a running quiz.
- **Install the app (PWA):** an Install button on the Home page and in Settings (Chrome, Edge, Android), instructions for iPhone and other browsers, and a status line that says whether the app is ready for offline use. Manifest shortcuts for My Quizzes, Quiz Builder and Settings.
- **Settings, Install and offline use:** what works without internet (quizzing, PDF and CSV, the timer, read aloud with an installed voice) and what needs internet (sending results to Firebase, cloud sync, Bible Brain downloads, usage counting).
- **OBQ Quiz Builder** (renamed) starts with a **Set up a quiz** box. **Activity** now totals the participants from the quiz set-ups, counts the languages used, and shows the questions in the question bank (yours and the built-in bank) and the Bible texts and books in the knowledge base. The Home page shows the participants total too.

### Changed
- "Bible text knowledge base" is now **Bible Knowledge Base**.
- The Bible Brain browser lists only **USX and USFM** filesets (it still says how many other text filesets, such as plain text, were found).

## v1.2.0 - very basic version

### Added
- **Basic version** (`python tools/assemble.py --basic` makes `dist/obq-basic.html`): a separate single file with no login, no Home page, no Terms, no Settings and no Firebase. Type your name, set up an OBQ Lite quick quiz, run the event, download a PDF. Works offline from a saved file. The GitHub Action publishes it at `/basic/`.
- The basic version's start page is translated into the 10 other interface languages (machine-prepared; please have them checked).

### Fixed
- The offline cache of the full app now ignores other pages on the same site (such as `/basic/`), so they can never replace the cached start page.

## v1.1.0 - stay signed in, offline sign-in, new Home page

### Added
- **Remember me on this device** at sign-in and sign-up: stay signed in until you sign out. For online accounts a salted password hash and a profile copy are kept on that device so the same email and password work **without internet** (the first sign-in still needs internet). **Forget this device** in Settings removes it.
- A remembered device starts without internet straight into the app, with a note that online features are paused.
- **Home page:** the menu is grouped into Run a quiz, one **Quiz Builder** box (Question Bank, Bible Text Knowledge Base, Quiz Results, Activity Dashboard, My Firebase Backup) and Account and help; a **Your events** panel (upcoming scheduled events with Start now, recent quizzes, numbers, a Getting started checklist and a daily tip); an optional **announcement** banner for an event or campaign.
- **Quiz Builder** has a jump bar to its sections.

### Changed
- If the profile cannot be loaded online, the copy saved on the device is used.
- Instructions for Quiz Masters and the README explain offline use.

## v1.0.1 - sign-in and Terms fixes

### Fixed
- **Sign-in after restarting the browser or computer:** if the page is set up for online accounts but the online sign-in service could not be reached in time (for example no network yet, or a blocker), the app used to switch silently to local accounts, where the online account does not exist, and showed "Email or password is incorrect". It now shows a clear box ("Cannot reach the online sign-in service") with **Try again** and **Continue offline**, retries by itself when the connection returns, waits longer and retries each library file once. The Firebase library is also cached for offline use.
- **Clearer messages:** local mode now says when no account with that email exists in this browser (and why), online mode explains accounts made in local mode or on another address, and the login page always shows which mode is active.
- The browser is asked to keep the site's data (so local accounts are less likely to be cleared).

### Changed
- **Terms and Conditions are accepted once, at sign-up.** Existing accounts are no longer asked to accept again at sign-in. (Optional: set `reacceptTerms: true` in `src/cfg1.js` to ask again whenever `termsVersion` changes.) Section 9 of the Terms was reworded accordingly.

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

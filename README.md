# Oral Bible Quiz (OBQ)

**OBQ helps you lead a live Bible quiz for groups who learn by listening.** You say the question, the group answers aloud, and OBQ looks after the questions, the timer, the scores and the results. It is one web page: it can be installed on a phone, tablet or computer, works offline once installed, and is designed for projectors, presentation remotes and simple, spoken-word settings.

- Free to run, no server needed (Firebase sign-in and cloud features are optional)
- 11 interface languages: English, Hindi, Malayalam, Odia, Tamil, Telugu, Punjabi, Bengali, Nepali, Urdu, Marathi
- Quizzes in any language you have questions or Bible text for
- See [CHANGELOG.md](CHANGELOG.md) for the release notes

## Features

### Home page
- Introduction, a **Verse of the Day** (58 verses, King James Version; shown from your own Bible text when you have loaded one in the interface language) and a button for every feature.
- Buttons: Set up a quiz, OBQ Lite, Demo Contest, My saved quizzes, Quiz Builder, Question Bank, Bible Text Knowledge Base, Quiz Results, Activity Dashboard, My Firebase Backup, Settings, Quiz Master Instructions (and Admin for admins).

### Starting a quiz
- **Set up a quiz** (full control): Quiz Master name, event, date, number of participants, interface and quiz language (any language can be typed), **Individuals** (default) or **Groups**, quiz style, scope, number of questions, question source, read aloud, and optional send of results to your own Firebase.
- **Scope:** 1 book, 2 books, more than 2 books, New Testament, Old Testament, whole Bible, or any topic.
- **Quiz style:** **Normal** (the full mix of question kinds) or **Simple** (only regular and multiple-choice questions, 1 point each, no 50:50, no clues, no multi-part).
- **OBQ Lite - Quick Quiz:** choose the language, the part of the Bible (or one book), the number of questions and Individuals or Groups; it always runs in Simple style.
- **Demo Contest:** a ready-made 10-question quiz with every kind of question.
- **Saved quizzes:** keep a setup as a template or a scheduled event, freeze the exact questions, start it again with **Start now**, open it in the setup page, or save a finished quiz to redo it later. The setup form clears after saving or finishing.

### Question kinds
| Kind | How it works |
|---|---|
| Regular | One answer, no options, no clues. |
| Multiple choice | Four options, one answer. |
| Multiple choice with 50:50 | The host presses a button and two wrong options disappear. |
| Short answer with hints | Hints are shown one at a time. |
| Who am I? | Clues are shown one at a time; points fall with each clue (5, 4, 3, 2, 1). |
| Multi-part | Two to four parts asked together; points equal the parts answered correctly. |
| Trivia and Difficult | Labelled on screen. |

In the Normal style a 10-question quiz follows this order and repeats for 20 and 30 questions: regular, multiple choice, multiple choice, trivia, 50:50, 50:50, short answer with hints, Who am I?, multi-part, difficult. The order is a setting (`blueprint` in `src/cfg1.js`). If a bank has no question of a kind, the closest kind is used.

### Running a quiz
- The same rhythm for every question: say the question, **Show correct answer**, type the names of those who answered correctly (comma-separated) and **Give points**, then **Next question**. A step guide and tooltips explain what is missing; if nobody answered, press Give points with the names box empty.
- Points instructions on screen for Who am I? and multi-part questions; names can be ticked again later; a point given by mistake can be removed.
- Timer with sound, **full screen** from the first question (with an exit button; Esc also works), a layout that fits one screen, **Home** asks for a second press so a quiz is not left by accident, and **Back** asks when points have not been given yet.
- **Read aloud:** the question, options, clues and answer are read with the device's own voice, by button or automatically. A voice picker lets you test and choose a voice per language; Marathi and Nepali can use a Hindi voice; option letters are spoken in the language; if no suitable voice exists OBQ says so instead of reading badly.

| Action | Keyboard | Presentation remote |
|---|---|---|
| Next step (clue, show answer, give points, next question) | Space, Enter, right arrow | Next slide |
| Previous question | Left arrow | Previous slide |
| Start or pause the timer | T, `.` or B | Black screen button |
| Hint or 50:50 | H | - |
| Read the question aloud (or stop) | R | - |
| Click into the names box | N | - |
| Full screen | F or F5 | Start slideshow |

### Questions
- **Built-in English bank:** 1,390 questions across all 66 books (shipped encrypted; a 198-question sample is in plain text).
- **Your own questions (Excel):** download the template in the Quiz Builder, fill in the **Questions** sheet (the **Examples** sheet shows each kind) and upload it. Columns: Language, Book, Category (One answer, Multiple choice, Short answer with hints, Clue based, Multi-part), Level (Regular, Trivia, Difficult), Question, Option A to D, Clue 1 to 5, Correct answer, Reference, More to know, Points, Seconds, Intro. Rows with a problem are skipped and listed with their row number; you can add to or replace your bank.
- **Bible text knowledge base:** add Bible text in any language (USFM, USFX, USX, plain text, or a zip), import a bundle, or use the **Bible Brain browser**: enter your key, choose a country and a language, and download a USX or plain-text fileset. OBQ makes "complete the verse" and "which book is this verse from" questions and lets you preview them. The text stays on your device.

### Results
- Finished quizzes show the winners and the full points table.
- **PDF** report (Quiz Master, organisation, event, date, participants, language, scope, style, number of questions, points table) and **CSV** download (spreadsheet-safe).
- Every finished quiz is kept on the device under **Quiz Results**.
- Optional **send to your own Firebase project** (step-by-step instructions inside the app). OBQ's own cloud never receives points or names.

### Accounts and settings
- **Local mode** (no Firebase): accounts and data stay on the device.
- **With Firebase:** sign-up with email confirmation, sign-in, **forgot password**, and **sign-in with an email link** (no password). New accounts accept the **Terms and Conditions** (which include the analytics notice) in a read-first pop-up; you are asked again when the terms version changes.
- **Settings:** an editable **profile** (name, organisation, country, use), theme (dark, light or match the device), font, text size (small to extra large), sounds, read-aloud speed, keep-awake during a quiz, and an **analytics on/off** switch.
- **Activity dashboard** on the device, a remote-control tester, and built-in **instructions for Quiz Masters**.
- **Admin screen** (accounts listed as admins): counts of quiz set-ups and Quiz Masters with CSV downloads.

## Basic usage

1. **Sign in** or create an account. Without Firebase the app runs in local mode.
2. On the **Home page** choose **OBQ Lite - Quick Quiz** for the fastest start, **Set up a quiz** for full control, or **Demo Contest** to see how it works.
3. **Run the quiz** with the steps above (use a presentation remote if you have one; press **R** to read a question aloud).
4. **Finish:** save the results as PDF or CSV, save the quiz to redo later, or start a new one.
5. Open **Settings** to change your profile, theme, font, text size, sound and analytics choice.

## Running it yourself

You need Python 3.10 or newer.

```
pip install openpyxl pillow cryptography
python tools/make_template.py     # the Excel template
python tools/assemble.py          # dist/index.html: the whole app in one file
python tools/build_pwa.py         # dist/obq-app/ and dist/obq-app.zip: the installable app
python -m http.server 8000 --directory dist/obq-app      # then open http://localhost:8000
```

Any static host works: upload `dist/obq-app/`. The included GitHub Action (`.github/workflows/deploy.yml`) builds and publishes the site with GitHub Pages (Settings, then Pages, then Source = GitHub Actions).

### Settings in `src/cfg1.js`
App name and logo, `edition` (`full` or `lite`), `requireLogin`, `requireTerms` and `termsVersion`, `operatorName` and `contactEmail` (shown in the Terms), `defaultTheme` and the two colour palettes, question counts, `blueprint` and `simpleBlueprint` (question mix), `speechRate`, default seconds and points, and the Firebase settings. Interface text is in the `cfg2_*.js` files; the Terms text is `src/terms.html`; the Quiz Master instructions are `src/guide_qm.html`.

### Question bank
`src/cfg3_bank.js` is a plain-text sample (198 questions, from `data/sample-question-bank.xlsx`). The full bank is stored **encrypted** in `src/cfg3_bank.enc.json`. The build embeds it, with the key, in the page when it has the key: set the environment variable `OBQ_BANK_KEY` or create `private/bank.key`; without a key the sample is used. To encrypt your own bank:

```
python tools/import_bank.py YOUR-BANK.xlsx --encrypt --key-file private/bank.key
```

This keeps the questions out of the repository and out of casual view-source, but it is not unbreakable: a page that can show the questions must be able to decrypt them.

### Firebase setup (optional)
Without Firebase everything works in local mode. To turn on accounts and cloud features, create a Firebase project and:
1. Turn on **Authentication**: Email/Password, and **Email link (passwordless sign-in)** if you want it. Add your site's address to **Authorized domains**.
2. Create a **Cloud Firestore** database and write security rules for it. Rules are not included in this repository. What the app stores: `quizMasters/{uid}` (name, email, org, country, usage, consent, terms, termsAt, createdAt, lastLoginAt, loginCount) with a `logins` subcollection, `banks` and `setups` (saved items), a top-level `usage` collection (one record per quiz set-up) and an `admins` collection (a document per admin, named with the user id). Accounts must store the accepted `terms` version, and most writes should need a confirmed email.
3. Put the web config where the build can find it, **without committing it**: `private/firebase.config.json`, or the GitHub secret `FIREBASE_CONFIG_JSON`. Optional: `private/site.config.json` or the secret `SITE_CONFIG_JSON` with `{ "operatorName": "...", "contactEmail": "..." }` for the Terms.
4. Restrict the browser API key to your site's address in Google Cloud.

`private/` is ignored by git. Never upload it. The GitHub website's "upload files" button ignores `.gitignore`.

## Your data

- Participant names and points stay on the Quiz Master's device. They go to Firebase only if the Quiz Master connects their own project and sends them.
- With Firebase connected, account details, sign-in records, a count of quiz set-ups (no points, no names) and saved items are stored in the project's database; anonymous analytics go to Google Analytics for Firebase unless the user turns them off in Settings.
- Bible texts, settings, saved quizzes and the results history are stored in the browser on the device.
- Bible texts and question banks are not provided with this repository (apart from the sample). You are responsible for the licences of any Bible text or questions you load.

## Folders

`src/` source files (settings, interface text, engine, Terms, instructions) | `tools/` build scripts | `data/` sample question bank | `assets/` logo | `templates/` Excel template | `tests/` checks (`python tests/e2e_smoke.py`) | `.github/` publishing workflow | `CHANGELOG.md` release notes

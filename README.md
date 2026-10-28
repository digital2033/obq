# Oral Bible Quiz (OBQ)

**OBQ helps you lead a live Bible quiz for groups who learn by listening.** You say the question, the group answers aloud, and OBQ looks after the questions, the timer, the scores and the results. It is one web page: it can be installed on a phone, tablet or computer, works offline once installed, and is designed for projectors, presentation remotes and simple, spoken-word settings.

## Features

**Running a quiz**
- A clear, repeatable rhythm for every question: say it, show the answer, give points, next. A step guide on screen and helpful tips explain what is missing at each step.
- Timer with sound, full-screen mode for projectors, and a landscape layout that fits one screen.
- **Read aloud:** the question, options, clues and answer can be read out loud with the device's own voice, by button or automatically.
- Works with a **presentation remote** and the keyboard (see the table below).
- **Individuals** or **Groups**, with names typed once and ticked later, and points shown live.
- **Normal** style with a full mix of question kinds, or **Simple** style (regular and multiple-choice questions, 1 point each) for new Quiz Masters and children's groups.
- **OBQ Lite - Quick Quiz** for almost no setup, and a **Demo Contest** to try every kind of question.
- Question kinds: regular, multiple choice, multiple choice with **50:50**, short answer with hints, **Who am I?** (points fall with each clue), multi-part (more points), trivia and difficult.

**Your questions**
- A built-in English question bank of about 1,390 questions covering all 66 books, in every kind of question (stored encrypted in the repository).
- Your own questions from an **Excel template** (download it inside the app, fill it in, upload it).
- Questions made automatically from **Bible text** you add (USFM, USFX, USX, plain text or a zip; or download from Bible Brain with your own key), in any language, including languages that are not on the language list.

**Planning and results**
- **Saved quizzes:** keep a setup as a template, schedule it for a date, freeze the exact questions, redo a finished quiz.
- Results as **PDF** and **CSV**, kept on the Quiz Master's device, with an optional backup to the Quiz Master's own Firebase project.
- A **Home page** with the Verse of the Day and a button for every feature, an activity dashboard, and built-in instructions for Quiz Masters.
- 11 interface languages (English, Hindi, Malayalam, Odia, Tamil, Telugu, Punjabi, Bengali, Nepali, Urdu, Marathi). Missing translations fall back to English.

## Basic usage

1. **Sign in** (or create an account). With Firebase connected you can sign in with a password, reset a forgotten password by email, or use an **email sign-in link** that needs no password; new accounts confirm their email address. Without Firebase the app runs in local mode on your device.
2. On the **Home page** choose:
   - **OBQ Lite - Quick Quiz** for the fastest start, or
   - **Set up a quiz** for full control, or
   - **Demo Contest** to see how a quiz works.
3. **Set up a quiz:** enter your name, the event name, date and number of participants; choose the interface and quiz language, Individuals or Groups, the quiz style, the scope (1 book, 2 books, more than 2 books, New Testament, Old Testament, whole Bible or any topic), the number of questions (10, 20 or 30) and where the questions come from. Press **Start quiz**. Use **Save for later** to keep the setup as a template or a scheduled event.
4. **Run the quiz.** For each question: say the question, press **Show correct answer**, type the names of those who answered correctly (comma-separated) and press **Give points**, then **Next question**. If nobody answered, press **Give points** with the names box empty.
5. **Finish:** save the results as **PDF** or **CSV**, save the quiz to redo later, or start a new one.

### Keys and remote

| Action | Keyboard | Presentation remote |
|---|---|---|
| Next step (clue, show answer, give points, next question) | Space, Enter, right arrow | Next slide |
| Previous question | Left arrow | Previous slide |
| Start or pause the timer | T, `.` or B | Black screen button |
| Hint or 50:50 | H | - |
| Read the question aloud (or stop) | R | - |
| Full screen | F or F5 | Start slideshow |

### Question mix (Normal style)

A 10-question quiz follows this order and repeats for 20 and 30 questions: regular, multiple choice, multiple choice, trivia, 50:50, 50:50, short answer with hints, Who am I?, multi-part, difficult. The order can be changed in `src/cfg1.js`. If a question bank has no question of a kind, the closest kind is used.

### Your own question bank (Excel)

Download the template from the **Quiz Builder**, fill in the **Questions** sheet (see the **Examples** sheet) and upload it. Columns: Language, Book, Category (One answer, Multiple choice, Short answer with hints, Clue based, Multi-part), Level (Regular, Trivia, Difficult), Question, Option A to D, Clue 1 to 5, Correct answer, Reference, More to know, Points, Seconds, Intro. Rows with a problem are skipped and listed with their row number.

## Running it yourself

You need Python 3.10 or newer.

```
pip install openpyxl pillow
python tools/make_template.py     # the Excel template
python tools/assemble.py          # dist/index.html: the whole app in one file
python tools/build_pwa.py         # dist/obq-app/ and dist/obq-app.zip: the installable app
python -m http.server 8000 --directory dist/obq-app      # then open http://localhost:8000
```

**Question bank.** `src/cfg3_bank.js` is a small plain-text sample (198 questions, from `data/sample-question-bank.xlsx`). The full bank of about 1,390 questions is stored **encrypted** in `src/cfg3_bank.enc.json`, so it cannot be read from the repository. When the build has the key it decrypts nothing itself: it embeds the encrypted bank in the page together with the key, and the page decrypts it when it starts. Give the build the key with the environment variable `OBQ_BANK_KEY` or the file `private/bank.key`; without a key the sample bank is used. To encrypt your own bank:

```
python tools/import_bank.py YOUR-BANK.xlsx --encrypt --key-file private/bank.key
```

This keeps the questions out of the repository and out of casual view-source, but it is not unbreakable: a page that can show the questions must be able to decrypt them.

To turn on sign-in and cloud features with your own Firebase project **without putting its settings in the repository**, create a folder `private/` (it is ignored by git) and put your Firebase web config in it as `private/firebase.config.json`:

```
{ "apiKey": "...", "authDomain": "...", "projectId": "...", "storageBucket": "...", "messagingSenderId": "...", "appId": "...", "measurementId": "..." }
```

The next build uses it automatically. Without it the app works in local mode: accounts and results stay on the device.

Publishing: any static host works (upload `dist/obq-app/`). The included GitHub Action (`.github/workflows/deploy.yml`) builds and publishes the site with GitHub Pages; to include your Firebase config, add it as a repository secret named `FIREBASE_CONFIG_JSON`.

## Your data

- Participant names and points stay on the Quiz Master's device. They go to Firebase only if the Quiz Master connects their own project.
- With Firebase connected, sign-in details and a count of quiz setups (no points, no names) are stored in the project's database, protected by security rules that you write for your own project.
- Bible texts and question banks are not included. You are responsible for the licences of any Bible text or questions you load.

## Folders

`src/` source files (settings, interface text, engine) | `tools/` build scripts | `data/` question bank | `assets/` logo | `templates/` Excel template | `tests/` checks

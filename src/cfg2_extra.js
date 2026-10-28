/* extra string added to every language: hidden-clue placeholder */
QUIZ_I18N.en.clueHid = "Clue {i} is hidden";
QUIZ_I18N.hi.clueHid = "संकेत {i} छिपा है";
QUIZ_I18N.ml.clueHid = "ക്ലൂ {i} മറച്ചിരിക്കുന്നു";
QUIZ_I18N.or.clueHid = "ସୂଚନା {i} ଲୁଚାଯାଇଛି";
QUIZ_I18N.ta.clueHid = "குறிப்பு {i} மறைக்கப்பட்டுள்ளது";
QUIZ_I18N.te.clueHid = "సూచన {i} దాచబడింది";
QUIZ_I18N.pa.clueHid = "ਸੰਕੇਤ {i} ਲੁਕਿਆ ਹੈ";
QUIZ_I18N.bn.clueHid = "সূত্র {i} লুকানো আছে";
QUIZ_I18N.ne.clueHid = "सङ्केत {i} लुकेको छ";
QUIZ_I18N.ur.clueHid = "اشارہ {i} چھپا ہوا ہے";
QUIZ_I18N.mr.clueHid = "सूचना {i} लपवलेली आहे";

/* Home button label */
QUIZ_I18N.hi.home = "होम";
QUIZ_I18N.ml.home = "ഹോം";
QUIZ_I18N.or.home = "ହୋମ୍";
QUIZ_I18N.ta.home = "முகப்பு";
QUIZ_I18N.te.home = "హోమ్";
QUIZ_I18N.pa.home = "ਹੋਮ";
QUIZ_I18N.bn.home = "হোম";
QUIZ_I18N.ne.home = "गृहपृष्ठ";
QUIZ_I18N.ur.home = "ہوم";
QUIZ_I18N.mr.home = "मुख्यपृष्ठ";

/* Bible text knowledge base, "other language", question prompts made from verses */
Object.assign(QUIZ_I18N.en, {
  langOther: "Other language (type it)", langOtherLbl: "Language name", errOtherLang: "Type the name of the language.",
  srcKB: "Questions generated from my Bible text", kbQ1: "Complete the verse:", kbQ2: "Which book is this verse from?",
  errNoKb: "No Bible text for this language yet. Add it in the Quiz Builder.", kbAvail: "Bible text found for {n} book(s) in this scope.",
  kbNone: "No Bible text found for this scope and language. Add it in the Quiz Builder.", kbInfoN: "{n} Bible text(s) added", kbEmpty: "No Bible text added yet.",
  kbTitle: "Bible text knowledge base",
  kbIntro: "Add Bible text so the app can make questions from it in any language. Upload USFM, USFX, USX or plain-text files (or a zip of them), or download a fileset from Bible Brain with your API key and fileset ID. The text stays on this device.",
  kbLang: "Language of this Bible text", kbName: "Version name (optional)", kbFiles: "Upload Bible text files", kbFs: "Bible Brain fileset ID", kbKey: "Bible Brain API key",
  kbKeyNote: "The key is only used to fetch the files and is not saved.", kbDl: "Download from Bible Brain", kbBusy: "Reading files...", kbProg: "Downloading {a} of {b}...",
  kbDone: "Added {name}: {b} books, {v} verses.", kbNoBooks: "No Bible books were found in these files.", kbCount: "{b} books, {v} verses",
  kbPreview: "Preview questions", kbDelete: "Delete",
  kbBundle: "Import a Bible text bundle (.zip)", kbBundleDone: "Bundle imported: {n} Bible texts added.", kbBundleErr: "This is not a valid Bible text bundle (it needs a manifest.json).",
  kbErrNet: "The browser could not reach Bible Brain. This happens on the claude.ai link or without internet. Use the app on your own https site, or download the files with the desktop downloader (main.py) and upload them here.",
  kbErrKey: "Bible Brain refused the request (status {s}). Check the API key and the fileset ID.", kbNoIdb: "This browser could not store the Bible text (private browsing?)."
});
var KB_TR = {
  hi: ["मेरे बाइबल पाठ से बनाए गए प्रश्न", "अन्य भाषा (लिखें)", "वचन पूरा करें:", "यह वचन किस पुस्तक से है?"],
  ml: ["എന്റെ ബൈബിൾ പാഠത്തിൽ നിന്ന് തയ്യാറാക്കിയ ചോദ്യങ്ങൾ", "മറ്റൊരു ഭാഷ (ടൈപ്പ് ചെയ്യുക)", "വാക്യം പൂരിപ്പിക്കുക:", "ഈ വാക്യം ഏത് പുസ്തകത്തിലേതാണ്?"],
  or: ["ମୋ ବାଇବଲ ପାଠରୁ ତିଆରି ପ୍ରଶ୍ନ", "ଅନ୍ୟ ଭାଷା (ଲେଖନ୍ତୁ)", "ପଦ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ:", "ଏହି ପଦ କେଉଁ ପୁସ୍ତକରୁ?"],
  ta: ["என் வேதாகம உரையிலிருந்து உருவாக்கிய கேள்விகள்", "பிற மொழி (தட்டச்சு செய்யவும்)", "வசனத்தை நிறைவு செய்யவும்:", "இந்த வசனம் எந்த நூலில் உள்ளது?"],
  te: ["నా బైబిల్ పాఠం నుండి రూపొందించిన ప్రశ్నలు", "ఇతర భాష (టైప్ చేయండి)", "వచనాన్ని పూర్తి చేయండి:", "ఈ వచనం ఏ గ్రంథంలోది?"],
  pa: ["ਮੇਰੇ ਬਾਈਬਲ ਪਾਠ ਤੋਂ ਬਣਾਏ ਸਵਾਲ", "ਹੋਰ ਭਾਸ਼ਾ (ਲਿਖੋ)", "ਆਇਤ ਪੂਰੀ ਕਰੋ:", "ਇਹ ਆਇਤ ਕਿਸ ਪੁਸਤਕ ਦੀ ਹੈ?"],
  bn: ["আমার বাইবেল পাঠ থেকে তৈরি প্রশ্ন", "অন্য ভাষা (লিখুন)", "পদটি সম্পূর্ণ করুন:", "এই পদটি কোন পুস্তকের?"],
  ne: ["मेरो बाइबल पाठबाट बनाइएका प्रश्न", "अन्य भाषा (लेख्नुहोस्)", "पद पूरा गर्नुहोस्:", "यो पद कुन पुस्तकको हो?"],
  ur: ["میرے بائبل متن سے بنائے گئے سوالات", "دوسری زبان (لکھیں)", "آیت مکمل کریں:", "یہ آیت کس کتاب کی ہے؟"],
  mr: ["माझ्या बायबल मजकुरातून तयार केलेले प्रश्न", "इतर भाषा (लिहा)", "वचन पूर्ण करा:", "हे वचन कोणत्या पुस्तकातील आहे?"]
};
Object.keys(KB_TR).forEach(function (k) { var a = KB_TR[k]; QUIZ_I18N[k].srcKB = a[0]; QUIZ_I18N[k].langOther = a[1]; QUIZ_I18N[k].kbQ1 = a[2]; QUIZ_I18N[k].kbQ2 = a[3]; });

/* saving quiz results to the cloud (Firebase) */
Object.assign(QUIZ_I18N.en, {
  fSaveRes: "Send the results to my own Firebase when the quiz ends (includes participant names)",
  saveCloud: "Send results to my Firebase", resSaved: "Results sent to your Firebase.",
  resFail: "Could not send the results to your Firebase. Check the rules and Anonymous sign-in in your project, then tap the send button to try again."
});

/* saved quizzes: templates and scheduled events */
Object.assign(QUIZ_I18N.en, {
  savedTitle: "My saved quizzes", saveSetup: "Save for later", ssName: "Name for this saved quiz",
  ssTemplate: "Template: reuse it for other events (the date is not saved)", ssEvent: "Scheduled event: keep the date chosen above",
  ssFreeze: "Freeze the questions now (the same questions will be used on the day)", ssSave: "Save", ssUse: "Use", ssDelete: "Delete", ssSure: "Press again to delete",
  ssSaved: "Saved: {name}", ssLoaded: "Loaded: {name}.", ssTplBadge: "Template", ssToday: "Today", ssPast: "Past", ssFrozen: "questions frozen",
  ssQs: "{n} questions", ssUpcoming: "Coming up: {name} on {date}", ssTodayIs: "Today: {name}", ssFrozenNote: "Frozen questions will be used: {n}."
});

/* results history, CSV, the Quiz Master's own Firebase, and the admin screen */
Object.assign(QUIZ_I18N.en, {
  csvBtn: "Download results (CSV)", histTitle: "My quiz results (kept on this device)",
  histIntro: "Every finished quiz is kept here with its points list. Download it as CSV, or send it to your own Firebase. OBQ's own cloud never receives points or names.",
  histAll: "Download all results (CSV)", histEmpty: "No finished quizzes yet.", histLine: "{n} on the points list, winner: {w}, {q} questions", histSent: "sent to your Firebase",
  ownTitle: "My Firebase (for my quiz results)",
  ownIntro: "Paste or upload the firebaseConfig of your own Firebase project. Finished quizzes (event details and points list with names) are then sent to your project. OBQ's own cloud only counts that a quiz was set up. The config stays on this device.",
  ownConnect: "Connect", ownFile: "Upload config file", ownDisconnect: "Disconnect", ownNone: "Not connected.", ownOk: "Connected to project {p}.",
  ownNoAnon: "Anonymous sign-in could not be used. Enable it in your project (Authentication > Sign-in method), or change the rules below.",
  ownBad: "Could not find apiKey, projectId and appId in this text. Paste the whole firebaseConfig block.",
  ownSdkErr: "Could not load Firebase (blocked on this link, or no internet). Use the app on your own https site.",
  ownRulesNote: "In your project: create a Firestore database, enable Authentication > Sign-in method > Anonymous, and publish these rules (Firestore > Rules). Results go to the collection obq_results.",
  adminBtn: "Admin", adminTitle: "OBQ usage admin", admRefresh: "Refresh",
  admIntro: "Counts of quiz setups and Quiz Masters across the app. Points lists and participant names are not stored here.",
  admUsageCsv: "Download quiz setups (CSV)", admUsersCsv: "Download Quiz Masters (CSV)", admRecent: "Recent quiz setups (latest 50)", admUsers: "Quiz Masters (first 100)",
  admStatQM: "Quiz Masters", admStatSetups: "Quiz setups (loaded)", admStat30: "Setups in the last 30 days", admStatActive: "Active Quiz Masters (30 days)", admNoAccess: "No admin access, or the data could not be loaded."
});

Object.assign(QUIZ_I18N.en, { guideTitle: "Set up your own Firebase (optional)", ownHelp: "Step-by-step instructions", back2builder: "Back to Quiz Builder", guideCopy: "Copy the rules", guideCopied: "Copied." });

/* question kinds, tips and instructions for the Quiz Master */
Object.assign(QUIZ_I18N.en, {
  fifty: "50:50 - remove two wrong answers", lvTrivia: "Trivia", lvDifficult: "Difficult", exitFs: "Exit full screen", multiIntro: "Answer all the parts", hintLen: "{n} letters",
  tipGive0: "First press 'Show correct answer' (or Next on your remote). Then type the name(s) of who answered correctly and press Give points.",
  tipGive1: "Type the name(s) of who answered correctly (or tick names from earlier questions), then press Give points.",
  tipNext: "Next question unlocks after you show the correct answer and give points. If nobody answered correctly, press Next twice on your remote, or press Give points with no name.",
  step1: "Step 1: say the question, then show the correct answer.", step2: "Step 2: type the name(s) who answered correctly and give points. Nobody? Press Give points with no name.", step3: "Step 3: go to the next question.",
  ptsHelpWho: "Points depend on how early they answered. Tap the points for the clue they answered on: {list}.", ptsAfter: "{n} points = answered after clue {i}",
  ptsHelpParts: "Tap how many parts they answered correctly: {n} = all parts right, 1 = only one part right."
});
Object.assign(QUIZ_I18N.en, { catWord: "Short answer with hints", catMulti: "Multi-part", nextHint: "Next hint" });

/* quiz style, full screen hint, instructions page */
Object.assign(QUIZ_I18N.en, {
  styleTitle: "Quiz style", styleNormal: "Normal", styleSimple: "Simple", dStyle: "Quiz style",
  styleNormalD: "The full mix of 10 kinds of question: regular, multiple choice, 50:50, hints, Who am I, trivia, multi-part and difficult.",
  styleSimpleD: "Only regular and multiple-choice questions, 1 point each. No 50:50, no clues, no multi-part. Best for new Quiz Masters and children's groups.",
  exitFsHint: "Full screen: press Esc or click here to exit", helpBtn: "Instructions", qmGuideBtn: "Instructions for Quiz Masters", qmGuideTitle: "Instructions for Quiz Masters"
});

/* clearing the form, starting and redoing saved quizzes */
Object.assign(QUIZ_I18N.en, {
  ssStart: "Start now", ssOpen: "Open in setup", saveRedo: "Save this quiz to redo later",
  ssCleared: "The setup form was cleared. Your name is kept.", ssRedoSaved: "Saved: {name}. You can redo this quiz from My saved quizzes on the setup page."
});

/* email confirmation after sign-up */
Object.assign(QUIZ_I18N.en, {
  verifyTitle: "Confirm your email",
  verifyMsg: "We sent a confirmation link to {email}. Open that email (look in the spam or junk folder too), click the link, then come back and press the button below.",
  verifyDone: "I have confirmed my email", verifyResend: "Send the email again", verifyOut: "Use a different account",
  verifyNot: "Your email is not confirmed yet. Open the link in the email, then press the button again.",
  verifySent: "The confirmation email was sent again.", verifyWait: "Please wait a few minutes before asking for another email.", verifyFail: "Could not check your account. Please sign in again."
});

/* Bible Brain: country and language lists, text filesets */
Object.assign(QUIZ_I18N.en, {
  bbTitle: "Bible Brain (optional)",
  bbIntro: "Enter your Bible Brain API key, load the lists, then choose a country and a language. The text filesets Bible Brain offers for that language appear below: press Download to add one to your knowledge base.",
  bbLoad: "Load countries and languages", bbCountry: "Country", bbLangL: "Language", bbPickCountry: "Choose a country", bbPickLang: "Choose a language",
  bbLoading: "Loading from Bible Brain...", bbCountries: "{n} countries loaded.", bbLangsN: "{n} languages in this country.", bbNoLangs: "Bible Brain lists no languages for this country.",
  bbNone: "No text filesets were found for this language. Try another language, or enter a fileset ID below.", bbFound: "{n} text filesets found for {lang}.",
  bbColBible: "Bible", bbColType: "Type", bbColSize: "Contents", bbColId: "Fileset ID", bbDl: "Download",
  bbSizeC: "Whole Bible", bbSizeNT: "New Testament", bbSizeOT: "Old Testament", bbSizeP: "Partial",
  bbManual: "Or type a fileset ID yourself.", bbKeyNeeded: "Enter your Bible Brain API key first.", bbHttp: "Bible Brain answered with status {s}. Check the API key.",
  bbOther: "Other"
});
Object.assign(QUIZ_I18N.en, { kbNoFiles: "Bible Brain offered no downloadable files for this fileset (some text filesets can only be read online). Try another fileset, for example a USX or USFM one." });

/* Home page, Verse of the Day, OBQ Lite, new scope wording */
Object.assign(QUIZ_I18N.en, {
  homeWelcome: "Welcome, {name}",
  homeAbout: "Oral Bible Quiz (OBQ) helps you lead a live Bible quiz for groups who learn by listening. You say the question, the group answers aloud, and OBQ looks after the questions, the timer, the scores and the results.",
  homeA1: "Questions: the built-in English bank, your own Excel bank, or questions made from Bible text in your language.",
  homeA2: "Easy to run: a step guide on screen, presentation-remote keys and full screen for a projector.",
  homeA3: "Results: PDF and CSV, kept on your device, with an optional backup to your own Firebase.",
  homeNew: "New here? Try the Demo Contest, or start a quick quiz with OBQ Lite.",
  votdTitle: "Verse of the Day", votdNext: "Show another verse",
  hSetup: "Set up a quiz", hSetupD: "Choose the language, books, style and questions for your event.",
  hLite: "OBQ Lite - Quick Quiz", hLiteD: "Almost no setup: pick a language and the part of the Bible, then start in Simple style.",
  hDemo: "Demo Contest", hDemoD: "Try a ready-made 10-question quiz with every kind of question.",
  hSaved: "My saved quizzes", hSavedD: "Redo a saved quiz or start from a template.",
  hBuilder: "Quiz Builder", hBuilderD: "All your tools in one place.",
  hBank: "Question Bank", hBankD: "Download the Excel template and upload your own questions.",
  hKb: "Bible Text Knowledge Base", hKbD: "Add Bible text (USFM, USX or Bible Brain) and make questions from it.",
  hResults: "Quiz Results", hResultsD: "Download or send the results of finished quizzes.",
  hActivity: "Activity Dashboard", hActivityD: "See how many quizzes and questions you have run.",
  hOwn: "My Firebase Backup", hOwnD: "Optional: send your results to your own Firebase.",
  hHelp: "Quiz Master Instructions", hHelpD: "Step-by-step help for preparing and running a quiz.",
  hAdmin: "Admin: usage", hAdminD: "Quiz setups and Quiz Masters across the app.",
  liteTitle: "OBQ Lite - Quick Quiz", liteIntro: "Simple style: regular and multiple-choice questions, 1 point each. No clues, no 50:50, no multi-part. Choose and start.",
  liteName: "Quiz name (optional)", liteDefaultName: "Quick Quiz", liteScopeL: "Part of the Bible", liteOneBook: "or one book",
  liteNone: "There are no questions in this language yet. Choose English, or add Bible text or a question bank in the Quiz Builder.",
  aFinished: "Finished quizzes", aPeople: "Names on points lists", scMore2: "More than 2 books"
});
var MORE2 = { hi: "2 से अधिक पुस्तकें", ml: "2-ൽ കൂടുതൽ പുസ്തകങ്ങൾ", or: "2ରୁ ଅଧିକ ପୁସ୍ତକ", ta: "2-க்கும் மேற்பட்ட நூல்கள்", te: "2 కంటే ఎక్కువ గ్రంథాలు", pa: "2 ਤੋਂ ਵੱਧ ਪੁਸਤਕਾਂ", bn: "2টির বেশি পুস্তক", ne: "2 भन्दा बढी पुस्तक", ur: "2 سے زیادہ کتابیں", mr: "2 पेक्षा जास्त पुस्तके" };
Object.keys(MORE2).forEach(function (k) { QUIZ_I18N[k].scMore2 = MORE2[k]; });
QUIZ_I18N.en.styleNormalD = "The full mix of various kinds of question: regular, multiple choice, 50:50, hints, Who am I, trivia, multi-part and difficult.";

Object.assign(QUIZ_I18N.en, {
  bbFoundN: "{all} text filesets found for {lang}. {shown} shown (USX or plain-text format).", bbOthers: "Not shown: {list}.",
  bbNoneShown: "{all} text filesets were found for {lang}, but none is in USX or plain-text format. Types found: {list}."
});

/* read aloud */
Object.assign(QUIZ_I18N.en, {
  fRead: "Read each question aloud automatically (uses a voice for the quiz language on this device)",
  readAloud: "Read aloud", stopReading: "Stop reading",
  noVoice: "No voice for {lang} was found on this device, so the question may not be read correctly. Install a voice in the device's text-to-speech settings, or read the questions yourself."
});

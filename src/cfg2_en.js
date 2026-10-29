/* =====================================================================
   2. INTERFACE TEXT  -  every word shown on screen, per language.
      English is the master list. If a key is missing in another language,
      the English text is shown instead, so you can translate step by step.
      Placeholders such as {n}, {name}, {event}, {date} are filled in by the app.
   ===================================================================== */
var QUIZ_I18N = {};
QUIZ_I18N.en = {
  home: "Home", homeConfirm: "Press Home again to leave this quiz.", dashTitle: "OBQ Quiz Builder", dashBtn: "Quiz Builder",
  /* sign in / sign up */
  skipLogin: "Skip login (testing only)", tabIn: "Sign in", tabUp: "Sign up", email: "Email", pass: "Password", fullName: "Full name", org: "Organisation", country: "Country / region",
  usage: "Main use of this quiz", use1: "Church or ministry", use2: "School or college", use3: "Community or youth group", use4: "Workplace or other",
  consent: "I agree to share anonymous usage statistics to improve this tool.",
  btnIn: "Sign in", btnUp: "Create account", forgot: "Forgot password?", resetSent: "Password reset email sent. Please check your inbox.",
  localNote: "Local mode: accounts are stored on this device only.",
  errFill: "Please fill in all fields.", errEmail: "Enter a valid email address.", errPass: "Password must have at least 6 characters.",
  errCreds: "Email or password is incorrect.", errExists: "An account with this email already exists.", errNet: "Could not connect. Please try again.", signOut: "Sign out",
  /* setup page */
  setupTitle: "Set up your quiz", qmName: "Quiz Master name", eventName: "Event / quiz name", eventHelp: "Name of the event, or the organisation where it is held",
  eventDate: "Date of event", parts: "No. of participants", uiLang: "Interface language", quizLang: "Quiz language",
  mode: "Quiz mode", mGroup: "Groups", mGroupD: "Groups compete. Enter the name of the group that answered correctly.",
  mInd: "Individuals", mIndD: "Each person competes alone. Enter the name of the person who answered correctly.",
  scope: "Scope of the quiz", scopeHow: "How many books?", sc1: "1 book", sc2: "2 books", sc3: "3 books", scMore: "More than 3 books",
  scNT: "All New Testament books", scOT: "All Old Testament books", scBible: "Full Bible", scAny: "Any topic (no book filter)",
  ot: "Old Testament", nt: "New Testament", pickExact: "Select exactly {n} - {a} selected", pickMin: "Select at least {n} - {a} selected",
  scopeAuto: "All books in this scope are included.",
  numQ: "No. of questions", source: "Question source", srcRandom: "Random questions from the selected books (built-in)", srcBank: "Questions from my question bank",
  noBank: "No bank uploaded yet. Open the Quiz Builder to upload one.",
  avail: "Questions available for this scope: {n}.", availShort: "Only {n} question(s) available. Press Start again to continue with {n}.",
  availNone: "No questions match. Choose other books or another language, or upload your own bank.",
  builtinEn: "Built-in questions are in English only. Choose English as the quiz language, or upload your own bank.",
  begin: "Start quiz", trySample: "Try the 5-question sample quiz",
  errQM: "Enter the Quiz Master name.", errEvent: "Enter the event name.", errParts: "Enter the number of participants (1 or more).", errScope: "Choose the scope of the quiz.",
  keysHelp: "Remote or keyboard:  Next = PageDown, right arrow, Space  |  Back = PageUp, left arrow  |  T or . = timer  |  H = clue  |  N = names  |  F = full screen",
  /* dashboard */
  dash: "Dashboard", back: "Back to setup", bankTitle: "Question bank", bankIntro: "Create your questions in the Excel template, then upload the file here.",
  dlTpl: "Download Excel template", upload: "Upload question bank", addMode: "Add to my existing bank (otherwise replace it)", clearBank: "Delete my bank",
  confirmClear: "Delete all questions in your bank?", bankN: "Questions in your bank: {n}", bankEmpty: "Your bank is empty.",
  upOk: "Questions loaded: {n}.", upSkip: "{n} rows skipped:", upErr: "This file could not be read. Please use the template.", upNone: "No valid questions were found.",
  preview: "Preview (first 10)", catOne: "One answer", catMC: "Multiple choice", catClue: "Clue based", catVid: "Video based",
  activity: "Your activity on this device", aQuizzes: "Quizzes run", aQs: "Questions asked", aPdf: "PDFs saved",
  fbOn: "Analytics: connected to Firebase", fbOff: "Analytics: local only (add your Firebase settings to connect)",
  remoteTitle: "Test your presentation remote", remoteHelp: "Press any button on your remote or keyboard.", remoteKey: "Detected: {k}  =  {f}",
  rNext: "Next", rBack: "Back", rTimer: "Timer", rFs: "Full screen", rNone: "not assigned",
  /* quiz screen */
  qOf: "Question {a}/{b}", ptsNow: "{n} points now", ptsUpTo: "Up to {n} points", ptsN: "{n} points", timeUp: "Time up!", whoAmI: "Who am I?",
  whoIntro: "Anyone who answers an earlier clue cannot answer later clues.", nextClue: "Next clue", showClue: "Show clue", clueLbl: "Clue:", clueW: "Clue",
  dropOne: "Remove one option", showQ: "Show questions", showAns: "Show correct answer", correct: "Correct answer", more: "More to know",
  givenBy: "Correct answer given by:", namePh: "Enter name", givePts: "Give points", noneYet: "No one added yet. Type a name and press Enter.",
  earlier: "Earlier correct answers", ptsLbl: "Points:", removeX: "Remove {name}", liveTitle: "Points - {who}", grp: "Groups", ppl: "Individuals",
  noPts: "No points yet.", moreN: "+ {n} more", prevQ: "Previous question", nextQ: "Next question", finish: "Finish", sndOn: "Sound on", sndOff: "Sound off",
  fs: "Full screen", tStart: "START", tPause: "PAUSE", tResume: "RESUME", tReset: "RESET",
  fShow: "Show the answer first.", fGive: "Give points first.", fType: "Type a name first.", fNobody: "Recorded that nobody answered.",
  fAlready: "Already added: {names}", fConfirm: "Press Next again to record that nobody answered.", fBack2: "Press Back again to return to the previous question.",
  watch: "Watch the video", openYT: "Open on YouTube", vidIntro: "Watch the video carefully.", vidQs: "Questions from the video",
  capParts: "Number of correct answers = points",
  ac1: "It is linked to the book of {b}.", ac2: "The answer has {n} word(s).", ac3: "It starts with “{c}”.", ac4: "Find it in {r}.",
  /* final screen and PDF */
  endDone: "{event} - {date}: the quiz is complete!", endWin: "{event} - {date}: winner -", noWin: "No one scored.", ptsW: "{n} points",
  newQuiz: "New quiz", savePdf: "Save results as PDF", pdfMaking: "Preparing PDF...", pdfSaved: "PDF saved.", pdfFail: "Could not create the PDF. Please try again.",
  closing: "Thank you for taking part!",
  pdfTitle: "Quiz Results", rank: "Rank", nameC: "Name", grpC: "Group", ptsC: "Points", winL: "Winner:", winsL: "Winners:", page: "Page {a} / {b}",
  dQM: "Quiz Master", dEmail: "Login email", dOrg: "Organisation", dEvent: "Event", dDate: "Date", dParts: "Participants", dQLang: "Quiz language",
  dScope: "Scope", dNumQ: "Questions", dMode: "Quiz mode", dSource: "Question source", srcSample: "Sample quiz"
};

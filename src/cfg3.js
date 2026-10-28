/* =====================================================================
   3. QUESTIONS
   3a. ROUNDS_SAMPLE - the 10-question sample quiz, one of each kind, in the order of the question mix
       (settings: blueprint). Used by "Try the sample quiz".
       Keys: type "quick" | "who", secs, pts, q, intro, options + correct (index), fifty:true (50:50 button: removes two wrong options),
       hintStages (hint chips shown one step at a time; a "~" in front strikes an option out), hintNext, a, ref, why,
       info (text or list), level "trivia" | "difficult", clues + maxPts (who-am-I), parts [{q, a}] + pointChoices (multi-part).
   ===================================================================== */
var ROUNDS_SAMPLE = [
  /* 1. regular: one answer, no options, no clues */
  { type: "quick", pts: 1, secs: 30, q: "Who built the ark?", a: "Noah", ref: "Genesis 6:14-22", why: "",
    info: "God told Noah to build an ark to save his family and the animals from the flood (Genesis 6:14-22)." },

  /* 2-3. multiple choice, 4 options, one answer, no clues */
  { type: "quick", pts: 1, secs: 30, q: "What was the first miracle Jesus performed?",
    options: ["Healing a blind man", "Turning water into wine", "Walking on water", "Feeding the five thousand"], correct: 1,
    a: "Turning water into wine at Cana", ref: "John 2:1-11", why: "", info: "Six stone water jars were filled, and the water became wine (John 2:6-11)." },
  { type: "quick", pts: 1, secs: 30, q: "Who was the first king of Israel?",
    options: ["David", "Solomon", "Saul", "Samuel"], correct: 2, a: "Saul", ref: "1 Samuel 10:1", why: "", info: "Samuel anointed Saul as king (1 Samuel 10)." },

  /* 4. trivia */
  { type: "quick", pts: 1, secs: 30, level: "trivia", q: "Which animal spoke to Balaam?", a: "His donkey", ref: "Numbers 22:28", why: "",
    info: "The LORD opened the donkey's mouth to speak to Balaam (Numbers 22:28)." },

  /* 5-6. multiple choice with a 50:50 clue (the host presses the button and two wrong options disappear) */
  { type: "quick", pts: 1, secs: 30, fifty: true, q: "Which river did Israel cross to enter the Promised Land?",
    options: ["The Nile", "The Jordan", "The Euphrates", "The Tigris"], correct: 1, a: "The Jordan", ref: "Joshua 3", why: "" },
  { type: "quick", pts: 1, secs: 30, fifty: true, q: "On which day of creation did God make the sun, moon and stars?",
    options: ["The second day", "The third day", "The fourth day", "The sixth day"], correct: 2, a: "The fourth day", ref: "Genesis 1:14-19", why: "" },

  /* 7. short answer with hints (press the clue button to show the next hint) */
  { type: "quick", pts: 1, secs: 30, q: "How old was King Josiah when he began to reign over Judah?",
    hintStages: [["Under 20", "Over 70"], ["Under 20", "~Over 70"]], hintNext: "Next hint",
    a: "Eight years old", ref: "2 Kings 22:1", why: "",
    info: "Josiah became king at eight. When the Book of the Law was found in the temple, he renewed the covenant (2 Kings 22-23)." },

  /* 8. who am I (clue by clue: 5 points after the first clue, 4 after the second, and so on) */
  { type: "who", secs: 30, maxPts: 5,
    clues: ["I was not born an Israelite.", "I lost my husband while living in Moab.", "I told my mother-in-law, 'Your people will be my people, and your God my God.'",
            "I gathered grain in the field of a relative named Boaz.", "I became the great-grandmother of King David."],
    a: "Ruth", ref: "Ruth 1-4", why: "", info: "Ruth the Moabite stayed with Naomi, married Boaz, and became an ancestor of David and of Jesus (Ruth 4:13-22)." },

  /* 9. multi-part: all parts are shown together; points = number of parts answered correctly (2 parts: up to 2 points) */
  { type: "quick", pts: 1, secs: 45, q: "Noah and the ark: answer both parts",
    pointChoices: [2, 1], parts: [
      { q: "How many days and nights did the rain fall?", a: "Forty days and forty nights" },
      { q: "Which bird came back to Noah with an olive leaf?", a: "A dove" }],
    ref: "Genesis 7:12; 8:11", why: "", info: "" },

  /* 10. difficult */
  { type: "quick", pts: 1, secs: 30, level: "difficult", q: "Who was the father of Abraham?", a: "Terah", ref: "Genesis 11:26", why: "",
    info: "Terah took his family from Ur of the Chaldeans toward Canaan, but settled in Haran (Genesis 11:31)." }
];

const allQuizQuestions = window.quizQuestions ?? [];

const EXAM_THEME_COUNT = 8;
const QUIZ_TIME_LIMIT = 45 * 60;
const EXAM_TOTAL = 40;
const EXAM_PASS = 32;

function getQuestionsForLevel(level) {
  return allQuizQuestions.filter((question) => question.level === level && isConfigured(question));
}

const state = {
  level: "CSP",
  allQuestions: getQuestionsForLevel("CSP"),
  activeQuestions: [],
  currentIndex: 0,
  selections: new Map(),
  evaluations: new Map(),
  quizMode: "exam",
  timerId: null,
  remainingSeconds: QUIZ_TIME_LIMIT,
  started: false,
  finished: false,
};

const elements = {
  totalQuestions: document.getElementById("total-questions"),
  totalCategories: document.getElementById("total-categories"),
  readyQuestions: document.getElementById("ready-questions"),
  categoryList: document.getElementById("category-list"),
  datasetStatus: document.getElementById("dataset-status"),
  progressLabel: document.getElementById("progress-label"),
  progressBar: document.getElementById("progress-bar"),
  headerTimer: document.getElementById("header-timer"),
  questionPanel: document.getElementById("question-panel"),
  introPanel: document.getElementById("intro-panel"),
  resultsPanel: document.getElementById("results-panel"),
  questionCategory: document.getElementById("question-category"),
  questionTitle: document.getElementById("question-title"),
  questionIndex: document.getElementById("question-index"),
  questionMode: document.getElementById("question-mode"),
  questionForm: document.getElementById("question-form"),
  feedback: document.getElementById("question-feedback"),
  scoreLabel: document.getElementById("score-label"),
  configuredLabel: document.getElementById("configured-label"),
  savedLabel: document.getElementById("saved-label"),
  submitButton: document.getElementById("submit-answer"),
  skipButton: document.getElementById("skip-question"),
  restartButton: document.getElementById("start-over"),
  startQuizButton: document.getElementById("start-quiz"),
  levelPicker: document.getElementById("level-picker"),
  modePicker: document.getElementById("mode-picker"),
  passTarget: document.getElementById("pass-target"),
  resultsTitle: document.getElementById("results-title"),
  resultsStatus: document.getElementById("results-status"),
  resultsScore: document.getElementById("results-score"),
  resultsScoreLarge: document.getElementById("results-score-large"),
  resultsTarget: document.getElementById("results-target"),
  resultsMissed: document.getElementById("results-missed"),
  resultsSummary: document.getElementById("results-summary"),
  mistakesList: document.getElementById("mistakes-list"),
};

const letters = ["A", "B", "C", "D"];

function isConfigured(question) {
  return (
    Array.isArray(question.correctAnswers) &&
    question.correctAnswers.length > 0 &&
    Array.isArray(question.choices) &&
    question.choices.length === 4 &&
    !question.choices.some((choice) => choice.includes("à compléter"))
  );
}

function getCategories(questions = state.activeQuestions.length > 0 ? state.activeQuestions : state.allQuestions) {
  const counts = new Map();

  questions.forEach((question) => {
    counts.set(question.category, (counts.get(question.category) ?? 0) + 1);
  });

  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}

function getQuestion(index) {
  return state.activeQuestions[index];
}

function getSelections(questionId) {
  return state.selections.get(questionId) ?? [];
}

function setSelections(questionId, values) {
  state.selections.set(questionId, values);
}

function arraysEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  return left.every((value, index) => value === right[index]);
}

function shuffleArray(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function selectQuestionsByMode(mode) {
  if (mode === "all") {
    return shuffleArray(state.allQuestions);
  }

  const grouped = new Map();

  state.allQuestions.forEach((question) => {
    const bucket = grouped.get(question.category) ?? [];
    bucket.push(question);
    grouped.set(question.category, bucket);
  });

  return shuffleArray(
    [...grouped.entries()].flatMap(([, questions]) =>
      shuffleArray(questions).slice(0, EXAM_THEME_COUNT)
    )
  );
}

function getPassThreshold(total) {
  return total === EXAM_TOTAL ? EXAM_PASS : Math.ceil(total * 0.8);
}

function computeScore() {
  const correct = state.activeQuestions.filter((question) => {
    const evaluation = state.evaluations.get(question.id);
    return evaluation?.isCorrect;
  });

  return {
    correct: correct.length,
    total: state.activeQuestions.length,
  };
}

function updateHeaderStats() {
  const categories = getCategories();
  const configuredCount = state.allQuestions.length;
  const answeredCount = state.evaluations.size;
  const score = computeScore();
  const total = state.activeQuestions.length || (state.quizMode === "exam" ? EXAM_TOTAL : state.allQuestions.length);

  elements.totalQuestions.textContent = String(total);
  elements.totalCategories.textContent = String(categories.length);
  elements.readyQuestions.textContent = String(configuredCount);
  elements.configuredLabel.textContent = String(configuredCount);
  elements.savedLabel.textContent = String(answeredCount);
  elements.scoreLabel.textContent = `${score.correct} / ${score.total}`;
  elements.progressLabel.textContent =
    state.finished
      ? `${state.activeQuestions.length} / ${state.activeQuestions.length}`
      : state.started
        ? `${state.currentIndex + 1} / ${state.activeQuestions.length}`
        : `0 / ${total}`;
  elements.progressBar.style.width =
    state.finished
      ? "100%"
      : state.started && state.activeQuestions.length > 0
        ? `${((state.currentIndex + 1) / state.activeQuestions.length) * 100}%`
      : "0%";
  elements.datasetStatus.textContent = `${configuredCount} question(s) sont prêtes pour le niveau ${state.level}. Le mode examen prend par défaut 8 questions par thème, soit 40 au total.`;
  elements.passTarget.textContent =
    state.quizMode === "exam"
      ? `Objectif ${EXAM_PASS} / ${EXAM_TOTAL}`
      : `Objectif ${getPassThreshold(total)} / ${total}`;
}

function renderCategoryList() {
  const categories = getCategories();

  elements.categoryList.innerHTML = "";

  categories.forEach((category) => {
    const badge = document.createElement("div");
    badge.className = "category-button";
    if (getQuestion(state.currentIndex)?.category === category.name && state.started && !state.finished) {
      badge.classList.add("is-active");
    }

    badge.innerHTML = `<span>${category.name}</span><strong>${category.count}</strong>`;
    elements.categoryList.appendChild(badge);
  });
}

function startTimer() {
  clearTimer();
  state.remainingSeconds = QUIZ_TIME_LIMIT;
  updateTimerBadge();
  state.timerId = window.setInterval(() => {
    state.remainingSeconds -= 1;
    updateTimerBadge();
    if (state.remainingSeconds <= 0) {
      finishQuiz("timeout");
    }
  }, 1000);
}

function clearTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimerBadge() {
  const minutes = String(Math.floor(state.remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(state.remainingSeconds % 60).padStart(2, "0");
  elements.headerTimer.textContent = `${minutes}:${seconds}`;
}

function getCorrectAnswersText(question) {
  return question.correctAnswers
    .map((index) => `${letters[index]} - ${question.choices[index]}`)
    .join(" | ");
}

function renderQuestion() {
  const question = getQuestion(state.currentIndex);
  if (!question) {
    return;
  }
  const selected = getSelections(question.id);

  elements.questionCategory.textContent = question.category;
  elements.questionTitle.textContent = question.prompt;
  elements.questionIndex.textContent = `Question ${state.currentIndex + 1}`;
  elements.questionMode.textContent =
    question.correctAnswers.length > 1 ? "Plusieurs réponses possibles" : "Une seule ou plusieurs réponses";
  elements.questionForm.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const marker = document.createElement("span");
    const text = document.createElement("span");
    const isSelected = selected.includes(index);

    label.className = "answer-option";
    input.type = "checkbox";
    input.name = question.id;
    input.value = String(index);
    input.checked = isSelected;
    marker.className = "answer-letter";
    marker.textContent = letters[index] ?? String(index + 1);
    text.className = "answer-text";
    text.textContent = choice;

    input.addEventListener("change", () => {
      const nextSelection = [...elements.questionForm.querySelectorAll("input:checked")]
        .map((node) => Number(node.value))
        .sort((a, b) => a - b);

      setSelections(question.id, nextSelection);
      updateHeaderStats();
    });

    label.append(input, marker, text);
    elements.questionForm.appendChild(label);
  });

  elements.feedback.hidden = true;
  elements.feedback.classList.remove("is-warning");

  updateTimerBadge();
}

function showResults() {
  const score = computeScore();
  const target = getPassThreshold(score.total);
  const passed = score.correct >= target;
  const wrongQuestions = state.activeQuestions.filter((question) => {
    const evaluation = state.evaluations.get(question.id);
    return !evaluation || !evaluation.isCorrect;
  });

  elements.introPanel.hidden = true;
  elements.questionPanel.hidden = true;
  elements.resultsPanel.hidden = false;
  document.body.classList.remove("quiz-running");
  elements.resultsStatus.textContent = passed ? "Réussi" : "Raté";
  elements.resultsStatus.classList.toggle("badge-success", passed);
  elements.resultsStatus.classList.toggle("badge-danger", !passed);
  elements.resultsScore.textContent = `${score.correct} / ${score.total}`;
  elements.resultsScoreLarge.textContent = `${score.correct} / ${score.total}`;
  elements.resultsTarget.textContent = `${target}`;
  elements.resultsMissed.textContent = `${wrongQuestions.length}`;
  elements.resultsSummary.textContent = passed
    ? `Résultat validé. Tu as obtenu ${score.correct} bonnes réponses sur ${score.total}.`
    : `Résultat insuffisant. Il faut au moins ${target} bonnes réponses sur ${score.total}.`;

  elements.mistakesList.innerHTML = "";

  if (wrongQuestions.length === 0) {
    const item = document.createElement("div");
    item.className = "mistake-item";
    item.innerHTML = "<strong>Aucune erreur</strong><p>Toutes les réponses sont correctes.</p>";
    elements.mistakesList.appendChild(item);
    return;
  }

  wrongQuestions.forEach((question) => {
    const evaluation = state.evaluations.get(question.id);
    const userAnswer =
      evaluation.selected.length > 0
        ? evaluation.selected.map((index) => `${letters[index]} - ${question.choices[index]}`).join(" | ")
        : "Aucune réponse";
    const item = document.createElement("div");
    item.className = "mistake-item";
    item.innerHTML = `
      <strong>${question.prompt}</strong>
      <p><span>Ta réponse :</span> ${userAnswer}</p>
      <p><span>Bonne réponse :</span> ${getCorrectAnswersText(question)}</p>
      <p><span>Explication :</span> ${question.explanation}</p>
    `;
    elements.mistakesList.appendChild(item);
  });
}

function finishQuiz() {
  clearTimer();
  state.activeQuestions.forEach((question) => {
    if (!state.evaluations.has(question.id)) {
      state.evaluations.set(question.id, {
        selected: [],
        expected: [...question.correctAnswers].sort((a, b) => a - b),
        isCorrect: false,
        reason: "timeout",
      });
    }
  });
  state.finished = true;
  updateHeaderStats();
  showResults();
}

function finalizeQuestion(reason = "submit") {
  if (state.finished || !state.started) {
    return;
  }

  const question = getQuestion(state.currentIndex);
  const selected = [...getSelections(question.id)].sort((a, b) => a - b);
  const expected = [...question.correctAnswers].sort((a, b) => a - b);
  const isCorrect = reason !== "timeout" && arraysEqual(selected, expected);

  state.evaluations.set(question.id, {
    selected,
    expected,
    isCorrect,
    reason,
  });

  if (state.currentIndex >= state.activeQuestions.length - 1) {
    finishQuiz();
    return;
  }

  state.currentIndex += 1;
  updateHeaderStats();
  renderQuestion();
}

function startQuiz() {
  clearTimer();
  state.level =
    elements.levelPicker.querySelector('input[name="quiz-level"]:checked')?.value ?? "CSP";
  state.quizMode =
    elements.modePicker.querySelector('input[name="quiz-mode"]:checked')?.value ?? "exam";
  state.allQuestions = getQuestionsForLevel(state.level);
  state.activeQuestions = selectQuestionsByMode(state.quizMode);
  state.currentIndex = 0;
  state.selections.clear();
  state.evaluations.clear();
  state.started = true;
  state.finished = false;
  elements.introPanel.hidden = true;
  elements.resultsPanel.hidden = true;
  elements.questionPanel.hidden = false;
  document.body.classList.add("quiz-running");
  renderCategoryList();
  updateHeaderStats();
  renderQuestion();
  startTimer();
}

function resetToIntro() {
  clearTimer();
  state.level =
    elements.levelPicker.querySelector('input[name="quiz-level"]:checked')?.value ?? "CSP";
  state.allQuestions = getQuestionsForLevel(state.level);
  state.activeQuestions = [];
  state.currentIndex = 0;
  state.selections.clear();
  state.evaluations.clear();
  state.remainingSeconds = QUIZ_TIME_LIMIT;
  state.started = false;
  state.finished = false;
  elements.questionPanel.hidden = true;
  elements.resultsPanel.hidden = true;
  elements.introPanel.hidden = false;
  document.body.classList.remove("quiz-running");
  updateTimerBadge();
  renderCategoryList();
  updateHeaderStats();
}

function renderIntro() {
  renderCategoryList();
  updateHeaderStats();
}

elements.submitButton.addEventListener("click", () => {
  finalizeQuestion("submit");
});

elements.skipButton.addEventListener("click", () => {
  finalizeQuestion("skip");
});

elements.restartButton.addEventListener("click", () => {
  resetToIntro();
});

elements.startQuizButton.addEventListener("click", () => {
  startQuiz();
});

elements.modePicker.addEventListener("change", () => {
  state.quizMode =
    elements.modePicker.querySelector('input[name="quiz-mode"]:checked')?.value ?? "exam";
  renderIntro();
});

elements.levelPicker.addEventListener("change", () => {
  resetToIntro();
});

resetToIntro();

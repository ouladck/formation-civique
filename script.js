const quizQuestions = window.quizQuestions ?? [];

const state = {
  currentIndex: 0,
  selections: new Map(),
  checkedQuestions: new Set(),
};

const elements = {
  totalQuestions: document.getElementById("total-questions"),
  totalCategories: document.getElementById("total-categories"),
  readyQuestions: document.getElementById("ready-questions"),
  categoryList: document.getElementById("category-list"),
  datasetStatus: document.getElementById("dataset-status"),
  progressLabel: document.getElementById("progress-label"),
  progressBar: document.getElementById("progress-bar"),
  answeredCount: document.getElementById("answered-count"),
  questionCategory: document.getElementById("question-category"),
  questionTitle: document.getElementById("question-title"),
  questionIndex: document.getElementById("question-index"),
  questionMode: document.getElementById("question-mode"),
  questionForm: document.getElementById("question-form"),
  feedback: document.getElementById("question-feedback"),
  scoreLabel: document.getElementById("score-label"),
  configuredLabel: document.getElementById("configured-label"),
  savedLabel: document.getElementById("saved-label"),
  prevButton: document.getElementById("prev-question"),
  nextButton: document.getElementById("next-question"),
  checkButton: document.getElementById("check-answer"),
  restartButton: document.getElementById("start-over"),
  jumpButton: document.getElementById("jump-first-incomplete"),
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

function getCategories() {
  const counts = new Map();

  quizQuestions.forEach((question) => {
    counts.set(question.category, (counts.get(question.category) ?? 0) + 1);
  });

  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}

function getQuestion(index) {
  return quizQuestions[index];
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

function computeScore() {
  const configuredQuestions = quizQuestions.filter(isConfigured);
  const correct = configuredQuestions.filter((question) => {
    const selected = [...getSelections(question.id)].sort((a, b) => a - b);
    const expected = [...question.correctAnswers].sort((a, b) => a - b);

    return arraysEqual(selected, expected);
  });

  return {
    correct: correct.length,
    total: configuredQuestions.length,
  };
}

function updateHeaderStats() {
  const categories = getCategories();
  const configuredCount = quizQuestions.filter(isConfigured).length;
  const answeredCount = [...state.selections.values()].filter((value) => value.length > 0).length;
  const score = computeScore();

  elements.totalQuestions.textContent = String(quizQuestions.length);
  elements.totalCategories.textContent = String(categories.length);
  elements.readyQuestions.textContent = String(configuredCount);
  elements.configuredLabel.textContent = String(configuredCount);
  elements.answeredCount.textContent = String(answeredCount);
  elements.savedLabel.textContent = String(answeredCount);
  elements.scoreLabel.textContent = `${score.correct} / ${score.total}`;
  elements.progressLabel.textContent = `${state.currentIndex + 1} / ${quizQuestions.length}`;
  elements.progressBar.style.width = `${((state.currentIndex + 1) / quizQuestions.length) * 100}%`;
  elements.datasetStatus.textContent =
    configuredCount === quizQuestions.length
      ? "Toutes les questions sont configurées avec réponses et correction."
      : `${configuredCount} question(s) prête(s) à corriger sur ${quizQuestions.length}. Modifie les fichiers dans data/themes/ et data/overrides/ pour compléter les placeholders et définir correctAnswers.`;
}

function renderCategoryList() {
  const categories = getCategories();

  elements.categoryList.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    const firstIndex = quizQuestions.findIndex((question) => question.category === category.name);

    button.type = "button";
    button.className = "category-button";
    if (getQuestion(state.currentIndex)?.category === category.name) {
      button.classList.add("is-active");
    }

    button.innerHTML = `<span>${category.name}</span><strong>${category.count}</strong>`;
    button.addEventListener("click", () => {
      state.currentIndex = firstIndex;
      render();
    });

    elements.categoryList.appendChild(button);
  });
}

function renderQuestion() {
  const question = getQuestion(state.currentIndex);
  const selected = getSelections(question.id);
  const configured = isConfigured(question);
  const hasChecked = state.checkedQuestions.has(question.id);

  elements.questionCategory.textContent = question.category;
  elements.questionTitle.textContent = question.prompt;
  elements.questionIndex.textContent = `Question ${state.currentIndex + 1}`;
  elements.questionMode.textContent = configured ? "Correction active" : "À compléter";
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

    if (hasChecked && configured) {
      const isCorrect = question.correctAnswers.includes(index);
      const isWrongSelection = isSelected && !isCorrect;
      if (isCorrect) {
        label.classList.add("is-correct");
      } else if (isWrongSelection) {
        label.classList.add("is-wrong");
      }
    }

    label.append(input, marker, text);
    elements.questionForm.appendChild(label);
  });

  elements.feedback.hidden = true;
  elements.feedback.classList.remove("is-warning");

  if (hasChecked) {
    showFeedback(question);
  }

  elements.prevButton.disabled = state.currentIndex === 0;
  elements.nextButton.disabled = state.currentIndex === quizQuestions.length - 1;
}

function showFeedback(question) {
  const configured = isConfigured(question);
  const selected = [...getSelections(question.id)].sort((a, b) => a - b);

  elements.feedback.hidden = false;

  if (!configured) {
    elements.feedback.classList.add("is-warning");
    elements.feedback.textContent =
      "Cette question est bien intégrée dans l’interface, mais ses 4 propositions et ses bonnes réponses restent à compléter dans data/overrides/.";
    return;
  }

  const expected = [...question.correctAnswers].sort((a, b) => a - b);
  const success = arraysEqual(selected, expected);
  elements.feedback.classList.toggle("is-warning", !success);
  elements.feedback.textContent = success
    ? question.explanation || "Bonne réponse."
    : question.explanation || "Réponse incorrecte. Vérifie les choix attendus.";
}

function render() {
  renderCategoryList();
  updateHeaderStats();
  renderQuestion();
}

elements.prevButton.addEventListener("click", () => {
  state.currentIndex = Math.max(0, state.currentIndex - 1);
  render();
});

elements.nextButton.addEventListener("click", () => {
  state.currentIndex = Math.min(quizQuestions.length - 1, state.currentIndex + 1);
  render();
});

elements.checkButton.addEventListener("click", () => {
  const question = getQuestion(state.currentIndex);
  state.checkedQuestions.add(question.id);
  renderQuestion();
  updateHeaderStats();
});

elements.restartButton.addEventListener("click", () => {
  state.currentIndex = 0;
  state.selections.clear();
  state.checkedQuestions.clear();
  render();
});

elements.jumpButton.addEventListener("click", () => {
  const nextIndex = quizQuestions.findIndex(
    (question) => getSelections(question.id).length === 0
  );

  state.currentIndex = nextIndex >= 0 ? nextIndex : 0;
  render();
});

render();

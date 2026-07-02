const themeSources = window.quizThemeSources ?? [];
const questionOverrides = window.questionOverrides ?? {};

function makePlaceholderChoices(questionText) {
  return [
    `Réponse A à compléter pour : ${questionText}`,
    `Réponse B à compléter pour : ${questionText}`,
    `Réponse C à compléter pour : ${questionText}`,
    `Réponse D à compléter pour : ${questionText}`,
  ];
}

function shuffleQuestionChoices(choices, correctAnswers) {
  const entries = choices.map((choice, index) => ({
    choice,
    isCorrect: correctAnswers.includes(index),
    sortKey: Math.random(),
  }));

  entries.sort((left, right) => left.sortKey - right.sortKey);

  return {
    choices: entries.map((entry) => entry.choice),
    correctAnswers: entries
      .map((entry, index) => (entry.isCorrect ? index : -1))
      .filter((index) => index >= 0),
  };
}

function sanitizeQuestions(questions) {
  return questions.map((question) => question.trim()).filter(Boolean);
}

function getQuestionOverride(level, prompt) {
  return questionOverrides[`${level}::${prompt}`] ?? questionOverrides[prompt] ?? {};
}

function buildQuestionBank() {
  return themeSources.flatMap((theme, categoryIndex) =>
    sanitizeQuestions(theme.questions).map((prompt, questionIndex) => {
      const level = theme.level ?? "CSP";
      const override = getQuestionOverride(level, prompt);
      const baseChoices = override.choices ?? makePlaceholderChoices(prompt);
      const baseCorrectAnswers = override.correctAnswers ?? [];
      const shuffled = shuffleQuestionChoices(baseChoices, baseCorrectAnswers);

      return {
        id: `${level.toLowerCase()}-q-${categoryIndex + 1}-${questionIndex + 1}`,
        level,
        category: theme.title,
        prompt,
        choices: shuffled.choices,
        correctAnswers: shuffled.correctAnswers,
        explanation:
          override.explanation ??
          "Question importée. Remplace les réponses placeholders dans data/overrides/ puis renseigne correctAnswers pour activer la correction.",
      };
    })
  );
}

window.quizQuestions = buildQuestionBank();

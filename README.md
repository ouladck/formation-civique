# Questionnaire de formation civique

Site statique prêt pour GitHub Pages.

## Fichiers

- `index.html` : structure de la page
- `styles.css` : interface et responsive
- `questions.js` : banque de questions
- `script.js` : logique du questionnaire

## Publication sur GitHub Pages

1. pousser ce dossier dans un dépôt GitHub
2. ouvrir `Settings` > `Pages`
3. choisir la branche de publication puis `/ (root)`
4. enregistrer

## Compléter les réponses

Les questions sont déjà chargées, mais les réponses affichées sont des placeholders.

Dans `questions.js`, complète l’objet `questionOverrides`.

Exemple :

```js
const questionOverrides = {
  "À quoi correspond la date du 14 juillet ?": {
    choices: [
      "À la prise de la Bastille en 1789",
      "À l'abolition de la monarchie",
      "À la signature du traité de Rome",
      "À l'élection du président",
    ],
    correctAnswers: [0],
    explanation: "Le 14 juillet commémore notamment la prise de la Bastille.",
  },
};
```

Pour une question à plusieurs bonnes réponses :

```js
correctAnswers: [0, 2]
```

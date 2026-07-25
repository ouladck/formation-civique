# Questionnaire de formation civique

Site statique prêt pour GitHub Pages.

## Fichiers

- `index.html` : structure de la page
- `styles.css` : interface et responsive
- `data/themes/` : un fichier de questions par thème
- `data/overrides/` : réponses et corrections rédigées
- `questions.js` : agrégation, placeholders et mélange aléatoire
- `script.js` : logique du questionnaire

## Publication sur GitHub Pages

1. pousser ce dossier dans un dépôt GitHub
2. ouvrir `Settings` > `Pages`
3. choisir la branche de publication puis `/ (root)`
4. enregistrer

## SEO et Google Analytics

Le SEO est configuré avec les balises de référencement, les cartes de partage, les données structurées, `robots.txt` et `sitemap.xml`. Les URL canoniques sont prévues pour la publication GitHub Pages du dépôt : `https://ouladck.github.io/formation-civique/`.

Pour activer Google Analytics 4, renseigner l'identifiant de mesure de la propriété (`G-...`) dans `analytics-config.js` :

```js
window.siteConfig = {
  googleAnalyticsMeasurementId: "G-XXXXXXXXXX",
};
```

La balise Analytics n'est chargée qu'après le consentement explicite de la personne qui visite le site. Le consentement peut être retiré depuis la page « À propos et sources ».

## Compléter les réponses

Les questions sont réparties par thème dans `data/themes/`.

Les réponses rédigées et les corrections sont à placer dans `data/overrides/`.

Exemple :

```js
Object.assign(window.questionOverrides, {
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
});
```

Pour une question à plusieurs bonnes réponses :

```js
correctAnswers: [0, 2]
```

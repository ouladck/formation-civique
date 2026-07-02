window.questionOverrides = window.questionOverrides ?? {};

const crChoices = {
  "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?": {
    "choices": [
      "Voter, s'engager dans une association ou participer à la vie locale",
      "Regarder uniquement les informations sans participer",
      "Refuser systématiquement de voter",
      "Ne jamais respecter les décisions collectives"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Voter, s'engager dans une association ou participer à la vie locale."
  },
  "Que garantit la liberté d’expression ?": {
    "choices": [
      "Le droit d'exprimer ses opinions dans le respect de la loi",
      "Le droit de diffamer une personne",
      "Le droit d'insulter publiquement sans limite",
      "Le droit de publier des appels à la haine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le droit d'exprimer ses opinions dans le respect de la loi."
  },
  "À quoi sert un titre de séjour ?": {
    "choices": [
      "À autoriser une personne étrangère à séjourner légalement en France",
      "À prouver automatiquement la nationalité française",
      "À remplacer une pièce d'identité française",
      "À obtenir directement le droit de vote national"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : À autoriser une personne étrangère à séjourner légalement en France."
  },
  "La liberté de circulation permet à toute personne de :": {
    "choices": [
      "Se déplacer librement dans le respect de la loi",
      "Entrer dans n'importe quel lieu privé sans autorisation",
      "Conduire sans permis",
      "Se déplacer sans respecter les règles de séjour"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Se déplacer librement dans le respect de la loi."
  },
  "Sur quel site internet peut-on retrouver le symbole de la République française ?": {
    "choices": [
      "Sur les sites officiels de la République, comme elysee.fr",
      "Sur un site commercial de vente en ligne",
      "Sur le site d'un club sportif",
      "Sur un réseau social privé uniquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Sur les sites officiels de la République, comme elysee.fr."
  },
  "Complétez ces paroles de la Marseillaise : \"Aux armes […] ! Formez vos bataillons\"": {
    "choices": [
      "Citoyens",
      "soldats",
      "Français",
      "enfants"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Citoyens."
  },
  "Complétez les paroles de la Marseillaise : \"Allons enfants de la patrie […]\"": {
    "choices": [
      "Le jour de gloire est arrivé",
      "La République nous appelle",
      "Le drapeau est levé",
      "La liberté est signée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le jour de gloire est arrivé."
  },
  "En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :": {
    "choices": [
      "Choisir librement sa vie privée dans le respect de la loi",
      "Imposer son choix de vie à une autre personne",
      "Ignorer les règles communes",
      "Empêcher autrui d'exprimer son opinion"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Choisir librement sa vie privée dans le respect de la loi."
  },
  "Concernant la pratique de la religion, quelle proposition est correcte ?": {
    "choices": [
      "Chacun est libre de pratiquer une religion ou de ne pas en pratiquer",
      "Une religion officielle s'impose à tous",
      "Il est obligatoire de pratiquer une religion",
      "Une mairie peut choisir la religion des habitants"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Chacun est libre de pratiquer une religion ou de ne pas en pratiquer."
  },
  "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?": {
    "choices": [
      "Non, la mixité scolaire doit être respectée",
      "Oui, les parents choisissent les matières obligatoires",
      "Oui, si l'enfant est d'accord",
      "Oui, car la mixité est facultative à l'école"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Non, la mixité scolaire doit être respectée."
  },
  "Quelle est la devise de la France ?": {
    "choices": [
      "Liberté, égalité, fraternité",
      "Travail, famille, patrie",
      "Unité, ordre, progrès",
      "Paix, justice, sécurité"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Liberté, égalité, fraternité."
  },
  "La répudiation de sa femme est :": {
    "choices": [
      "Interdite et sans effet juridique en France",
      "Reconnue automatiquement en France",
      "Possible devant la mairie",
      "Valable si la famille l'accepte"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Interdite et sans effet juridique en France."
  },
  "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?": {
    "choices": [
      "Chacun contribue selon ses moyens au financement des services publics",
      "Les impôts financent seulement les élus",
      "Les impôts sont facultatifs",
      "Les impôts ne concernent que les entreprises"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Chacun contribue selon ses moyens au financement des services publics."
  },
  "Peut-on brûler publiquement un drapeau français ?": {
    "choices": [
      "Non, l'outrage public au drapeau français peut être sanctionné",
      "Oui, c'est toujours autorisé",
      "Oui, si cela se passe pendant une fête",
      "Oui, si le drapeau appartient à la personne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Non, l'outrage public au drapeau français peut être sanctionné."
  },
  "Que fait l’État pour lutter contre les discriminations ?": {
    "choices": [
      "Il interdit et sanctionne les discriminations",
      "Il autorise les discriminations privées",
      "Il laisse chaque employeur décider librement",
      "Il ne sanctionne que les discriminations politiques"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Il interdit et sanctionne les discriminations."
  },
  "Que représente Marianne ?": {
    "choices": [
      "La République française",
      "La monarchie française",
      "La ville de Paris uniquement",
      "L'Union européenne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La République française."
  },
  "Qu'est-ce que la liberté d'association ?": {
    "choices": [
      "Le droit de créer ou de rejoindre une association",
      "L'obligation d'adhérer à une association",
      "Le droit de créer une association illégale",
      "Le droit d'imposer une association aux autres"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le droit de créer ou de rejoindre une association."
  },
  "Qu'est-ce que la liberté ?": {
    "choices": [
      "Pouvoir agir dans le respect de la loi et des autres",
      "Faire tout ce que l'on veut sans limite",
      "Ne jamais respecter la loi",
      "Supprimer les droits des autres"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Pouvoir agir dans le respect de la loi et des autres."
  },
  "Qu'est-ce que la Marseillaise ?": {
    "choices": [
      "L'hymne national français",
      "La devise de la France",
      "Un texte de la Constitution",
      "Le nom du drapeau français"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'hymne national français."
  },
  "Sur quel document peut-on voir Marianne ?": {
    "choices": [
      "Sur des documents officiels, des timbres ou des pièces",
      "Uniquement sur les contrats de travail",
      "Seulement sur les bulletins scolaires",
      "Sur les menus de cantine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Sur des documents officiels, des timbres ou des pièces."
  },
  "Un employeur refuse d’embaucher des femmes dans son entreprise. Que dit la loi ?": {
    "choices": [
      "C'est une discrimination interdite",
      "C'est autorisé si le métier est difficile",
      "C'est autorisé si les clients préfèrent",
      "C'est une simple préférence personnelle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : C'est une discrimination interdite."
  },
  "Une des valeurs de la devise républicaine est l'égalité. Qu'est-ce que cela signifie ?": {
    "choices": [
      "Tous les citoyens ont les mêmes droits devant la loi",
      "Tous les citoyens doivent avoir le même métier",
      "La loi s'applique selon la richesse",
      "Certains citoyens ont plus de droits par naissance"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Tous les citoyens ont les mêmes droits devant la loi."
  },
  "Quelle est la place de la langue française dans la République ?": {
    "choices": [
      "Le français est la langue officielle de la République",
      "Le français est une langue secondaire",
      "Chaque commune choisit sa langue officielle",
      "L'anglais est la seule langue administrative"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le français est la langue officielle de la République."
  },
  "Quels sont des symboles officiels de la République française ?": {
    "choices": [
      "Le drapeau tricolore, Marianne et La Marseillaise",
      "La tour Eiffel, le béret et la baguette",
      "Le coq sportif, le Louvre et Paris",
      "Le lys royal, la couronne et le sceptre"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le drapeau tricolore, Marianne et La Marseillaise."
  },
  "A-t-on le droit d'insulter publiquement quelqu’un parce qu’il est différent (handicap, apparence physique, sexe…) ?": {
    "choices": [
      "Non, les injures discriminatoires sont interdites",
      "Oui, si c'est sur Internet",
      "Oui, si c'est une plaisanterie",
      "Oui, si la personne insultée est absente"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Non, les injures discriminatoires sont interdites."
  },
  "Le régime de la France est :": {
    "choices": [
      "Une République",
      "Une monarchie absolue",
      "Un empire héréditaire",
      "Une dictature militaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Une République."
  },
  "Pourquoi le principe de laïcité doit-il être respecté à l'école ?": {
    "choices": [
      "Pour garantir la neutralité de l'école et l'égalité entre les élèves",
      "Pour interdire toute opinion personnelle",
      "Pour imposer une religion commune",
      "Pour permettre aux enseignants de choisir une religion officielle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Pour garantir la neutralité de l'école et l'égalité entre les élèves."
  },
  "En quelle année la loi de séparation des Églises et de l'Etat a-t-elle été votée ?": {
    "choices": [
      "1905",
      "1881",
      "1958",
      "2004"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 1905."
  },
  "Une personne a-t-elle le droit de ne pas croire en une religion ?": {
    "choices": [
      "Oui, la liberté de conscience le garantit",
      "Non, une religion est obligatoire",
      "Oui, mais seulement en privé",
      "Non, sauf autorisation de la mairie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Oui, la liberté de conscience le garantit."
  },
  "Quel droit est garanti par la laïcité ?": {
    "choices": [
      "La liberté de conscience",
      "Le droit d'imposer sa religion",
      "Le droit d'exiger une religion officielle",
      "Le droit de choisir la religion des autres"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La liberté de conscience."
  },
  "À l'école publique, qui peut porter des signes religieux très visibles ?": {
    "choices": [
      "Aucun élève ni agent public ne peut porter de signe religieux ostensible dans les conditions interdites par la loi",
      "Tous les élèves pendant les cours",
      "Tous les enseignants pendant leur service",
      "Tous les agents publics devant les élèves"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Aucun élève ni agent public ne peut porter de signe religieux ostensible dans les conditions interdites par la loi."
  },
  "Selon le principe de laïcité, que signifie la neutralité de l’État ?": {
    "choices": [
      "L'État ne favorise aucune religion",
      "L'État choisit une religion nationale",
      "L'État finance une seule religion",
      "L'État interdit toute croyance personnelle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'État ne favorise aucune religion."
  },
  "Que peut faire un usager du service public dans une mairie ?": {
    "choices": [
      "Porter un signe religieux, tant qu'il ne trouble pas le service",
      "Faire du prosélytisme auprès des agents",
      "Troubler le fonctionnement du service",
      "Exiger que l'agent partage sa religion"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Porter un signe religieux, tant qu'il ne trouble pas le service."
  },
  "Qui doit respecter le principe de neutralité religieuse dans une préfecture ?": {
    "choices": [
      "Les agents publics",
      "Les seuls usagers",
      "Les associations privées",
      "Les visiteurs étrangers uniquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les agents publics."
  },
  "La laïcité impose-t-elle aux agents publics d'être neutres vis-à-vis des usagers ?": {
    "choices": [
      "Oui, ils doivent rester neutres",
      "Non, ils peuvent favoriser leur religion",
      "Non, cela dépend de leur service",
      "Oui, mais seulement le dimanche"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Oui, ils doivent rester neutres."
  },
  "Que garantit le principe de laïcité ?": {
    "choices": [
      "La liberté de conscience et l'égalité de tous",
      "La supériorité d'une religion",
      "L'interdiction de toutes les croyances",
      "Le financement obligatoire des cultes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La liberté de conscience et l'égalité de tous."
  },
  "A-t-on le droit de changer de religion ?": {
    "choices": [
      "Oui, chacun peut changer de religion",
      "Non, la religion est définitive",
      "Oui, seulement avec un juge",
      "Oui, mais seulement avant 18 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Oui, chacun peut changer de religion."
  },
  "Que représente la laïcité ?": {
    "choices": [
      "La neutralité de l'État et la liberté de conscience",
      "Une religion d'État",
      "Une interdiction de penser",
      "Une obligation de pratiquer un culte"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La neutralité de l'État et la liberté de conscience."
  },
  "Qu'est ce qui est interdit par la Charte de la laïcité à l'école ?": {
    "choices": [
      "Le prosélytisme et la contestation des enseignements pour motif religieux",
      "Le respect de tous les élèves",
      "L'apprentissage des faits religieux en histoire",
      "La neutralité des personnels"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le prosélytisme et la contestation des enseignements pour motif religieux."
  },
  "Que dit l'article 1er de la Constitution française ?": {
    "choices": [
      "La France est une République indivisible, laïque, démocratique et sociale",
      "La France est une monarchie parlementaire",
      "La France reconnaît une religion officielle",
      "La France est une fédération royale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La France est une République indivisible, laïque, démocratique et sociale."
  },
  "Qu'est-ce que l'État de droit ?": {
    "choices": [
      "Un système où l'État et les citoyens sont soumis au droit",
      "Un système où le chef décide sans règle",
      "Un État où seuls les citoyens respectent la loi",
      "Un régime où les juges ne contrôlent rien"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Un système où l'État et les citoyens sont soumis au droit."
  },
  "Le président de la République a commis un crime. Quelle proposition est correcte ?": {
    "choices": [
      "Il peut être poursuivi selon les règles prévues par la Constitution",
      "Il ne peut jamais être poursuivi",
      "Il est automatiquement réélu",
      "Le Parlement peut effacer l'infraction"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Il peut être poursuivi selon les règles prévues par la Constitution."
  },
  "La loi est l'expression de :": {
    "choices": [
      "La volonté générale",
      "La volonté d'un seul ministre",
      "La décision des juges",
      "L'opinion d'un parti unique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La volonté générale."
  },
  "Quelle est la durée du mandat du conseil municipal et du maire ?": {
    "choices": [
      "6 ans",
      "4 ans",
      "5 ans",
      "7 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 6 ans."
  },
  "Que garantit l’État de droit ?": {
    "choices": [
      "Le respect des lois, des droits et des libertés",
      "Le pouvoir illimité du Gouvernement",
      "L'absence de contrôle des autorités",
      "La priorité des décisions privées sur la loi"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le respect des lois, des droits et des libertés."
  },
  "Une personne peut-elle voter à la place d'une autre ?": {
    "choices": [
      "Non, sauf procuration établie légalement",
      "Oui, si elle connaît bien la personne",
      "Oui, si elle vote dans la même commune",
      "Oui, sans formalité particulière"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Non, sauf procuration établie légalement."
  },
  "Est-ce que le vote est obligatoire ?": {
    "choices": [
      "Non, le vote est un droit mais n'est pas obligatoire en France",
      "Oui, sous peine de prison",
      "Oui, seulement aux municipales",
      "Oui, seulement pour les étrangers"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Non, le vote est un droit mais n'est pas obligatoire en France."
  },
  "À la fin de son mandat, le président de la République peut-il décider de rester au pouvoir ?": {
    "choices": [
      "Non, il doit respecter la durée du mandat",
      "Oui, s'il le décide seul",
      "Oui, si le Gouvernement l'accepte",
      "Oui, si les sondages sont favorables"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Non, il doit respecter la durée du mandat."
  },
  "Qui dirige l'action du Gouvernement ?": {
    "choices": [
      "Le Premier ministre",
      "Le président du Sénat",
      "Le maire de Paris",
      "Le Conseil constitutionnel"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le Premier ministre."
  },
  "Qui nomme le Premier ministre ?": {
    "choices": [
      "Le président de la République",
      "L'Assemblée nationale",
      "Le Sénat",
      "Les préfets"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le président de la République."
  },
  "Quelle est l'organisation administrative de la France ?": {
    "choices": [
      "Communes, départements, régions et État",
      "Rois, provinces et duchés",
      "Cantons religieux uniquement",
      "Entreprises, syndicats et associations"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Communes, départements, régions et État."
  },
  "Qu'est-ce que le pouvoir législatif ? Le pouvoir :": {
    "choices": [
      "De voter la loi",
      "De juger les citoyens",
      "De commander la police",
      "De nommer les maires"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : De voter la loi."
  },
  "Pourquoi séparer les trois pouvoirs dans une démocratie ?": {
    "choices": [
      "Pour éviter la concentration des pouvoirs",
      "Pour donner tous les pouvoirs au président",
      "Pour supprimer le rôle du juge",
      "Pour rendre le vote inutile"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Pour éviter la concentration des pouvoirs."
  },
  "Qui sanctionne l'auteur d'un vol ?": {
    "choices": [
      "Le juge",
      "Le maire seul",
      "Le député",
      "La victime elle-même"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le juge."
  },
  "Quel est le rôle du gouvernement ?": {
    "choices": [
      "Conduire la politique de la Nation",
      "Rendre les jugements",
      "Élire les sénateurs",
      "Écrire seul la Constitution"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Conduire la politique de la Nation."
  },
  "Que se passe-t-il si un ministre ne respecte pas la loi ?": {
    "choices": [
      "Il peut être poursuivi et sanctionné",
      "Il est toujours protégé",
      "La loi ne s'applique plus",
      "Il devient automatiquement député"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Il peut être poursuivi et sanctionné."
  },
  "Combien de députés composent l’Assemblée nationale ?": {
    "choices": [
      "577",
      "348",
      "101",
      "925"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 577."
  },
  "Qui peut voter aux élections en France ?": {
    "choices": [
      "Les citoyens français majeurs inscrits sur les listes électorales",
      "Tous les résidents sans condition",
      "Seulement les propriétaires",
      "Les mineurs dès 12 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les citoyens français majeurs inscrits sur les listes électorales."
  },
  "Pour combien de temps sont élus les sénateurs ?": {
    "choices": [
      "6 ans",
      "3 ans",
      "5 ans",
      "9 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 6 ans."
  },
  "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?": {
    "choices": [
      "Le pouvoir exécutif, législatif et judiciaire",
      "Communal, régional et européen",
      "Militaire, religieux et économique",
      "Présidentiel, municipal et associatif"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le pouvoir exécutif, législatif et judiciaire."
  },
  "Est-ce que le président de la République a tous les pouvoirs ?": {
    "choices": [
      "Non, les pouvoirs sont séparés",
      "Oui, il vote les lois seul",
      "Oui, il rend la justice",
      "Oui, il dirige toutes les communes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Non, les pouvoirs sont séparés."
  },
  "Qui est le préfet ?": {
    "choices": [
      "Le représentant de l'État dans un département ou une région",
      "Le chef du conseil municipal",
      "Un député élu localement",
      "Le président du tribunal"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le représentant de l'État dans un département ou une région."
  },
  "Quelle condition est nécessaire pour voter aux élections ?": {
    "choices": [
      "Être inscrit sur les listes électorales",
      "Posséder un logement",
      "Avoir un diplôme",
      "Être marié"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Être inscrit sur les listes électorales."
  },
  "Qui dirige la commune ?": {
    "choices": [
      "Le maire",
      "Le préfet",
      "Le sénateur",
      "Le procureur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le maire."
  },
  "Quel est le régime politique de la France aujourd'hui ?": {
    "choices": [
      "Une République démocratique",
      "Une monarchie",
      "Un empire",
      "Une théocratie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Une République démocratique."
  },
  "Qu'est-ce que l'Hôtel de Matignon ?": {
    "choices": [
      "La résidence officielle du Premier ministre",
      "La résidence du président de la République",
      "Le siège du Parlement européen",
      "Le ministère de la Justice"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La résidence officielle du Premier ministre."
  },
  "Le Parlement est composé :": {
    "choices": [
      "De l'Assemblée nationale et du Sénat",
      "Du Gouvernement et des préfets",
      "Des maires et des conseillers municipaux",
      "Des tribunaux et du Conseil d'État"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : De l'Assemblée nationale et du Sénat."
  },
  "Quel est le rôle du président de la République ?": {
    "choices": [
      "Veiller au respect de la Constitution et représenter la France",
      "Diriger chaque commune",
      "Juger toutes les infractions",
      "Présider les conseils de prud'hommes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Veiller au respect de la Constitution et représenter la France."
  },
  "Quel est le rôle du Premier ministre ?": {
    "choices": [
      "Diriger l'action du Gouvernement",
      "Rendre la justice pénale",
      "Présider le Sénat",
      "Diriger les élections municipales"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Diriger l'action du Gouvernement."
  },
  "Qui est le chef du Gouvernement ?": {
    "choices": [
      "Le Premier ministre",
      "Le président du Sénat",
      "Le ministre de l'Intérieur",
      "Le maire de Paris"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le Premier ministre."
  },
  "Combien y a-t-il de régions en France ?": {
    "choices": [
      "18 régions, dont 13 en métropole et 5 outre-mer",
      "13 au total",
      "101",
      "577"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 18 régions, dont 13 en métropole et 5 outre-mer."
  },
  "Quel est le rôle du Défenseur des droits ?": {
    "choices": [
      "Défendre les droits des personnes face aux discriminations et aux services publics",
      "Commander l'armée",
      "Voter les lois",
      "Fixer le montant des impôts"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Défendre les droits des personnes face aux discriminations et aux services publics."
  },
  "Depuis quand l'euro est-elle la monnaie unique ?": {
    "choices": [
      "Depuis 1999 pour les transactions et 2002 pour les pièces et billets",
      "Depuis 1957",
      "Depuis 1992 pour les billets",
      "Depuis 2020"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Depuis 1999 pour les transactions et 2002 pour les pièces et billets."
  },
  "Quel est le rôle principal du département ?": {
    "choices": [
      "L'action sociale, comme l'aide aux personnes âgées ou handicapées",
      "Définir la monnaie",
      "Élire le président de la République",
      "Signer les traités européens"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'action sociale, comme l'aide aux personnes âgées ou handicapées."
  },
  "Quel est le rôle principal des communes ?": {
    "choices": [
      "Gérer les services de proximité",
      "Voter les lois nationales",
      "Diriger la diplomatie",
      "Contrôler les tribunaux"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Gérer les services de proximité."
  },
  "Combien de communes environ existe-t-il en France ?": {
    "choices": [
      "Environ 35 000 communes",
      "Environ 5 000",
      "Environ 101",
      "Environ 577"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Environ 35 000 communes."
  },
  "Quel traité concerne la construction de l'Union européenne ?": {
    "choices": [
      "Le traité de Maastricht",
      "Le traité de Versailles",
      "Le traité de Paris de 1763",
      "La Charte de l'environnement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le traité de Maastricht."
  },
  "Quel État a quitté l'Union européenne en 2020 ?": {
    "choices": [
      "Le Royaume-Uni",
      "L'Islande",
      "L'Irlande",
      "La Turquie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le Royaume-Uni."
  },
  "Quelle est la devise de l’Union européenne ?": {
    "choices": [
      "Unie dans la diversité",
      "Liberté, égalité, fraternité",
      "Travail, famille, patrie",
      "Tous pour un"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Unie dans la diversité."
  },
  "Quel est l'hymne de l'Union européenne ?": {
    "choices": [
      "L'Ode à la joie",
      "La Marseillaise",
      "God Save the King",
      "Le Chant des partisans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'Ode à la joie."
  },
  "De quoi est composé le drapeau européen ?": {
    "choices": [
      "Un cercle de douze étoiles",
      "De trois bandes verticales",
      "D'une croix blanche",
      "D'un coq rouge"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Un cercle de douze étoiles."
  },
  "De quelle couleur est le drapeau européen ?": {
    "choices": [
      "Bleu",
      "Rouge",
      "Vert",
      "Blanc"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Bleu."
  },
  "En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?": {
    "choices": [
      "1992",
      "1957",
      "2002",
      "2020"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 1992."
  },
  "Où est le siège du Parlement européen ?": {
    "choices": [
      "Strasbourg",
      "Bruxelles uniquement",
      "Paris",
      "Luxembourg uniquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Strasbourg."
  },
  "Où est le siège de la Commission européenne ?": {
    "choices": [
      "Bruxelles",
      "Strasbourg",
      "Paris",
      "Rome"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Bruxelles."
  },
  "Quel État n'est pas membre de l'Union européenne ?": {
    "choices": [
      "La Suisse",
      "La France",
      "L'Allemagne",
      "L'Espagne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La Suisse."
  },
  "Quand célèbre-t-on la journée de l'Europe ?": {
    "choices": [
      "Le 9 mai",
      "Le 14 juillet",
      "Le 11 novembre",
      "Le 8 mai"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le 9 mai."
  },
  "À quelle fréquence les élections européennes sont-elles organisées ?": {
    "choices": [
      "Tous les 5 ans",
      "Tous les ans",
      "Tous les 3 ans",
      "Tous les 7 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Tous les 5 ans."
  },
  "Quelle condition est nécessaire pour voter aux élections européennes ?": {
    "choices": [
      "Être citoyen de l'Union européenne et inscrit sur les listes électorales",
      "Être né dans la commune",
      "Être propriétaire",
      "Avoir plus de 25 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Être citoyen de l'Union européenne et inscrit sur les listes électorales."
  },
  "Quel pays est un pays fondateur de l'Union européenne ?": {
    "choices": [
      "La France",
      "La Croatie",
      "La Pologne",
      "La Finlande"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La France."
  },
  "À quelle liberté la PMA fait-elle référence ?": {
    "choices": [
      "À la liberté de fonder une famille",
      "À la liberté de stationner",
      "À la liberté de ne pas respecter la loi",
      "À la liberté de vote des entreprises"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : À la liberté de fonder une famille."
  },
  "Au nom de quoi l'État justifie-t-il la restriction des droits ?": {
    "choices": [
      "Au nom de l'intérêt général et de l'ordre public",
      "Au nom des préférences personnelles",
      "Au nom d'une religion officielle",
      "Au nom du confort administratif seul"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Au nom de l'intérêt général et de l'ordre public."
  },
  "Concernant le droit de se marier, quelle proposition est correcte ?": {
    "choices": [
      "Toute personne majeure peut se marier si elle remplit les conditions légales",
      "Le mariage est réservé à une seule religion",
      "Une personne mineure peut toujours se marier seule",
      "Le mariage civil n'a aucune valeur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Toute personne majeure peut se marier si elle remplit les conditions légales."
  },
  "Est-il toujours possible de divorcer ?": {
    "choices": [
      "Oui, le divorce est possible en France",
      "Non, le divorce est interdit",
      "Oui, uniquement avec l'accord du maire",
      "Oui, seulement après 20 ans de mariage"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Oui, le divorce est possible en France."
  },
  "La peine de mort est :": {
    "choices": [
      "Abolie en France",
      "Possible pour les crimes graves",
      "Décidée par référendum local",
      "Appliquée par les préfets"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Abolie en France."
  },
  "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'homme et du Citoyen de 1789 ?": {
    "choices": [
      "Les hommes naissent et demeurent libres et égaux en droits",
      "La France est une République laïque",
      "Unie dans la diversité",
      "Le Gouvernement dirige la Nation"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les hommes naissent et demeurent libres et égaux en droits."
  },
  "Le recours à l'avortement est-il autorisé ?": {
    "choices": [
      "Oui, dans les conditions prévues par la loi",
      "Non, jamais",
      "Oui, seulement avec l'accord de l'employeur",
      "Oui, uniquement après décision du maire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Oui, dans les conditions prévues par la loi."
  },
  "Que contient la Constitution ?": {
    "choices": [
      "Les règles fondamentales d'organisation de l'État et les droits garantis",
      "Les horaires des écoles",
      "Les contrats de travail privés",
      "Le code de la route complet"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les règles fondamentales d'organisation de l'État et les droits garantis."
  },
  "Que garantit la liberté de la presse ?": {
    "choices": [
      "Le droit d'informer et d'être informé librement",
      "Le droit de censurer toute critique",
      "Le droit de publier sans responsabilité",
      "Le monopole d'un journal officiel unique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le droit d'informer et d'être informé librement."
  },
  "Que prévoit la Charte de l'environnement ?": {
    "choices": [
      "Le droit de vivre dans un environnement équilibré et respectueux de la santé",
      "Le droit de polluer librement",
      "L'interdiction du tri des déchets",
      "La suppression de toute règle écologique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le droit de vivre dans un environnement équilibré et respectueux de la santé."
  },
  "Que signifie la dignité humaine ?": {
    "choices": [
      "Le respect dû à toute personne humaine",
      "La valeur d'une personne dépend de ses revenus",
      "Une personne peut être traitée comme un objet",
      "Seuls les citoyens ont une dignité"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le respect dû à toute personne humaine."
  },
  "Que signifie le droit de manifester ?": {
    "choices": [
      "Le droit de se rassembler publiquement pour exprimer une opinion",
      "Le droit de casser des biens publics",
      "Le droit de bloquer toute intervention de secours",
      "Le droit de manifester sans aucune règle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le droit de se rassembler publiquement pour exprimer une opinion."
  },
  "Que signifie PMA ?": {
    "choices": [
      "Procréation médicalement assistée",
      "Protection municipale administrative",
      "Police médicale autorisée",
      "Procédure matrimoniale annuelle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Procréation médicalement assistée."
  },
  "Quel texte est le plus difficile à modifier ?": {
    "choices": [
      "La Constitution",
      "Le règlement intérieur d'une école",
      "Un arrêté municipal",
      "Un contrat de travail"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La Constitution."
  },
  "Quelle liberté permet à une personne de croire en la religion de son choix ?": {
    "choices": [
      "La liberté de conscience",
      "La liberté de stationnement",
      "La liberté commerciale",
      "La liberté de construire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La liberté de conscience."
  },
  "Qu'est-ce que le droit de grève ?": {
    "choices": [
      "Le droit d'arrêter collectivement le travail pour défendre des revendications professionnelles",
      "Le droit de ne jamais travailler",
      "Le droit de fermer une entreprise définitivement",
      "Le droit d'être payé sans contrat de travail"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le droit d'arrêter collectivement le travail pour défendre des revendications professionnelles."
  },
  "Qu'est-ce que la Constitution ?": {
    "choices": [
      "Le texte fondamental qui organise les pouvoirs publics",
      "Une chanson nationale",
      "Un règlement de copropriété",
      "Un formulaire administratif"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le texte fondamental qui organise les pouvoirs publics."
  },
  "Qui peut demander à avorter ?": {
    "choices": [
      "Toute femme enceinte qui en fait la demande, dans le cadre légal",
      "L'employeur de la femme",
      "La famille sans l'accord de la personne concernée",
      "Le conjoint uniquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Toute femme enceinte qui en fait la demande, dans le cadre légal."
  },
  "Une femme majeure de nationalité française a-t-elle le droit de voter aux élections ?": {
    "choices": [
      "Oui",
      "Non",
      "Oui, seulement si elle est mariée",
      "Oui, seulement aux élections locales"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Oui."
  },
  "Concernant l'utilisation des réseaux sociaux, quelle proposition est correcte ?": {
    "choices": [
      "La loi s'applique aussi sur les réseaux sociaux",
      "Tout y est autorisé",
      "Les injures y sont toujours sans conséquence",
      "La loi ne s'applique qu'aux journaux papier"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La loi s'applique aussi sur les réseaux sociaux."
  },
  "Jeter un mégot par terre est :": {
    "choices": [
      "Interdit et passible d'une amende",
      "Autorisé si la rue est vide",
      "Obligatoire dans certains lieux",
      "Toléré devant les bâtiments publics"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Interdit et passible d'une amende."
  },
  "L'État peut-il limiter les droits et libertés ?": {
    "choices": [
      "Oui, si cela est prévu par la loi et justifié",
      "Non, jamais",
      "Oui, sans loi ni justification",
      "Oui, seulement pour les étrangers"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Oui, si cela est prévu par la loi et justifié."
  },
  "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l’environnement ?": {
    "choices": [
      "Trier ses déchets et limiter le gaspillage",
      "Jeter les déchets dans la rue",
      "Laisser les lumières allumées sans besoin",
      "Déposer les encombrants n'importe où"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Trier ses déchets et limiter le gaspillage."
  },
  "Quelle proposition constitue une obligation ?": {
    "choices": [
      "Respecter la loi",
      "Voter à toutes les élections",
      "Adhérer à une association",
      "Avoir une religion"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Respecter la loi."
  },
  "Pour quel motif peut-on limiter la liberté d'expression ?": {
    "choices": [
      "La diffamation, l'injure ou l'appel à la haine",
      "Pour empêcher toute critique politique",
      "Pour favoriser une opinion officielle",
      "Pour interdire les désaccords"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La diffamation, l'injure ou l'appel à la haine."
  },
  "Pourquoi doit-on trier ses déchets ?": {
    "choices": [
      "Pour protéger l'environnement et permettre le recyclage",
      "Pour les mélanger plus facilement",
      "Pour éviter le recyclage",
      "Pour remplir les trottoirs"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Pour protéger l'environnement et permettre le recyclage."
  },
  "Que doit faire une victime de violences ?": {
    "choices": [
      "Demander de l'aide, appeler les secours ou porter plainte",
      "Garder le silence",
      "Se faire justice elle-même",
      "Attendre que la situation disparaisse seule"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Demander de l'aide, appeler les secours ou porter plainte."
  },
  "Que doit-on faire face aux ordres des policiers ou gendarmes ?": {
    "choices": [
      "Obéir aux ordres légaux des policiers ou gendarmes",
      "Les ignorer systématiquement",
      "Répondre par la violence",
      "Fuir dans tous les cas"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Obéir aux ordres légaux des policiers ou gendarmes."
  },
  "Quel est le rôle de la police ?": {
    "choices": [
      "Protéger les personnes et faire respecter la loi",
      "Voter les lois",
      "Fixer les salaires",
      "Rendre les jugements civils"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Protéger les personnes et faire respecter la loi."
  },
  "Quel est un exemple d’assistance à personne en danger ?": {
    "choices": [
      "Appeler les secours pour une personne blessée",
      "Filmer sans appeler les secours",
      "Quitter les lieux sans prévenir personne",
      "Empêcher les secours d'intervenir"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Appeler les secours pour une personne blessée."
  },
  "Quel exemple illustre une limitation de liberté pour protéger l'intérêt général ?": {
    "choices": [
      "L'interdiction de fumer dans certains lieux publics",
      "Interdire toute critique du Gouvernement",
      "Supprimer le droit de vote",
      "Choisir une religion obligatoire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'interdiction de fumer dans certains lieux publics."
  },
  "Quelle est l’attitude à avoir lorsque qu'on est témoin de violences ?": {
    "choices": [
      "Alerter les secours ou les autorités",
      "Encourager l'agresseur",
      "Diffuser la scène sans alerter personne",
      "Partir sans rien signaler"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Alerter les secours ou les autorités."
  },
  "Quelle est l'infraction la plus grave ?": {
    "choices": [
      "Le crime",
      "La contravention",
      "L'avertissement",
      "La simple incivilité"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le crime."
  },
  "Quelle obligation concerne toutes les personnes résidant en France quelle que soit leur nationalité ?": {
    "choices": [
      "Respecter la loi",
      "Voter aux élections nationales",
      "Parler uniquement français à la maison",
      "Adhérer à un parti politique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Respecter la loi."
  },
  "Quelle proposition représente un exemple de crime ?": {
    "choices": [
      "Un meurtre",
      "Un stationnement interdit",
      "Une petite contravention",
      "Un retard au travail"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Un meurtre."
  },
  "Quelle proposition représente un exemple de délit ?": {
    "choices": [
      "Un vol",
      "Un meurtre",
      "Un stationnement gênant simple",
      "Une remarque impolie"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Un vol."
  },
  "Qui veille au maintien de l’ordre public ?": {
    "choices": [
      "La police et la gendarmerie",
      "Les syndicats",
      "Les associations sportives",
      "Les entreprises privées uniquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La police et la gendarmerie."
  },
  "S'agissant des déchets, quelle proposition est correcte ?": {
    "choices": [
      "Les déchets doivent être triés et déposés aux endroits prévus",
      "On peut les abandonner sur le trottoir",
      "Le tri est interdit",
      "Les déchets dangereux vont dans la poubelle ordinaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les déchets doivent être triés et déposés aux endroits prévus."
  },
  "Quel était le surnom de Louis XIV ?": {
    "choices": [
      "Le Roi-Soleil",
      "Le Roi-Citoyen",
      "Le Petit Caporal",
      "Le Père la Victoire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le Roi-Soleil."
  },
  "Quel roi de France a été exécuté pendant la Révolution française ?": {
    "choices": [
      "Louis XVI",
      "Louis XIV",
      "Henri IV",
      "François Ier"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Louis XVI."
  },
  "En quelle année Napoléon Ier est-il devenu empereur ?": {
    "choices": [
      "1804",
      "1799",
      "1815",
      "1848"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 1804."
  },
  "Lequel de ces personnages a un lien avec la République française ?": {
    "choices": [
      "Marianne",
      "Louis XIV",
      "Napoléon III",
      "Henri IV"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Marianne."
  },
  "De quand date l'appel à la résistance du général de Gaulle ?": {
    "choices": [
      "18 juin 1940",
      "11 novembre 1918",
      "8 mai 1945",
      "14 juillet 1789"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 18 juin 1940."
  },
  "Pourquoi la Shoah est-elle étudiée à l'école ?": {
    "choices": [
      "Pour transmettre la mémoire du génocide et lutter contre l'antisémitisme",
      "Pour glorifier la guerre",
      "Pour éviter d'étudier l'histoire européenne",
      "Pour remplacer l'enseignement civique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Pour transmettre la mémoire du génocide et lutter contre l'antisémitisme."
  },
  "Quel pays a été colonisé par la France ?": {
    "choices": [
      "L'Algérie",
      "La Suède",
      "Le Japon",
      "La Thaïlande"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'Algérie."
  },
  "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?": {
    "choices": [
      "Depuis 1962",
      "Depuis 1789",
      "Depuis 1945",
      "Depuis 2002"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Depuis 1962."
  },
  "Quelle est la première étape de la construction européenne en 1951 ?": {
    "choices": [
      "La Communauté européenne du charbon et de l'acier",
      "La création de l'euro",
      "Le traité de Maastricht",
      "La sortie du Royaume-Uni"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La Communauté européenne du charbon et de l'acier."
  },
  "Durant le mandat de quel président la peine de mort a-t-elle été abolie ?": {
    "choices": [
      "François Mitterrand",
      "Charles de Gaulle",
      "Georges Pompidou",
      "Jacques Chirac"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : François Mitterrand."
  },
  "Quel régime politique a été mis en place pendant la Révolution française en 1792 ?": {
    "choices": [
      "La Première République",
      "La monarchie absolue",
      "Le Second Empire",
      "La Ve République"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La Première République."
  },
  "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?": {
    "choices": [
      "Jean Moulin",
      "Louis XVI",
      "Jules Ferry",
      "Napoléon Ier"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Jean Moulin."
  },
  "En 1944, qu'est-ce qui a changé pour les femmes ?": {
    "choices": [
      "Elles ont obtenu le droit de vote",
      "Elles ont perdu le droit de travailler",
      "Elles ont été exclues de l'école",
      "Elles ont obtenu le droit de vote européen uniquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Elles ont obtenu le droit de vote."
  },
  "Quelle organisation internationale a été créée en 1945 après la Seconde Guerre mondiale ?": {
    "choices": [
      "L'Organisation des Nations unies",
      "L'Union européenne",
      "La CEE",
      "Le Conseil municipal"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'Organisation des Nations unies."
  },
  "Quelle peine a été supprimée en 1981 ?": {
    "choices": [
      "La peine de mort",
      "La prison",
      "L'amende",
      "Le travail d'intérêt général"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La peine de mort."
  },
  "En quelle année l'euro est-elle devenue la monnaie utilisée en France ?": {
    "choices": [
      "2002",
      "1992",
      "1999",
      "2010"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 2002."
  },
  "En quelle année a commencé la Première Guerre mondiale ?": {
    "choices": [
      "1914",
      "1870",
      "1918",
      "1939"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 1914."
  },
  "Où a eu lieu le débarquement en 1944 ?": {
    "choices": [
      "En Normandie",
      "En Provence uniquement",
      "En Bretagne",
      "En Alsace"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : En Normandie."
  },
  "Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?": {
    "choices": [
      "L'Afrique",
      "L'Océanie",
      "L'Amérique du Nord",
      "L'Antarctique"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'Afrique."
  },
  "Que fête-t-on le 8 mai ?": {
    "choices": [
      "La victoire de 1945",
      "La fête nationale",
      "L'armistice de 1918",
      "La journée de l'Europe"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La victoire de 1945."
  },
  "Quelle mer ou océan borde la France métropolitaine ?": {
    "choices": [
      "La mer Méditerranée ou l'océan Atlantique",
      "La mer Baltique",
      "L'océan Pacifique",
      "La mer Caspienne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La mer Méditerranée ou l'océan Atlantique."
  },
  "Quel pays a une frontière terrestre avec la France métropolitaine ?": {
    "choices": [
      "L'Espagne",
      "L'Irlande",
      "La Suède",
      "La Grèce"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'Espagne."
  },
  "Quelle ville française est un port maritime ?": {
    "choices": [
      "Marseille",
      "Dijon",
      "Clermont-Ferrand",
      "Limoges"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Marseille."
  },
  "Quelle mer se situe entre la France et l'Angleterre ?": {
    "choices": [
      "La Manche",
      "La Méditerranée",
      "La mer Baltique",
      "La mer Noire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La Manche."
  },
  "Qu'est ce que la France d'outre-mer ?": {
    "choices": [
      "Les territoires français situés hors d'Europe",
      "Les régions françaises du nord-est",
      "Les anciennes provinces royales",
      "Les villes françaises les plus peuplées"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les territoires français situés hors d'Europe."
  },
  "Quelle chaîne de montagnes est située entre la France et l’Espagne ?": {
    "choices": [
      "Les Pyrénées",
      "Les Alpes",
      "Les Vosges",
      "Le Jura"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les Pyrénées."
  },
  "Quelle île française se trouve dans l'océan Indien ?": {
    "choices": [
      "La Réunion",
      "La Corse",
      "La Martinique",
      "Belle-Île-en-Mer"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La Réunion."
  },
  "Quelle est la population approximative de la France en 2025 ?": {
    "choices": [
      "Environ 68 millions d'habitants",
      "Environ 30 millions d'habitants",
      "Environ 100 millions d'habitants",
      "Environ 10 millions d'habitants"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Environ 68 millions d'habitants."
  },
  "Quel fleuve traverse Paris ?": {
    "choices": [
      "La Seine",
      "La Loire",
      "Le Rhône",
      "La Garonne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La Seine."
  },
  "Lequel de ces pays partage des frontières terrestres avec la France ?": {
    "choices": [
      "L'Allemagne",
      "Le Portugal",
      "Le Danemark",
      "L'Irlande"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'Allemagne."
  },
  "Quel pays a une frontière avec la France métropolitaine au nord-est ?": {
    "choices": [
      "La Belgique",
      "L'Espagne",
      "L'Italie",
      "Le Portugal"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La Belgique."
  },
  "Où se trouvent les principales activités économiques en France ?": {
    "choices": [
      "Dans les grandes métropoles et les espaces urbains",
      "Uniquement en montagne",
      "Uniquement dans les villages",
      "Seulement outre-mer"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Dans les grandes métropoles et les espaces urbains."
  },
  "Parmi ces pays, lequel attire le plus de visiteurs chaque année ?": {
    "choices": [
      "La France",
      "L'Autriche",
      "La Finlande",
      "Le Luxembourg"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La France."
  },
  "Où habite la majorité des Français ?": {
    "choices": [
      "En ville ou dans les espaces urbains",
      "Dans les zones désertiques",
      "Uniquement à la campagne",
      "Sur les îles d'outre-mer uniquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : En ville ou dans les espaces urbains."
  },
  "Quelle région est la plus peuplée ?": {
    "choices": [
      "L'Île-de-France",
      "La Corse",
      "La Bretagne",
      "La Bourgogne-Franche-Comté"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'Île-de-France."
  },
  "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?": {
    "choices": [
      "Lyon",
      "Guéret",
      "Foix",
      "Mende"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Lyon."
  },
  "Lequel de ces départements de France est le plus touristique ?": {
    "choices": [
      "Paris",
      "La Creuse",
      "La Lozère",
      "Le Cantal"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Paris."
  },
  "Quand peut-on visiter gratuitement des lieux culturels en France ?": {
    "choices": [
      "Lors des Journées européennes du patrimoine",
      "Uniquement le 1er janvier",
      "Jamais",
      "Tous les jours dans tous les musées"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Lors des Journées européennes du patrimoine."
  },
  "Combien de personnes parlent français dans le monde ?": {
    "choices": [
      "Environ 321 millions de personnes",
      "Environ 30 millions",
      "Environ 80 millions",
      "Environ 1 milliard"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Environ 321 millions de personnes."
  },
  "Qui était Marguerite Yourcenar ?": {
    "choices": [
      "Une écrivaine française, première femme élue à l'Académie française",
      "Une reine de France",
      "Une chanteuse du XXe siècle",
      "Une astronaute française"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Une écrivaine française, première femme élue à l'Académie française."
  },
  "Quel peintre est français ?": {
    "choices": [
      "Claude Monet",
      "Pablo Picasso uniquement espagnol",
      "Vincent van Gogh",
      "Léonard de Vinci"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Claude Monet."
  },
  "Quel musée est situé à Paris ?": {
    "choices": [
      "Le Louvre",
      "Le Prado",
      "Le British Museum",
      "Le Rijksmuseum"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le Louvre."
  },
  "Qui était Auguste Rodin ?": {
    "choices": [
      "Un sculpteur français",
      "Un compositeur allemand",
      "Un président de la République",
      "Un navigateur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Un sculpteur français."
  },
  "Quel est le classement de la langue française parmi les langues les plus parlées dans le monde ?": {
    "choices": [
      "La cinquième langue la plus parlée dans le monde",
      "La première langue",
      "La vingtième langue",
      "Une langue non classée"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La cinquième langue la plus parlée dans le monde."
  },
  "Quelle cathédrale célèbre a été en partie détruite par un incendie en 2019 ?": {
    "choices": [
      "Notre-Dame de Paris",
      "La cathédrale de Reims",
      "La basilique de Fourvière",
      "La cathédrale de Chartres"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Notre-Dame de Paris."
  },
  "Qui était une écrivaine française célèbre ?": {
    "choices": [
      "George Sand",
      "Édith Piaf",
      "Marie Curie",
      "Joséphine Baker"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : George Sand."
  },
  "Qui était un célèbre musicien français ?": {
    "choices": [
      "Claude Debussy",
      "Molière",
      "Auguste Rodin",
      "Paul Cézanne"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Claude Debussy."
  },
  "Qui était Auguste Renoir ?": {
    "choices": [
      "Un peintre français",
      "Un roi de France",
      "Un écrivain du Moyen Âge",
      "Un général de la Résistance"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Un peintre français."
  },
  "Quelle fête est française ?": {
    "choices": [
      "Le 14 juillet",
      "Thanksgiving",
      "La fête nationale suisse",
      "La fête de l'Indépendance américaine"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le 14 juillet."
  },
  "Quel mariage est reconnu par l'État ?": {
    "choices": [
      "Le mariage civil célébré à la mairie",
      "Le mariage religieux seul",
      "Le mariage coutumier non déclaré",
      "Une promesse privée entre familles"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le mariage civil célébré à la mairie."
  },
  "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?": {
    "choices": [
      "La mairie",
      "Le commissariat",
      "Le tribunal",
      "L'Assemblée nationale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La mairie."
  },
  "En cas de divorce, qui exerce l'autorité parentale ?": {
    "choices": [
      "Les deux parents, sauf décision contraire du juge",
      "Uniquement le père",
      "Uniquement la mère",
      "Les grands-parents automatiquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les deux parents, sauf décision contraire du juge."
  },
  "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?": {
    "choices": [
      "L'aide juridictionnelle",
      "L'allocation logement",
      "Le SMIC",
      "La carte Vitale"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : L'aide juridictionnelle."
  },
  "Où faut-il déclarer la naissance d'un enfant ?": {
    "choices": [
      "À la mairie du lieu de naissance",
      "Au commissariat",
      "À France Travail",
      "À l'école maternelle"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : À la mairie du lieu de naissance."
  },
  "Quelle est l'une des conditions pour passer l'examen du permis de conduire ?": {
    "choices": [
      "Avoir l'âge requis et réussir les épreuves",
      "Être propriétaire d'une voiture",
      "Être marié",
      "Avoir un contrat de travail"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Avoir l'âge requis et réussir les épreuves."
  },
  "Un bail locatif est valide s'il est :": {
    "choices": [
      "Signé par le propriétaire et le locataire",
      "Seulement oral",
      "Signé uniquement par un voisin",
      "Rédigé sans l'accord du propriétaire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Signé par le propriétaire et le locataire."
  },
  "Où peut-on déposer un lave-vaisselle cassé ?": {
    "choices": [
      "En déchèterie ou auprès du service des encombrants",
      "Sur le trottoir sans prévenir",
      "Dans une rivière",
      "Dans la poubelle de tri papier"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : En déchèterie ou auprès du service des encombrants."
  },
  "Quel numéro d'urgence permet d'appeler la police ?": {
    "choices": [
      "17",
      "15",
      "18",
      "115"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 17."
  },
  "Concernant l'accès aux soins, quelle proposition est correcte ?": {
    "choices": [
      "Toute personne peut accéder aux soins selon les dispositifs prévus",
      "Les urgences sont réservées aux salariés",
      "On ne peut consulter qu'avec la nationalité française",
      "Les soins sont interdits aux mineurs"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Toute personne peut accéder aux soins selon les dispositifs prévus."
  },
  "À qui est accessible la contraception ?": {
    "choices": [
      "À toutes les personnes, femmes et hommes",
      "Aux femmes mariées uniquement",
      "Aux personnes majeures seulement",
      "Uniquement sur décision du maire"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : À toutes les personnes, femmes et hommes."
  },
  "Qu’est-ce que le principe de confidentialité dans le domaine de la santé ?": {
    "choices": [
      "Le secret des informations médicales du patient",
      "Le médecin peut tout publier",
      "L'employeur reçoit tous les résultats médicaux",
      "La mairie choisit les traitements"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le secret des informations médicales du patient."
  },
  "L'inscription à l'Assurance maladie est :": {
    "choices": [
      "Elle permet d'être remboursé des soins par l'Assurance maladie",
      "Une inscription à l'école",
      "Un permis de conduire",
      "Une carte d'électeur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Elle permet d'être remboursé des soins par l'Assurance maladie."
  },
  "Qui peut demander un congé parental d'éducation ?": {
    "choices": [
      "Le père ou la mère salarié",
      "Uniquement les grands-parents",
      "Uniquement l'employeur",
      "La commune à la place des parents"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le père ou la mère salarié."
  },
  "Quelles sont les affaires traitées par le conseil de prud'hommes ?": {
    "choices": [
      "Les litiges entre salariés et employeurs",
      "Les divorces",
      "Les infractions routières",
      "Les élections municipales"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les litiges entre salariés et employeurs."
  },
  "Travailler sans être déclaré est :": {
    "choices": [
      "Interdit",
      "Autorisé avec l'accord du salarié",
      "Obligatoire pour les petits emplois",
      "Un simple arrangement familial toujours légal"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Interdit."
  },
  "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :": {
    "choices": [
      "Il doit respecter les règles sur les heures supplémentaires",
      "Il peut l'imposer sans limite",
      "Il n'a aucune règle à respecter",
      "Il doit seulement prévenir oralement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Il doit respecter les règles sur les heures supplémentaires."
  },
  "Quelle est la mission de France Travail ?": {
    "choices": [
      "Accompagner les demandeurs d'emploi et les employeurs",
      "Rendre les jugements",
      "Délivrer les passeports",
      "Organiser les élections"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Accompagner les demandeurs d'emploi et les employeurs."
  },
  "Dans une entreprise, le droit syndical permet :": {
    "choices": [
      "D'adhérer à un syndicat et de défendre ses intérêts professionnels",
      "De remplacer l'employeur",
      "De refuser toute règle de sécurité",
      "De supprimer le contrat de travail"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : D'adhérer à un syndicat et de défendre ses intérêts professionnels."
  },
  "Dans une entreprise, le droit de grève autorise :": {
    "choices": [
      "De cesser collectivement le travail pour défendre des revendications",
      "À détruire le matériel",
      "À bloquer les secours",
      "À licencier l'employeur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : De cesser collectivement le travail pour défendre des revendications."
  },
  "Quelles sont les conditions pour toucher les allocations chômage ?": {
    "choices": [
      "Avoir travaillé suffisamment et être involontairement privé d'emploi",
      "Être volontairement sans activité sans condition",
      "N'avoir jamais travaillé",
      "Être uniquement étudiant"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Avoir travaillé suffisamment et être involontairement privé d'emploi."
  },
  "Qu'est-ce que l'école maternelle ?": {
    "choices": [
      "La première école des enfants, avant l'école élémentaire",
      "Une université",
      "Un tribunal pour enfants",
      "Une formation professionnelle pour adultes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : La première école des enfants, avant l'école élémentaire."
  },
  "Comment s'appelle le diplôme passé par les élèves à la fin du collège ?": {
    "choices": [
      "Le diplôme national du brevet",
      "Le baccalauréat",
      "La licence",
      "Le CAP systématiquement"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Le diplôme national du brevet."
  },
  "Les parents d'élève ont le droit de :": {
    "choices": [
      "Participer à la vie de l'école et être informés de la scolarité",
      "Choisir toutes les notes de leur enfant",
      "Interrompre les cours quand ils veulent",
      "Refuser le règlement intérieur"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Participer à la vie de l'école et être informés de la scolarité."
  },
  "Qui peut manger à la cantine scolaire ?": {
    "choices": [
      "Les élèves inscrits, selon les règles de la commune ou de l'établissement",
      "Seulement les enseignants",
      "Uniquement les élèves français",
      "Seulement les enfants ayant de bonnes notes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Les élèves inscrits, selon les règles de la commune ou de l'établissement."
  },
  "À quel âge commence l'instruction obligatoire des enfants ?": {
    "choices": [
      "3 ans",
      "6 ans",
      "10 ans",
      "16 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 3 ans."
  },
  "Quel est l'âge de la majorité ?": {
    "choices": [
      "18 ans",
      "16 ans",
      "21 ans",
      "25 ans"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : 18 ans."
  },
  "À l'école, il est interdit aux parents de :": {
    "choices": [
      "Perturber les cours ou imposer leurs convictions",
      "Être informés de la scolarité",
      "Participer aux élections de parents",
      "Rencontrer les enseignants"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Perturber les cours ou imposer leurs convictions."
  },
  "Quel motif d'absence est accepté par l'école ?": {
    "choices": [
      "Une maladie justifiée",
      "Une envie de rester à la maison",
      "Un départ en vacances hors calendrier sans motif",
      "Un refus des cours obligatoires"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Une maladie justifiée."
  },
  "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?": {
    "choices": [
      "Une amende pouvant aller jusqu'à 7 500 euros",
      "Une simple remarque sans sanction possible",
      "Un diplôme retiré aux parents",
      "Une interdiction définitive de scolariser l'enfant"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : Une amende pouvant aller jusqu'à 7 500 euros."
  },
  "Quand ont lieu les vacances scolaires de Noël ?": {
    "choices": [
      "En décembre, autour de Noël et du Nouvel An",
      "En juillet",
      "À la rentrée de septembre",
      "Pendant les élections européennes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : En décembre, autour de Noël et du Nouvel An."
  },
  "À l'école, un enfant en situation de handicap :": {
    "choices": [
      "A droit à une scolarisation adaptée",
      "Doit être refusé automatiquement",
      "Ne peut jamais être accompagné",
      "Doit attendre sa majorité pour apprendre"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Réponse attendue : A droit à une scolarisation adaptée."
  }
};

Object.entries(crChoices).forEach(([prompt, override]) => {
  window.questionOverrides[`CR::${prompt}`] = override;
});

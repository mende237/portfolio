import media from './media';

export const aboutMe = {
  name: "DIMITRI TCHAHEU TCHAHEU",
  image: media['moi.jpg'],
  nationality: "Camerounaise",
  birthDate: "20/01/2000",
  phone: "(+237) 693 724 250",
  email: "dimitritchaheutchaheu@gmail.com",
  address: "Etoug-Ebé, Yaoundé, Cameroun",
  profile: {
    en: "A passionate and detail-oriented developer with a Master's degree in Data Science and a strong foundation in transportation planning. Currently contributing to web and mobile development at CGWEB, I thrive on solving complex problems and building sustainable, technology-driven solutions.",
    fr: "Développeur passionné et soucieux du détail, titulaire d'un Master en Science des Données et d'une solide formation en planification des transports. Contribuant actuellement au développement web et mobile chez CGWEB, je m'épanouis dans la résolution de problèmes complexes et la création de solutions technologiques durables."
  },
  skills: [
    { name: "React", competence: 90, icon: "FaReact" },
    { name: "JavaScript", competence: 95, icon: "FaJsSquare" },
    { name: "Java", competence: 85, icon: "FaJava" },
    { name: "Spring Boot", competence: 80, icon: "FaLeaf" },
    { name: "PHP", competence: 75, icon: "FaPhp" },
    { name: "Data Analysis", competence: 85, icon: "FaChartBar" },
    { name: "Machine Learning", competence: 80, icon: "FaBrain" },
    { name: "CI/CD", competence: 70, icon: "FaGitAlt" },
    { name: "System Design", competence: 75, icon: "FaSitemap" },
    { name: "C Language", competence: 80, icon: "FaCode" }
  ],
  experiences: [
    {
      role: "Développeur Web",
      company: "CGWEB (Canada Global Web)",
      period: "01/01/2024 – en cours",
      location: "Canada",
    },
    {
      role: "Stage professionnel",
      company: "WVG",
      period: "20/05/2023 – 01/01/2024",
      location: "Yaoundé",
    },
    {
      role: "Stage académique",
      company: "BUNEC",
      period: "15/02/2022 – 30/08/2022",
      location: "Yaoundé",
    },
    {
      role: "Stage académique",
      company: "Team Information System SARL",
      period: "10/06/2021 – 05/09/2021",
      location: "Yaoundé",
    }
  ],
  education: [
    {
      degree: "Master Informatique Fondamental – Option Science des Données",
      institution: "Université de Yaoundé I",
      period: "2023 – 2025"
    },
    {
      degree: "Master en Planification des Transports",
      institution: "Ecole Nationale Supérieure des Travaux Publics",
      period: "2021 – 2023"
    },
    {
      degree: "Licence Informatique Fondamental – Option Génie Logiciel",
      institution: "Université de Yaoundé I",
      period: "2018 – 2021"
    },
    {
      degree: "Baccalauréat C",
      institution: "Lycée Bilingue d’Etoug-Ebé",
      period: "2017 – 2018"
    }
  ],
  languages: [
    { name: "Français", level: "Fluent" },
    { name: "Anglais", level: "Basic" }
  ],
  hobbies: [
    "Video Games",
    "Soccer & Running",
    "Tech Documentaries"
  ]
};

export const projects = [
  {
    id: "driv-covoiturage",
    title: "Driv Covoiturage (Admin & Client)",
    category: "Professional Work",
    date: "2025",
    thumbnail: media['driv-covoiturage-admin-home.png'],
    description: {
      en: "Developed UI, integrated APIs, and set up CI/CD pipelines for a large-scale ride-sharing platform's client and admin dashboards using React and WebSockets.",
      fr: "Développement de l'interface utilisateur, intégration des API et mise en place de pipelines CI/CD pour les tableaux de bord client et administrateur d'une plateforme de covoiturage à grande échelle utilisant React et WebSockets."
    },
    fullDescription: {
      en: "Within the company CGWEB (Canada Global Web) [https://cgweb.ca/] I had to intervene on these two projects.\n\n\nDriv-Admin-React (https://admin.drivcovoiturage.ca) is the administrative platform of “Driv Covoiturage”, a carpooling management solution. It allows administrators to supervise activities, manage trips and users, and monitor operational indicators using user-friendly dashboards and widgets.\n\nMy work in these two projects consisted of: implementing the graphical interfaces and integrating the APIs developed by the backend team, for the most part of the APIs the communication model used is HTTP however for some APIs websockets were used as well as the implementation of the CI/CD pipeline.",
      fr: "Au sein de l'entreprise CGWEB (Canada Global Web) [https://cgweb.ca/] j'ai eu à intervenir sur ces deux projets.\n\n\nDriv-Admin-React (https://admin.drivcovoiturage.ca) est la plateforme administrative de « Driv Covoiturage », une solution de gestion de covoiturage. Elle permet aux administrateurs de superviser les activités, de gérer les trajets et les utilisateurs, et de surveiller les indicateurs opérationnels à l'aide de tableaux de bord et de widgets conviviaux.\n\nMon travail dans ces deux projets consistait: à implementer les interfaces graphiques et intégrer les API dévoleppé par l'équipe backend, pour la grande partie des API le modèle de communication utilisé est le HTTP ce pendant pour certaines API les websockets ont été utilisées ainsi que la mise place du pipeline CI/CD."
    },
    tags: ["React", "JavaScript", "WebSockets", "CI/CD", "Stripe API", "Professional"],
    media: [
      { type: 'image', src: 'driv-covoiturage-client-home.png' },
      { type: 'image', src: 'driv-covoiturage-admin-login.png' },
      { type: 'image', src: 'driv-covoiturage-client-payment.png' },
      { type: 'image', src: 'driv-covoiturage-client-profile.png' },
      { type: 'image', src: 'driv-covoiturage-client-register.png' },
      { type: 'image', src: 'driv-covoiturage-client-rides_home.png' },
      { type: 'image', src: 'driv-covoiturage-client-rides.png' },
      { type: 'image', src: 'driv-covoiturage-client-transaction_history.png' }
    ],
    url: "https://drivcovoiturage.ca"
  },
  {
    id: "manager-food",
    title: "Manager Food Client App",
    category: "Professional Work",
    date: "2025",
    thumbnail: media['manager-food-menu.png'],
    description: {
      en: "Led frontend development for a restaurant management app, implementing features for menu browsing, order management, and payments with Stripe and WebSockets.",
      fr: "Dirigé le développement frontend d'une application de gestion de restaurant, en implémentant des fonctionnalités pour la navigation dans les menus, la gestion des commandes et les paiements avec Stripe et WebSockets."
    },
    fullDescription: {
      en: "Within the company CGWEB (Canada Global Web) [https://cgweb.ca/] I had to intervene on this project.\n\nThis project is a modern, feature-rich web application designed as the client-facing interface for a restaurant or food service management system. It allows customers to browse the menu, place orders, and manage their accounts.\n\nMy work in this project consisted of: implementing the graphical interfaces and integrating the APIs developed by the backend team, for the most part of the APIs the communication model used is HTTP however for some APIs websockets were used as well as the implementation of the CI/CD pipeline.",
      fr: "Au sein de l'entreprise CGWEB (Canada Global Web) [https://cgweb.ca/] j'ai eu à intervenir sur ce projet.\n\nCe projet est une application web moderne et riche en fonctionnalités conçue comme l'interface client d'un système de gestion de restaurant ou de service de restauration. Il permet aux clients de parcourir le menu, de passer des commandes et de gérer leurs comptes.\n\nMon travail dans ce projet consistait: à implementer les interfaces graphiques et intégrer les API dévoleppé par l'équipe backend, pour la grande partie des API le modèle de communication utilisé est le HTTP ce pendant pour certaines API les websockets ont été utilisées ainsi que la mise place du pipeline CI/CD."
    },
    tags: ["React", "JavaScript", "WebSockets", "Stripe API", "CI/CD", "Professional"],
    media: [
      { type: 'image', src: 'manager-food-home.png' },
      { type: 'image', src: 'manager-food-login.png' },
      { type: 'image', src: 'manager-food-menu.png' },
      { type: 'image', src: 'manager-food-profile.png' },
      { type: 'image', src: 'manager-food-update-profile.png' }
    ]
  },
  {
    id: "pedestrian-safety",
    title: "Pedestrian Safety Analysis in Yaoundé",
    category: "Academic Research",
    date: "2024",
    thumbnail: media['article.png'],
    description: {
      en: "Co-authored a study on urban pedestrian safety in Cameroon, utilizing PSI and GWI indexes to analyze road segments and propose a 7-year improvement strategy.",
      fr: "Co-auteur d'une étude sur la sécurité des piétons en milieu urbain au Cameroun, utilisant les indices PSI et GWI pour analyser les segments de route et proposer une stratégie d'amélioration sur 7 ans."
    },
    fullDescription: {
      en: "In Yaoundé, Cameroon, where walking dominates transport modes, pedestrian safety remains an issue as pedestrians account for a fair share of road traffic casualties, partly due to the lack of walking policies and pedestrian facilities safety data, hindering targeted intervention. This study used a pedestrian safety index (PSI) and the Global Walkability Index (GWI) to investigate 12 road segments frequented by diverse pedestrian groups. Indexes were graded from E—lowest to A—highest and analyzed using description and rank correlation. Main safety issues included lack of adequate and accessible sidewalks, bollards, pedestrian crossings, signage, shade, and street lighting. Only one segment (R7) achieved grade C, while the remainder scored D or E, indicating poor pedestrian safety conditions and an unpleasant walking experience. The correlation coefficient (0.69) between the PSI and GWI at a 99% significance level validated the safety assessment, providing confidence in the results. A seven-year (2024–2030) safety strategy is proposed to improve all roads to grade B. This strategy contains several interventions, including engineering improvement, which have been proven effective. This study offers evidence for city officials to improve pedestrian safety and informs walking policies and the implementation of upcoming projects. Future research should quantify the recommendations’ benefits and validate indexes with crash or conflict data.",
      fr: "À Yaoundé, au Cameroun, où la marche domine les modes de transport, la sécurité des piétons reste un problème car les piétons représentent une part équitable des victimes de la circulation routière, en partie à cause du manque de politiques de marche et de données sur la sécurité des installations pour piétons, ce qui entrave les interventions ciblées. Cette étude a utilisé un indice de sécurité des piétons (PSI) et l'indice mondial de marchabilité (GWI) pour étudier 12 segments de route fréquentés par divers groupes de piétons. Les indices ont été notés de E — le plus bas à A — le plus élevé et analysés à l'aide d'une description et d'une corrélation de rang. Les principaux problèmes de sécurité comprenaient le manque de trottoirs adéquats et accessibles, de bornes, de passages pour piétons, de signalisation, d'ombre et d'éclairage public. Un seul segment (R7) a obtenu la note C, tandis que les autres ont obtenu la note D ou E, ce qui indique de mauvaises conditions de sécurité pour les piétons et une expérience de marche désagréable. Le coefficient de corrélation (0,69) entre le PSI et le GWI à un niveau de signification de 99 % a validé l'évaluation de la sécurité, ce qui donne confiance dans les résultats. Une stratégie de sécurité sur sept ans (2024-2030) est proposée pour améliorer toutes les routes à la note B. Cette stratégie contient plusieurs interventions, y compris une amélioration technique, qui se sont avérées efficaces. Cette étude fournit des preuves aux responsables municipaux pour améliorer la sécurité des piétons et éclaire les politiques de marche et la mise en œuvre des projets à venir. Les recherches futures devraient quantifier les avantages des recommandations’ avantages et valider les indices avec des données sur les accidents ou les conflits."
    },
    tags: ["Urban Planning", "Data Analysis", "Road Safety", "GIS"],
    media: [
      { type: 'image', src: 'article.png' },
      { type: 'image', src: 'data collection presenting state of road  Predominant existing sidewalk condition on the road segments investigated:  existing sidewalk already in poor condition obstructed by cars and vendors;  total absence of sidewalk;.png' },
      { type: 'image', src: 'data collection presenting state of road existing sidewalk obstructed by motorcycles and vendors. lack of adequate sidewalk and obstruction of informal sidewalk (available space as well drainage)..png' },
      { type: 'image', src: 'Engineering intervention at road segment "Rue Elig Effa" to improve its pedestrian safety grade from E to A.png' },
      { type: 'image', src: 'Rank correlation of the 12 road segments  result.png' },
      { type: 'image', src: 'Ranking of the 12 road segments per PSI and GWI values result.png' }
    ],
    citation: {
      text: "Feudjio, S. L. T., Tchaheu, D. T., et al. (2024). Investigating and Improving Pedestrian Safety in an Urban Environment of a Low- or Middle-Income Country: A Case Study of Yaoundé, Cameroon. Future Transportation, 4(2), 548-578.",
      url: "https://doi.org/10.3390/futuretransp4020026"
    }
  },
  {
    id: "dassa-workshop",
    title: "Forced Alignment for Nda' Nda' Speech",
    category: "Academic Research",
    date: "2025",
    thumbnail: media['our article paper.png'],
    description: {
      en: "Developed a Triphone HMM model to improve automatic forced alignment for the low-resource Nda' Nda' language, achieving a Word Error Rate (WER) of 8.92%.",
      fr: "Développement d'un modèle HMM triphone pour améliorer l'alignement forcé automatique pour la langue Nda' Nda' à faibles ressources, atteignant un taux d'erreur de mot (WER) de 8,92 %."
    },
    fullDescription: {
      en: "Forced alignment is a technique for automatically synchronizing text and an audio recording. In this work, the aim was to propose a model to improve automatic forced alignment of speech in poorly endowed languages, in particular for the Nda' Nda' language, spoken in the West Cameroon region, while taking into account the tonal aspect. To achieve this goal, a triphone Hidden Markov Model (HMM) model was developed, trained with Mel-Frequency Cepstral Coefficients (MFCC) and pitch features, to which delta and delta-delta derivatives were added. A phonetic decision tree was used when training the triphone model, particularly during state fusion, with two groups of questions concerning phonemes with the same tones, tones with the same base vowels, and sound categories that describe the articulatory and acoustic characteristics of the phonemes; nasals and fricatives were taken into account. For the experiments, four models were trained: HMM monophone, HMM triphone, HMM triphone + Speaker Adaptive Training (SAT), and a hybrid HMM - Deep Neural Network (DNN) model. The best model was the HMM triphone, with a Word Error Rate (WER) of 8.92% and a median Phone Boundary Error (PBE) of 75.5 millisecond (ms).",
      fr: "L'alignement forcé est une technique permettant de synchroniser automatiquement un texte et un enregistrement audio. Dans ce travail, l'objectif était de proposer un modèle pour améliorer l'alignement forcé automatique de la parole dans les langues peu dotées, en particulier pour la langue Nda' Nda', parlée dans la région de l'Ouest du Cameroun, tout en tenant compte de l'aspect tonal. Pour atteindre cet objectif, un modèle de modèle de Markov caché (HMM) triphone a été développé, entraîné avec des coefficients cepstraux de fréquence Mel (MFCC) et des caractéristiques de hauteur, auxquels ont été ajoutés des dérivés delta et delta-delta. Un arbre de décision phonétique a été utilisé lors de l'entraînement du modèle triphone, en particulier lors de la fusion d'états, avec deux groupes de questions concernant les phonèmes avec les mêmes tons, les tons avec les mêmes voyelles de base et les catégories de sons qui décrivent les caractéristiques articulatoires et acoustiques des phonèmes ; les nasales et les fricatives ont été prises en compte. Pour les expériences, quatre modèles ont été entraînés : HMM monophone, HMM triphone, HMM triphone + Speaker Adaptive Training (SAT) et un modèle hybride HMM - Deep Neural Network (DNN). Le meilleur modèle était le HMM triphone, avec un taux d'erreur de mot (WER) de 8,92 % et une erreur de frontière de téléphone (PBE) médiane de 75,5 millisecondes (ms)."
    },
    tags: ["NLP", "Speech Processing", "HMM", "Low-Resource Languages"],
    media: [
      { type: 'image', src: 'moi presentant dassa1.jpg' },
      { type: 'image', src: 'moi presentant dassa.JPG' },
      { type: 'image', src: 'moi repondant aux question dassa.JPG' },
      { type: 'image', src: 'article header.png' },
      { type: 'image', src: 'model architecture.png' },
      { type: 'image', src: 'our article paper.png' },
      { type: 'image', src: 'PBE Results in ms (Mean; median) result.png' },
      { type: 'image', src: 'The 20 most frequent triphones on 117 result.png' },
      { type: 'image', src: 'Tone distribution result.png' },
      { type: 'image', src: 'WER result.png' }
    ],
    citation: {
      text: "Tchaheu Tchaheu, D., et al. (2025). A Triphone Hidden Markov Model for Forced Alignment of Nda’ Nda’ Speech. In Proceedings of Digital Avenues for Low-Resource Languages of Sub-Saharan Africa (DASSA’2025)."
    },
    url: "https://github.com/mende237/Nda-Nda-Force-Aligner"
  },
  {
    id: "code-competition",
    title: "Ride-Sharing App Backend",
    category: ["Code Competition"],
    date: "Competition",
    thumbnail: media['code-competition-certificat-de-participation.png'],
    description: {
      en: "Designed and built a microservices backend (Spring Boot) for a ride-sharing app during a CGWEB competition, securing third place for the team.",
      fr: "Conception et création d'un backend de microservices (Spring Boot) pour une application de covoiturage lors d'un concours CGWEB, assurant la troisième place à l'équipe."
    },
    fullDescription: {
      en: "The goal of this competition organized by CGWEB was to develop a carpooling and package delivery mobile application adapted to Canadian specificities. The application had to facilitate the connection between drivers with a vehicle and passengers looking for trips, as well as people wishing to send packages, while ensuring a smooth and secure user experience. We got third place.\n\nMy work throughout this competition was to implement a backend based on a microservice architecture, it included four microservices:\n\t- User management: this service had operations such as account creation, adding a vehicle, updating the profile, changing the password, etc.\n\t- Trip management: This service offered the possibility for a driver to create a trip, cancel a trip, publish a package transport request, etc.\n\t- Reservation management: This service allowed a driver to accept or reject a carpooling or package transport request, For a passenger to cancel their carpooling or package transport request\n\t- Chat: allowed users to exchange messages\n\nAll these microservices were developed using the Spring Boot framework",
      fr: "Le but de ce concours organisé par CGWEB était de développer une application mobile de covoiturage et de transport de colis adaptée aux spécificités Canadiennes. L'application devait faciliter la mise en relation entre les conducteurs disposant d'un véhicule et les passagers cherchant des trajets, ainsi que les personnes souhaitant envoyer des colis, tout en garantissant une expérience utilisateur fluide et sécurisée. Nous avons obtenu la troisième place.\n\nMon travail tout au long de ce concours était d'implémenter un backend basé sur une architecture micro service, elle comprenait quatre microservices:\n\t- Gestion des utilisateur: ce service disposait des opérations tels que la création de compte, l'ajout d'un véhicule, la mise jour du profile, modification du mot de passe, etc\n\t- Gestion des trajets: Ce service offrait la possibilité pour un conducteur de créer un trajet, annuler un trajet, publier une demande de transport de colis, etc \n\t- Gestion des reservation: Ce service permetait à un conducteur de d'accepter ou de rejeter une demande de covoiturage ou de transport de colis, Pour un passager d'annuler sa demande de covoiturage ou de transport de colis\n\t- Chat: permetait aux utilisateur d'échanger des messages\n\nTous ces microservices ont été développés à l'aide du framework spring boot"
    },
    tags: ["Backend", "Microservices", "Spring Boot", "Java", "Competition"],
    media: [
      { type: 'image', src: 'code-competition-certificat-de-participation.png' },
      { type: 'image', src: 'code-competition-backend-architechture.png' },
      { type: 'image', src: 'code-competition-home.png' },
      { type: 'image', src: 'code-competition-login.png' },
      { type: 'image', src: 'code-competition-register.png' },
      { type: 'image', src: 'code-competition-OTP-page.png' },
      { type: 'image', src: 'code-competition-add-vehicle.png' },
      { type: 'image', src: 'code-competition-add-ride.png' },
      { type: 'image', src: 'code-competition-find-ride.png' },
      { type: 'image', src: 'code-competition-ride-map.png' },
      { type: 'image', src: 'code-competition-profile.png' }
    ]
  },
  {
    id: "automat-manip",
    title: "Finite Automata Manipulator",
    category: "Personal Project",
    date: "2021 - Present",
    thumbnail: media['AFN to AFD view.png'],
    description: {
      en: "A desktop app for designing and testing finite automata, featuring a JavaFX GUI and a C-based backend for core algorithm execution.",
      fr: "Une application de bureau pour la conception et le test d'automates finis, dotée d'une interface graphique JavaFX et d'un backend en C pour l'exécution des algorithmes de base."
    },
    fullDescription: {
      en: "This project is a desktop application for designing, manipulating, and testing finite automata. It provides a graphical user interface to visualize automata and apply various standard algorithms.\n\n## Functionalities\n\nThe application allows users to perform the following operations:\n\n- **Automata Creation:** Create and edit Deterministic Finite Automata (AFD) and Non-deterministic Finite Automata (AFN), including those with epsilon-transitions.\n- **Regular Expression to Automaton:** Convert a regular expression into an equivalent Non-deterministic Finite Automaton (AFN) using Thomson's or Glushkov's construction algorithms.\n- **Determinization:** Convert a Non-deterministic Finite Automaton (AFN) into an equivalent Deterministic Finite Automaton (AFD).\n- **Minimization:** Minimize a Deterministic Finite Automaton (AFD) using Hopcroft's or Brzozowski's algorithms.\n- **Standard Operations:** Perform union, intersection, complement, and mirror operations on automata.\n- **Word Recognition:** Test if a given word is recognized by an automaton.\n- **Save/Load:** Save and load automata definitions to and from JSON files.\n\n## Technologies Used\n\nThe project is built with a separated front-end and back-end architecture.\n\n### Back-end\n\n- **Language:** C\n- **Core Logic:** The back-end implements the core algorithms for all automata operations. This includes data structures for representing automata (graphs, states, transitions) and the logic for transformations and analysis.\n- **Communication:** It communicates with the front-end, likely through a custom scheduler and messenger system that uses JSON as the data interchange format.\n\n### Front-end\n\n- **Language:** Java\n- **Framework:** The graphical user interface (GUI) is built using JavaFX.\n- **Build Tool:** The project is managed and built using Apache Maven.\n- **Architecture:** It follows a Model-View-Controller (MVC) pattern to separate the user interface from the application ...",
      fr: "Ce projet est une application de bureau pour la conception, la manipulation et le test d'automates finis. Il fournit une interface utilisateur graphique pour visualiser les automates et appliquer divers algorithmes standard.\n\n## Fonctionnalités\n\nL'application permet aux utilisateurs d'effectuer les opérations suivantes:\n\n- **Création d'automates:** Créez et modifiez des automates finis déterministes (AFD) et des automates finis non déterministes (AFN), y compris ceux avec des epsilon-transitions.\n- **Expression régulière en automate:** Convertissez une expression régulière en un automate fini non déterministe (AFN) équivalent à l'aide des algorithmes de construction de Thomson ou de Glushkov.\n- **Déterminisation:** Convertir un automate fini non déterministe (AFN) en un automate fini déterministe (AFD) équivalent.\n- **Minimisation:** Minimisez un automate fini déterministe (AFD) à l'aide des algorithmes de Hopcroft ou de Brzozowski.\n- **Opérations standard:** Effectuez des opérations d'union, d'intersection, de complément et de miroir sur les automates.\n- **Reconnaissance de mots:** Testez si un mot donné est reconnu par un automate.\n- **Enregistrer/Charger:** Enregistrez et chargez les définitions d'automates depuis et vers des fichiers JSON.\n\n## Technologies utilisées\n\nLe projet est construit avec une architecture front-end et back-end séparée.\n\n### Back-end\n\n- **Langue:** C\n- **Logique de base:** Le back-end implémente les algorithmes de base pour toutes les opérations sur les automates. Cela inclut les structures de données pour représenter les automates (graphes, états, transitions) et la logique pour les transformations et l'analyse.\n- **Communication:** Il communique avec le front-end, probablement via un planificateur et un système de messagerie personnalisés qui utilisent JSON comme format d'échange de données.\n\n### Front-end\n\n- **Langue:** Java\n- **Framework:** L'interface utilisateur graphique (GUI) est construite à l'aide de JavaFX.\n- **Outil de construction:** Le projet est géré et construit à l'aide d'Apache Maven.\n- **Architecture:** Il suit un modèle Modèle-Vue-Contrôleur (MVC) pour séparer l'interface utilisateur de l'application..."
    },
    tags: ["Desktop App", "Java", "JavaFX", "C", "Algorithms", "Compilers"],
    media: [
      { type: 'image', src: 'edit automat view.png' },
      { type: 'image', src: 'Thomson algorithm REG to AFN.png' },
      { type: 'image', src: 'AFN to AFD view.png' },
      { type: 'image', src: 'minimisation.png' }
    ],
    url: "https://github.com/mende237/automaton"
  },
  {
    id: "mario-game",
    title: "Mario JavaFX Game",
    category: "Personal Project",
    date: "2021 - Present",
    thumbnail: media['Screenshot_1.png'],
    description: {
      en: "A classic 2D platformer built with Java and JavaFX, featuring standard mechanics like player movement, enemies, and collectibles.",
      fr: "Un jeu de plateforme 2D classique créé avec Java et JavaFX, avec des mécanismes standard comme le mouvement du joueur, les ennemis et les objets à collectionner."
    },
    fullDescription: {
      en: "This project is a simple Mario-style platformer game built using Java and JavaFX. It captures classic 2D platformer gameplay, allowing players to control Mario, collect coins, and navigate levels with enemies.\n\n**Functionalities:**\n*   **Classic Platformer Mechanics:** The game features standard platformer movement, including walking left and right, and jumping.\n*   **Player Character:** A controllable Mario character.\n*   **Enemies:** The game includes classic enemies like \"Champignons\" (Goombas) and \"Turtles\" (Koopa Troopas).\n*   **Collectibles:** Players can collect animated coins throughout the level.\n*   **Game UI:** A user interface displays the score and a timer.\n*   **Game Flow:** Includes transitions for game over states and level restarts.\n*   **Controls:** The game is controlled via the keyboard.\n*   **Graphics and Sound:** Features custom pixel-art graphics for characters and environments, along with sound effects for key actions.\n*   **Core Language:** Java (Version 11)\n*   **GUI Framework:** JavaFX 13 is used for rendering the game visuals and handling the user interface.\n*   **Build Tool:** The project is managed by Apache Maven, which handles the build process and dependencies.",
      fr: "Ce projet est un jeu de plateforme simple de style Mario créé à l'aide de Java et de JavaFX. Il capture le gameplay classique des jeux de plateforme 2D, permettant aux joueurs de contrôler Mario, de collecter des pièces et de parcourir des niveaux avec des ennemis.\n\n**Fonctionnalités:**\n*   **Mécanismes de plateforme classiques:** Le jeu propose un mouvement de plateforme standard, y compris la marche à gauche et à droite, et le saut.\n*   **Personnage du joueur:** Un personnage Mario contrôlable.\n*   **Ennemis:** Le jeu comprend des ennemis classiques comme les \"Champignons\" (Goombas) et les \"Tortues\" (Koopa Troopas).\n*   **Objets à collectionner:** Les joueurs peuvent collecter des pièces animées tout au long du niveau.\n*   **Interface utilisateur du jeu:** Une interface utilisateur affiche le score et un chronomètre.\n*   **Déroulement du jeu:** Comprend des transitions pour les états de fin de partie et les redémarrages de niveau.\n*   **Contrôles:** Le jeu est contrôlé via le clavier.\n*   **Graphiques et son:** Comprend des graphiques pixel-art personnalisés pour les personnages et les environnements, ainsi que des effets sonores pour les actions clés.\n*   **Langage de base:** Java (version 11)\n*   **Framework GUI:** JavaFX 13 est utilisé pour le rendu des visuels du jeu et la gestion de l'interface utilisateur.\n*   **Outil de construction:** Le projet est géré par Apache Maven, qui gère le processus de construction et les dépendances."
    },
    tags: ["Game Development", "Java", "JavaFX", "Maven"],
    media: [
      { type: 'image', src: 'Screenshot_1.png' },
      { type: 'image', src: 'Screenshot_2.png' },
      { type: 'image', src: 'Screenshot_3.png' }
    ],
    url: "https://github.com/mende237/simple-mario-game"
  },
  {
    id: "ohdaa-giz",
    title: "OHDAA & GIZ - Public Health AI",
    category: "Data Science",
    date: "2025",
    thumbnail: media['photo de famille.jpg'],
    description: {
      en: "Developed predictive models for malaria, cholera, and rabies using multi-sectoral data, and created/presented AI/ML training materials for GIZ project workshops.",
      fr: "Développement de modèles prédictifs pour le paludisme, le choléra et la rage à l'aide de données multisectorielles, et création/présentation de supports de formation en IA/ML pour les ateliers du projet GIZ."
    },
    fullDescription: {
      en: "The GIZ OHDAA project aims to strengthen the “One Health for All” strategy in Cameroon by using multisectoral data (health, environment, climate, infrastructure) to:\n\t- anticipate epidemics\n\t- quickly detect disease outbreaks\n\t- improve health decision-making\nthanks to Artificial Intelligence (AI) and Machine Learning (ML). As part of this project, it was a question of analyzing the data provided in order to build prediction models based on the expectations of the sectorals, preparing training materials and tutorials for monitoring / training participants during the workshops.\n\nMy work in this project consisted of: writing training materials, developing predictive models and presenting the results during workshops.",
      fr: "Le projet OHDAA de la GIZ vise à renforcer la stratégie « Une seule santé pour tous » au Cameroun en exploitant les données multisectorielles (santé, environnement, climat, infrastructures) afin de :\n\t- anticiper les épidémies\n\t- détecter rapidement les foyers de maladies\n\t- améliorer la prise de décision sanitaire\ngrâce à l’Intelligence Artificielle (IA) et au Machine Learning (ML). Dans le cadre de ce projet il était question d’analyser les données fournies afin de construire des modèles de prédiction sur la base des attentes des sectoriels, préparer des supports de formation et des tutoriels pour le suivi /formation des participants pendant les ateliers.\n\nMon travail dans ce projet consistait: à la rédaction des supports de formation, au développement des modèles prédictifs et à la présentation des résultats lors des ateliers."
    },
    tags: ["Data Science", "Machine Learning", "AI", "Public Health", "Python"],
    media: [
      { type: 'video', src: 'ma presentation.mp4' },
      { type: 'video', src: 'ma presentation 2.mp4' },
      { type: 'video', src: 'aclamation.mp4' },
      { type: 'image', src: 'moi presentant1.jpg' },
      // { type: 'image', src: 'moi.jpg' },
      { type: 'image', src: 'photo de famille 2.jpg' },
      { type: 'image', src: 'photo de famille.jpg' },
      { type: 'image', src: 'resultat_choléra/Anomaly Score Distribution in Cholera Data.jpeg' },
      { type: 'image', src: 'resultat_paludisme/Anomaly Score Distribution in Malaria Data.jpeg' },
      { type: 'image', src: 'resultat_paludisme/Predicted vs Actual Malaria Cases.jpeg' },
      { type: 'image', src: 'resultat_rage/Distribution of predicted animal rabies cases on the map of Cameroon.jpeg' },
      { type: 'image', src: 'resultat_rage/Weekly Suspicious Case Predictions Using Poisson GLM.jpeg' }
    ]
  }
];

export const workshop = {
  title: "Workshop & Presentations",
  description: "I have had the opportunity to present my work at various workshops and conferences. Here are some of the highlights.",
  presentations: [
    {
      id: 1,
      title: "Forced Alignment for Nda' Nda' Speech",
      event: "Digital Avenues for Low-Resource Languages of Sub-Saharan Africa (DASSA’2025)",
      date: "2025",
      thumbnail: media['moi presentant dassa.jpg'],
      media: [
        { type: 'image', src: 'moi presentant dassa1.JPG' },
        { type: 'image', src: 'moi presentant dassa.JPG' },
        { type: 'image', src: 'moi repondant aux question dassa.JPG' },
        { type: 'image', src: 'article header.png' },
        { type: 'image', src: 'model architecture.png' },
        { type: 'image', src: 'our article paper.png' },
        { type: 'image', src: 'PBE Results in ms (Mean; median) result.png' },
        { type: 'image', src: 'The 20 most frequent triphones on 117 result.png' },
        { type: 'image', src: 'Tone distribution result.png' },
        { type: 'image', src: 'WER result.png' }
      ]
    },
    {
      id: 2,
      title: "Public Health AI Workshop",
      event: "OHDAA & GIZ Project",
      date: "2025",
      thumbnail: media['ma presentation 2.mp4'],
      media: [
        { type: 'video', src: 'ma presentation.mp4' },
        { type: 'video', src: 'ma presentation 2.mp4' },
        { type: 'video', src: 'aclamation.mp4' },
        { type: 'image', src: 'moi presentant1.jpg' },
        { type: 'image', src: 'moi.jpg' },
        { type: 'image', src: 'photo de famille 2.jpg' },
        { type: 'image', src: 'photo de famille.jpg' },
        { type: 'image', src: 'resultat_choléra/Anomaly Score Distribution in Cholera Data.jpeg' },
        { type: 'image', src: 'resultat_paludisme/Anomaly Score Distribution in Malaria Data.jpeg' },
        { type: 'image', src: 'resultat_paludisme/Predicted vs Actual Malaria Cases.jpeg' },
        { type: 'image', src: 'resultat_rage/Distribution of predicted animal rabies cases on the map of Cameroon.jpeg' },
        { type: 'image', src: 'resultat_rage/Weekly Suspicious Case Predictions Using Poisson GLM.jpeg' }
      ]
    }
  ]
};
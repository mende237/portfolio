import media from './media';

export const aboutMe = {
  name: "DIMITRI TCHAHEU TCHAHEU",
  image: media['moi.jpg'],
  nationality: "Camerounaise",
  birthDate: "20/01/2000",
  phone: "(+237) 693 724 250",
  email: "dimitritchaheutchaheu@gmail.com",
  address: "Etoug-Ebé, Yaoundé, Cameroun",
  profile: "A passionate and detail-oriented developer with a Master's degree in Data Science and a strong foundation in transportation planning. Currently contributing to web and mobile development at CGWEB, I thrive on solving complex problems and building sustainable, technology-driven solutions.",
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
      location: "Yaoundé",
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
      degree: "Master 2 Informatique Fondamental – Option Science des Données",
      institution: "Université de Yaoundé I",
      period: "2024 – 2025"
    },
    {
      degree: "Master en Planification des Transports",
      institution: "Ecole Nationale Supérieure des Travaux Publics",
      period: "2022 – 2023"
    },
    {
      degree: "Licence Informatique Fondamental – Option Génie Logiciel",
      institution: "Université de Yaoundé I",
      period: "2020 – 2021"
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
    description: "Developed UI, integrated APIs, and set up CI/CD pipelines for a large-scale ride-sharing platform's client and admin dashboards using React and WebSockets.",
    fullDescription: "Au sein de l'entreprise CGWEB (Canada Global Web) [https://cgweb.ca/] j'ai eu à intervenir sur ces deux projets.\n\n\nDriv-Admin-React (https://admin.drivcovoiturage.ca) est la plateforme administrative de « Driv Covoiturage », une solution de gestion de covoiturage. Elle permet aux administrateurs de superviser les activités, de gérer les trajets et les utilisateurs, et de surveiller les indicateurs opérationnels à l'aide de tableaux de bord et de widgets conviviaux.\n\nMon travail dans ces deux projets consistait: à implementer les interfaces graphiques et intégrer les API dévoleppé par l'équipe backend, pour la grande partie des API le modèle de communication utilisé est le HTTP ce pendant pour certaines API les websockets ont été utilisées ainsi que la mise place du pipeline CI/CD.",
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
    description: "Led frontend development for a restaurant management app, implementing features for menu browsing, order management, and payments with Stripe and WebSockets.",
    fullDescription: "Au sein de l'entreprise CGWEB (Canada Global Web) [https://cgweb.ca/] j'ai eu à intervenir sur ce projet.\n\nThis project is a modern, feature-rich web application designed as the client-facing interface for a restaurant or food service management system. It allows customers to browse the menu, place orders, and manage their accounts.\n\nMon travail dans ce projet consistait: à implementer les interfaces graphiques et intégrer les API dévoleppé par l'équipe backend, pour la grande partie des API le modèle de communication utilisé est le HTTP ce pendant pour certaines API les websockets ont été utilisées ainsi que la mise place du pipeline CI/CD.",
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
    description: "Co-authored a study on urban pedestrian safety in Cameroon, utilizing PSI and GWI indexes to analyze road segments and propose a 7-year improvement strategy.",
    fullDescription: "In Yaoundé, Cameroon, where walking dominates transport modes, pedestrian safety remains an issue as pedestrians account for a fair share of road traffic casualties, partly due to the lack of walking policies and pedestrian facilities safety data, hindering targeted intervention. This study used a pedestrian safety index (PSI) and the Global Walkability Index (GWI) to investigate 12 road segments frequented by diverse pedestrian groups. Indexes were graded from E—lowest to A—highest and analyzed using description and rank correlation. Main safety issues included lack of adequate and accessible sidewalks, bollards, pedestrian crossings, signage, shade, and street lighting. Only one segment (R7) achieved grade C, while the remainder scored D or E, indicating poor pedestrian safety conditions and an unpleasant walking experience. The correlation coefficient (0.69) between the PSI and GWI at a 99% significance level validated the safety assessment, providing confidence in the results. A seven-year (2024–2030) safety strategy is proposed to improve all roads to grade B. This strategy contains several interventions, including engineering improvement, which have been proven effective. This study offers evidence for city officials to improve pedestrian safety and informs walking policies and the implementation of upcoming projects. Future research should quantify the recommendations’ benefits and validate indexes with crash or conflict data.",
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
    description: "Developed a Triphone HMM model to improve automatic forced alignment for the low-resource Nda' Nda' language, achieving a Word Error Rate (WER) of 8.92%.",
    fullDescription: "Forced alignment is a technique for automatically synchronizing text and an audio recording. In this work, the aim was to propose a model to improve automatic forced alignment of speech in poorly endowed languages, in particular for the Nda' Nda' language, spoken in the West Cameroon region, while taking into account the tonal aspect. To achieve this goal, a triphone Hidden Markov Model (HMM) model was developed, trained with Mel-Frequency Cepstral Coefficients (MFCC) and pitch features, to which delta and delta-delta derivatives were added. A phonetic decision tree was used when training the triphone model, particularly during state fusion, with two groups of questions concerning phonemes with the same tones, tones with the same base vowels, and sound categories that describe the articulatory and acoustic characteristics of the phonemes; nasals and fricatives were taken into account. For the experiments, four models were trained: HMM monophone, HMM triphone, HMM triphone + Speaker Adaptive Training (SAT), and a hybrid HMM - Deep Neural Network (DNN) model. The best model was the HMM triphone, with a Word Error Rate (WER) of 8.92% and a median Phone Boundary Error (PBE) of 75.5 millisecond (ms).",
    tags: ["NLP", "Speech Processing", "HMM", "Low-Resource Languages"],
    media: [
      { type: 'image', src: 'moi presentant1.jpg' },
      { type: 'image', src: 'moi presentant.JPG' },
      { type: 'image', src: 'moi repondant aux question.JPG' },
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
    }
  },
  {
    id: "code-competition",
    title: "Ride-Sharing App Backend",
    category: "Software Development",
    date: "Competition",
    thumbnail: media['code-competition-backend-architechture.png'],
    description: "Designed and built a microservices backend (Spring Boot) for a ride-sharing app during a CGWEB competition, securing third place for the team.",
    fullDescription: "Le but de ce concours organisé par CGWEB était de développer une application mobile de covoiturage et de transport de colis adaptée aux spécificités Canadiennes. L'application devait faciliter la mise en relation entre les conducteurs disposant d'un véhicule et les passagers cherchant des trajets, ainsi que les personnes souhaitant envoyer des colis, tout en garantissant une expérience utilisateur fluide et sécurisée. Nous avons obtenu la troisième place.\n\nMon travail tout au long de ce concours était d'implémenter un backend basé sur une architecture micro service, elle comprenait quatre microservices:\n\t- Gestion des utilisateur: ce service disposait des opérations tels que la création de compte, l'ajout d'un véhicule, la mise jour du profile, modification du mot de passe, etc\n\t- Gestion des trajets: Ce service offrait la possibilité pour un conducteur de créer un trajet, annuler un trajet, publier une demande de transport de colis, etc \n\t- Gestion des reservation: Ce service permetait à un conducteur de d'accepter ou de rejeter une demande de covoiturage ou de transport de colis, Pour un passager d'annuler sa demande de covoiturage ou de transport de colis\n\t- Chat: permetait aux utilisateur d'échanger des messages\n\nTous ces microservices ont été développés à l'aide du framework spring boot",
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
    description: "A desktop app for designing and testing finite automata, featuring a JavaFX GUI and a C-based backend for core algorithm execution.",
    fullDescription: "This project is a desktop application for designing, manipulating, and testing finite automata. It provides a graphical user interface to visualize automata and apply various standard algorithms.\n\n## Functionalities\n\nThe application allows users to perform the following operations:\n\n- **Automata Creation:** Create and edit Deterministic Finite Automata (AFD) and Non-deterministic Finite Automata (AFN), including those with epsilon-transitions.\n- **Regular Expression to Automaton:** Convert a regular expression into an equivalent Non-deterministic Finite Automaton (AFN) using Thomson's or Glushkov's construction algorithms.\n- **Determinization:** Convert a Non-deterministic Finite Automaton (AFN) into an equivalent Deterministic Finite Automaton (AFD).\n- **Minimization:** Minimize a Deterministic Finite Automaton (AFD) using Hopcroft's or Brzozowski's algorithms.\n- **Standard Operations:** Perform union, intersection, complement, and mirror operations on automata.\n- **Word Recognition:** Test if a given word is recognized by an automaton.\n- **Save/Load:** Save and load automata definitions to and from JSON files.\n\n## Technologies Used\n\nThe project is built with a separated front-end and back-end architecture.\n\n### Back-end\n\n- **Language:** C\n- **Core Logic:** The back-end implements the core algorithms for all automata operations. This includes data structures for representing automata (graphs, states, transitions) and the logic for transformations and analysis.\n- **Communication:** It communicates with the front-end, likely through a custom scheduler and messenger system that uses JSON as the data interchange format.\n\n### Front-end\n\n- **Language:** Java\n- **Framework:** The graphical user interface (GUI) is built using JavaFX.\n- **Build Tool:** The project is managed and built using Apache Maven.\n- **Architecture:** It follows a Model-View-Controller (MVC) pattern to separate the user interface from the application ... [truncated]",
    tags: ["Desktop App", "Java", "JavaFX", "C", "Algorithms", "Compilers"],
    media: [
      { type: 'image', src: 'edit automat view.png' },
      { type: 'image', src: 'Thomson algorithm REG to AFN.png' },
      { type: 'image', src: 'AFN to AFD view.png' },
      { type: 'image', src: 'minimisation.png' }
    ]
  },
  {
    id: "mario-game",
    title: "Mario JavaFX Game",
    category: "Personal Project",
    date: "2021 - Present",
    thumbnail: media['Screenshot_1.png'],
    description: "A classic 2D platformer built with Java and JavaFX, featuring standard mechanics like player movement, enemies, and collectibles.",
    fullDescription: "This project is a simple Mario-style platformer game built using Java and JavaFX. It captures classic 2D platformer gameplay, allowing players to control Mario, collect coins, and navigate levels with enemies.\n\n**Functionalities:**\n*   **Classic Platformer Mechanics:** The game features standard platformer movement, including walking left and right, and jumping.\n*   **Player Character:** A controllable Mario character.\n*   **Enemies:** The game includes classic enemies like \"Champignons\" (Goombas) and \"Turtles\" (Koopa Troopas).\n*   **Collectibles:** Players can collect animated coins throughout the level.\n*   **Game UI:** A user interface displays the score and a timer.\n*   **Game Flow:** Includes transitions for game over states and level restarts.\n*   **Controls:** The game is controlled via the keyboard.\n*   **Graphics and Sound:** Features custom pixel-art graphics for characters and environments, along with sound effects for key actions.\n\n**Technologies Used:**\n*   **Core Language:** Java (Version 11)\n*   **GUI Framework:** JavaFX 13 is used for rendering the game visuals and handling the user interface.\n*   **Build Tool:** The project is managed by Apache Maven, which handles the build process and dependencies.",
    tags: ["Game Development", "Java", "JavaFX", "Maven"],
    media: [
      { type: 'image', src: 'Screenshot_1.png' },
      { type: 'image', src: 'Screenshot_2.png' },
      { type: 'image', src: 'Screenshot_3.png' }
    ]
  },
  {
    id: "ohdaa-giz",
    title: "OHDAA & GIZ - Public Health AI",
    category: "Data Science",
    date: "2025",
    thumbnail: media['ma presentation 2.mp4'],
    description: "Developed predictive models for malaria, cholera, and rabies using multi-sectoral data, and created/presented AI/ML training materials for GIZ project workshops.",
    fullDescription: "Le projet OHDAA de la GIZ vise à renforcer la stratégie « Une seule santé pour tous » au Cameroun en exploitant les données multisectorielles (santé, environnement, climat, infrastructures) afin de :\n\t- anticiper les épidémies\n\t- détecter rapidement les foyers de maladies\n\t- améliorer la prise de décision sanitaire\ngrâce à l’Intelligence Artificielle (IA) et au Machine Learning (ML). Dans le cadre de ce projet il était question d’analyser les données fournies afin de construire des modèles de prédiction sur la base des attentes des sectoriels, préparer des supports de formation et des tutoriels pour le suivi /formation des participants pendant les ateliers.\n\nMon travail dans ce projet consistait: à la rédaction des supports de formation, au développement des modèles prédictifs et à la présentation des résultats lors des ateliers.",
    tags: ["Data Science", "Machine Learning", "AI", "Public Health", "Python"],
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
];
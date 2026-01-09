export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  isApprenticeship?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: "apprenticeship" | "internship" | "contract";
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  isExchange?: boolean;
}

export interface Activity {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: "sprint",
    title: "S-PRINT",
    description: "Refactorisation d'une application de reporting pour le Grand Paris Express. Développement, maintenance et structuration de l'affichage des données de projet.",
    technologies: ["PHP (Symfony)", "JavaScript (Next.js)", "PostgreSQL"],
    isApprenticeship: true,
  },
  {
    id: "fifa",
    title: "FIFA World Cup",
    description: "Consolidation de deux bases de données FIFA : nettoyage, fusion, transformation et analyse exploratoire des données. Mise en place d'un pipeline automatisé pour produire des insights clairs.",
    technologies: ["Python", "Pandas", "Streamlit", "Parquet"],
  },
  {
    id: "insee",
    title: "Analyse Data Science - INSEE",
    description: "Analyse d'une base de données INSEE : nettoyage, exploration, requêtes SQL et visualisation des résultats. Rédaction d'un rapport synthétique présentant les principaux résultats.",
    technologies: ["Python", "SQL", "Excel"],
  },
  {
    id: "echoloop",
    title: "EchoLoop",
    description: "Plateforme web de mise en relation entre DJs et organisateurs d'événements. Gestion de profils, candidatures, opportunités et interactions communautaires.",
    technologies: ["HTML", "CSS", "JavaScript", "Java"],
  },
  {
    id: "domuswap",
    title: "DomuSwap",
    description: "Application web de type Airbnb permettant la recherche et la publication d'hébergements privés, avec gestion des utilisateurs et des annonces.",
    technologies: ["HTML", "CSS", "JavaScript", "Java"],
  },
  {
    id: "cintax",
    title: "Cintax - Carte interactive d'accessibilité",
    description: "Développement d'une carte filtrant les lieux accessibles aux personnes en situation de handicap, avec affichage dynamique selon les critères sélectionnés.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const experiences: Experience[] = [
  {
    id: "sgp",
    title: "Développeuse Full-Stack en Alternance — Société des Grands Projets",
    company: "Société des Grands Projets",
    location: "Saint-Denis, France",
    startDate: "Sept 2024",
    endDate: "Sept 2026",
    type: "apprenticeship",
    responsibilities: [
      "Développé et maintenu S-PRINT, une plateforme data-driven interne utilisée pour surveiller l'impact économique et social des entreprises contractantes sur le Grand Paris Express.",
      "Conçu et implémenté une architecture full-stack containerisée (Symfony, Next.js, PostgreSQL, Docker, Nginx) utilisée en production.",
      "Construit des APIs REST documentées avec OpenAPI/Swagger et intégrées avec des tableaux de bord interactifs pour le support décisionnel.",
      "Conçu et optimisé des schémas et requêtes PostgreSQL pour centraliser des indicateurs clés (empreinte économique, emploi, métriques RSE).",
      "Mis en place des pipelines CI/CD avec GitLab, permettant des déploiements automatisés et une livraison stable.",
    ],
  },
  {
    id: "fadel",
    title: "Stage",
    company: "Équipe d'Assurance Qualité, FADEL",
    location: "Beyrouth, Liban",
    startDate: "Juin 2023",
    endDate: "Août 2023",
    type: "internship",
    responsibilities: [
      "Développement et exécution de tests d'automatisation sur la page web de l'entreprise en utilisant Eclipse Selenium et ChromeDriver.",
      "Identification et documentation des bugs concernant la page web FADEL.",
    ],
  },
  {
    id: "foch",
    title: "Gestionnaire de clientèle - Hôpital Foch",
    company: "Hôpital Foch",
    location: "Suresnes, France",
    startDate: "Janvier 2023",
    endDate: "Février 2023",
    type: "contract",
    responsibilities: [
      "Responsable de la saisie des données patients dans le système hospitalier via le logiciel Portail.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "isep",
    degree: "Diplômée en Ingénierie du numérique, spécialisée en génie logiciel",
    institution: "ISEP, Grande École d'ingénieurs du numérique",
    location: "Paris, France",
    startDate: "Septembre 2021",
    endDate: "Juin 2025",
  },
  {
    id: "belgrano",
    degree: "Programme d'échange académique",
    institution: "Universidad Belgrano",
    location: "Buenos Aires, Argentine",
    startDate: "Février 2026",
    endDate: "Avril 2026",
    isExchange: true,
  },
  {
    id: "cvut",
    degree: "Programme d'échange académique",
    institution: "University of Technology Prague (CVUT)",
    location: "Prague, République Tchèque",
    startDate: "Février 2023",
    endDate: "Juin 2023",
    isExchange: true,
  },
];

export const activities: Activity[] = [
  {
    id: "bde",
    title: "Membre du BDE",
    organization: "BDE ISEP",
    location: "Paris, France",
    startDate: "Avril 2023",
    endDate: "Mai 2024",
    description: [
      "Membre du Bureau des Étudiants de l'ISEP en tant que Responsable Écologie.",
    ],
  },
  {
    id: "scouts",
    title: "Scouts de France",
    organization: "Scouts de France",
    location: "Issy les Moulineaux, France",
    startDate: "Juillet 2022",
    endDate: "Juillet 2023",
    description: [
      "Cheftaine du groupe Mar Maroun - Issy les Moulineaux.",
      "Organisation et participation au camp d'été 2022 en Survie Normandie pour les jeunes de 14 à 17 ans.",
      "Nettoyage d'un sentier de randonnée.",
    ],
  },
];

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Material UI"],
  backend: ["PHP (Symfony)", "Python", "Node.js"],
  database: ["SQL", "PostgreSQL", "Parquet"],
  data: ["Pandas", "Streamlit", "Microsoft Excel / Office"],
  tools: ["Git", "Docker", "VS Code", "Eclipse"],
  soft: [
    "Communication",
    "Prise de décision",
    "Résolution de problème",
    "Travail en équipe",
    "Gestion du temps",
    "Adaptabilité",
  ],
};

export const languages = [
  { name: "Français", level: "Bilingue" },
  { name: "Anglais", level: "Bilingue" },
  { name: "Arabe", level: "Langue Maternelle" },
  { name: "Espagnol", level: "Intermédiaire" },
];

export const contactInfo = {
  email: "hajjarsacha@gmail.com",
  linkedin: "Sacha Hajjar",
  phone: "+33 7 66 78 71 57",
  location: "Paris, France",
};


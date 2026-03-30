export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Blog Dynamique — Laravel",
    period: "2024",
    tags: ["Laravel", "PHP", "MySQL", "MVC"],
    summary:
      "Application web avec gestion des utilisateurs, authentification, création et organisation d'articles et catégories. Architecture MVC avec base de données MySQL.",
  },
  {
    title: "Gestion d'Atelier Auto",
    period: "2024",
    tags: ["Java", "Swing", "JPA", "Hibernate"],
    summary:
      "Application desktop de gestion d'atelier automobile : suivi clients, véhicules et réparations, calcul automatique des coûts et statistiques visuelles.",
  },
  {
    title: "Gestion du Bétail Agricole",
    period: "2023",
    tags: ["SQL", "MCD", "MLD", "PostgreSQL"],
    summary:
      "Analyse des besoins, modélisation de base de données (MCD, MLD), création des tables avec contraintes d'intégrité et requêtes SQL avancées.",
  },
  {
    title: "Mini-projet Réseau Informatique",
    period: "2023",
    tags: ["Réseaux", "IP", "Routage"],
    summary:
      "Conception d'un réseau reliant un siège et plusieurs agences avec plan d'adressage IP, routage et services réseau inter-sites.",
  },
];
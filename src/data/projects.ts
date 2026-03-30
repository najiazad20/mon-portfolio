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
    title: "Gestion d'Atelier Auto",
    period: "2024",
    tags: ["Java", "Swing", "JPA", "Hibernate"],
    summary:
      "Application desktop de gestion d'atelier automobile : suivi clients, véhicules et réparations, calcul automatique des coûts et statistiques visuelles.",
  },
  {
    title: "Blog Dynamique — Laravel",
    period: "2024",
    tags: ["Laravel", "PHP", "MySQL", "MVC"],
    summary:
      "Application web avec gestion des utilisateurs, authentification, création et organisation d'articles et catégories. Architecture MVC avec base de données MySQL.",
  },

  {
    title: "Gestion du Bétail Agricole",
    period: "2023",
    tags: ["SQL", "MCD", "MLD", ],
    summary:
      "Analyse des besoins, modélisation de base de données (MCD, MLD), création des tables avec contraintes d'intégrité et requêtes SQL avancées.",
  },

];
export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques",
    degree: "Licence",
    field: "Systèmes d'Informations Répartis (SIR)",
    location: "Marrakech",
    start: "2025-09",
    courses: ["Systèmes répartis", "Développement web", "Bases de données avancées", "Réseaux"],
    highlights: ["En cours · Recherche d'un stage PFE"],
  },
  {
    school: "Faculté des Sciences et Techniques Guéliz",
    degree: "DEUST",
    field: "Mathématiques, Informatique, Physique et Chimie (MIPC)",
    location: "Marrakech",
    start: "2022-09",
    end: "2025-06",
    courses: ["Algorithmique", "Programmation Java", "Bases de données", "Réseaux informatiques"],
  },
  {
    school: "Lycée Al Qods",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Chemaia",
    start: "2021-09",
    end: "2022-06",
  },
];
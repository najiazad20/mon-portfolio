export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MliaEdu",
    issueDate: "2024-01",
    skills: ["React.js", "JavaScript", "HTML", "CSS"],
    tags: ["Front-End", "Web"],
    status: "active",
  },
  {
    title: "Hibernate et JPA",
    issuer: "MliaEdu",
    issueDate: "2024-01",
    skills: ["Hibernate", "JPA", "Java", "ORM"],
    tags: ["Back-End", "Java"],
    status: "active",
  },
  {
    title: "Développement JakartaEE : Spring",
    issuer: "MliaEdu",
    issueDate: "2024-01",
    skills: ["Spring Boot", "Jakarta EE", "REST API"],
    tags: ["Back-End", "Java"],
    status: "active",
  },
];
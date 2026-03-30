import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <section>
      <Helmet><title>Parcours — Portfolio</title></Helmet>
      <h2 className="text-2xl font-bold mb-6">Parcours</h2>
      <p className="text-zinc-500 dark:text-zinc-400">
        Expériences professionnelles à compléter.
      </p>
    </section>
  );
}
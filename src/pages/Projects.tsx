import { Helmet } from "react-helmet-async";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section>
      <Helmet><title>Projets — Portfolio</title></Helmet>

      <h2 className="text-2xl font-bold mb-6">Projets</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-600 transition"
          >
            {p.period && (
              <span className="text-xs text-zinc-400">{p.period}</span>
            )}
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
              {p.title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
              {p.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-2">
                  Demo ↗
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer"
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-2">
                  Code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
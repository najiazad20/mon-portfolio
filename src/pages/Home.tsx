import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { profile } from "@/data/profile";
export default function Home() {
  return (
    <section className="flex flex-col justify-center min-h-[70vh]">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={profile.about} />
      </Helmet>

      <div className="max-w-2xl">
        <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-2">
          Disponible pour opportunités
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
          {profile.role}
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {profile.about}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="px-5 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            Voir les projets
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-xl text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Me contacter
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full border border-zinc-200 dark:border-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
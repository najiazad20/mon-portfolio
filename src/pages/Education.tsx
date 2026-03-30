import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section>
      <Helmet><title>Formations — Portfolio</title></Helmet>
      <h2 className="text-2xl font-bold mb-8">Formations</h2>

      <ol className="relative border-l border-zinc-200 dark:border-zinc-700 ml-3">
        {education.map((e) => (
          <li key={e.school + e.start} className="mb-8 ml-6">
            <div className="absolute -left-2 mt-1 w-4 h-4 rounded-full bg-zinc-900 dark:bg-zinc-100 border-2 border-white dark:border-zinc-950" />

            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {e.degree}{e.field ? ` — ${e.field}` : ""} @ {e.school}
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              {fmt(e.start)} → {fmt(e.end)}{e.location ? ` · ${e.location}` : ""}
            </p>

            {e.courses && e.courses.length > 0 && (
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-medium">Cours :</span>{" "}
                {e.courses.slice(0, 5).join(", ")}
              </p>
            )}

            {e.highlights && e.highlights.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                {e.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
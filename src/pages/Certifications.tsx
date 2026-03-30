import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import { useState, useMemo } from "react";

function fmt(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section>
      <Helmet><title>Certifications — Portfolio</title></Helmet>

      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <input
          type="text"
          placeholder="Filtrer (ex: AWS, Kubernetes…)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2 text-sm w-64 bg-white dark:bg-zinc-900 outline-none focus:border-zinc-400 transition"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((c) => (
          <article
            key={c.title + c.issueDate}
            className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 leading-snug">
              {c.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              {c.issuer} · {fmt(c.issueDate)}
            </p>

            {c.skills && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span key={s} className="text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500">
                    {s}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-4 flex items-center gap-3">
              {c.credentialUrl && (
                <a href={c.credentialUrl} target="_blank" rel="noreferrer"
                  className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-2">
                  Voir le certificat ↗
                </a>
              )}
              {c.status === "active" && (
                <span className="text-xs px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full">
                  Actif
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
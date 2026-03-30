import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="max-w-lg">
      <Helmet><title>Contact — Portfolio</title></Helmet>
      <h2 className="text-2xl font-bold mb-6">Contact</h2>

      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        N'hésitez pas à me contacter pour toute opportunité ou collaboration.
      </p>

      <div className="flex flex-col gap-3">
        <a href={`mailto:${profile.email}`}
          className="flex items-center gap-3 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition text-sm">
          📧 {profile.email}
        </a>
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            className="flex items-center gap-3 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition text-sm">
            🔗 {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
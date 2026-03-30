import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <header className="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
          <NavLink to="/" className="font-semibold tracking-tight">
            ◆ MonPortfolio
          </NavLink>
          <div className="flex items-center gap-1 text-sm">
  {/* ... tes NavLinks existants ... */}
  <ThemeToggle />
</div>
          <div className="flex items-center gap-1 text-sm">
            {[
              { to: "/projects", label: "Projets" },
              { to: "/experience", label: "Parcours" },
              { to: "/education", label: "Formations" },
              { to: "/certifications", label: "Certifications" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-zinc-100 dark:bg-zinc-800 font-medium"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()}  Zad Najia 
      </footer>
    </div>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { achievements, routes } from "@/content/site";
import { GlobalMenu, SkipLink } from "@/components/site/GlobalMenu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/achievements")({
  head: () => seo("Achievements", "Ujjwal's milestones scrapbook — including participation in INNOTECH'26.", "/achievements"),
  component: Achievements,
});

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

function Achievements() {
  return (
    <div className="theme-root theme-ach scrap-bg">
      <SkipLink />
      <header className="mx-auto flex max-w-6xl items-end justify-between px-5 pt-6">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-1">
            {routes.map((r, i) => (
              <li key={r.to}>
                <Link
                  to={r.to}
                  activeOptions={{ exact: r.to === "/" }}
                  activeProps={{ "aria-current": "page", className: "!bg-card -translate-y-1" }}
                  className={`block rounded-t-lg border-2 border-b-0 border-line px-4 pt-2 pb-3 text-sm font-bold transition-transform hover:-translate-y-1 ${i % 2 ? "bg-muted" : "bg-background"}`}
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <span className="font-display text-xl md:hidden">Ujjwal's scrapbook</span>
        <GlobalMenu className="md:hidden" />
      </header>
      <main id="main" className="mx-auto max-w-6xl border-t-2 border-line px-5 pt-14 pb-24">
        <h1 className="font-display text-6xl text-primary md:text-8xl">Milestones</h1>
        <p className="mt-3 max-w-lg text-lg">A small, honest collection. Pages left blank on purpose — they're for what's next.</p>
        <ul className="mt-16 grid gap-14 md:grid-cols-3">
          {achievements.map((a) => (
            <li key={a.title} className={`relative bg-card p-6 pt-10 shadow-[6px_8px_0_var(--muted)] ${tilts[0]} md:col-span-2`}>
              <span className="tape" aria-hidden />
              <div className="flex flex-wrap items-start justify-between gap-6">
                <h2 className="font-display text-5xl md:text-6xl">{a.title}</h2>
                <span className="stamp px-3 py-1 font-bold uppercase">{a.kind}</span>
              </div>
              <p className="mt-6 text-lg">{a.body}</p>
            </li>
          ))}
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className={`relative grid min-h-48 place-items-center border-2 border-dashed border-line/40 p-6 text-center ${tilts[n % 4]}`}>
              <span className="tape opacity-60" aria-hidden />
              <p className="font-display text-2xl text-muted-foreground">Future milestone<br /><span className="font-body text-sm">space reserved</span></p>
            </li>
          ))}
        </ul>
        <p className="mt-16">Want to see the work behind these? <Link to="/projects" className="font-bold text-accent underline">Browse projects →</Link></p>
      </main>
    </div>
  );
}
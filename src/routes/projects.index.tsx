import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { projects, type ProjectCategory } from "@/content/site";
import { FloatingNav } from "@/components/site/FloatingNav";
import { SkipLink } from "@/components/site/GlobalMenu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () => seo("Projects", "Selected builds by Ujjwal: DEVSCOUT V2, AERONEX, VaultX and a Weather App — with honest status labels.", "/projects"),
  component: Projects,
});

const filters = ["All", "Software", "AI", "IoT"] as const;

function Projects() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = f === "All" ? projects : projects.filter((p) => p.categories.includes(f as ProjectCategory));
  return (
    <div className="theme-root theme-projects dots-bg pb-24">
      <SkipLink />
      <FloatingNav />
      <main id="main" className="mx-auto max-w-6xl px-5 pt-16">
        <h1 className="font-display text-[18vw] leading-[0.85] font-bold tracking-tighter md:text-[10rem]">
          WORK<span className="text-accent">*</span>
        </h1>
        <p className="mt-4 max-w-lg text-lg font-medium">Things I've built, am building, or am still figuring out. Status labels are honest.</p>
        <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-3">
          {filters.map((x) => (
            <button key={x} type="button" className="chip" aria-pressed={f === x} onClick={() => setF(x)}>
              {x}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
        <ul className="mt-12 grid gap-10 md:grid-cols-2">
          {list.map((p, i) => (
            <li key={p.slug} className={i % 2 ? "md:mt-16" : ""}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="brutal brutal-hover relative block overflow-hidden p-6">
                <span className="pointer-events-none absolute -top-6 -right-2 font-display text-[8rem] leading-none font-bold text-muted" aria-hidden>
                  {String(projects.indexOf(p) + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <span className="inline-block border-2 border-line bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground uppercase">{p.status}</span>
                  <div className="mt-6 h-28 border-[3px] border-line" style={{ background: `repeating-linear-gradient(135deg, ${p.accent} 0 14px, transparent 14px 28px)` }} aria-hidden />
                  <h2 className="mt-6 font-display text-4xl font-bold">{p.name}</h2>
                  <p className="mt-2 font-medium">{p.short}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-bold">{p.categories.join(" · ")}</span>
                    <span className="inline-flex items-center gap-1 font-bold">Case study <ArrowRight className="size-4" aria-hidden /></span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
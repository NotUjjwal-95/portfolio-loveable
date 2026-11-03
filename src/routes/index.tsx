import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { exploring, profile, projects } from "@/content/site";
import { GlobalMenu, SkipLink } from "@/components/site/GlobalMenu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Student developer", "Ujjwal builds, breaks down and rebuilds ideas into software — exploring AI, backend, cloud and IoT.", "/"),
  component: Home,
});

const words = profile.tagline.split(" ");

function Home() {
  return (
    <div className="theme-root theme-home relative">
      <SkipLink />
      <div className="swiss-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <header className="relative mx-auto flex max-w-[1400px] items-center justify-between border-b border-line px-5 py-4 md:px-10">
        <Link to="/" className="font-display text-lg font-black tracking-tight">
          UJJWAL<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-semibold uppercase tracking-wider">
            {(["/about", "/skills", "/projects", "/playground", "/achievements", "/contact"] as const).map((to) => (
              <li key={to}>
                <Link to={to} className="underline-offset-8 hover:text-primary hover:underline">
                  {to.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <GlobalMenu className="md:hidden" />
      </header>

      <main id="main" className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <section className="grid grid-cols-12 gap-x-4 pt-14 pb-20 md:pt-24">
          <div className="col-span-12 mb-10 flex justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-3 md:mb-0 md:block">
            <p>(01) Index</p>
            <p className="md:mt-4">{profile.role}<br />{profile.study}</p>
          </div>
          <h1 className="col-span-12 font-display text-[13vw] leading-[0.88] font-black tracking-[-0.055em] md:col-span-9 md:text-[7.4vw] xl:text-[6.8rem]">
            {words.map((w, i) => (
              <span key={i} className="kinetic-word mr-[0.22em]" style={{ animationDelay: `${i * 60}ms` }}>
                {w === "rebuild" ? <span className="text-primary italic">{w}</span> : w === "software." ? <span className="text-accent">{w}</span> : w}
              </span>
            ))}
          </h1>
          <div className="col-span-12 mt-12 grid gap-8 border-t-2 border-line pt-6 md:col-span-9 md:col-start-4 md:grid-cols-2">
            <p className="max-w-md text-lg leading-relaxed">{profile.summary}</p>
            <div className="flex flex-wrap items-start gap-3 md:justify-end">
              <Link to="/projects" className="inline-flex items-center gap-2 bg-foreground px-5 py-3 font-bold text-background hover:bg-primary">
                See projects <ArrowUpRight className="size-4" aria-hidden />
              </Link>
              <Link to="/about" className="border-2 border-line px-5 py-3 font-bold hover:bg-foreground hover:text-background">About</Link>
              <Link to="/contact" className="border-2 border-line px-5 py-3 font-bold hover:border-accent hover:text-accent">Contact</Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="work" className="grid grid-cols-12 gap-4 border-t border-line py-14">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">(02)</p>
            <h2 id="work" className="font-display text-3xl font-black tracking-tight">Selected work</h2>
          </div>
          <ol className="col-span-12 md:col-span-9">
            {projects.map((p, i) => (
              <li key={p.slug} className="border-b border-line">
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="group grid grid-cols-12 items-baseline gap-3 py-5">
                  <span className="col-span-2 font-mono text-sm text-muted-foreground md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="col-span-10 font-display text-3xl font-black tracking-tight transition-transform group-hover:translate-x-2 group-hover:text-primary md:col-span-5 md:text-5xl">{p.name}</span>
                  <span className="col-span-10 col-start-3 text-muted-foreground md:col-span-4 md:col-start-auto">{p.short}</span>
                  <span className="col-span-10 col-start-3 font-mono text-xs uppercase text-accent md:col-span-2 md:col-start-auto md:text-right">{p.status}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <section aria-label="Currently exploring" className="relative overflow-hidden border-y-2 border-line bg-foreground py-4 text-background">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-black uppercase tracking-tight">
          {[...exploring, ...exploring].map((e, i) => (
            <span key={i} aria-hidden={i >= exploring.length} className="flex items-center gap-10">
              {i === 0 && <span className="font-mono text-xs font-normal">Currently exploring →</span>}
              {e} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>
      <footer className="relative mx-auto flex max-w-[1400px] justify-between px-5 py-8 font-mono text-xs uppercase text-muted-foreground md:px-10">
        <span>© {profile.name}</span>
        <Link to="/playground" className="hover:text-primary">Playground →</Link>
      </footer>
    </div>
  );
}
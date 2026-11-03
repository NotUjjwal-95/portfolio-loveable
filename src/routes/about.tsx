import { createFileRoute, Link } from "@tanstack/react-router";
import { exploring, journey, profile } from "@/content/site";
import { RailNav } from "@/components/site/RailNav";
import { SkipLink } from "@/components/site/GlobalMenu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About", "How Ujjwal learns: a CSE (AI) student at KIET building across software, AI and hardware.", "/about"),
  component: About,
});

function About() {
  return (
    <div className="theme-root theme-about paper-grain">
      <SkipLink />
      <RailNav label="About — Issue 01" />
      <main id="main" className="relative overflow-hidden px-5 py-14 lg:ml-44 lg:px-16">
        <div className="leaf-blob pointer-events-none absolute -top-20 -right-24 size-80 bg-muted opacity-80" aria-hidden />
        <div className="leaf-blob pointer-events-none absolute top-40 right-24 size-24 rotate-45 bg-primary/20" aria-hidden />
        <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Profile · {profile.study}</p>
        <h1 className="relative mt-6 max-w-4xl font-display text-6xl leading-[0.95] font-light tracking-tight md:text-8xl">
          Curious by <em className="font-semibold text-primary">default</em>, careful by practice.
        </h1>

        <div className="relative mt-16 grid gap-12 md:grid-cols-12">
          <article className="text-xl leading-[1.7] md:col-span-7 [&_p]:mb-6">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-accent">
              I'm Ujjwal, a student developer studying Computer Science (AI) at KIET. I like understanding how
              things work by building them — then taking them apart and building them again, better.
            </p>
            <p>
              My work moves between software engineering, AI engineering, backend systems, cloud and IoT. Some
              projects are polished; many are explorations. I'd rather be honest about where a build stands than
              oversell it.
            </p>
            <p>
              Right now I'm most interested in how AI can support developers' decisions, and in getting closer to
              the hardware with embedded systems.
            </p>
          </article>
          <aside className="md:col-span-4 md:col-start-9">
            <blockquote className="border-l-4 border-accent pl-6 font-display text-3xl leading-snug italic">
              “Build, break down, rebuild.”
            </blockquote>
            <h2 className="mt-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">Currently exploring</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {exploring.map((e) => (
                <li key={e} className="rounded-full border border-line px-3 py-1 text-base">{e}</li>
              ))}
            </ul>
          </aside>
        </div>

        <section aria-labelledby="journey" className="relative mt-24">
          <h2 id="journey" className="font-display text-4xl font-semibold">The journey, so far</h2>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {journey.map((j, i) => (
              <li key={j.title} className={`bg-background p-6 ${i % 2 ? "md:mt-12" : ""}`}>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{j.label}</p>
                <h3 className="mt-3 font-display text-2xl">{j.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{j.body}</p>
              </li>
            ))}
          </ol>
        </section>
        <nav aria-label="Continue" className="relative mt-20 flex flex-wrap gap-6 font-display text-2xl">
          <Link to="/skills" className="underline decoration-primary decoration-2 underline-offset-8">Skills →</Link>
          <Link to="/projects" className="underline decoration-primary decoration-2 underline-offset-8">Projects →</Link>
        </nav>
      </main>
    </div>
  );
}
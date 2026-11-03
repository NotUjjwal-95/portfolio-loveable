import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject, projects } from "@/content/site";
import { FloatingNav } from "@/components/site/FloatingNav";
import { SkipLink } from "@/components/site/GlobalMenu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo(loaderData.project.name, loaderData.project.short, `/projects/${params.slug}`)
      : { meta: [{ title: "Project not found — Ujjwal" }, { name: "robots", content: "noindex" }] },
  component: Detail,
  notFoundComponent: Missing,
  errorComponent: Missing,
});

function Missing() {
  const { slug } = Route.useParams();
  return (
    <div className="theme-root theme-projects dots-bg">
      <FloatingNav />
      <main id="main" className="mx-auto max-w-2xl px-5 py-24">
        <div className="brutal p-8">
          <h1 className="font-display text-4xl font-bold">No project called “{slug}”.</h1>
          <p className="mt-3 font-medium">It may have been renamed. Try one of these:</p>
          <ul className="mt-6 grid gap-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="font-bold underline">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

function Detail() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const block = "brutal p-6 md:p-8";
  return (
    <div className="theme-root theme-projects pb-24" style={{ ["--primary" as string]: p.accent }}>
      <SkipLink />
      <FloatingNav />
      <main id="main" className="mx-auto max-w-6xl px-5 pt-12">
        <Link to="/projects" className="inline-flex items-center gap-2 font-bold hover:underline"><ArrowLeft className="size-4" aria-hidden /> All projects</Link>
        <header className="mt-8 border-[3px] border-line bg-primary p-8 text-primary-foreground shadow-[10px_10px_0_var(--line)] md:p-12">
          <p className="font-bold uppercase">{String(idx + 1).padStart(2, "0")} / {p.categories.join(" · ")}</p>
          <h1 className="mt-4 font-display text-6xl leading-none font-bold tracking-tighter md:text-8xl">{p.name}</h1>
          <p className="mt-6 inline-block border-2 border-current px-3 py-1 font-bold uppercase">{p.status}</p>
        </header>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <section className={`${block} md:col-span-2`}><h2 className="font-display text-2xl font-bold">Overview</h2><p className="mt-3 text-lg">{p.overview}</p></section>
          <section className={block}><h2 className="font-display text-2xl font-bold">Stack</h2><ul className="mt-3 flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="border-2 border-line px-2 py-1 text-sm font-bold">{s}</li>)}</ul></section>
          <section className={block}><h2 className="font-display text-2xl font-bold">Problem / intent</h2><p className="mt-3">{p.intent}</p></section>
          <section className={`${block} md:col-span-2`}><h2 className="font-display text-2xl font-bold">Approach</h2><ol className="mt-3 list-decimal space-y-2 pl-5">{p.approach.map((a) => <li key={a}>{a}</li>)}</ol></section>
          <section className={`${block} md:col-span-2`} style={{ background: "color-mix(in oklab, var(--primary) 12%, var(--card))" }}><h2 className="font-display text-2xl font-bold">Current status</h2><p className="mt-3 text-lg">{p.current}</p></section>
          <section className={block}><h2 className="font-display text-2xl font-bold">Learnings</h2><ul className="mt-3 list-disc space-y-2 pl-5">{p.learnings.map((l) => <li key={l}>{l}</li>)}</ul></section>
          <section className={`${block} md:col-span-3`}>
            <h2 className="font-display text-2xl font-bold">Links</h2>
            {p.links.length ? (
              <ul className="mt-3 flex flex-wrap gap-3">{p.links.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noreferrer" className="chip inline-flex items-center gap-2">{l.label} <ExternalLink className="size-4" aria-hidden /></a></li>)}</ul>
            ) : (
              <p className="mt-3 text-muted-foreground">No public links yet — this one lives offline for now.</p>
            )}
          </section>
        </div>
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="brutal brutal-hover mt-14 flex items-center justify-between p-6">
          <span className="font-bold">Next project</span><span className="font-display text-3xl font-bold">{next.name} →</span>
        </Link>
      </main>
    </div>
  );
}
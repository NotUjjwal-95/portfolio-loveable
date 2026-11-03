import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Layout, Database, Brain, Cloud, Cpu } from "lucide-react";
import { skills } from "@/content/site";
import { RailNav } from "@/components/site/RailNav";
import { SkipLink } from "@/components/site/GlobalMenu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => seo("Skills", "Areas Ujjwal works with and explores: languages, frontend, backend, AI/ML, cloud and IoT.", "/skills"),
  component: Skills,
});

const icons = [Code2, Layout, Database, Brain, Cloud, Cpu];
const spans = ["md:col-span-4 md:row-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-3", "md:col-span-3", "md:col-span-6"];

function Skills() {
  return (
    <div className="theme-root theme-skills">
      <SkipLink />
      <RailNav label="Skills — Toolbox" />
      <main id="main" className="px-5 py-14 lg:ml-44 lg:px-14">
        <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">The toolbox.</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Areas of experience and active exploration — not a claim of mastery. No percentage bars, just honest groupings.
        </p>
        <ul className="mt-12 grid auto-rows-[minmax(10rem,auto)] gap-6 md:grid-cols-6">
          {skills.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.group} className={`neu flex flex-col justify-between p-7 ${spans[i]}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{s.note}</p>
                    <h2 className={`mt-1 font-display font-extrabold ${i === 0 ? "text-4xl" : "text-2xl"}`}>{s.group}</h2>
                  </div>
                  <span className="neu-inset grid size-12 place-items-center text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="neu-inset px-4 py-2 text-sm font-semibold">{it}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <p className="mt-14 text-muted-foreground">
          See these in context on the <Link to="/projects" className="font-bold text-primary underline">projects page</Link>.
        </p>
      </main>
    </div>
  );
}
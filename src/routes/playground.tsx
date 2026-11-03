import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { exploring, routes } from "@/content/site";
import { GlobalMenu, SkipLink } from "@/components/site/GlobalMenu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/playground")({
  head: () => seo("Playground", "Ujjwal's lab: small interactive explorations and ideas in AI, backend and IoT. Demos are labeled.", "/playground"),
  component: Playground,
});

const decisions: Record<string, { pick: string; why: string }> = {
  "Prototype fast": { pick: "Monolith + hosted LLM API", why: "Fewer moving parts; swap pieces later once the idea proves itself." },
  "Keep data private": { pick: "Local LLM workflow", why: "Data stays on your machine; trade off speed and model size." },
  "Balance both": { pick: "Hybrid: local first, cloud fallback", why: "Run small tasks locally; send heavy reasoning to a hosted model." },
};

function Playground() {
  const [goal, setGoal] = useState<keyof typeof decisions>("Prototype fast");
  const [cmd, setCmd] = useState("");
  const [log, setLog] = useState<string[]>(["type `help` to list commands"]);
  const run = (e: React.FormEvent) => {
    e.preventDefault();
    const c = cmd.trim().toLowerCase();
    const out =
      c === "help" ? "commands: help, whoami, exploring, routes, clear" :
      c === "whoami" ? "ujjwal — student developer, CSE (AI) @ KIET" :
      c === "exploring" ? exploring.join(" · ") :
      c === "routes" ? routes.map((r) => r.to).join("  ") :
      c === "clear" ? null : `unknown command: ${c}`;
    setLog((l) => (out === null ? [] : [...l, `> ${c}`, out]).slice(-10));
    setCmd("");
  };
  return (
    <div className="theme-root theme-play relative overflow-hidden">
      <SkipLink />
      <div className="cyber-grid pointer-events-none absolute inset-0" aria-hidden />
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-4 border-b border-line px-5 py-3 font-mono text-xs uppercase">
        <Link to="/" className="text-primary glow-text">[U]::LAB</Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-1">
            {routes.map((r) => (
              <li key={r.to}>
                <Link to={r.to} activeOptions={{ exact: r.to === "/" }} activeProps={{ "aria-current": "page", className: "border-primary text-primary" }} className="block border border-transparent px-2 py-1 hover:border-line">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <GlobalMenu className="md:hidden" />
      </header>
      <main id="main" className="relative z-10 mx-auto max-w-6xl px-5 py-16">
        <p className="font-mono text-xs text-accent uppercase">// experiments &amp; explorations</p>
        <h1 className="mt-3 font-display text-6xl font-bold uppercase md:text-8xl"><span className="glow-text text-primary">Play</span><span className="y2k-chrome">ground</span></h1>
        <p className="mt-4 max-w-xl text-muted-foreground">A lab for small ideas. Everything here is a labeled demo that runs in your browser — no live systems, no pretend telemetry.</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="term p-5" aria-labelledby="t1">
            <div className="flex justify-between font-mono text-xs"><h2 id="t1" className="text-primary">mini_shell.sh</h2><span className="border border-accent px-1.5 text-accent">DEMO</span></div>
            <div className="mt-4 h-52 overflow-auto font-mono text-sm" aria-live="polite">
              {log.map((l, i) => <p key={i} className={l.startsWith(">") ? "text-primary" : "text-muted-foreground"}>{l}</p>)}
            </div>
            <form onSubmit={run} className="mt-3 flex items-center gap-2 border-t border-line pt-3 font-mono text-sm">
              <label htmlFor="cmd" className="text-accent">$</label>
              <input id="cmd" value={cmd} onChange={(e) => setCmd(e.target.value)} autoComplete="off" className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground" placeholder="help" />
              <span className="caret text-primary" aria-hidden>▌</span>
            </form>
          </section>

          <section className="term p-5" aria-labelledby="t2">
            <div className="flex justify-between font-mono text-xs"><h2 id="t2" className="text-primary">llm_strategy.picker</h2><span className="border border-accent px-1.5 text-accent">CONCEPT</span></div>
            <p className="mt-4 text-sm text-muted-foreground">A rule-of-thumb picker for local vs hybrid LLM workflows — the kind of trade-off DEVSCOUT explores.</p>
            <div role="radiogroup" aria-label="Your goal" className="mt-4 flex flex-wrap gap-2">
              {Object.keys(decisions).map((g) => (
                <button key={g} type="button" role="radio" aria-checked={goal === g} onClick={() => setGoal(g as keyof typeof decisions)} className={`border px-3 py-1.5 font-mono text-xs ${goal === g ? "border-primary bg-primary text-primary-foreground" : "border-line"}`}>{g}</button>
              ))}
            </div>
            <div className="mt-6 border-l-2 border-accent pl-4" aria-live="polite">
              <p className="font-display text-2xl font-bold text-primary glow-text">{decisions[goal].pick}</p>
              <p className="mt-2 text-muted-foreground">{decisions[goal].why}</p>
            </div>
          </section>

          <section className="term p-5 lg:col-span-2" aria-labelledby="t3">
            <h2 id="t3" className="font-mono text-xs text-primary">research_queue.txt</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {exploring.map((e, i) => (
                <li key={e} className="border border-line p-3 font-mono text-sm"><span className="text-accent">0x{(i + 1).toString(16).padStart(2, "0")}</span> {e}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
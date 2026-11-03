import { GlobalMenu, RouteLinks } from "./GlobalMenu";

/** Slim vertical typographic rail (About / Skills). Collapses to a top bar on mobile. */
export function RailNav({ label }: { label: string }) {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-44 flex-col justify-between border-r border-line px-5 py-8 lg:flex">
        <p className="font-display text-xl font-bold">Ujjwal</p>
        <nav aria-label="Primary">
          <ul className="space-y-2 text-sm [&_a]:block [&_a]:py-0.5 [&_a]:text-muted-foreground [&_a:hover]:text-foreground [&_a[aria-current=page]]:font-bold [&_a[aria-current=page]]:text-primary [&_a[aria-current=page]]:before:content-['—_']">
            <RouteLinks />
          </ul>
        </nav>
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase [writing-mode:vertical-rl]">{label}</p>
      </aside>
      <header className="flex items-center justify-between border-b border-line px-5 py-4 lg:hidden">
        <p className="font-display text-lg font-bold">Ujjwal · {label}</p>
        <GlobalMenu />
      </header>
    </>
  );
}
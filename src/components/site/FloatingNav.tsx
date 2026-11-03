import { Link } from "@tanstack/react-router";
import { GlobalMenu } from "./GlobalMenu";

/** Compact floating pill nav for Projects + project detail. */
export function FloatingNav() {
  return (
    <header className="sticky top-4 z-40 mx-auto flex w-[min(100%-2rem,56rem)] items-center justify-between gap-3 border-[3px] border-line bg-card px-4 py-2 shadow-[5px_5px_0_var(--line)]">
      <Link to="/" className="font-display text-lg font-bold">U/</Link>
      <nav aria-label="Primary" className="hidden sm:block">
        <ul className="flex gap-1 text-sm font-bold">
          {(
            [
              ["/", "Home"],
              ["/projects", "Projects"],
              ["/playground", "Playground"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ] as const
          ).map(([to, l]) => (
            <li key={to}>
              <Link
                to={to}
                activeOptions={{ exact: to === "/" }}
                activeProps={{ "aria-current": "page", className: "bg-foreground text-background" }}
                className="block px-3 py-1.5 hover:bg-muted"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <GlobalMenu />
    </header>
  );
}
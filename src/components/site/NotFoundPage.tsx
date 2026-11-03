import { Link } from "@tanstack/react-router";
import { GlobalMenu } from "./GlobalMenu";

// 8x8 pixel ghost-bot; 1 = body, 2 = eye
const sprite = [
  "00111100",
  "01111110",
  "11211211",
  "11111111",
  "11111111",
  "11011011",
  "11111111",
  "10101010",
];

export function NotFoundPage() {
  return (
    <div className="theme-root theme-404 relative flex min-h-screen flex-col overflow-hidden">
      <header className="flex items-center justify-between border-b-4 border-line p-4">
        <span className="font-display text-xs">ERR_404</span>
        <GlobalMenu />
      </header>
      <main id="main" className="relative flex flex-1 flex-col items-center justify-center gap-10 px-4 py-16 text-center">
        <div className="drift pointer-events-none absolute top-10 left-0 font-display text-[10px] text-muted-foreground" aria-hidden>
          ▓▓▒▒░░ cloud.exe ░░▒▒▓▓
        </div>
        <div role="img" aria-label="A small pixel robot floating, looking lost" className="bob pixel grid grid-cols-8 gap-0">
          {sprite.flatMap((row, y) =>
            row.split("").map((c, x) => (
              <span
                key={`${x}-${y}`}
                className={`size-4 sm:size-6 ${c === "1" ? "bg-primary" : c === "2" ? "bg-accent" : "bg-transparent"}`}
              />
            )),
          )}
        </div>
        <h1 className="font-display text-5xl leading-tight sm:text-7xl">404</h1>
        <p className="max-w-md font-body text-lg">
          This route got broken down and never rebuilt. Nothing lives here — yet.
        </p>
        <Link
          to="/"
          className="border-4 border-line bg-primary px-6 py-4 font-display text-sm text-primary-foreground shadow-[6px_6px_0_var(--line)] transition-transform hover:-translate-y-1 focus-visible:-translate-y-1"
        >
          ► PRESS START (HOME)
        </Link>
      </main>
      <div className="h-8 border-t-4 border-line bg-accent" aria-hidden />
    </div>
  );
}
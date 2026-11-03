import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { routes } from "@/content/site";

/** Accessible route-map menu, shared by every nav treatment (always available on mobile). */
export function GlobalMenu({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls="global-menu"
        onClick={() => setOpen(true)}
        className={`menu-trigger ${className}`}
      >
        <Menu className="size-4" aria-hidden /> <span>Menu</span>
      </button>
      {open && (
        <div id="global-menu" role="dialog" aria-modal="true" aria-label="Site map" className="global-menu">
          <button type="button" autoFocus onClick={() => setOpen(false)} className="global-menu-close">
            <X className="size-5" aria-hidden /> Close
          </button>
          <nav aria-label="All pages">
            <ol>
              {routes.map((r, i) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: r.to === "/" }}
                    activeProps={{ "aria-current": "page" }}
                  >
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}
    </>
  );
}

/** Plain inline list of route links; styling comes from the parent nav's theme class. */
export function RouteLinks({ itemClass = "" }: { itemClass?: string }) {
  return (
    <>
      {routes.map((r) => (
        <li key={r.to}>
          <Link
            to={r.to}
            className={itemClass}
            activeOptions={{ exact: r.to === "/" }}
            activeProps={{ "aria-current": "page" }}
          >
            {r.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to content
    </a>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { contact } from "@/content/site";
import { GlobalMenu, SkipLink } from "@/components/site/GlobalMenu";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Get in touch with Ujjwal to collaborate on software, AI or IoT ideas.", "/contact"),
  component: Contact,
});

const socials = [
  ["GitHub", contact.github],
  ["LinkedIn", contact.linkedin],
  ["X", contact.x],
  ["Resume", contact.resume],
].filter((s): s is [string, string] => !!s[1]);

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    if (!contact.email) return;
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="theme-root theme-contact relative overflow-hidden">
      <SkipLink />
      <div className="chrome-orb pointer-events-none absolute -right-32 -bottom-32 size-[28rem] rounded-full opacity-70 blur-[2px]" aria-hidden />
      <header className="relative mx-auto flex max-w-5xl items-center justify-between px-5 py-6 text-sm">
        <Link to="/" className="font-display font-bold">Ujjwal</Link>
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex gap-6 text-muted-foreground">
            {([["/", "Home"], ["/projects", "Projects"], ["/about", "About"], ["/contact", "Contact"]] as const).map(([to, l]) => (
              <li key={to}><Link to={to} activeOptions={{ exact: to === "/" }} activeProps={{ "aria-current": "page", className: "text-foreground underline underline-offset-4" }} className="hover:text-foreground">{l}</Link></li>
            ))}
          </ul>
        </nav>
        <GlobalMenu className="sm:hidden" />
      </header>
      <main id="main" className="relative mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-5 py-16">
        <p className="text-sm tracking-widest text-muted-foreground uppercase">Contact</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.95] font-extrabold tracking-tight md:text-9xl">
          Let's build <span className="chrome-text">something.</span>
        </h1>
        <p className="mt-8 max-w-lg text-lg text-muted-foreground">
          Open to collaborating on student projects, hackathons, and ideas in AI, backend or IoT.
        </p>
        <div className="mt-12 max-w-xl border-t border-line pt-8">
          {contact.email ? (
            <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${contact.email}`} className="font-display text-2xl font-bold hover:text-primary md:text-3xl">{contact.email}</a>
              <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold hover:bg-muted">
                {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
                <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
              </button>
            </div>
          ) : (
            <div className="rounded-2xl bg-muted p-6">
              <p className="font-display text-xl font-bold">Links coming soon.</p>
              <p className="mt-2 text-muted-foreground">
                Contact details aren't published yet. Meanwhile, the <a href="https://github.com/notujjwal-kiet/DEVSCOUT-V2" target="_blank" rel="noreferrer" className="font-semibold text-primary underline">DEVSCOUT V2 repository</a> is a good place to see current work.
              </p>
            </div>
          )}
          {socials.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-3">
              {socials.map(([l, url]) => (
                <li key={l}><a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-line px-4 py-2 text-sm font-semibold hover:bg-muted">{l} <ArrowUpRight className="size-4" aria-hidden /></a></li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
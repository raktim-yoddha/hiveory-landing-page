/**
 * Shared building blocks for the subpages: the site's corner-bracket panels,
 * the white fill-sweep button, and a consistent page frame and header.
 */
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { cn } from "@/lib/utils";

/** The four L-shaped corner marks used on every card. */
export function Corners({ size = "w-4 h-4", tone = "border-white/50 group-hover:border-white" }: { size?: string; tone?: string }) {
  const base = cn("absolute pointer-events-none transition-colors duration-300", size, tone);
  return (
    <>
      <span aria-hidden="true" className={cn(base, "-top-px -left-px border-t-2 border-l-2")} />
      <span aria-hidden="true" className={cn(base, "-top-px -right-px border-t-2 border-r-2")} />
      <span aria-hidden="true" className={cn(base, "-bottom-px -left-px border-b-2 border-l-2")} />
      <span aria-hidden="true" className={cn(base, "-bottom-px -right-px border-b-2 border-r-2")} />
    </>
  );
}

export function Panel({ className, children, accent = false, id }: { className?: string; children: React.ReactNode; accent?: boolean; id?: string }) {
  return (
    <div
      id={id}
      className={cn(
        "group relative border card-surface",
        accent ? "border-amber-400/40 hover:border-amber-400" : "border-white/[0.12] hover:border-white/30",
        className,
      )}
    >
      <Corners tone={accent ? "border-amber-400" : undefined} />
      {children}
    </div>
  );
}

/** Square icon tile in front of titles. */
export function IconTile({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex w-10 h-10 items-center justify-center border border-white/10 bg-white/[0.04] text-white shrink-0", className)}>
      {children}
    </span>
  );
}

/** The site's small tag: white dot and a short mono label, e.g. "• 01" or "• Work". */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/[0.03] border border-white/10 font-mono text-[11px] tracking-wider text-zinc-400">
      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-white" />
      <span className="text-white font-semibold">{children}</span>
    </span>
  );
}

/** The site's button: icon square that sweeps white across on hover. */
export function ActionLink({
  href,
  icon,
  children,
  external = false,
  accent = false,
  className,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  external?: boolean;
  accent?: boolean;
  className?: string;
}) {
  const classes = cn(
    "group/btn relative inline-flex items-center justify-between gap-6 p-1 pr-4 bg-[#0c0c10] border text-white transition-colors duration-300 active:scale-[0.98]",
    accent ? "border-amber-400/50 hover:border-amber-400" : "border-white/20 hover:border-white",
    className,
  );
  const body = (
    <>
      <Corners size="w-2 h-2" tone={accent ? "border-amber-400" : "border-white/50 group-hover/btn:border-white"} />
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-y-1 left-1 w-9 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)]",
          accent ? "bg-amber-400" : "bg-white",
        )}
      />
      <span className="relative z-10 flex items-center gap-3">
        <span aria-hidden="true" className="w-9 h-9 flex items-center justify-center text-black shrink-0">
          {icon}
        </span>
        <span className="text-sm font-semibold group-hover/btn:text-black transition-colors duration-300">{children}</span>
      </span>
      <span aria-hidden="true" className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300">
        {external ? "↗" : "→"}
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {body}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {body}
    </Link>
  );
}

/** Navbar, vignette and footer around a page. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#060608] relative min-h-screen w-full flex flex-col justify-between overflow-x-clip selection:bg-white/20 selection:text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />
      <Navbar />
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-24 flex-1">{children}</main>
      <HoverFooter />
    </div>
  );
}

export function PageHeader({ title, sub, children }: { title: React.ReactNode; sub: React.ReactNode; children?: React.ReactNode }) {
  return (
    <header className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
      <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-[1.05]">{title}</h1>
      <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed">{sub}</p>
      {children && <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">{children}</div>}
    </header>
  );
}

/** Section heading inside a page. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-white mb-8">{children}</h2>;
}

import Navbar from "@/components/Navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { GITHUB_RELEASES_PAGE, GITHUB_URL } from "@/lib/download";

export const metadata = {
  title: "Docs — Hiveory | Install, shortcuts and guides",
  description:
    "Install Hiveory, build it from source, learn the keyboard shortcuts, and read how Work, Bots and Chat behave.",
};

const blob = (path: string) => `${GITHUB_URL}/blob/main/${path}`;

export default function DocsPage() {
  const sections = [
    {
      category: "Getting started",
      items: [
        {
          title: "Install",
          desc: "Installers for every platform.",
          href: GITHUB_RELEASES_PAGE,
        },
        {
          title: "Build from source",
          desc: "Node.js 24, pnpm 11 and Git.",
          href: `${GITHUB_URL}#build-from-source`,
        },
        {
          title: "Keyboard shortcuts",
          desc: "All shortcuts, all changeable.",
          href: blob("adr/0047-keyboard-shortcuts.md"),
        },
      ],
    },
    {
      category: "How it works",
      items: [
        {
          title: "Work and the board",
          desc: "Workspaces, Worktrees and status.",
          href: blob("product-spec.md"),
        },
        {
          title: "Bots",
          desc: "Teams, schedules and approvals.",
          href: blob("product-spec.md"),
        },
        {
          title: "Every screen",
          desc: "A map of every screen.",
          href: blob("ui-map.md"),
        },
      ],
    },
    {
      category: "Project",
      items: [
        {
          title: "Changelog",
          desc: "What changed in each release.",
          href: blob("CHANGELOG.md"),
        },
        {
          title: "Architecture",
          desc: "How the app is put together.",
          href: blob("architecture.md"),
        },
        {
          title: "Contributing",
          desc: "Rules for people and agents.",
          href: blob("AGENTS.md"),
        },
      ],
    },
  ];

  return (
    <div className="bg-[#060608] relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      <Navbar />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-24 flex-1">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-tight mb-6">
            Hiveory docs
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Install, build and learn the app.
          </p>
        </div>

        {/* Quickstart Code Block */}
        <div className="relative max-w-3xl mx-auto mb-20 rounded-none border border-white/10 bg-[#09090d] p-4 sm:p-6 shadow-2xl">
          {/* Corner Brackets - Sitting directly on the boundary */}
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 pointer-events-none" />
          <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 pointer-events-none" />
          <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 pointer-events-none" />
          <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 pointer-events-none" />

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4 text-xs font-mono text-zinc-400 gap-2">
            <span className="text-zinc-300 truncate">Build from source</span>
            <span className="text-zinc-500 shrink-0">Node.js 24 · pnpm 11 · Git</span>
          </div>
          <pre className="font-mono text-sm text-zinc-300 leading-relaxed overflow-x-auto">
            <code>
              <span className="text-zinc-500"># 1. Clone the repository</span>
              {"\n"}git clone {GITHUB_URL}.git{"\n"}cd hiveory{"\n\n"}
              <span className="text-zinc-500"># 2. Install dependencies</span>
              {"\n"}pnpm install{"\n\n"}
              <span className="text-zinc-500"># 3. Run the app with hot reload</span>
              {"\n"}pnpm dev
            </code>
          </pre>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((sec) => (
            <div key={sec.category} className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider font-mono text-zinc-400 border-b border-white/[0.08] pb-2">
                {sec.category}
              </h2>
              <div className="space-y-3">
                {sec.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-none border border-white/[0.08] bg-[#0c0c10]/80 p-5 hover:border-white/25 hover:bg-[#121217] transition-all group shadow-sm"
                  >
                    {/* Corner Brackets - Sitting directly on the boundary */}
                    <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                    <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300 pointer-events-none" />

                    <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors mb-1.5 flex items-center justify-between gap-2">
                      <span>{item.title}</span>
                      <span className="text-zinc-500 text-xs group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                        ↗
                      </span>
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help / GitHub Anchor */}
        <div className="text-center">
          <p className="text-sm text-zinc-400 mb-4">
            Something missing or unclear?
          </p>
          <a
            href={`${GITHUB_URL}/issues/new`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-zinc-300 underline underline-offset-4"
          >
            Tell us on GitHub →
          </a>
        </div>
      </main>

      {/* Bottom Footer */}
      <HoverFooter />
    </div>
  );
}

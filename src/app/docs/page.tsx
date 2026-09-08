import Navbar from "@/components/Navbar";
import HoverFooter from "@/components/ui/hover-footer";

export const metadata = {
  title: "Documentation — Hiveory | Developer Guides & Reference",
  description:
    "Quickstarts, architecture references, and setup guides for Hiveory's agent super app and terminal-first ADE.",
};

export default function DocsPage() {
  const sections = [
    {
      category: "Getting Started",
      items: [
        {
          title: "Quickstart Guide",
          desc: "Clone the repo, install pnpm dependencies, and launch with pnpm app:dev.",
          code: "git clone https://github.com/raktim-yoddha/hiveory.git\npnpm install\npnpm app:dev",
        },
        {
          title: "Prerequisites & Toolchain",
          desc: "Node.js & pnpm 10.12.1, Rust MSVC toolchain, C++ Build Tools, WebView2 Runtime, and Git.",
        },
        {
          title: "Keybindings & Shortcuts",
          desc: "Ctrl+1 (Agent), Ctrl+2 (Code), Ctrl+3 (Chat), Ctrl+K (Palette), Ctrl+B (Sidebar), Ctrl+, (Settings).",
        },
      ],
    },
    {
      category: "Application Modes",
      items: [
        {
          title: "Agent Mode (Ctrl+1)",
          desc: "Named agents, folder grants, approval policies, OpenAI Responses API (store: false), and routine scheduler.",
        },
        {
          title: "Code Mode (Ctrl+2)",
          desc: "Multi-pane canvas (CMD, PowerShell, Git Bash), coding CLIs, Monaco SHA-256 fingerprints, and Git worktrees.",
        },
        {
          title: "Chat Mode (Ctrl+3)",
          desc: "Independent streaming conversations, reasoning events, branching, retry, drafts, and sanitized archive export.",
        },
      ],
    },
    {
      category: "Architecture & Plugins",
      items: [
        {
          title: "Privileged Rust Host & Security",
          desc: "Rust owns privileged operations, OS keyring credentials, explicit trust sandboxing, and SQLite WAL.",
        },
        {
          title: "Declarative HTTPS Plugins",
          desc: "Connecting GitHub, Linear, Slack, Supabase, Vercel, Stripe, or custom JSON manifests with host allow-lists.",
        },
        {
          title: "Skills (SKILL.md) Ecosystem",
          desc: "Authoring and managing local SKILL.md instruction packages with frontmatter validation and conflict resolution.",
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
            Hiveory Documentation
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Everything you need to orchestrate autonomous agents, configure
            multi-pane ADE workspaces, author custom skills, and build production desktop releases.
          </p>
        </div>

        {/* Quickstart Code Block */}
        <div className="relative max-w-3xl mx-auto mb-20 rounded-none border border-white/10 bg-[#09090d] p-6 shadow-2xl">
          {/* Corner Brackets - Sitting directly on the boundary */}
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 pointer-events-none" />
          <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 pointer-events-none" />
          <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 pointer-events-none" />
          <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 pointer-events-none" />

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-none bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-none bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-none bg-emerald-500/80" />
              <span className="ml-2 text-zinc-300">Terminal Quickstart (Windows PowerShell)</span>
            </span>
            <span className="text-zinc-500">powershell</span>
          </div>
          <pre className="font-mono text-sm text-zinc-300 leading-relaxed overflow-x-auto">
            <code>
              <span className="text-zinc-500"># 1. Clone the repository</span>
              {"\n"}git clone https://github.com/raktim-yoddha/hiveory.git{"\n\n"}
              <span className="text-zinc-500"># 2. Install dependencies</span>
              {"\n"}pnpm install{"\n\n"}
              <span className="text-zinc-500"># 3. Launch native development application</span>
              {"\n"}pnpm app:dev
            </code>
          </pre>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((sec, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider font-mono text-zinc-400 border-b border-white/[0.08] pb-2">
                {sec.category}
              </h2>
              <div className="space-y-3">
                {sec.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-none border border-white/[0.08] bg-[#0c0c10]/80 p-5 hover:border-white/25 hover:bg-[#121217] transition-all cursor-pointer group shadow-sm"
                  >
                    {/* Corner Brackets - Sitting directly on the boundary */}
                    <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                    <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-white/40 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-white/40 group-hover:border-white transition-colors duration-300 pointer-events-none" />

                    <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors mb-1.5 flex items-center justify-between">
                      <span>{item.title}</span>
                      <span className="text-zinc-500 text-xs group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help / GitHub Anchor */}
        <div className="text-center">
          <p className="text-sm text-zinc-400 mb-4">
            Looking for something specific or want to contribute to the docs?
          </p>
          <a
            href="https://github.com/raktim-yoddha/hiveory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-zinc-300 underline underline-offset-4"
          >
            View Hiveory Docs on GitHub →
          </a>
        </div>
      </main>

      {/* Bottom Footer */}
      <HoverFooter />
    </div>
  );
}

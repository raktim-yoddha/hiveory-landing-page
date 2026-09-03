import Navbar from "@/components/Navbar";
import Link from "next/link";

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
          desc: "Set up Hiveory on Windows, macOS, or Linux in under two minutes.",
          code: "git clone https://github.com/raktim-yoddha/hiveory.git\npnpm install\npnpm tauri dev",
        },
        {
          title: "System Prerequisites",
          desc: "Rust 1.80+, Node 20+, and WebView2 / WebKit runtime requirements.",
        },
        {
          title: "Keybindings & Navigation",
          desc: "Default shortcuts for recursive split panes, mode swapping, and terminal focus.",
        },
      ],
    },
    {
      category: "Mode Guides",
      items: [
        {
          title: "Code Mode (ADE) Setup",
          desc: "Configuring Claude Code, Codex, Antigravity, and OpenCode in concurrent panes.",
        },
        {
          title: "Agent Mode & Custom Skills",
          desc: "Authoring SKILL.md routines, permission models, and autonomous routines.",
        },
        {
          title: "Multi-Model Chat Session",
          desc: "Connecting custom API keys, hot-swapping providers, and inspecting reasoning traces.",
        },
      ],
    },
    {
      category: "Protocols & Extensions",
      items: [
        {
          title: "Nectar Shared Memory Protocol",
          desc: "Reading and writing to .nectar/ via standard MCP tools.",
        },
        {
          title: "MCP Plugin Integration",
          desc: "Registering external Model Context Protocol servers in your workspace.",
        },
        {
          title: "Sandboxing & Cap-Std Security",
          desc: "Understanding directory capability containment and security boundaries.",
        },
      ],
    },
  ];

  return (
    <div className="mesh-dot-grid hero-radial-glow relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      <Navbar />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-24 flex-1">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[12px] font-medium text-zinc-400 mb-6">
            <span className="font-mono text-zinc-300">&gt;_</span>
            <span>Developer Reference</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-white leading-tight mb-6">
            Hiveory Documentation
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Everything you need to orchestrate autonomous agents, configure
            terminal split panes, and extend Hiveory with custom MCP skills.
          </p>
        </div>

        {/* Quickstart Code Block */}
        <div className="max-w-3xl mx-auto mb-20 rounded-2xl border border-white/10 bg-[#09090d] p-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-zinc-300">Terminal Quickstart</span>
            </span>
            <span className="text-zinc-500">bash</span>
          </div>
          <pre className="font-mono text-sm text-zinc-300 leading-relaxed overflow-x-auto">
            <code>
              <span className="text-zinc-500"># 1. Clone the repository</span>
              {"\n"}git clone https://github.com/raktim-yoddha/hiveory.git{"\n\n"}
              <span className="text-zinc-500"># 2. Install dependencies</span>
              {"\n"}pnpm install{"\n\n"}
              <span className="text-zinc-500"># 3. Launch Tauri 2 Desktop Host</span>
              {"\n"}pnpm tauri dev
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
                    className="rounded-xl border border-white/[0.06] bg-[#0c0c10]/80 p-5 hover:border-white/20 hover:bg-[#121217] transition-all cursor-pointer group"
                  >
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

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500 z-10 border-t border-white/[0.04]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Local-First Rust Host · SQLite WAL · Cap-Std Sandboxing</span>
        </div>
        <div>
          <span>Three Modes. One Desktop Super App.</span>
        </div>
      </footer>
    </div>
  );
}

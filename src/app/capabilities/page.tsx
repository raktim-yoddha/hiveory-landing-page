import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Capabilities — Hiveory | Architecture & Foundation",
  description:
    "Explore Hiveory's core technical capabilities: Rust host authority, Nectar shared memory, cap-std sandboxing, and Git worktree isolation.",
};

export default function CapabilitiesPage() {
  const capabilities = [
    {
      title: "Rust Host Process Authority",
      icon: "⚙️",
      summary:
        "Every filesystem mutation, process spawn, and database write is executed through an uncompromised native Rust host.",
      details:
        "Frontend web views have zero direct access to system disk or network. All requests pass through strongly-typed Tauri IPC commands with cryptographic validation.",
    },
    {
      title: "Cap-Std Path Sandboxing",
      icon: "🛡️",
      summary:
        "Hardened directory capability handles prevent arbitrary path traversal or accidental host deletion.",
      details:
        "Agents can only mutate files within explicitly attached workspace directories. Symlink escapes and root path manipulations are trapped at the kernel boundary.",
    },
    {
      title: "Nectar Shared Memory & MCP",
      icon: "🧠",
      summary:
        "A project-scoped shared memory store that all agents query and update over Model Context Protocol.",
      details:
        "Architectural decisions, dependency graphs, and conventions persist continuously in `.nectar/` so agents never contradict one another across sessions.",
    },
    {
      title: "Git Worktree Collision Prevention",
      icon: "🌿",
      summary:
        "Concurrent coding agents work on dedicated Git worktrees on the same local repository.",
      details:
        "Run 4 agents modifying different features in parallel. Review unified diffs and merge cleanly without git index locking or dirty workspace errors.",
    },
    {
      title: "Native PTY Multiplexing",
      icon: "⚡",
      summary:
        "High-performance pseudo-terminal emulator handling high-frequency streaming output from CLI agents.",
      details:
        "Render ANSI colors, cursor movements, and interactive prompts for Claude Code, Codex, and Antigravity with zero UI thread stutter.",
    },
    {
      title: "Local-First SQLite WAL Persistence",
      icon: "💾",
      summary:
        "Everything from conversation history to agent skills is saved locally on your device.",
      details:
        "Write-Ahead Logging provides ACID guarantees and sub-millisecond querying without requiring any cloud server or telemetry tracking.",
    },
  ];

  return (
    <div className="mesh-dot-grid hero-radial-glow relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      <Navbar />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-24 flex-1">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-white leading-tight mb-6">
            Built for multi-agent reliability
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Concurrent agent engineering requires deep system foundations.
            Explore Hiveory&apos;s architectural pillars designed for
            collision-free, sandboxed local development.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="relative rounded-none border border-white/[0.12] bg-[#0c0c10]/90 p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:bg-[#111116] shadow-xl"
            >
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none" />

              <div>
                <div className="text-3xl mb-4">{c.icon}</div>
                <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {c.title}
                </h2>
                <p className="text-sm font-medium text-zinc-300 mb-3 leading-relaxed">
                  {c.summary}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {c.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative rounded-none border border-white/10 bg-white/[0.02] p-8 text-center max-w-3xl mx-auto shadow-xl">
          {/* Corner Brackets */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-white/30 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-white/30 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-white/30 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-white/30 pointer-events-none" />

          <h2 className="text-xl font-semibold text-white mb-2">
            Want to inspect the complete architecture specification?
          </h2>
          <p className="text-sm text-zinc-400 mb-6">
            Read our technical whitepapers and documentation on GitHub.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs"
              className="px-5 py-2 rounded-none border border-white/10 bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
            >
              Read Docs
            </Link>
            <Link
              href="/"
              className="px-5 py-2 rounded-none bg-white/[0.05] border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Explore Home
            </Link>
          </div>
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

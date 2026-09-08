import Navbar from "@/components/Navbar";
import HoverFooter from "@/components/ui/hover-footer";
import Link from "next/link";

export const metadata = {
  title: "Capabilities — Hiveory | Architecture & Foundation",
  description:
    "Explore Hiveory's core technical capabilities: Privileged Rust host authority, capability-scoped trust sandboxing, native ConPTY multiplexing, and Git worktree isolation.",
};

export default function CapabilitiesPage() {
  const capabilities = [
    {
      title: "Privileged Rust Host & Local-First Authority",
      icon: "⚙️",
      summary:
        "Filesystem access, process execution, credentials, persistence, and networking are owned exclusively by the Rust desktop host.",
      details:
        "The React renderer cannot access disk, retrieve stored secrets, or run arbitrary processes. All operations pass through typed Tauri IPC commands validated by the host with SQLite WAL persistence.",
    },
    {
      title: "Explicit Workspace Trust & Path Sandboxing",
      icon: "🛡️",
      summary:
        "Untrusted workspaces open read-only. Privileged operations require explicit user trust before file writes or process launches.",
      details:
        "Rejects absolute paths, path traversal, symlinks, and stale file fingerprints. Monaco Editor uses optimistic SHA-256 fingerprinting so external edits trigger a conflict instead of an overwrite.",
    },
    {
      title: "Multi-Pane Canvas & Native ConPTY Terminals",
      icon: "⚡",
      summary:
        "Recursive horizontal and vertical splits multiplex native shells, coding agents, and embedded browser panes.",
      details:
        "Terminal sessions run through native PTY/ConPTY (CMD, PowerShell, Git Bash) with bounded scrollback and snapshot resynchronization on sequence gaps. Live processes stay alive across re-renders.",
    },
    {
      title: "Git Worktrees, Task DAGs & Coordination",
      icon: "🌿",
      summary:
        "Durable code runs execute dependency-ready tasks in application-managed Git worktrees with zero index collisions.",
      details:
        "Structured DAG proposals track worker leases, checkpoints, reviews, and non-interactive fan-in. The Coordination pane provides durable participant mailboxes and decision gates.",
    },
    {
      title: "Declarative HTTPS Plugins & SKILL.md",
      icon: "🔌",
      summary:
        "Host-executed declarative HTTPS integrations with strict host allow-lists, plus 20+ built-in SKILL.md packages.",
      details:
        "Pre-built catalog includes GitHub, Linear, Gmail, Slack, Notion, Cloudflare, Supabase, Vercel, Stripe, and Shopify. Supports custom JSON manifests and per-agent skill conflict resolution.",
    },
    {
      title: "On-Device Automations & Workspace Board",
      icon: "📋",
      summary:
        "Local cron scheduling via hiveory-routine-scheduler paired with a unified Kanban board for GitHub, Jira, and Linear.",
      details:
        "Schedules evaluate on-device with concurrency and approval-timeout limits. The full-screen workspace board connects local code run tasks with GitHub (gh CLI), Jira Cloud, and Linear tasks.",
    },
  ];

  return (
    <div className="bg-[#060608] relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      <Navbar />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-24 flex-1">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-tight mb-6">
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
              className="group relative rounded-none border border-white/[0.12] hover:border-white/30 bg-[#0c0c10]/90 hover:bg-[#111116] p-7 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Outer Card Corner Brackets - Sitting directly on the boundary */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div>
                <div className="text-3xl mb-4">{c.icon}</div>
                <h2 className="text-xl font-medium text-white mb-2 tracking-tight">
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
        <div className="group relative rounded-none border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.03] p-8 text-center max-w-3xl mx-auto shadow-xl transition-all duration-300">
          {/* Outer Card Corner Brackets - Sitting directly on the boundary */}
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

          <h2 className="text-xl font-medium text-white mb-2">
            Want to inspect the complete architecture specification?
          </h2>
          <p className="text-sm text-zinc-400 mb-6">
            Read our technical whitepapers and documentation on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
            >
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Read Docs
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-3">
                →
              </span>
            </Link>

            <Link
              href="/"
              className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-sm"
            >
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-white group-hover/btn:text-black transition-colors duration-300">
                  Explore Home
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-3">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <HoverFooter />
    </div>
  );
}

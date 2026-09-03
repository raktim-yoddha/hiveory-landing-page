import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Product — Hiveory | The 3 Isolated Modes",
  description:
    "Explore Hiveory's three isolated desktop modes: Code Mode (ADE), Autonomous Agent Mode, and Multi-Model Chat.",
};

export default function ProductPage() {
  const modes = [
    {
      id: "code",
      tag: "Terminal-First ADE",
      title: "Code Mode",
      headline: "Run coding agent CLIs side by side with zero file collisions",
      description:
        "Multiplex Claude Code, Codex, Antigravity, and OpenCode in concurrent split panes. Isolated Git worktrees prevent workspace corruption while shared Nectar memory keeps project architecture in sync.",
      features: [
        "Recursive vertical and horizontal split panes",
        "Dedicated Git worktrees per agent pane",
        "Process lifecycle & terminal multiplexing",
        "Command palette with instant focus switching",
      ],
      badge: "Built for Power Developers",
    },
    {
      id: "agent",
      tag: "Autonomous Agency",
      title: "Agent Mode",
      headline: "Persistent named agents with skills, routines, and swarms",
      description:
        "Deploy named agents configured with custom prompt instructions, system skills, and cron routines. Coordinate swarms of subagents that execute complex multi-step workflows in the background.",
      features: [
        "Named agent state & SQLite WAL persistence",
        "Plugin and skills ecosystem management",
        "Background task execution and reactive wakeups",
        "Autonomous routine scheduler & audit logs",
      ],
      badge: "Full Automation",
    },
    {
      id: "chat",
      tag: "Multi-Model Brainstorming",
      title: "Chat Mode",
      headline: "Converse with any AI model and hot-swap providers in-thread",
      description:
        "Brainstorm architecture decisions with Claude, OpenAI, Gemini, or DeepSeek. Seamlessly switch models mid-conversation without losing context, and inspect deep reasoning traces in real time.",
      features: [
        "Hot-swap AI models mid-conversation",
        "Sandboxed file attachments and markdown previews",
        "Reasoning traces & token consumption tracking",
        "Persistent local search and history export",
      ],
      badge: "Universal AI Chat",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[12px] font-medium text-zinc-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>One Super App · Three Isolated Modes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-white leading-tight mb-6">
            Engineered for code, autonomy & brainstorming
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Hiveory eliminates context fragmentation by uniting an Agentic
            Development Environment, an autonomous agent orchestrator, and a
            multi-model brainstorming chat inside one local-first desktop host.
          </p>
        </div>

        {/* 3 Modes Deep-Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {modes.map((m) => (
            <div
              key={m.id}
              className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c10]/90 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#111116] shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-md bg-white/[0.06] text-zinc-300 border border-white/10">
                    {m.tag}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {m.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-zinc-100 transition-colors">
                  {m.title}
                </h2>

                <h3 className="text-sm font-medium text-zinc-300 mb-4 leading-snug">
                  {m.headline}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {m.description}
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-6 mt-auto">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                  Key Capabilities
                </div>
                <ul className="space-y-2">
                  {m.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-[13px] text-zinc-300 flex items-start gap-2"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to experience concurrent agent development?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8">
            Download Hiveory today or explore the open-source repository on
            GitHub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>Back to Home</span>
            </Link>
            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#141418] border border-white/10 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/[0.06] transition-all"
            >
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </main>

      {/* Bottom Footer Anchor */}
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

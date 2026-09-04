import Navbar from "@/components/Navbar";
import HoverFooter from "@/components/ui/hover-footer";
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
    <div className="bg-[#060608] relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      <Navbar />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-24 flex-1">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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
              className="group relative rounded-none border border-white/[0.12] hover:border-white/30 bg-[#0c0c10]/90 hover:bg-[#111116] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Corner Brackets */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-mono px-2 py-0.5 rounded-none bg-white/[0.06] text-zinc-300 border border-white/10 whitespace-nowrap shrink-0">
                    {m.tag}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium whitespace-nowrap text-right">
                    {m.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-zinc-100 transition-colors whitespace-nowrap">
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
        <div className="group relative rounded-none border border-white/10 hover:border-white/30 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl transition-all duration-300">
          {/* Corner Brackets */}
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

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
              className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding White Filler covering Home icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Back to Home
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-3">
                →
              </span>
            </Link>

            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-sm"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding White Filler covering GitHub icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-white group-hover/btn:text-black transition-colors duration-300">
                  GitHub Repository
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-3">
                →
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <HoverFooter />
    </div>
  );
}

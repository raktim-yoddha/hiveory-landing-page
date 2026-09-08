import Navbar from "@/components/Navbar";
import HoverFooter from "@/components/ui/hover-footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Product — Hiveory | The 3 Isolated Modes",
  description:
    "Explore Hiveory's three isolated desktop modes: Agent Mode, Code Mode (ADE), and Standalone AI Chat.",
};

export default function ProductPage() {
  const modes = [
    {
      id: "agent",
      tag: "Ctrl+1 · Autonomous Agency",
      title: "Agent Mode",
      headline: "Durable, reusable AI assistants with explicit policies & skills",
      description:
        "Create named agents configured with custom prompt instructions, runtime limits, and approval policies. Grant specific local folders instead of exposing the whole filesystem, with SQLite WAL persistence and direct OpenAI Responses API integration (store: false).",
      imageSrc: "/agent-mode.png",
      features: [
        "Named agents with folder grants & approval policies",
        "Over 20 built-in SKILL.md packages & conflict resolution",
        "Declarative HTTPS plugins with host allow-lists",
        "Local routine automations & durable run recovery",
        "Direct OpenAI Responses API calls (store: false)",
        "Durable conversations, memories, and generated artifacts",
      ],
      badge: "Autonomous Assistants",
    },
    {
      id: "code",
      tag: "Ctrl+2 · Terminal-First ADE",
      title: "Code Mode",
      headline: "Multi-pane development workbench with native terminals & coding agents",
      description:
        "Work on local repositories in a flexible multi-pane canvas. Multiplex native PTY terminals, Claude Code, Codex, Antigravity, OpenCode, and embedded browsers. Isolated Git worktrees prevent staging collisions while optimistic SHA-256 fingerprints protect file edits.",
      imageSrc: "/demo.png",
      features: [
        "Recursive multi-pane canvas (CMD, PowerShell, Git Bash)",
        "Coding agent CLIs (Claude Code, Codex, Antigravity, OpenCode)",
        "Git worktree isolation & durable task DAG orchestration",
        "Monaco editor with optimistic SHA-256 edit fingerprints",
        "Coordination pane with mailboxes & decision gates",
        "GitHub issues and pull requests via authenticated gh CLI",
      ],
      badge: "Local-First ADE",
    },
    {
      id: "chat",
      tag: "Ctrl+3 · Standalone AI Chat",
      title: "Chat Mode",
      headline: "Independent streaming conversations with branching & rich attachments",
      description:
        "Hold standalone AI conversations independent from Code workspaces and agent tools. Stream text and reasoning events, retry turns, edit messages, branch conversations, preserve drafts, and import bounded PDF, image, text, and Markdown attachments into app-managed storage.",
      imageSrc: "/chat-mode.png",
      features: [
        "Streaming text & reasoning event inspection",
        "Conversation branching, retry & local drafts",
        "Bounded attachments in application-managed storage",
        "Sanitized portable archive export & Markdown rendering",
        "Independent from Code workspaces & agent permissions",
        "Model gateway credentials secured in OS keyring",
      ],
      badge: "Isolated AI Chat",
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
          <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-tight mb-6">
            Engineered for agents, code & standalone chat
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Hiveory keeps three distinct modes separate so each one has a clear capability
            boundary. Powered by a privileged Rust host and Tauri with zero cloud dependency.
          </p>
        </div>

        {/* 3 Modes Deep-Dive Detailed Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {modes.map((m) => (
            <div
              key={m.id}
              id={m.id}
              className="group relative rounded-none border border-white/[0.12] hover:border-white/30 bg-[#0c0c10]/95 hover:bg-[#111116] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl scroll-mt-28"
            >
              {/* Outer Boundary Corner Brackets */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-mono px-2 py-0.5 rounded-none bg-white/[0.06] text-zinc-300 border border-white/10 whitespace-nowrap shrink-0">
                    {m.tag}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium whitespace-nowrap text-right">
                    {m.badge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-medium text-white mb-2 tracking-[-0.02em] group-hover:text-zinc-100 transition-colors">
                  {m.title}
                </h2>

                <h3 className="text-sm font-medium text-zinc-300 mb-4 leading-snug">
                  {m.headline}
                </h3>

                <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed mb-6">
                  {m.description}
                </p>

                {/* UI Demo Screenshot Preview */}
                <div className="relative w-full aspect-[16/10] mb-6 rounded-none border border-white/15 bg-[#08080c] shadow-lg group/img flex items-center justify-center overflow-hidden">
                  <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-white/40 pointer-events-none z-10" />
                  <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-white/40 pointer-events-none z-10" />
                  <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-white/40 pointer-events-none z-10" />
                  <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-white/40 pointer-events-none z-10" />

                  <Image
                    src={m.imageSrc}
                    alt={`${m.title} interface preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain block transition-transform duration-500 group-hover/img:scale-[1.02] filter grayscale contrast-125"
                    quality={90}
                  />

                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]" />
                </div>
              </div>

              {/* Detailed Capabilities List with White Tick Bullets */}
              <div className="border-t border-white/[0.08] pt-6 mt-auto">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-3.5">
                  Detailed Capabilities
                </div>
                <ul className="space-y-2.5">
                  {m.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-[13px] text-zinc-300 flex items-start gap-2.5 leading-snug"
                    >
                      <svg
                        className="w-4 h-4 text-white shrink-0 mt-0.5"
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

          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
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
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

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

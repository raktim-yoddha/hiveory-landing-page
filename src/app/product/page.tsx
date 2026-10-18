import Navbar from "@/components/Navbar";
import HoverFooter from "@/components/ui/hover-footer";
import Image from "next/image";
import { GITHUB_RELEASES_PAGE, GITHUB_URL } from "@/lib/download";

export const metadata = {
  title: "Product — Hiveory | Work, Bots and Chat",
  description:
    "What Hiveory does: run coding-agent CLIs side by side in their own Git worktrees, keep bots working on schedules, and chat with any CLI's models.",
};

export default function ProductPage() {
  const modes: {
    id: string;
    tag: string;
    title: string;
    headline: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    features: string[];
    badge: string;
  }[] = [
    {
      id: "work",
      tag: "Ctrl 1 · Work",
      title: "Work",
      headline: "Coding agents side by side, each in its own Worktree",
      description:
        "Add a folder, create a repository or clone one. Open as many agents as you like in each Worktree, in real terminals or as chats, and watch them on a board that moves by their real state.",
      imageSrc: "/work.webp",
      imageAlt: "Work view with two agents open side by side and the board listing every agent",
      features: [
        "Claude Code, Codex, Gemini CLI, OpenCode and 30+ more CLIs",
        "Worktrees on their own branches, created and cleaned up for you",
        "Board: Idle, Working, Waiting for you, with the reason it waits",
        "Split right or down, drag to an edge, swap, or show as tabs",
        "Presets open your usual set of agents in one click",
        "Pull requests and issues from GitHub, GitLab, Jira and Linear",
        "A built-in browser your agents can drive, with a visible cursor",
      ],
      badge: "Parallel agents",
    },
    {
      id: "bots",
      tag: "Ctrl 2 · Bots",
      title: "Bots",
      headline: "Teammates with a brief, a memory and a schedule",
      description:
        "Give a bot a job and it keeps doing it. Bots run on schedules or when something happens in a connected app, work in teams under a Chief of Staff, and ask you before they send or change anything as you.",
      features: [
        "A brief, model and memory carried into every conversation",
        "Schedules (once, every few minutes, or on a calendar rule)",
        "Triggers from connected apps, run read-only",
        "Teams with a Chief of Staff and a work board",
        "Asks before acting in your apps; you allow or decline",
        "Its own browser profile and, optionally, a Linux computer",
      ],
      badge: "Always-on work",
    },
    {
      id: "chat",
      tag: "Ctrl 3 · Chat",
      title: "Chat",
      headline: "Talk to any CLI's models, on the plans you already have",
      description:
        "Pick a CLI Hiveory found, then a model and an effort level, and chat. Attach images and files, queue your next message while the answer streams, and keep chats running while you work elsewhere.",
      imageSrc: "/chat.webp",
      imageAlt: "Chat view with Codex selected and its model and effort pickers",
      features: [
        "Searchable model picker and effort per chat",
        "Images, files and long text by paste or drop",
        "Queue the next message while the answer streams",
        "Saved prompts in every message box",
        "Scheduled chats that start on their own",
        "Keeps running while you are in Work or Bots",
      ],
      badge: "Any model",
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
            Work, Bots and Chat in one app
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Hiveory runs the agent CLIs you already use and keeps them out of each other&apos;s way.
            Everything happens on your computer: no account, no Hiveory server.
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

                {/* Screenshot of the current app, when there is one */}
                {m.imageSrc && (
                <div className="relative w-full aspect-[16/10] mb-6 rounded-none border border-white/15 bg-[#08080c] shadow-lg group/img flex items-center justify-center overflow-hidden">
                  <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-white/40 pointer-events-none z-10" />
                  <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-white/40 pointer-events-none z-10" />
                  <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-white/40 pointer-events-none z-10" />
                  <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-white/40 pointer-events-none z-10" />

                  <Image
                    src={m.imageSrc}
                    alt={m.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain block transition-transform duration-500 group-hover/img:scale-[1.02] filter grayscale contrast-125"
                    quality={90}
                  />

                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]" />
                </div>
                )}
              </div>

              {/* Detailed Capabilities List with White Tick Bullets */}
              <div className="border-t border-white/[0.08] pt-6 mt-auto">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-3.5">
                  What it does
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
            Try it on your next task
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8">
            Free and open source. Install it, open a folder and start your first agents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GITHUB_RELEASES_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
            >
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Download free
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-3">
                →
              </span>
            </a>

            <a
              href={GITHUB_URL}
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
                  View on GitHub
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

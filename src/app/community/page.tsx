import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Community — Hiveory | Join the Builders",
  description:
    "Join the Hiveory open-source community on Discord, GitHub, and YouTube. Collaborate on agent workflows, skills, and ADE features.",
};

export default function CommunityPage() {
  const channels = [
    {
      title: "Discord Community",
      desc: "Chat with fellow developers, share custom agent routines, get help, and participate in weekly community office hours.",
      link: "https://discord.gg/sT8Maq6Cxs",
      btnText: "Join Discord Server",
      badge: "Active Chat",
      icon: (
        <svg
          className="w-6 h-6 fill-current text-[#5865F2]"
          viewBox="0 0 24 24"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      title: "GitHub Repository",
      desc: "Star the project, report bugs, file feature requests, review RFC proposals, and submit pull requests directly to the core codebase.",
      link: "https://github.com/raktim-yoddha/hiveory",
      btnText: "Explore GitHub",
      badge: "Open Source",
      icon: (
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      title: "YouTube Channel",
      desc: "Watch deep-dive video tutorials, live coding demonstrations, architecture breakdowns, and feature walkthroughs by the creators.",
      link: "https://www.youtube.com/@ttcislive",
      btnText: "Watch on YouTube",
      badge: "Video Guides",
      icon: (
        <svg className="w-6 h-6 fill-current text-[#FF0000]" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
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
            Join the Hiveory Community
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Connect with developers building the future of agentic engineering.
            Share skills, give feedback, and contribute to an open-source
            desktop ecosystem.
          </p>
        </div>

        {/* Community Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {channels.map((c, i) => (
            <div
              key={i}
              className="relative rounded-none border border-white/[0.12] bg-[#0c0c10]/90 p-8 flex flex-col justify-between hover:border-white/25 hover:bg-[#121217] transition-all shadow-xl group"
            >
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                    {c.icon}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded-none border border-white/[0.06]">
                    {c.badge}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {c.title}
                </h2>

                <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                  {c.desc}
                </p>
              </div>

              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-white/[0.06] hover:bg-white text-white hover:text-black py-2.5 px-4 text-sm font-semibold transition-all shadow-sm group-hover:bg-white group-hover:text-black border border-white/10 hover:border-white"
              >
                <span>{c.btnText}</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          ))}
        </div>

        {/* Community Guidelines & Values */}
        <div className="relative rounded-none border border-white/10 bg-white/[0.02] p-8 sm:p-10 max-w-4xl mx-auto text-center shadow-xl">
          {/* Corner Brackets */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-white/30 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-white/30 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-white/30 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-white/30 pointer-events-none" />
          <h2 className="text-xl font-bold text-white mb-3">
            Open Source Values
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-6">
            Hiveory believes that the developer environment of the future should
            be local-first, privacy-preserving, and non-extractive. No forced
            subscriptions, no mandatory cloud telemetry, and total sovereignty
            over your source code.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a
              href="https://github.com/raktim-yoddha/hiveory/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white underline underline-offset-4"
            >
              View License
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white underline underline-offset-4"
            >
              Contribute Code
            </a>
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

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ModeCard {
  id: string;
  tag: string;
  dotColor: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  vacancyLabel: string;
  icon: React.ReactNode;
}

const modesData: ModeCard[] = [
  {
    id: "agent",
    tag: "Autonomous Agency",
    dotColor: "bg-emerald-400",
    title: "Agent Mode",
    subtitle: "Persistent autonomous agents with skills and routines",
    description:
      "Deploy named autonomous agents configured with custom instructions, system skills, and cron routines. Coordinate swarms of subagents that execute complex multi-step workflows in the background.",
    bullets: [
      "Named agent state with SQLite WAL persistence",
      "Custom SKILL.md routines & plugin management",
      "Background swarm delegation & reactive wakeups",
      "Continuous audit logs & execution telemetry",
    ],
    vacancyLabel: "Agent Mode Workspace Preview",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
  },
  {
    id: "code",
    tag: "Terminal-First ADE",
    dotColor: "bg-blue-400",
    title: "Code Mode",
    subtitle: "Agentic Development Environment with concurrent split panes",
    description:
      "Multiplex Claude Code, Codex, Antigravity, and OpenCode side by side. Isolated Git worktrees prevent workspace corruption with zero file conflicts while shared Nectar memory keeps project state synced.",
    bullets: [
      "Recursive split panes (horizontal & vertical)",
      "Isolated Git worktrees per agent session",
      "Native PTY terminal multiplexing with streaming ANSI",
      "Shared Nectar architecture & memory store over MCP",
    ],
    vacancyLabel: "Code Mode ADE Multi-Pane Preview",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    id: "chat",
    tag: "Multi-Model Brainstorming",
    dotColor: "bg-purple-400",
    title: "Chat Mode",
    subtitle: "Converse with any AI model and hot-swap providers in-thread",
    description:
      "Brainstorm architecture decisions with Claude, OpenAI, Gemini, or local models. Seamlessly switch models mid-conversation without losing context, and inspect deep reasoning traces in real time.",
    bullets: [
      "Instant in-thread model switching without context loss",
      "Deep reasoning traces & token consumption tracking",
      "Sandboxed file attachments and markdown previews",
      "Local-first encrypted conversation archive",
    ],
    vacancyLabel: "Chat Mode Session Preview",
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-.868-.868c.28-.992.42-2.03.42-3.082 0-.25-.015-.499-.044-.746C3.714 14.88 3 13.51 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
];

export default function ProductCardStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bottomOffset, setBottomOffset] = useState<number>(1000);

  useEffect(() => {
    const updateOffset = () => {
      setBottomOffset(window.innerHeight + 150);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // CARD 0 (Agent Mode): Stays in its place from the start (y: 0), scales down as Card 1 arrives
  const scale0 = useTransform(scrollYProgress, [0.12, 0.42], [1, 0.94]);

  // CARD 1 (Code Mode): Appears from the very bottom, rises and stops over Card 0 at y: 24
  const y1 = useTransform(scrollYProgress, [0.08, 0.42], [bottomOffset, 24]);
  const scale1 = useTransform(scrollYProgress, [0.52, 0.80], [1, 0.97]);

  // CARD 2 (Chat Mode): Appears from the very bottom, rises and stops over Card 1 at y: 48
  const y2 = useTransform(scrollYProgress, [0.48, 0.80], [bottomOffset, 48]);

  return (
    <section
      id="product-modes"
      ref={sectionRef}
      className="relative w-full h-[320vh] z-20"
    >
      {/* Sticky Viewport Frame: Title and description are stuck at the top */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32 pb-8 px-4 sm:px-6 overflow-hidden pointer-events-none">
        {/* Stuck Title and Description at the Top */}
        <div className="max-w-3xl mx-auto text-center mb-7 sm:mb-9 shrink-0 pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight mb-2">
            One Super App. Three Modes.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Switch seamlessly between full autonomous task execution, multi-CLI
            coding sessions, and multi-model brainstorming.
          </p>
        </div>

        {/* Stacking Cards Area: Below the Title and Description */}
        <div className="relative w-full max-w-5xl h-[460px] sm:h-[490px] md:h-[510px] pointer-events-auto">
          {/* CARD 0: Agent Mode - Stays in place */}
          <motion.div
            style={{ y: 0, scale: scale0, zIndex: 10 }}
            className="absolute inset-x-0 top-0 origin-top rounded-none border border-white/[0.15] bg-[#0c0c11]/95 backdrop-blur-2xl shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-7 md:p-8"
          >
            {/* Outer Card Corner Brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-white/40 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-white/40 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-white/40 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-white/40 pointer-events-none" />
            <CardInnerContent card={modesData[0]} />
          </motion.div>

          {/* CARD 1: Code Mode */}
          <motion.div
            style={{ y: y1, scale: scale1, zIndex: 20 }}
            className="absolute inset-x-0 top-0 origin-top rounded-none border border-white/[0.15] bg-[#0c0c11]/95 backdrop-blur-2xl shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-7 md:p-8"
          >
            {/* Outer Card Corner Brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-white/40 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-white/40 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-white/40 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-white/40 pointer-events-none" />
            <CardInnerContent card={modesData[1]} />
          </motion.div>

          {/* CARD 2: Chat Mode */}
          <motion.div
            style={{ y: y2, zIndex: 30 }}
            className="absolute inset-x-0 top-0 origin-top rounded-none border border-white/[0.15] bg-[#0c0c11]/95 backdrop-blur-2xl shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-7 md:p-8"
          >
            {/* Outer Card Corner Brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-white/40 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-white/40 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-white/40 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-white/40 pointer-events-none" />
            <CardInnerContent card={modesData[2]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CardInnerContent({ card }: { card: ModeCard }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
      {/* Left Side: Image Vacancy Container */}
      <div className="md:col-span-6 w-full aspect-[16/10] max-h-[220px] sm:max-h-[280px] rounded-none border border-dashed border-white/20 bg-white/[0.02] flex flex-col items-center justify-center p-5 text-center group hover:border-white/35 transition-all duration-300 relative overflow-hidden shadow-inner">
        {/* Subtle glass shimmer inside vacancy */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

        <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-none bg-white/[0.05] border border-white/10 flex items-center justify-center mb-2.5 shadow-inner group-hover:scale-105 transition-transform duration-300">
          {card.icon}
        </div>

        <span className="relative text-xs sm:text-sm font-semibold text-zinc-200 tracking-tight mb-1">
          {card.vacancyLabel}
        </span>
        <span className="relative text-[11px] sm:text-xs text-zinc-500 max-w-[200px]">
          Ready for image asset injection
        </span>

        {/* Corner guide brackets */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/30" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/30" />
      </div>

      {/* Right Side: Title & Description */}
      <div className="md:col-span-6 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
          {card.title}
        </h3>

        <p className="text-xs sm:text-[13px] font-medium text-zinc-400 mb-3 leading-snug">
          {card.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-zinc-400/90 leading-relaxed mb-4 hidden sm:block">
          {card.description}
        </p>

        {/* Key Feature Bullets */}
        <ul className="space-y-1.5 mb-4">
          {card.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-xs sm:text-[13px] text-zinc-300"
            >
              <svg
                className="w-3.5 h-3.5 text-emerald-400 shrink-0"
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
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Explore Button Link */}
        <div>
          <Link
            href="/product"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-zinc-300 transition-colors group"
          >
            <span>Explore {card.title}</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

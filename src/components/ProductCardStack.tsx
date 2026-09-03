"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
  imageSrc: string;
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
    imageSrc: "/agent-mode.png",
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
    imageSrc: "/demo.png",
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
    imageSrc: "/chat-mode.png",
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
  const [bottomOffset, setBottomOffset] = useState<number>(1200);

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

  // CARD 0 (Agent Mode): Stays at y: 0, full scale
  // CARD 1 (Code Mode): Starts rising immediately as scroll starts from this position, completely overriding Card 0
  const y1 = useTransform(scrollYProgress, [0.01, 0.44], [bottomOffset, 0]);

  // CARD 2 (Chat Mode): Rises up and lands at y: 0, completely overriding Card 1
  const y2 = useTransform(scrollYProgress, [0.48, 0.88], [bottomOffset, 0]);

  return (
    <div id="product-modes" className="relative w-full">
      {/* Section Header (In normal document flow, NOT stuck in the overlapping animation) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.03em] text-white leading-tight mb-4">
          One Super App. Three Modes.
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Switch seamlessly between full autonomous task execution, multi-CLI
          coding sessions, and multi-model brainstorming inside one unified host.
        </p>
      </div>

      {/* Sticky Overlapping Cards Animation (Title is NOT shown in sticky viewport) */}
      <section
        ref={sectionRef}
        className="relative w-full h-[320vh] z-20"
      >
        {/* Sticky Viewport Frame: Shifted down to stay centered overall in the viewport */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-8 pb-4 px-4 sm:px-6 lg:px-8 overflow-hidden pointer-events-none">
          {/* Overriding Lowered-Length Cards Area */}
          <div className="relative w-full max-w-6xl h-[430px] sm:h-[450px] md:h-[470px] lg:h-[480px] pointer-events-auto">
            {/* CARD 0: Agent Mode - In place from start */}
            <motion.div
              style={{ y: 0, zIndex: 10 }}
              className="absolute inset-0 rounded-none border border-white/[0.15] bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-6 md:p-8 flex flex-col justify-center"
            >
              {/* Outer Card Corner Brackets */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-white/40 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-white/40 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-white/40 pointer-events-none" />
              <CardInnerContent card={modesData[0]} index={0} />
            </motion.div>

            {/* CARD 1: Code Mode - Rises up and completely overrides Card 0 */}
            <motion.div
              style={{ y: y1, zIndex: 20 }}
              className="absolute inset-0 rounded-none border border-white/[0.15] bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-6 md:p-8 flex flex-col justify-center"
            >
              {/* Outer Card Corner Brackets */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-white/40 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-white/40 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-white/40 pointer-events-none" />
              <CardInnerContent card={modesData[1]} index={1} />
            </motion.div>

            {/* CARD 2: Chat Mode - Rises up and completely overrides Card 1 */}
            <motion.div
              style={{ y: y2, zIndex: 30 }}
              className="absolute inset-0 rounded-none border border-white/[0.15] bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-6 md:p-8 flex flex-col justify-center"
            >
              {/* Outer Card Corner Brackets */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-white/40 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-white/40 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-white/40 pointer-events-none" />
              <CardInnerContent card={modesData[2]} index={2} />
            </motion.div>
          </div>

          {/* See More Details Button - Always visible, never disappears while scrolling down */}
          <div className="mt-6 sm:mt-8 z-40 flex items-center justify-center pointer-events-auto">
            <Link
              href="/product"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-none bg-[#141418] hover:bg-white text-white hover:text-black border border-white/20 hover:border-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.06)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
            >
              <span>See More Details</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CardInnerContent({ card, index }: { card: ModeCard; index: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center h-full">
      {/* Left Side: Title & Description */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        {/* Step pill tag */}
        <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-none bg-white/[0.06] border border-white/15 text-[11px] font-mono text-zinc-300">
            <span className="text-white font-bold">{index + 1}/3</span>
            <span className="text-zinc-500">·</span>
            <span>{card.tag}</span>
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-1.5">
          {card.title}
        </h3>

        <p className="text-xs sm:text-[13px] font-medium text-zinc-300 mb-2 leading-snug">
          {card.subtitle}
        </p>

        <p className="text-xs text-zinc-400 leading-relaxed mb-3 hidden sm:block">
          {card.description}
        </p>

        {/* Key Feature Bullets */}
        <ul className="space-y-1.5 mb-3 sm:mb-4">
          {card.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-zinc-300"
            >
              <svg
                className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"
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
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-zinc-200 transition-colors group"
          >
            <span>Explore {card.title}</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Right Side: Mode Desktop Image (Complete unzoomed 16:9 screenshot) */}
      <div className="lg:col-span-7 flex items-center justify-center w-full">
        <div className="relative w-full aspect-[16/9] rounded-none border border-white/15 bg-[#08080c] overflow-hidden shadow-2xl group flex items-center justify-center">
          <Image
            src={card.imageSrc}
            alt={`${card.title} desktop preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-contain block rounded-none transition-transform duration-500 group-hover:scale-[1.01]"
            priority={index === 0}
            quality={100}
          />
          {/* Subtle glass reflection accent */}
          <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
        </div>
      </div>
    </div>
  );
}

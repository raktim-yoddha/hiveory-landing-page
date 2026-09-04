"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ModeCard {
  id: string;
  tag: string;
  dotColor: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
  imageSrc: string;
}

const modesData: ModeCard[] = [
  {
    id: "agent",
    tag: "Autonomous Agency",
    dotColor: "bg-emerald-400",
    title: "Agent Mode",
    subtitle: "Persistent autonomous agents with skills and routines",
    features: [
      {
        title: "SQLite WAL State",
        desc: "Local ACID memory that never leaks to cloud",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        ),
      },
      {
        title: "SKILL.md Routines",
        desc: "Custom prompt instructions & scheduled crons",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        ),
      },
      {
        title: "Swarm Delegation",
        desc: "Background subagents with reactive wakeups",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        ),
      },
    ],
    imageSrc: "/agent-mode.png",
  },
  {
    id: "code",
    tag: "Terminal-First ADE",
    dotColor: "bg-blue-400",
    title: "Code Mode",
    subtitle: "Agentic Development Environment with concurrent split panes",
    features: [
      {
        title: "Recursive Split Panes",
        desc: "Multiplex Claude Code, Codex, & CLI agents",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 3v18" />
          </svg>
        ),
      },
      {
        title: "Git Worktree Isolation",
        desc: "Parallel branches without file conflicts",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="6" y1="3" x2="6" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
          </svg>
        ),
      },
      {
        title: "Nectar Shared Memory",
        desc: "Unified project state over MCP store",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        ),
      },
    ],
    imageSrc: "/demo.png",
  },
  {
    id: "chat",
    tag: "Multi-Model Brainstorming",
    dotColor: "bg-purple-400",
    title: "Chat Mode",
    subtitle: "Converse with any AI model and hot-swap providers in-thread",
    features: [
      {
        title: "Hot-Swap Providers",
        desc: "Switch Claude, GPT & Ollama in-thread",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 3 21 3 21 8" />
            <line x1="4" y1="20" x2="21" y2="3" />
            <polyline points="21 16 21 21 16 21" />
            <line x1="15" y1="15" x2="21" y2="21" />
            <line x1="4" y1="4" x2="9" y2="9" />
          </svg>
        ),
      },
      {
        title: "Deep Reasoning Traces",
        desc: "Inspect live step execution & thoughts",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        title: "Sandboxed Context",
        desc: "Local-first encrypted conversations",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
      },
    ],
    imageSrc: "/chat-mode.png",
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
  const y2 = useTransform(scrollYProgress, [0.48, 0.86], [bottomOffset, 0]);

  // Button: Only comes up after 3rd card (Chat Mode) has completed its override
  // Rises up (y: 28 -> 0) and fades in (opacity: 0 -> 1) between 0.84 and 0.90
  // Stays locked at opacity: 1 and y: 0 on scroll down (never fades out on scroll down)
  // Reverses automatically on scroll up (fades out as it goes down)
  const buttonOpacity = useTransform(scrollYProgress, [0.84, 0.90, 1.0], [0, 1, 1]);
  const buttonY = useTransform(scrollYProgress, [0.84, 0.90, 1.0], [28, 0, 0]);
  const buttonPointerEvents = useTransform(scrollYProgress, (pos) =>
    pos >= 0.86 ? "auto" : "none"
  );

  return (
    <div id="product-modes" className="relative w-full">
      {/* Section Header (In normal document flow, NOT stuck in the overlapping animation) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-2 sm:pb-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-[-0.025em] text-white leading-tight mb-3">
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
        {/* Sticky Viewport Frame: Positioned with minimal top gap right under header */}
        <div className="sticky top-10 sm:top-12 lg:top-14 w-full flex flex-col items-center justify-start pt-2 sm:pt-3 px-4 sm:px-6 lg:px-8 pointer-events-none">
          {/* Overriding Taller Cards Area */}
          <div className="relative w-full max-w-6xl h-[560px] sm:h-[600px] md:h-[640px] lg:h-[670px] pointer-events-auto">
            {/* CARD 0: Agent Mode - In place from start */}
            <motion.div
              style={{ y: 0, zIndex: 10 }}
              className="group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-6 sm:p-8 md:p-10 lg:p-11 flex flex-col justify-center transition-colors duration-300"
            >
              {/* Outer Card Corner Brackets - Exactly on boundary level */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <CardInnerContent card={modesData[0]} index={0} />
            </motion.div>

            {/* CARD 1: Code Mode - Rises up and completely overrides Card 0 */}
            <motion.div
              style={{ y: y1, zIndex: 20 }}
              className="group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-6 sm:p-8 md:p-10 lg:p-11 flex flex-col justify-center transition-colors duration-300"
            >
              {/* Outer Card Corner Brackets - Exactly on boundary level */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <CardInnerContent card={modesData[1]} index={1} />
            </motion.div>

            {/* CARD 2: Chat Mode - Rises up and completely overrides Card 1 */}
            <motion.div
              style={{ y: y2, zIndex: 30 }}
              className="group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-6 sm:p-8 md:p-10 lg:p-11 flex flex-col justify-center transition-colors duration-300"
            >
              {/* Outer Card Corner Brackets - Exactly on boundary level */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <CardInnerContent card={modesData[2]} index={2} />
            </motion.div>
          </div>

          {/* See More Details Button - Appears only after 3rd card, never fades on scroll down, fades down on scroll up */}
          <motion.div
            style={{
              opacity: buttonOpacity,
              y: buttonY,
              pointerEvents: buttonPointerEvents,
            }}
            className="mt-5 sm:mt-6 z-40 flex items-center justify-center"
          >
            <Link
              href="/product"
              className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
            >
              {/* Outer Boundary Corner Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding White Box */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              {/* Content Layer */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover/btn:text-black tracking-wide transition-colors duration-300">
                  See More Details
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-3">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CardInnerContent({ card, index }: { card: ModeCard; index: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center h-full">
      {/* Left Side: Title & Aesthetic Features */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        {/* Step pill tag */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/[0.03] border border-white/10 text-[11px] font-mono tracking-wider text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-white font-semibold">0{index + 1}</span>
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-white tracking-[-0.015em] leading-tight mb-2 sm:mb-3">
          {card.title}
        </h3>

        <p className="text-xs sm:text-[14px] text-zinc-400 leading-relaxed font-normal mb-5 sm:mb-6 max-w-sm">
          {card.subtitle}
        </p>

        {/* Aesthetic Feature Micro-Cards */}
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-7">
          {card.features.map((feature, i) => (
            <div
              key={i}
              className="group/item flex items-center gap-3.5 px-3.5 py-2.5 rounded-none bg-white/[0.02] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-none border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0 text-zinc-400 group-hover/item:text-white group-hover/item:border-white/25 transition-colors">
                {feature.icon}
              </span>
              <div className="flex flex-col min-w-0 justify-center">
                <span className="text-xs sm:text-[14px] font-semibold text-white tracking-tight leading-snug">
                  {feature.title}
                </span>
                <span className="text-[11px] sm:text-xs md:text-[13px] text-zinc-400 font-normal leading-tight truncate">
                  {feature.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button Link in Goji Berry Button Style */}
        <div>
          <Link
            href="/product"
            className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-sm"
          >
            {/* Outer Boundary Corner Brackets */}
            <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

            {/* Inner Expanding White Box */}
            <span className="absolute inset-y-1 left-1 w-8 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

            {/* Content Layer (Only first arrow inside white box, no second arrow at end) */}
            <span className="relative z-10 flex items-center gap-2.5">
              <span className="w-8 h-8 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <span className="text-xs sm:text-[13px] md:text-sm font-semibold text-white group-hover/btn:text-black tracking-wide transition-colors duration-300">
                Explore {card.title}
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* Right Side: Mode Desktop Image with Highlighting Edges and No Zoom */}
      <div className="lg:col-span-7 flex items-center justify-center w-full">
        <div className="relative w-full aspect-[16/9] rounded-none border border-white/15 bg-[#08080c] shadow-2xl group flex items-center justify-center">
          {/* Image Boundary Highlighting Edges */}
          <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none z-10" />
          <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none z-10" />
          <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none z-10" />
          <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none z-10" />

          <Image
            src={card.imageSrc}
            alt={`${card.title} desktop preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-contain block rounded-none"
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

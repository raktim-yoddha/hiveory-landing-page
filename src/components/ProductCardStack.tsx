"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ModeCard {
  id: string;
  stepIndex: string;
  title: string;
  subtitle: string;
  keyPoints: string[];
}

const modesData: ModeCard[] = [
  {
    id: "agent",
    stepIndex: "01",
    title: "Agent Mode",
    subtitle: "Durable AI assistants with granular skills",
    keyPoints: [
      "Named agents with strict runtime limits",
      "Folder grants without full disk access",
      "Over 20 practical built-in skill packages",
      "Local routines & SQLite WAL persistence",
    ],
  },
  {
    id: "code",
    stepIndex: "02",
    title: "Code Mode",
    subtitle: "Multi-pane canvas with native terminals",
    keyPoints: [
      "Multi-pane canvas with ConPTY shells",
      "Dedicated Git worktrees for zero collisions",
      "Monaco editor with SHA-256 fingerprinting",
      "Durable task DAG proposals & mailboxes",
    ],
  },
  {
    id: "chat",
    stepIndex: "03",
    title: "Chat Mode",
    subtitle: "Streaming AI chat with branching & drafts",
    keyPoints: [
      "Streaming text turns with zero telemetry",
      "Conversation branching & local draft states",
      "Local attachments for PDF, images & text",
      "Sanitized portable archive exports",
    ],
  },
];

export default function ProductCardStack() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // References to compute exact trajectory contact points with zero gap
  const topBoxRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<{
    topX: number;
    startY: number;
    x0: number;
    x1: number;
    x2: number;
    endY0: number;
    endY1: number;
    endY2: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const updateCoords = () => {
      if (
        !svgContainerRef.current ||
        !topBoxRef.current ||
        !card0Ref.current ||
        !card1Ref.current ||
        !card2Ref.current
      ) {
        return;
      }
      const svgRect = svgContainerRef.current.getBoundingClientRect();
      const topRect = topBoxRef.current.getBoundingClientRect();
      const c0 = card0Ref.current.getBoundingClientRect();
      const c1 = card1Ref.current.getBoundingClientRect();
      const c2 = card2Ref.current.getBoundingClientRect();

      const width = svgRect.width;
      const height = svgRect.height;

      // Exact horizontal center of the top logo box relative to SVG container
      const topX = topRect.left + topRect.width / 2 - svgRect.left;
      // Start directly on the bottom border of top logo box with 1.5px overlap (zero gap)
      const startY = Math.min(0, topRect.bottom - svgRect.top) - 1.5;

      // Exact horizontal center of each card relative to SVG container (middle of ceiling)
      const x0 = c0.left + c0.width / 2 - svgRect.left;
      const x1 = c1.left + c1.width / 2 - svgRect.left;
      const x2 = c2.left + c2.width / 2 - svgRect.left;

      // End directly on the top border (ceiling) of each card with 1.5px overlap (zero gap)
      const endY0 = Math.max(height, c0.top - svgRect.top) + 1.5;
      const endY1 = Math.max(height, c1.top - svgRect.top) + 1.5;
      const endY2 = Math.max(height, c2.top - svgRect.top) + 1.5;

      setCoords({ topX, startY, x0, x1, x2, endY0, endY1, endY2, width, height });
    };

    updateCoords();
    window.addEventListener("resize", updateCoords);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && svgContainerRef.current) {
      observer = new ResizeObserver(updateCoords);
      observer.observe(svgContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateCoords);
      observer?.disconnect();
    };
  }, []);

  // Fallback geometry for SSR
  const width = coords?.width ?? 1152;
  const height = coords?.height ?? 125;
  const topX = coords?.topX ?? width / 2;
  const startY = coords?.startY ?? -1.5;
  const x0 = coords?.x0 ?? (width - 64) / 6;
  const x1 = coords?.x1 ?? width / 2;
  const x2 = coords?.x2 ?? width - (width - 64) / 6;
  const endY0 = coords?.endY0 ?? height + 1.5;
  const endY1 = coords?.endY1 ?? height + 1.5;
  const endY2 = coords?.endY2 ?? height + 1.5;

  // Path definitions: smooth curves that touch the bottom of the logo box and middle of the ceiling of each card
  const leftPath = `M ${topX} ${startY} C ${topX} ${startY + (endY0 - startY) * 0.45}, ${x0} ${startY + (endY0 - startY) * 0.55}, ${x0} ${endY0}`;
  const centerPath = `M ${topX} ${startY} L ${x1} ${endY1}`;
  const rightPath = `M ${topX} ${startY} C ${topX} ${startY + (endY2 - startY) * 0.45}, ${x2} ${startY + (endY2 - startY) * 0.55}, ${x2} ${endY2}`;

  return (
    <section
      id="product-modes"
      className="relative w-full border-t border-white/[0.08] bg-[#07070a] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden z-10"
    >
      {/* Subtle ambient aura */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.012] blur-[150px] rounded-full" />

      {/* Animation: 4s linear matching the exact speed of the Hero section flow */}
      <style>{`
        @keyframes fillAndDrainTrajectory {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: -1400;
          }
        }
        .animate-trajectory-fill-drain {
          animation: fillAndDrainTrajectory 4s linear infinite;
        }
      `}</style>

      {/* SECTION HEADER */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-[-0.025em] text-white leading-tight mb-3">
          One Super App. Three Modes.
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Switch seamlessly between Agent Mode (Ctrl+1), Code Mode (Ctrl+2), and Chat Mode (Ctrl+3) inside one local-first desktop workspace.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* CENTRAL TREE CONTAINER: Shared max-width guarantees pixel-perfect alignment*/}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* 1. CENTRAL TOP NODE: HIVEORY LOGO BOX */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-20 flex flex-col items-center"
        >
          {/* Central Technical Box */}
          <div
            ref={topBoxRef}
            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-none border border-white/20 hover:border-white/50 bg-[#0c0c12] p-3.5 sm:p-4 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300"
          >
            {/* Outer Boundary Corner Brackets */}
            <span className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-white/60 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-white/60 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-white/60 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-white/60 group-hover:border-white transition-colors duration-300 pointer-events-none" />

            {/* Hiveory Bee Logo Icon */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/hiveory-logo.png"
                alt="Hiveory Host Engine"
                width={56}
                height={56}
                className="w-full h-full object-contain filter brightness-110 contrast-125 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* ===================================================================== */}
        {/* 2. CABLE BRANCHING NETWORK (Lines touch all boxes in middle of ceiling)*/}
        {/* ===================================================================== */}
        <div
          ref={svgContainerRef}
          className="relative w-full h-[100px] sm:h-[115px] md:h-[125px] hidden md:block overflow-visible select-none pointer-events-none mt-0 mb-0"
        >
          <svg
            className="w-full h-full overflow-visible"
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
          >
            {/* Base Static Guide Paths: Clearly visible subtle track touching middle of ceiling */}
            <g stroke="rgba(255, 255, 255, 0.16)" strokeWidth="0.85" strokeLinecap="butt">
              <path d={leftPath} />
              <path d={centerPath} />
              <path d={rightPath} />
            </g>

            {/* Fills Full Trajectory with White, then Goes Out and Repeats (4s matching Hero) */}
            <g
              stroke="rgba(255, 255, 255, 0.65)"
              fill="none"
              strokeDasharray="1000 1400"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 1.5px rgba(255, 255, 255, 0.25))",
              }}
            >
              <path
                d={leftPath}
                pathLength={1000}
                className="animate-trajectory-fill-drain"
                strokeWidth={hoveredCard !== null ? 1.0 : 0.85}
                style={{ transition: "stroke-width 0.3s ease" }}
              />
              <path
                d={centerPath}
                pathLength={1000}
                className="animate-trajectory-fill-drain"
                strokeWidth={hoveredCard !== null ? 1.0 : 0.85}
                style={{ transition: "stroke-width 0.3s ease" }}
              />
              <path
                d={rightPath}
                pathLength={1000}
                className="animate-trajectory-fill-drain"
                strokeWidth={hoveredCard !== null ? 1.0 : 0.85}
                style={{ transition: "stroke-width 0.3s ease" }}
              />
            </g>
          </svg>
        </div>

        {/* Mobile Vertical Flow Stem */}
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 via-white/15 to-transparent block md:hidden mb-4" />

        {/* ===================================================================== */}
        {/* 3. THE 3 SMALL MODE CARDS (No buttons, separator after description)   */}
        {/* ===================================================================== */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-16 mt-0">
          {modesData.map((mode, index) => {
            const isHovered = hoveredCard === index;
            const cardRef =
              index === 0 ? card0Ref : index === 1 ? card1Ref : card2Ref;

            return (
              <motion.div
                key={mode.id}
                ref={cardRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-none border transition-all duration-300 bg-[#0c0c11] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col p-6 sm:p-7 ${
                  isHovered
                    ? "border-white/40 shadow-[0_25px_80px_-10px_rgba(0,0,0,0.95),0_0_20px_-5px_rgba(255,255,255,0.1)] -translate-y-1"
                    : "border-white/[0.12] hover:border-white/30"
                }`}
              >
                {/* OUTER CARD CORNER BRACKETS */}
                <div
                  className={`absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 transition-colors duration-300 pointer-events-none z-10 ${
                    isHovered ? "border-white" : "border-white/50 group-hover:border-white/80"
                  }`}
                />
                <div
                  className={`absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 transition-colors duration-300 pointer-events-none z-10 ${
                    isHovered ? "border-white" : "border-white/50 group-hover:border-white/80"
                  }`}
                />
                <div
                  className={`absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 transition-colors duration-300 pointer-events-none z-10 ${
                    isHovered ? "border-white" : "border-white/50 group-hover:border-white/80"
                  }`}
                />
                <div
                  className={`absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 transition-colors duration-300 pointer-events-none z-10 ${
                    isHovered ? "border-white" : "border-white/50 group-hover:border-white/80"
                  }`}
                />

                {/* CARD CONTENT */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Step Pill Tag (Only the number as requested) */}
                  <div className="flex items-center mb-3">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/[0.03] border border-white/10 text-[11px] font-mono tracking-wider text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-white font-semibold">{mode.stepIndex}</span>
                    </span>
                  </div>

                  {/* Title: Strictly ONE line */}
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-2 truncate whitespace-nowrap">
                    {mode.title}
                  </h3>

                  {/* Description: Strictly ONE line */}
                  <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed truncate whitespace-nowrap">
                    {mode.subtitle}
                  </p>

                  {/* Small Separator after Description (just like the pricing cards) */}
                  <div className="w-full border-b border-white/[0.08] my-5" />

                  {/* Four Key Points with White Tick Bullets: Strictly ONE line each */}
                  <ul className="space-y-3.5 flex-1">
                    {mode.keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-xs sm:text-[13px] text-zinc-300 min-w-0"
                      >
                        {/* White tick bullet mark */}
                        <svg
                          className="w-4 h-4 text-white shrink-0"
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
                        <span className="truncate whitespace-nowrap text-zinc-300 font-normal">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* 4. SEE MORE DETAILS BUTTON                                            */}
        {/* ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="z-20 flex items-center justify-center"
        >
          <Link
            href="/product"
            className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
          >
            <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
            <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

            <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

            <span className="relative z-10 flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
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
  );
}

"use client";

import { motion, useReducedMotion, useScroll, useTransform, useTime } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ClaudeCodeIcon,
  CodexIcon,
  CursorIcon,
  GeminiCLIIcon,
  GithubCopilotIcon,
  ClineIcon,
  GooseIcon,
  GrokIcon,
  AntigravityIcon,
  MistralIcon,
  ContinueIcon,
  DevinIcon,
  GithubIcon,
  LinearIcon,
  JiraIcon,
  OpenCodeIcon,
} from "./CliIcons";

// 16 logos for card 01: agent CLIs Hiveory detects, plus the code hosts and trackers it connects to
const allBrandLogos = [
  { id: "claude", name: "Claude Code", icon: <ClaudeCodeIcon className="w-6 h-6" /> },
  { id: "github", name: "GitHub", icon: <GithubIcon className="w-6 h-6 text-black" /> },
  { id: "cursor", name: "Cursor", icon: <CursorIcon className="w-6 h-6 text-black" /> },
  { id: "linear", name: "Linear", icon: <LinearIcon className="w-6 h-6" /> },
  { id: "codex", name: "OpenAI Codex", icon: <CodexIcon className="w-6 h-6" /> },
  { id: "jira", name: "Jira", icon: <JiraIcon className="w-6 h-6" /> },
  { id: "antigravity", name: "Antigravity", icon: <AntigravityIcon className="w-6 h-6" /> },
  { id: "opencode", name: "OpenCode", icon: <OpenCodeIcon className="w-6 h-6 text-black" /> },
  { id: "gemini", name: "Gemini CLI", icon: <GeminiCLIIcon className="w-6 h-6" /> },
  { id: "copilot", name: "GitHub Copilot", icon: <GithubCopilotIcon className="w-6 h-6 text-black" /> },
  { id: "devin", name: "Devin", icon: <DevinIcon className="w-6 h-6" /> },
  { id: "cline", name: "Cline", icon: <ClineIcon className="w-6 h-6 text-black" /> },
  { id: "goose", name: "Block Goose", icon: <GooseIcon className="w-6 h-6 text-black" /> },
  { id: "mistral", name: "Mistral Vibe", icon: <MistralIcon className="w-6 h-6" /> },
  { id: "grok", name: "xAI Grok", icon: <GrokIcon className="w-6 h-6 text-black" /> },
  { id: "continue", name: "Continue", icon: <ContinueIcon className="w-6 h-6 text-black" /> },
];

const leftStreamLogos = allBrandLogos.slice(0, 8);
const rightStreamLogos = allBrandLogos.slice(8, 16);

const leftDelays = [0, 1.2, 2.4, 3.6, 4.8, 6.0, 7.2, 8.4];
const rightDelays = [0.6, 1.8, 3.0, 4.2, 5.4, 6.6, 7.8, 9.0];

// Card 02: agent cards as they appear on the board (pet name, CLI, live status, model)
interface BoardAgent {
  id: string;
  name: string;
  cli: string;
  detail: string;
  icon: React.ReactNode;
  status: string;
  statusColor: string;
}

const STATUS_WORKING = "bg-sky-50 text-sky-700 border-sky-200/90";
const STATUS_WAITING = "bg-amber-50 text-amber-800 border-amber-200/90";
const STATUS_IDLE = "bg-zinc-100 text-zinc-600 border-zinc-200/90";

const hostStreamTasks: BoardAgent[] = [
  {
    id: "milo",
    name: "Milo",
    cli: "Claude Code",
    detail: "feature/login · Opus",
    icon: <ClaudeCodeIcon className="w-4 h-4" />,
    status: "Working",
    statusColor: STATUS_WORKING,
  },
  {
    id: "luna",
    name: "Luna",
    cli: "Codex",
    detail: "Waiting for permission",
    icon: <CodexIcon className="w-4 h-4" />,
    status: "Needs you",
    statusColor: STATUS_WAITING,
  },
  {
    id: "kai",
    name: "Kai",
    cli: "Gemini CLI",
    detail: "fix/billing · Gemini Pro",
    icon: <GeminiCLIIcon className="w-4 h-4" />,
    status: "Working",
    statusColor: STATUS_WORKING,
  },
  {
    id: "nova",
    name: "Nova",
    cli: "OpenCode",
    detail: "Finished, back to Idle",
    icon: <OpenCodeIcon className="w-4 h-4 text-black" />,
    status: "Idle",
    statusColor: STATUS_IDLE,
  },
  {
    id: "ruby",
    name: "Ruby",
    cli: "Cursor CLI",
    detail: "Waiting for input",
    icon: <CursorIcon className="w-4 h-4 text-black" />,
    status: "Needs you",
    statusColor: STATUS_WAITING,
  },
];

// 20 items (4 cycles of 5) so the loop stays seamless and fills the tallest panel
const streamTasks = [...hostStreamTasks, ...hostStreamTasks, ...hostStreamTasks, ...hostStreamTasks];

// Same length on purpose: three short sentences of similar size per card
const capabilitiesData = [
  {
    title: "Every agent CLI you use",
    subtitle:
      "Claude Code, Codex, Gemini CLI, OpenCode and 30+ more. Hiveory finds them on your computer. Run them as terminals or chats.",
  },
  {
    title: "A board that knows who needs you",
    subtitle:
      "Every agent shows as Idle, Working or Waiting for you. Queen Bee tells you when one is done. Your phone pings you when one waits.",
  },
  {
    title: "Worktrees without Git chores",
    subtitle:
      "Each task gets its own folder and branch. Hiveory creates and cleans them up. Agents never overwrite each other.",
  },
];

export default function CapabilitiesCardStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bottomOffset, setBottomOffset] = useState<number>(1200);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);

  // Synchronized animation clock for the pipeline stream
  const streamTime = useTime();
  const reduceMotion = useReducedMotion();
  const streamY = useTransform(streamTime, (t) => (reduceMotion ? -160 : -320 + ((t % 14000) / 14000) * 320));

  useEffect(() => {
    const updateDimensions = () => {
      setBottomOffset(window.innerHeight + 150);
      const isPortrait = window.innerHeight > window.innerWidth || window.matchMedia("(orientation: portrait)").matches;
      const isTouchTablet = window.matchMedia("(pointer: coarse)").matches && window.innerWidth <= 1376;
      const isSmall = window.innerWidth < 1024;
      setIsMobileOrTablet(isSmall || isPortrait || isTouchTablet);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // CARD 0 (BYO CLI): In place from start (y: 0, zIndex: 10)
  // CARD 1 (Rust Host & SQLite WAL): Rises [0.08, 0.44]
  const y1 = useTransform(scrollYProgress, [0.08, 0.44], [bottomOffset, 0], { clamp: true });

  // CARD 2 (Git Worktree Concurrency): Rises [0.48, 0.84]
  const y2 = useTransform(scrollYProgress, [0.48, 0.84], [bottomOffset, 0], { clamp: true });

  // "See More Details" Button: Appears after 3rd card has landed [0.82, 0.90]
  // Strictly 0 before 0.82, reaches 1.0 at 0.90, and stays locked at 1.0 through the end and beyond
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.82, 0.90, 1.0], [0, 0, 1, 1]);
  const buttonY = useTransform(scrollYProgress, [0.82, 0.90, 1.0], [24, 0, 0]);
  const buttonPointerEvents = useTransform(scrollYProgress, (pos) =>
    pos >= 0.85 ? "auto" : "none"
  );

  return (
    <div id="capabilities" className="relative w-full pb-16 sm:pb-24">
      {/* Embedded GPU-accelerated keyframe styles for conveyor & parcel box */}
      <style>{`
        @keyframes cliConveyorLeft {
          0.0% { transform: translate3d(-65px, 122px, 0) rotate(-4deg); opacity: 1; }
          10.0% { transform: translate3d(-28px, 90px, 0) rotate(-3deg); opacity: 1; }
          20.0% { transform: translate3d(12px, 68px, 0) rotate(-1deg); opacity: 1; }
          28.0% { transform: translate3d(52px, 58px, 0) rotate(0deg); opacity: 1; }
          36.0% { transform: translate3d(90px, 62px, 0) rotate(2deg); opacity: 1; }
          44.0% { transform: translate3d(126px, 80px, 0) rotate(4deg); opacity: 1; }
          52.0% { transform: translate3d(156px, 110px, 0) rotate(6deg); opacity: 1; }
          61.0% { transform: translate3d(178px, 150px, 0) rotate(5deg); opacity: 1; }
          70.0% { transform: translate3d(190px, 196px, 0) rotate(3deg); opacity: 1; }
          80.0% { transform: translate3d(196px, 242px, 0) rotate(1deg); opacity: 1; }
          90.0% { transform: translate3d(196px, 282px, 0) rotate(0deg); opacity: 1; }
          100.0% { transform: translate3d(196px, 315px, 0) rotate(0deg); opacity: 1; }
        }
        @keyframes cliConveyorLeftMobile {
          0.0% { transform: translate3d(-89px, 122px, 0) rotate(-4deg); opacity: 1; }
          10.0% { transform: translate3d(-52px, 90px, 0) rotate(-3deg); opacity: 1; }
          20.0% { transform: translate3d(-12px, 68px, 0) rotate(-1deg); opacity: 1; }
          28.0% { transform: translate3d(28px, 58px, 0) rotate(0deg); opacity: 1; }
          36.0% { transform: translate3d(66px, 62px, 0) rotate(2deg); opacity: 1; }
          44.0% { transform: translate3d(102px, 80px, 0) rotate(4deg); opacity: 1; }
          52.0% { transform: translate3d(132px, 110px, 0) rotate(6deg); opacity: 1; }
          61.0% { transform: translate3d(154px, 150px, 0) rotate(5deg); opacity: 1; }
          70.0% { transform: translate3d(166px, 196px, 0) rotate(3deg); opacity: 1; }
          80.0% { transform: translate3d(172px, 242px, 0) rotate(1deg); opacity: 1; }
          90.0% { transform: translate3d(172px, 282px, 0) rotate(0deg); opacity: 1; }
          100.0% { transform: translate3d(172px, 315px, 0) rotate(0deg); opacity: 1; }
        }
        .cap-conveyor-left-item {
          animation: cliConveyorLeft 9.6s linear infinite;
        }
        @media (max-width: 767px) {
          .cap-conveyor-left-item {
            animation-name: cliConveyorLeftMobile !important;
          }
        }
        @media (min-width: 768px) {
          .cap-conveyor-left-item {
            animation-name: cliConveyorLeft !important;
          }
        }
        @keyframes cliConveyorRight {
          0.0% { transform: translate3d(497px, 122px, 0) rotate(4deg); opacity: 1; }
          10.0% { transform: translate3d(460px, 90px, 0) rotate(3deg); opacity: 1; }
          20.0% { transform: translate3d(420px, 68px, 0) rotate(1deg); opacity: 1; }
          28.0% { transform: translate3d(380px, 58px, 0) rotate(0deg); opacity: 1; }
          36.0% { transform: translate3d(342px, 62px, 0) rotate(-2deg); opacity: 1; }
          44.0% { transform: translate3d(306px, 80px, 0) rotate(-4deg); opacity: 1; }
          52.0% { transform: translate3d(276px, 110px, 0) rotate(-6deg); opacity: 1; }
          61.0% { transform: translate3d(254px, 150px, 0) rotate(-5deg); opacity: 1; }
          70.0% { transform: translate3d(242px, 196px, 0) rotate(-3deg); opacity: 1; }
          80.0% { transform: translate3d(236px, 242px, 0) rotate(-1deg); opacity: 1; }
          90.0% { transform: translate3d(236px, 282px, 0) rotate(0deg); opacity: 1; }
          100.0% { transform: translate3d(236px, 315px, 0) rotate(0deg); opacity: 1; }
        }
        @keyframes byoBoxFloat {
          0%, 100% { transform: translate3d(0, -5px, 0); }
          50% { transform: translate3d(0, 4px, 0); }
        }
        @keyframes byoShadowFloat {
          0%, 100% { transform: translate3d(-50%, 0, 0) scaleX(0.92); opacity: 0.2; }
          50% { transform: translate3d(-50%, 0, 0) scaleX(1.08); opacity: 0.48; }
        }
        @keyframes hostStreamDown {
          0% { transform: translateY(-320px); }
          100% { transform: translateY(0px); }
        }
        @keyframes hostRadarPulse {
          0% { transform: scale(0.85); opacity: 0.85; }
          50% { opacity: 0.35; }
          100% { transform: scale(2.3); opacity: 0; }
        }
      `}</style>

      {/* Section Header (In normal document flow) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-2 sm:pb-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-[-0.025em] text-white leading-tight mb-3">
          Built for many agents
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Five agents should feel as calm as one.
        </p>
      </div>

      {/* Overlapping Cards Container: On mobile & tablet, normal sequential flow without scroll-jacking; on desktop, sticky 350vh scroll stack */}
      <section ref={sectionRef} className={isMobileOrTablet ? "relative w-full h-auto py-6 sm:py-10 z-20" : "relative w-full min-h-[2400px] h-[350vh] z-20"}>
        {/* Sticky/Relative Viewport Frame */}
        <div className={isMobileOrTablet ? "relative w-full flex flex-col items-center justify-start pb-6 px-4 sm:px-6 pointer-events-auto" : "sticky top-[78px] h-[calc(100vh-78px)] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none"}>
          {/* Cards Area: Stacked vertically on mobile & tablet, single overlaid area on desktop */}
          <div className={isMobileOrTablet ? "relative w-full max-w-[1240px] flex flex-col gap-6 sm:gap-8 pointer-events-auto" : "relative w-full max-w-[1240px] h-[calc(100vh-290px)] min-h-[460px] max-h-[720px] pointer-events-auto"}>
            {/* CARD 0: Every agent CLI */}
            <motion.div
              style={isMobileOrTablet ? { y: 0, zIndex: 1 } : { y: 0, zIndex: 10 }}
              className={isMobileOrTablet ? "group relative w-full rounded-none border border-white/[0.15] hover:border-white/30 card-surface p-5 sm:p-7 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300 min-h-[460px]" : "group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 card-surface p-4 sm:p-5 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300"}
            >
              {/* Corner boundary highlight brackets */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div className={isMobileOrTablet ? "flex flex-col gap-6 items-center w-full" : "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full"}>
                {/* Left Side: Number, 1-Line Heading, 3-Line Description */}
                <div className={isMobileOrTablet ? "w-full flex flex-col justify-center min-w-0" : "lg:col-span-6 flex flex-col justify-center min-w-0 pr-4 lg:pr-8"}>
                  <div className="mb-4 sm:mb-5">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="text-white font-semibold">1/3</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-medium text-white tracking-[-0.015em] leading-tight mb-4">
                    {capabilitiesData[0].title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-normal max-w-lg">
                    {capabilitiesData[0].subtitle}
                  </p>
                </div>

                {/* Right Side: 3D Box Dipping Animation with 12 Verified CLI Logos - Balanced width, tight card edges */}
                <div className={isMobileOrTablet ? "w-full flex items-center justify-center" : "lg:col-span-6 flex items-center justify-end w-full h-full"}>
                  <div className={isMobileOrTablet ? "relative w-full max-w-[540px] h-[330px] sm:h-[400px] md:h-[460px] rounded-none border border-white/[0.12] bg-[#0b0b10]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden select-none" : "relative w-full max-w-[540px] h-[330px] sm:h-[400px] md:h-[460px] lg:h-full rounded-none border border-white/[0.12] bg-[#0b0b10]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden select-none"} aria-hidden="true">
                    {/* Corner highlights */}
                    <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 pointer-events-none z-30" />

                    {/* Ambient Center Glow */}
                    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[280px] bg-white/[0.03] blur-[80px] rounded-full pointer-events-none" />

                    {/* Scaled Animation Stage - Enclosing both conveyor & 3D box to scale animation proportionally with box */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <div className="relative w-[480px] min-w-[480px] h-[430px] shrink-0 scale-[0.68] xs:scale-[0.80] sm:scale-100 lg:scale-[1.12] origin-center">
                        {/* Floating shadow under taller box */}
                        <div
                          style={{ animation: "byoShadowFloat 2.4s ease-in-out infinite" }}
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[270px] h-3.5 bg-black/65 blur-md rounded-full pointer-events-none z-0"
                        />

                        {/* LAYER 1: Rear Flaps & Cavity (Extended deeper) */}
                        <div
                          style={{ animation: "byoBoxFloat 2.4s ease-in-out infinite" }}
                          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[370px] h-[295px] pointer-events-none z-0"
                        >
                          <svg className="w-full h-full overflow-visible block" viewBox="0 0 360 295" fill="none">
                            <defs>
                              <linearGradient id="rearFlapTone" x1="180" y1="18" x2="180" y2="65" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#a3a8b4" />
                                <stop offset="100%" stopColor="#8c929e" />
                              </linearGradient>
                              <linearGradient id="leftFlapTone" x1="20" y1="30" x2="90" y2="120" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#9ea3af" />
                                <stop offset="100%" stopColor="#888e9a" />
                              </linearGradient>
                              <linearGradient id="rightFlapTone" x1="340" y1="30" x2="270" y2="120" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#9ea3af" />
                                <stop offset="100%" stopColor="#888e9a" />
                              </linearGradient>
                              <linearGradient id="innerCavityTone" x1="180" y1="65" x2="180" y2="122" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#787d89" />
                                <stop offset="100%" stopColor="#8a8f9b" />
                              </linearGradient>
                              <linearGradient id="innerFloorTone" x1="180" y1="110" x2="180" y2="125" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#656a76" />
                                <stop offset="100%" stopColor="#707582" />
                              </linearGradient>
                              <linearGradient id="innerSideTone" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#5f6470" />
                                <stop offset="100%" stopColor="#7b808d" />
                              </linearGradient>
                            </defs>

                            <polygon points="110,18 250,18 268,65 92,65" fill="url(#rearFlapTone)" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" />
                            <polygon points="30,35 92,65 70,122 8,92" fill="url(#leftFlapTone)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                            <polygon points="268,65 330,35 352,92 290,122" fill="url(#rightFlapTone)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                            <polygon points="92,65 268,65 255,110 105,110" fill="url(#innerCavityTone)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
                            <polygon points="92,65 105,110 70,122" fill="url(#innerSideTone)" />
                            <polygon points="268,65 255,110 290,122" fill="url(#innerSideTone)" />
                            <polygon points="105,110 255,110 290,122 70,122" fill="url(#innerFloorTone)" />
                          </svg>
                        </div>

                        {/* LAYER 2: Live Conveyor Stream of CLI Brands */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                          {leftStreamLogos.map((item, idx) => {
                            const delay = leftDelays[idx];
                            return (
                              <div
                                key={`cap-left-${item.id}-${idx}`}
                                style={{
                                  animationDelay: `-${delay}s`,
                                  willChange: "transform",
                                }}
                                className="absolute top-0 left-0 pointer-events-auto cap-conveyor-left-item"
                              >
                                <div className="relative w-[48px] h-[48px] rounded-[13px] bg-[#f0f2f5] border border-zinc-300/80 shadow-[0_6px_18px_-2px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer">
                                  <div className="w-[24px] h-[24px] flex items-center justify-center">
                                    {item.icon}
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                          {rightStreamLogos.map((item, idx) => {
                            const delay = rightDelays[idx];
                            return (
                              <div
                                key={`cap-right-${item.id}-${idx}`}
                                style={{
                                  animation: "cliConveyorRight 9.6s linear infinite",
                                  animationDelay: `-${delay}s`,
                                  willChange: "transform",
                                }}
                                className="absolute top-0 left-0 pointer-events-auto"
                              >
                                <div className="relative w-[48px] h-[48px] rounded-[13px] bg-[#f0f2f5] border border-zinc-300/80 shadow-[0_6px_18px_-2px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer">
                                  <div className="w-[24px] h-[24px] flex items-center justify-center">
                                    {item.icon}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* LAYER 3: 3D Cardboard Front Flap & Face with Bee Logo (Taller Box Body) */}
                        <div
                          style={{ animation: "byoBoxFloat 2.4s ease-in-out infinite" }}
                          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[370px] h-[295px] pointer-events-none z-20"
                        >
                          <svg className="w-full h-full overflow-visible block" viewBox="0 0 360 295" fill="none">
                            <defs>
                              <pattern id="capHerringbone" width="16" height="16" patternUnits="userSpaceOnUse">
                                <path d="M 0 8 L 8 0 L 16 8 L 8 16 Z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
                                <path d="M 8 0 L 8 16 M 0 8 L 16 8" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
                              </pattern>
                              <linearGradient id="capCartonFace" x1="180" y1="122" x2="180" y2="288" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#a8adb8" />
                                <stop offset="100%" stopColor="#9398a4" />
                              </linearGradient>
                              <linearGradient id="capFrontFlap" x1="180" y1="75" x2="180" y2="122" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#bcc1cc" />
                                <stop offset="100%" stopColor="#a7acb8" />
                              </linearGradient>
                              <filter id="capFrontFlapShadow" x="-10%" y="-10%" width="120%" height="150%">
                                <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.3" />
                              </filter>
                            </defs>

                            {/* Taller carton front wall (height 166px vs original 124px) */}
                            <rect x="70" y="122" width="220" height="166" fill="url(#capCartonFace)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                            <rect x="70" y="122" width="220" height="166" fill="url(#capHerringbone)" opacity="0.25" />
                            <polygon points="38,75 322,75 290,122 70,122" fill="url(#capFrontFlap)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" filter="url(#capFrontFlapShadow)" />
                            <line x1="38" y1="75" x2="322" y2="75" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="1.5" />

                            {/* Hiveory Bee Badge - Centered on the taller carton face */}
                            <g transform="translate(156, 176)">
                              <rect x="0" y="0" width="48" height="48" rx="12" fill="#121218" stroke="rgba(255,255,255,0.18)" strokeWidth="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.4))" />
                              <image href="/hiveory-logo.png" x="5" y="5" width="38" height="38" />
                            </g>
                            <line x1="70" y1="288" x2="290" y2="288" stroke="rgba(0, 0, 0, 0.25)" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 1: The live board */}
            <motion.div
              style={isMobileOrTablet ? { y: 0, zIndex: 2 } : { y: y1, zIndex: 20 }}
              className={isMobileOrTablet ? "group relative w-full rounded-none border border-white/[0.15] hover:border-white/30 card-surface p-5 sm:p-7 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300 min-h-[460px]" : "group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 card-surface p-4 sm:p-5 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300"}
            >
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div className={isMobileOrTablet ? "flex flex-col gap-6 items-center w-full" : "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full"}>
                {/* Left Side: Number, 1-Line Heading, 3-Line Description */}
                <div className={isMobileOrTablet ? "w-full flex flex-col justify-center min-w-0" : "lg:col-span-6 flex flex-col justify-center min-w-0 pr-4 lg:pr-8"}>
                  <div className="mb-4 sm:mb-5">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="text-white font-semibold">2/3</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-medium text-white tracking-[-0.015em] leading-tight mb-4">
                    {capabilitiesData[1].title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-normal max-w-lg">
                    {capabilitiesData[1].subtitle}
                  </p>
                </div>

                {/* Right Side: Interactive Synchronized Lead/Agent Stream Matching Reference Image */}
                <div className={isMobileOrTablet ? "w-full flex items-center justify-center" : "lg:col-span-6 flex items-center justify-end w-full h-full"}>
                  <div className={isMobileOrTablet ? "relative w-full max-w-[540px] h-[370px] sm:h-[420px] md:h-[460px] rounded-none border border-white/[0.12] bg-[#0b0b10]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-center overflow-hidden select-none" : "relative w-full max-w-[540px] h-[370px] sm:h-[420px] md:h-[460px] lg:h-full rounded-none border border-white/[0.12] bg-[#0b0b10]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-center overflow-hidden select-none"} aria-hidden="true">
                    {/* Outer Boundary Corner Highlights */}
                    <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 pointer-events-none z-40" />
                    <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-white/50 pointer-events-none z-40" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-white/50 pointer-events-none z-40" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 pointer-events-none z-40" />

                    {/* Full-Height Center Pipeline Stage */}
                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                      {/* Subtle Ambient Center Lighting */}
                      <div className="absolute w-[360px] h-[360px] bg-white/[0.04] blur-[80px] rounded-full pointer-events-none" />

                      {/* LAYER A (UPPER STREAM): Smaller cards entering the center line */}
                      <div
                        style={{
                          clipPath: "inset(0 0 50% 0)",
                        }}
                        className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center z-10"
                      >
                        <motion.div
                          style={{ y: streamY }}
                          className="flex flex-col gap-[12px] items-center w-full px-4 will-change-transform"
                        >
                          {streamTasks.map((item, idx) => (
                            <div
                              key={`top-stream-${item.id}-${idx}`}
                              className="w-full max-w-[210px] h-[52px] bg-white border border-[#e5e7eb] shadow-[0_4px_14px_rgba(0,0,0,0.12)] rounded-2xl px-3 py-2 flex items-center justify-between shrink-0"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-8 h-8 rounded-xl bg-[#f0f2f5] border border-zinc-300/80 shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0">
                                  {item.icon}
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[12.5px] font-semibold text-zinc-900 leading-tight truncate">
                                    {item.name}
                                  </div>
                                  <div className="text-[10px] font-mono text-zinc-500 leading-tight truncate mt-0.5">
                                    {item.cli}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Light-colored center line across the pipeline stage */}
                      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.2)] z-20 pointer-events-none" />

                      {/* Hiveory Icon Badge - Centered on top of the line without outer square box */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
                        <Image
                          src="/hiveory-logo.png"
                          alt=""
                          width={44}
                          height={44}
                          className="w-11 h-11 object-contain rounded-xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        />
                      </div>

                      {/* LAYER B (LOWER STREAM): Bigger cards appearing from the center line */}
                      <div
                        style={{
                          clipPath: "inset(50% 0 0 0)",
                        }}
                        className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center z-10"
                      >
                        <motion.div
                          style={{ y: streamY }}
                          className="flex flex-col gap-[12px] items-center w-full px-4 will-change-transform"
                        >
                          {streamTasks.map((item, idx) => (
                            <div
                              key={`bottom-stream-${item.id}-${idx}`}
                              className="w-full max-w-[380px] h-[52px] bg-white border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.18)] rounded-2xl px-3.5 py-2 flex items-center justify-between shrink-0"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-xl bg-[#f0f2f5] border border-zinc-300/80 shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] flex items-center justify-center shrink-0">
                                  {item.icon}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2 leading-tight">
                                    <span className="text-[13px] font-semibold text-zinc-900 truncate">
                                      {item.name}
                                    </span>
                                    <span className="text-[10px] font-mono text-zinc-500 truncate">
                                      {item.cli}
                                    </span>
                                  </div>
                                  <div className="text-[10px] font-mono text-zinc-500 leading-normal truncate mt-0.5">
                                    {item.detail}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0 ml-2">
                                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full leading-none border ${item.statusColor}`}>
                                  {item.status}
                                </span>
                                <span className="text-zinc-400 text-xs font-light">›</span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Git Worktree Isolation (Card 3/3) */}
            <motion.div
              style={isMobileOrTablet ? { y: 0, zIndex: 3 } : { y: y2, zIndex: 30 }}
              className={isMobileOrTablet ? "group relative w-full rounded-none border border-white/[0.15] hover:border-white/30 card-surface p-5 sm:p-7 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300 min-h-[460px]" : "group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 card-surface p-4 sm:p-5 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300"}
            >
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div className={isMobileOrTablet ? "flex flex-col gap-6 items-center w-full" : "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full"}>
                {/* Left Side: Number, 1-Line Heading, 3-Line Description */}
                <div className={isMobileOrTablet ? "w-full flex flex-col justify-center min-w-0" : "lg:col-span-6 flex flex-col justify-center min-w-0 pr-4 lg:pr-8"}>
                  <div className="mb-4 sm:mb-5">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="text-white font-semibold">3/3</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-medium text-white tracking-[-0.015em] leading-tight mb-4">
                    {capabilitiesData[2].title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-normal max-w-lg">
                    {capabilitiesData[2].subtitle}
                  </p>
                </div>

                {/* Right Side: Git Worktrees Multi-Branch Visualizer (Golden, Silver, White - No Top/Bottom Text) */}
                <div className={isMobileOrTablet ? "w-full flex items-center justify-center" : "lg:col-span-6 flex items-center justify-end w-full h-full"}>
                  <div className={isMobileOrTablet ? "relative w-full max-w-[540px] h-[370px] sm:h-[420px] md:h-[460px] rounded-none border border-white/[0.12] bg-[#0b0b10]/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] p-6 flex flex-col justify-center overflow-hidden select-none" : "relative w-full max-w-[540px] h-[370px] sm:h-[420px] md:h-[460px] lg:h-full rounded-none border border-white/[0.12] bg-[#0b0b10]/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] p-6 flex flex-col justify-center overflow-hidden select-none"} aria-hidden="true">
                    <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 pointer-events-none z-30" />

                    {/* Git Tree SVG - Scaled up with box, golden, silver & white theme */}
                    <div className="relative flex-1 flex items-center justify-center py-4">
                      <svg className="w-full h-full max-w-[480px] max-h-[300px]" viewBox="0 0 360 210" fill="none">
                        {/* Main Branch Trunk Line */}
                        <line x1="30" y1="105" x2="330" y2="105" stroke="#ffffff" strokeWidth="2" opacity="0.35" />

                        {/* Branch 1: agent/claude (Golden theme) */}
                        <path d="M 90 105 C 120 105, 130 50, 160 50 L 270 50" stroke="#f59e0b" strokeWidth="2" fill="none" />

                        {/* Branch 2: agent/codex (Silver theme) */}
                        <path d="M 120 105 C 150 105, 160 160, 190 160 L 290 160" stroke="#d4d4d8" strokeWidth="2" fill="none" />

                        {/* Main trunk commit nodes (White & Silver) */}
                        <circle cx="50" cy="105" r="5" fill="#121218" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="90" cy="105" r="5" fill="#121218" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="210" cy="105" r="5" fill="#121218" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="310" cy="105" r="6" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1.5" />
                        <text x="310" y="92" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="600" fontFamily="monospace">main · Primary</text>

                        {/* Branch 1 commits (Golden) */}
                        <circle cx="170" cy="50" r="4.5" fill="#121218" stroke="#f59e0b" strokeWidth="2" />
                        <circle cx="220" cy="50" r="4.5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
                        <circle cx="270" cy="50" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="270" y="38" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontFamily="monospace">feature/login · Milo</text>

                        {/* Branch 2 commits (Silver & Platinum) */}
                        <circle cx="200" cy="160" r="4.5" fill="#121218" stroke="#d4d4d8" strokeWidth="2" />
                        <circle cx="250" cy="160" r="4.5" fill="#121218" stroke="#e4e4e7" strokeWidth="2" />
                        <circle cx="290" cy="160" r="5" fill="#e4e4e7" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="290" y="178" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontFamily="monospace">fix/billing · Luna</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* See More Details Button - Appears statically on mobile & tablet, on desktop appears after 3rd card lands */}
          <motion.div
            style={
              isMobileOrTablet
                ? { opacity: 1, y: 0, pointerEvents: "auto" }
                : {
                  opacity: buttonOpacity,
                  y: buttonY,
                  pointerEvents: buttonPointerEvents,
                }
            }
            className={
              isMobileOrTablet
                ? "mt-3 sm:mt-4 mb-3 sm:mb-6 z-40 flex items-center justify-center"
                : // in flow, so cards and button are centered together with clear space between them
                  "mt-8 z-40 flex items-center justify-center"
            }
          >
            <Link
              href="/capabilities"
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
                  See every feature
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


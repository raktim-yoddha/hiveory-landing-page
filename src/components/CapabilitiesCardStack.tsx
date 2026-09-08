"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  VercelIcon,
} from "./CliIcons";

// 16 Verified CLI Coding Agent & Platform Logos for Card 01 (Including GitHub, Linear, Jira, Vercel)
const allBrandLogos = [
  { id: "claude", name: "Claude Code", icon: <ClaudeCodeIcon className="w-6 h-6" /> },
  { id: "github", name: "GitHub", icon: <GithubIcon className="w-6 h-6 text-black" /> },
  { id: "cursor", name: "Cursor", icon: <CursorIcon className="w-6 h-6 text-black" /> },
  { id: "linear", name: "Linear", icon: <LinearIcon className="w-6 h-6" /> },
  { id: "codex", name: "OpenAI Codex", icon: <CodexIcon className="w-6 h-6" /> },
  { id: "jira", name: "Jira", icon: <JiraIcon className="w-6 h-6" /> },
  { id: "antigravity", name: "Antigravity", icon: <AntigravityIcon className="w-6 h-6" /> },
  { id: "vercel", name: "Vercel", icon: <VercelIcon className="w-6 h-6 text-black" /> },
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

// Card 02 Agent Tasks tailored specifically to Hiveory ADE
interface HostStreamTask {
  id: string;
  name: string;
  role: string;
  cmd: string;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  score: string;
}

const hostStreamTasks: HostStreamTask[] = [
  {
    id: "claude",
    name: "Claude Code",
    role: "Anthropic Sub-Agent",
    cmd: "fs:write_file(src/kernel.rs)",
    icon: <ClaudeCodeIcon className="w-4 h-4" />,
    badge: "ACID Stored",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/90",
    score: "98%",
  },
  {
    id: "codex",
    name: "OpenAI Codex",
    role: "Autonomous Worker",
    cmd: "pty:spawn(cargo test --lib)",
    icon: <CodexIcon className="w-4 h-4" />,
    badge: "Host Granted",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/90",
    score: "96%",
  },
  {
    id: "gemini",
    name: "Gemini CLI",
    role: "DAG Task Planner",
    cmd: "ipc:eval_dag(pipeline_v2)",
    icon: <GeminiCLIIcon className="w-4 h-4" />,
    badge: "WAL Committed",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/90",
    score: "99%",
  },
  {
    id: "cursor",
    name: "Cursor Agent",
    role: "Isolated Git Worker",
    cmd: "worktree:create(feat-auth)",
    icon: <CursorIcon className="w-4 h-4 text-black" />,
    badge: "Worktree Clean",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200/90",
    score: "94%",
  },
  {
    id: "antigravity",
    name: "Antigravity CLI",
    role: "Local Host Runner",
    cmd: "secret:get(ANTHROPIC_KEY)",
    icon: <AntigravityIcon className="w-4 h-4" />,
    badge: "Keyring Vault",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/90",
    score: "100%",
  },
];

// Unified 15-item array (3 cycles of 5 items) for a mathematically seamless infinite loop
const streamTasks = [...hostStreamTasks, ...hostStreamTasks, ...hostStreamTasks];

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface CapabilityData {
  id: string;
  tagIndex: string;
  tagLabel: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  features: FeatureItem[];
}

const capabilitiesData: CapabilityData[] = [
  {
    id: "byo-cli",
    tagIndex: "1/3",
    tagLabel: "Unified Tooling",
    title: "All agentic tools & platforms in one app",
    subtitle:
      "Run Claude Code, OpenAI Codex, Antigravity, OpenCode, and native terminals alongside GitHub, Linear, Jira, and Vercel in a unified desktop workspace.",
    buttonText: "Explore Integrations",
    buttonHref: "/capabilities",
    features: [
      {
        title: "Native PTY Multiplexing",
        desc: "High-frequency pseudo-terminal streaming with zero UI lag",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        ),
      },
      {
        title: "Direct Provider Auth",
        desc: "Bring your own Anthropic, OpenAI, GitHub & Linear credentials",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
        ),
      },
      {
        title: "Side-by-Side Concurrency",
        desc: "Spawn multiple agent processes operating simultaneously",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 3v18" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "host-authority",
    tagIndex: "2/3",
    tagLabel: "Privileged Host Authority",
    title: "Local-first Rust host & SQLite WAL",
    subtitle:
      "Privileged operations run in an authoritative Rust host with zero cloud server. SQLite WAL mode and OS-keyring storage keep state, agent runs, and credentials local.",
    buttonText: "Explore Architecture",
    buttonHref: "/capabilities",
    features: [
      {
        title: "Privileged Host Authority",
        desc: "Privileged execution with no Hiveory-hosted backend",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        ),
      },
      {
        title: "SQLite WAL Persistence",
        desc: "ACID state durability with interrupted run recovery",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        ),
      },
      {
        title: "OS Keyring Secret Storage",
        desc: "Secure Windows Credential Manager integration",
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
  },
  {
    id: "worktrees",
    tagIndex: "3/3",
    tagLabel: "Parallel Code Runs",
    title: "Git worktrees & durable task DAGs",
    subtitle:
      "Coding agents execute concurrent tasks in isolated Git worktrees. Run parallel feature branches with zero index locking, dirty workspace errors, or file collisions.",
    buttonText: "Explore Worktrees",
    buttonHref: "/capabilities",
    features: [
      {
        title: "Isolated Git Worktrees",
        desc: "Dedicated worktree instances prevent git staging contention",
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
        title: "Durable Task DAG Proposals",
        desc: "Structured dependency graphs with worker leases & checkpoints",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 3 21 3 21 8" />
            <line x1="4" y1="20" x2="21" y2="3" />
            <polyline points="21 16 21 21 16 21" />
            <line x1="15" y1="15" x2="21" y2="21" />
          </svg>
        ),
      },
      {
        title: "Coordination & Decision Gates",
        desc: "Durable participant mailboxes with non-interactive fan-in",
        icon: (
          <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        ),
      },
    ],
  },
];

export default function CapabilitiesCardStack() {
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

  // CARD 0 (BYO CLI): In place from start (y: 0, zIndex: 10)
  // CARD 1 (Rust Host & SQLite WAL): Rises [0.08, 0.44]
  const y1 = useTransform(scrollYProgress, [0.08, 0.44], [bottomOffset, 0]);

  // CARD 2 (Git Worktree Concurrency): Rises [0.48, 0.84]
  const y2 = useTransform(scrollYProgress, [0.48, 0.84], [bottomOffset, 0]);

  // "See More Details" Button: Appears after 3rd card lands [0.84, 0.90, 1.0]
  // Stays locked at opacity 1 on scroll down, fades away on scroll up
  const buttonOpacity = useTransform(scrollYProgress, [0.84, 0.90, 1.0], [0, 1, 1]);
  const buttonY = useTransform(scrollYProgress, [0.84, 0.90, 1.0], [28, 0, 0]);
  const buttonPointerEvents = useTransform(scrollYProgress, (pos) =>
    pos >= 0.86 ? "auto" : "none"
  );

  return (
    <div id="capabilities" className="relative w-full">
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
          Core Architectural Capabilities
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Engineered from the kernel up for multi-agent concurrency, native desktop process authority, and local-first execution.
        </p>
      </div>

      {/* Sticky Overlapping Cards Container (3-Card Stack) */}
      <section ref={sectionRef} className="relative w-full h-[320vh] z-20">
        {/* Sticky Viewport Frame - with clearance below fixed navbar */}
        <div className="sticky top-20 sm:top-[84px] lg:top-[88px] w-full flex flex-col items-center justify-start pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 pointer-events-none">
          {/* Overriding Taller Cards Area - Moderately wider, balanced */}
          <div className="relative w-full max-w-[1240px] h-[500px] sm:h-[520px] md:h-[535px] lg:h-[545px] pointer-events-auto">
            {/* CARD 0: Bring your own CLI - In place from start */}
            <motion.div
              style={{ y: 0, zIndex: 10 }}
              className="group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-4 sm:p-5 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300"
            >
              {/* Corner boundary highlight brackets */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
                {/* Left Side: Number, 1-Line Heading, 3-Line Description */}
                <div className="lg:col-span-6 flex flex-col justify-center min-w-0 pr-4 lg:pr-8">
                  <div className="mb-4 sm:mb-5">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-white font-semibold">1/3</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-medium text-white tracking-[-0.015em] leading-tight mb-4 lg:whitespace-nowrap">
                    {capabilitiesData[0].title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-normal max-w-lg">
                    {capabilitiesData[0].subtitle}
                  </p>
                </div>

                {/* Right Side: 3D Box Dipping Animation with 12 Verified CLI Logos - Balanced width, tight card edges */}
                <div className="lg:col-span-6 flex items-center justify-end w-full h-full">
                  <div className="relative w-full max-w-[540px] h-[370px] sm:h-[420px] md:h-[460px] lg:h-full lg:max-h-[530px] rounded-none border border-white/[0.12] bg-[#0b0b10]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden select-none">
                    {/* Corner highlights */}
                    <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-white/50 pointer-events-none z-30" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 pointer-events-none z-30" />

                    {/* Ambient Center Glow */}
                    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[280px] bg-white/[0.03] blur-[80px] rounded-full pointer-events-none" />

                    {/* Scaled Animation Stage - Enclosing both conveyor & 3D box to scale animation proportionally with box */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <div className="relative w-[480px] h-[430px] scale-105 sm:scale-110 lg:scale-[1.12] origin-center">
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
                                  animation: "cliConveyorLeft 9.6s linear infinite",
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

            {/* CARD 1: Privileged Rust Host & SQLite WAL */}
            <motion.div
              style={{ y: y1, zIndex: 20 }}
              className="group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-4 sm:p-5 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300"
            >
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
                {/* Left Side: Number, 1-Line Heading, 3-Line Description */}
                <div className="lg:col-span-6 flex flex-col justify-center min-w-0 pr-4 lg:pr-8">
                  <div className="mb-4 sm:mb-5">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-white font-semibold">2/3</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-medium text-white tracking-[-0.015em] leading-tight mb-4 lg:whitespace-nowrap">
                    {capabilitiesData[1].title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-normal max-w-lg">
                    {capabilitiesData[1].subtitle}
                  </p>
                </div>

                {/* Right Side: Interactive Synchronized Lead/Agent Stream Matching Reference Image */}
                <div className="lg:col-span-6 flex items-center justify-end w-full h-full">
                  <div className="relative w-full max-w-[540px] h-[370px] sm:h-[420px] md:h-[460px] lg:h-full lg:max-h-[530px] rounded-none border border-white/[0.12] bg-[#0b0b10]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-center overflow-hidden select-none">
                    {/* Outer Boundary Corner Highlights */}
                    <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 pointer-events-none z-40" />
                    <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-white/50 pointer-events-none z-40" />
                    <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-white/50 pointer-events-none z-40" />
                    <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 pointer-events-none z-40" />

                    {/* Full-Height Center Pipeline Stage */}
                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                      {/* Subtle Ambient Center Lighting */}
                      <div className="absolute w-[360px] h-[360px] bg-white/[0.04] blur-[80px] rounded-full pointer-events-none" />

                      {/* LAYER A (UPPER STREAM): Entering cards flowing down into Hiveory logo - Flowing right from the very top */}
                      <div
                        style={{
                          maskImage: "linear-gradient(to bottom, black 0px, black calc(50% - 24px), transparent 50%)",
                          WebkitMaskImage: "linear-gradient(to bottom, black 0px, black calc(50% - 24px), transparent 50%)",
                          clipPath: "inset(0 0 50% 0)",
                        }}
                        className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center z-10"
                      >
                        <div
                          style={{ animation: "hostStreamDown 14s linear infinite" }}
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
                                    {item.role}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CENTRAL ENGINE NODE: Seamless Blackness behind Hiveory logo badge */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
                        {/* Soft Ambient Blackness - Seamlessly blends cards into container background */}
                        <div className="absolute w-[440px] h-[120px] bg-[radial-gradient(ellipse_at_center,#0b0b10_45%,rgba(11,11,16,0.92)_70%,transparent_100%)] blur-md pointer-events-none" />

                        {/* Standalone Hiveory Icon Badge */}
                        <div className="relative w-14 h-14 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,1)] flex items-center justify-center z-10">
                          <img src="/hiveory-logo.png" alt="Hiveory" className="w-8 h-8 object-contain" />
                        </div>
                      </div>

                      {/* LAYER B (LOWER STREAM): Synchronized 1-to-1 output stream - Emerging seamlessly from blackness */}
                      <div
                        style={{
                          maskImage: "linear-gradient(to bottom, transparent 50%, black calc(50% + 24px), black calc(100% - 36px), transparent calc(100% - 10px), transparent 100%)",
                          WebkitMaskImage: "linear-gradient(to bottom, transparent 50%, black calc(50% + 24px), black calc(100% - 36px), transparent calc(100% - 10px), transparent 100%)",
                          clipPath: "inset(50% 0 1px 0)",
                        }}
                        className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center z-10"
                      >
                        <div
                          style={{ animation: "hostStreamDown 14s linear infinite" }}
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
                                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 leading-none border ${item.badgeColor}`}>
                                      {item.badge}
                                    </span>
                                  </div>
                                  <div className="text-[10px] font-mono text-zinc-500 leading-normal truncate mt-0.5">
                                    {item.cmd}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0 ml-2">
                                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full leading-none bg-[#ffedd5] text-[#ea580c]">
                                  {item.score}
                                </span>
                                <span className="text-zinc-400 text-xs font-light">›</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Git Worktree Isolation (Card 3/3) */}
            <motion.div
              style={{ y: y2, zIndex: 30 }}
              className="group absolute inset-0 rounded-none border border-white/[0.15] hover:border-white/30 bg-[#0c0c11] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] p-4 sm:p-5 lg:py-4 lg:pr-4 lg:pl-10 flex flex-col justify-center transition-colors duration-300"
            >
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
                {/* Left Side: Number, 1-Line Heading, 3-Line Description */}
                <div className="lg:col-span-6 flex flex-col justify-center min-w-0 pr-4 lg:pr-8">
                  <div className="mb-4 sm:mb-5">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/[0.03] border border-white/10 text-xs font-mono tracking-wider text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-white font-semibold">3/3</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-medium text-white tracking-[-0.015em] leading-tight mb-4 lg:whitespace-nowrap">
                    {capabilitiesData[2].title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-normal max-w-lg">
                    {capabilitiesData[2].subtitle}
                  </p>
                </div>

                {/* Right Side: Git Worktrees Multi-Branch Visualizer (Golden, Silver, White - No Top/Bottom Text) */}
                <div className="lg:col-span-6 flex items-center justify-end w-full h-full">
                  <div className="relative w-full max-w-[540px] h-[370px] sm:h-[420px] md:h-[460px] lg:h-full lg:max-h-[530px] rounded-none border border-white/[0.12] bg-[#0b0b10]/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] p-6 flex flex-col justify-center overflow-hidden select-none">
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
                        <text x="310" y="92" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="600" fontFamily="monospace">main (HEAD)</text>

                        {/* Branch 1 commits (Golden) */}
                        <circle cx="170" cy="50" r="4.5" fill="#121218" stroke="#f59e0b" strokeWidth="2" />
                        <circle cx="220" cy="50" r="4.5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
                        <circle cx="270" cy="50" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="270" y="38" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontFamily="monospace">worktree-claude: 9fa1c</text>

                        {/* Branch 2 commits (Silver & Platinum) */}
                        <circle cx="200" cy="160" r="4.5" fill="#121218" stroke="#d4d4d8" strokeWidth="2" />
                        <circle cx="250" cy="160" r="4.5" fill="#121218" stroke="#e4e4e7" strokeWidth="2" />
                        <circle cx="290" cy="160" r="5" fill="#e4e4e7" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="290" y="178" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontFamily="monospace">worktree-codex: 3b40e</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* See More Details Button - Appears only after 4th card lands */}
          <motion.div
            style={{
              opacity: buttonOpacity,
              y: buttonY,
              pointerEvents: buttonPointerEvents,
            }}
            className="mt-4 sm:mt-5 mb-10 sm:mb-14 z-40 flex items-center justify-center"
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


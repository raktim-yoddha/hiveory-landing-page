"use client";

import Link from "next/link";

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
} from "./CliIcons";

// 12 Verified, 100% Official CLI Coding Agent Logos
const allBrandLogos = [
  {
    id: "claude",
    name: "Claude Code",
    icon: <ClaudeCodeIcon className="w-5 h-5" />,
  },
  {
    id: "cursor",
    name: "Cursor",
    icon: <CursorIcon className="w-5 h-5 text-black" />,
  },
  {
    id: "codex",
    name: "OpenAI Codex",
    icon: <CodexIcon className="w-5 h-5" />,
  },
  {
    id: "cline",
    name: "Cline",
    icon: <ClineIcon className="w-5 h-5 text-black" />,
  },
  {
    id: "goose",
    name: "Block Goose",
    icon: <GooseIcon className="w-5 h-5 text-black" />,
  },
  {
    id: "mistral",
    name: "Mistral Vibe",
    icon: <MistralIcon className="w-5 h-5" />,
  },
  {
    id: "gemini",
    name: "Gemini CLI",
    icon: <GeminiCLIIcon className="w-5 h-5" />,
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    icon: <GithubCopilotIcon className="w-5 h-5 text-black" />,
  },
  {
    id: "grok",
    name: "xAI Grok",
    icon: <GrokIcon className="w-5 h-5 text-black" />,
  },
  {
    id: "antigravity",
    name: "Antigravity",
    icon: <AntigravityIcon className="w-5 h-5" />,
  },
  {
    id: "continue",
    name: "Continue",
    icon: <ContinueIcon className="w-5 h-5 text-black" />,
  },
  {
    id: "devin",
    name: "Devin",
    icon: <DevinIcon className="w-5 h-5" />,
  },
];

// Left Stream: 6 curated official CLIs with guaranteed 18-22px space between cards
const leftStreamLogos = [
  allBrandLogos[0], // Claude Code
  allBrandLogos[1], // Cursor
  allBrandLogos[2], // OpenAI Codex
  allBrandLogos[3], // Cline
  allBrandLogos[4], // Block Goose
  allBrandLogos[5], // Mistral Vibe
];

// Right Stream: 6 curated official CLIs with guaranteed 18-22px space between cards
const rightStreamLogos = [
  allBrandLogos[6], // Gemini CLI
  allBrandLogos[7], // GitHub Copilot
  allBrandLogos[8], // xAI Grok
  allBrandLogos[9], // Antigravity
  allBrandLogos[10], // Continue
  allBrandLogos[11], // Devin
];

// Staggered delay schedule (seconds) for 6-tile stream to maintain clean ~18-22px spacing
const leftDelays = [0, 1.6, 3.2, 4.8, 6.4, 8.0];
const rightDelays = [0.8, 2.4, 4.0, 5.6, 7.2, 8.8];

export default function ByoCliSection() {

  return (
    <section
      id="byok"
      className="relative w-full border-t border-white/[0.08] bg-[#07070a] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden z-10"
    >
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[140px] rounded-full" />

      {/* Embedded GPU-accelerated keyframe styles for zero-lag conveyor animation */}
      <style>{`
        @keyframes cliConveyorLeft {
          0.0% { transform: translate3d(-60px, 145px, 0) rotate(0deg); opacity: 1; }
          10.1% { transform: translate3d(-26px, 127px, 0) rotate(-2deg); opacity: 1; }
          19.5% { transform: translate3d(8px, 115px, 0) rotate(-1deg); opacity: 1; }
          27.7% { transform: translate3d(39px, 111px, 0) rotate(0deg); opacity: 1; }
          35.8% { transform: translate3d(70px, 113px, 0) rotate(2deg); opacity: 1; }
          43.9% { transform: translate3d(99px, 123px, 0) rotate(4deg); opacity: 1; }
          52.1% { transform: translate3d(126px, 139px, 0) rotate(6deg); opacity: 1; }
          61.1% { transform: translate3d(150px, 164px, 0) rotate(4deg); opacity: 1; }
          70.7% { transform: translate3d(168px, 196px, 0) rotate(2deg); opacity: 1; }
          80.4% { transform: translate3d(182px, 230px, 0) rotate(0deg); opacity: 1; }
          90.3% { transform: translate3d(185px, 268px, 0) rotate(0deg); opacity: 1; }
          100.0% { transform: translate3d(185px, 305px, 0) rotate(0deg); opacity: 1; }
        }
        @keyframes cliConveyorRight {
          0.0% { transform: translate3d(500px, 145px, 0) rotate(0deg); opacity: 1; }
          10.1% { transform: translate3d(466px, 127px, 0) rotate(2deg); opacity: 1; }
          19.5% { transform: translate3d(432px, 115px, 0) rotate(1deg); opacity: 1; }
          27.7% { transform: translate3d(401px, 111px, 0) rotate(0deg); opacity: 1; }
          35.8% { transform: translate3d(370px, 113px, 0) rotate(-2deg); opacity: 1; }
          43.9% { transform: translate3d(341px, 123px, 0) rotate(-4deg); opacity: 1; }
          52.1% { transform: translate3d(314px, 139px, 0) rotate(-6deg); opacity: 1; }
          61.1% { transform: translate3d(290px, 164px, 0) rotate(-4deg); opacity: 1; }
          70.7% { transform: translate3d(272px, 196px, 0) rotate(-2deg); opacity: 1; }
          80.4% { transform: translate3d(258px, 230px, 0) rotate(0deg); opacity: 1; }
          90.3% { transform: translate3d(255px, 268px, 0) rotate(0deg); opacity: 1; }
          100.0% { transform: translate3d(255px, 305px, 0) rotate(0deg); opacity: 1; }
        }
        @keyframes byoBoxFloat {
          0%, 100% { transform: translate3d(0, -5px, 0); }
          50% { transform: translate3d(0, 4px, 0); }
        }
        @keyframes byoShadowFloat {
          0%, 100% { transform: translate3d(-50%, 0, 0) scaleX(0.92); opacity: 0.2; }
          50% { transform: translate3d(-50%, 0, 0) scaleX(1.08); opacity: 0.48; }
        }
      `}</style>

      {/* Content Layout Container (exterior section box removed) */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Copy & Exploration CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-white tracking-[-0.025em] leading-[1.15] mb-3">
              Bring your own CLI
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-[14px] text-zinc-400 leading-relaxed font-normal mb-8 max-w-md">
              Run Claude Code, OpenAI Codex, Cursor, Gemini CLI, Copilot, Cline, Goose, and your favorite coding agents side by side. Connect your existing developer accounts and run them concurrently inside Hiveory.
            </p>

            {/* Explore CLI Button in Goji Berry Style */}
            <div>
              <Link
                href="/capabilities"
                className="group/btn relative inline-flex items-center justify-between p-1 pr-3.5 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-sm"
              >
                {/* Button Outer Boundary Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

                {/* Inner Expanding White Box */}
                <span className="absolute inset-y-1 left-1 w-8 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

                {/* Content Layer */}
                <span className="relative z-10 flex items-center gap-2.5">
                  <span className="w-8 h-8 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold text-white group-hover/btn:text-black tracking-wide transition-colors duration-300">
                    Explore CLI Integrations
                  </span>
                </span>

                <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-2">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: FRAMED ANIMATION BOUNDARY BOX (Matches Goji Berry Image 3) */}
          <div className="lg:col-span-7 flex items-center justify-center w-full">
            {/* BOUNDARY BOX CONTAINER with unified technical corners */}
            <div className="relative w-full max-w-[480px] h-[460px] rounded-none border border-white/[0.12] bg-[#0b0b10]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden select-none">
              
              {/* Corner Boundary Highlight Brackets aligned with outer corners */}
              <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 pointer-events-none z-30" />
              <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-white/50 pointer-events-none z-30" />
              <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-white/50 pointer-events-none z-30" />
              <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 pointer-events-none z-30" />

              {/* Ambient Center Glow */}
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[240px] bg-white/[0.03] blur-[80px] rounded-full pointer-events-none" />

              {/* FLOATING SHADOW UNDER THE 3D PARCEL BOX */}
              <div
                style={{ animation: "byoShadowFloat 2.4s ease-in-out infinite" }}
                className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[240px] h-3.5 bg-black/60 blur-md rounded-full pointer-events-none z-0"
              />

              {/* ==================================================================== */}
              {/* LAYER 1: SOLID CARDBOARD REAR & INTERIOR CAVITY (z-0)                */}
              {/* Box floats rapidly up & down (y: [-5, 4, -5]) for tangible 3D effect */}
              {/* ==================================================================== */}
              <div
                style={{ animation: "byoBoxFloat 2.4s ease-in-out infinite" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[360px] h-[250px] pointer-events-none z-0"
              >
                <svg className="w-full h-full overflow-visible block" viewBox="0 0 360 250" fill="none">
                  <defs>
                    <linearGradient id="rearFlapTone" x1="180" y1="18" x2="180" y2="65" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#d5d8df" />
                      <stop offset="100%" stopColor="#c0c3ca" />
                    </linearGradient>
                    <linearGradient id="leftFlapTone" x1="20" y1="30" x2="90" y2="120" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#d2d5dc" />
                      <stop offset="100%" stopColor="#bcbfc6" />
                    </linearGradient>
                    <linearGradient id="rightFlapTone" x1="340" y1="30" x2="270" y2="120" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#d2d5dc" />
                      <stop offset="100%" stopColor="#bcbfc6" />
                    </linearGradient>
                    <linearGradient id="innerCavityTone" x1="180" y1="65" x2="180" y2="122" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#9ea2ab" />
                      <stop offset="100%" stopColor="#b1b5be" />
                    </linearGradient>
                    <linearGradient id="innerFloorTone" x1="180" y1="110" x2="180" y2="125" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#878b94" />
                      <stop offset="100%" stopColor="#9296a0" />
                    </linearGradient>
                    <linearGradient id="innerSideTone" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#7e828b" />
                      <stop offset="100%" stopColor="#9ba0aa" />
                    </linearGradient>
                  </defs>

                  {/* 1. Rear Upright Open Flap (folds backward & up) */}
                  <polygon
                    points="110,18 250,18 268,65 92,65"
                    fill="url(#rearFlapTone)"
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth="1"
                  />

                  {/* 2. Left Angled Flap (angled up and left ~45 deg) */}
                  <polygon
                    points="30,35 92,65 70,122 8,92"
                    fill="url(#leftFlapTone)"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth="1"
                  />

                  {/* 3. Right Angled Flap (angled up and right ~45 deg) */}
                  <polygon
                    points="268,65 330,35 352,92 290,122"
                    fill="url(#rightFlapTone)"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth="1"
                  />

                  {/* 4. SOLID CARDBOARD INTERIOR CAVITY (ZERO BLACK GAP / VOID) */}
                  {/* Inside Back Wall */}
                  <polygon
                    points="92,65 268,65 255,110 105,110"
                    fill="url(#innerCavityTone)"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="0.5"
                  />

                  {/* Inside Left Wall */}
                  <polygon
                    points="92,65 105,110 70,122"
                    fill="url(#innerSideTone)"
                  />

                  {/* Inside Right Wall */}
                  <polygon
                    points="268,65 255,110 290,122"
                    fill="url(#innerSideTone)"
                  />

                  {/* Inside Cavity Floor */}
                  <polygon
                    points="105,110 255,110 290,122 70,122"
                    fill="url(#innerFloorTone)"
                  />
                </svg>
              </div>

              {/* ==================================================================== */}
              {/* LAYER 2: DENSE, CONTINUOUS CONVEYOR STREAM OF 3D WHITE SQUIRCLES     */}
              {/* Hardware-accelerated CSS keyframes with native negative delays       */}
              {/* Smoothly arches down and dips behind front flap into cavity floor    */}
              {/* ==================================================================== */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                
                {/* LEFT-SIDE INCOMING STREAM (Pre-populated, already flowing on mount) */}
                {leftStreamLogos.map((item, idx) => {
                  const delay = leftDelays[idx];
                  return (
                    <div
                      key={`left-${item.id}-${idx}`}
                      style={{
                        animation: "cliConveyorLeft 9.6s linear infinite",
                        animationDelay: `-${delay}s`,
                        willChange: "transform",
                      }}
                      className="absolute top-0 left-0 pointer-events-auto"
                    >
                      {/* WHITE 3D EFFECT SQUARE BOX WITH TACTILE BEVEL & LAYERED SHADOW */}
                      <div className="relative w-[42px] h-[42px] rounded-[12px] bg-gradient-to-b from-white via-[#fcfcfd] to-[#edf0f4] border border-white/90 shadow-[0_8px_20px_-3px_rgba(0,0,0,0.35),0_3px_6px_-2px_rgba(0,0,0,0.2),inset_0_1.5px_0_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer">
                        <div className="w-[19px] h-[19px] flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* RIGHT-SIDE INCOMING STREAM (Pre-populated, already flowing on mount) */}
                {rightStreamLogos.map((item, idx) => {
                  const delay = rightDelays[idx];
                  return (
                    <div
                      key={`right-${item.id}-${idx}`}
                      style={{
                        animation: "cliConveyorRight 9.6s linear infinite",
                        animationDelay: `-${delay}s`,
                        willChange: "transform",
                      }}
                      className="absolute top-0 left-0 pointer-events-auto"
                    >
                      {/* WHITE 3D EFFECT SQUARE BOX WITH TACTILE BEVEL & LAYERED SHADOW */}
                      <div className="relative w-[42px] h-[42px] rounded-[12px] bg-gradient-to-b from-white via-[#fcfcfd] to-[#edf0f4] border border-white/90 shadow-[0_8px_20px_-3px_rgba(0,0,0,0.35),0_3px_6px_-2px_rgba(0,0,0,0.2),inset_0_1.5px_0_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer">
                        <div className="w-[19px] h-[19px] flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ==================================================================== */}
              {/* LAYER 3: 3D CARDBOARD FRONT FLAP & FRONT FACE (z-20)                 */}
              {/* Oscillates in perfect sync with Layer 1                              */}
              {/* Front flap covers entering tiles as they dip into the cavity floor   */}
              {/* ==================================================================== */}
              <div
                style={{ animation: "byoBoxFloat 2.4s ease-in-out infinite" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[360px] h-[250px] pointer-events-none z-20"
              >
                <svg className="w-full h-full overflow-visible block" viewBox="0 0 360 250" fill="none">
                  <defs>
                    {/* Woven Herringbone Pattern on Front Face (Exact Goji Berry texture) */}
                    <pattern id="herringbonePattern" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 0 8 L 8 0 L 16 8 L 8 16 Z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
                      <path d="M 8 0 L 8 16 M 0 8 L 16 8" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
                    </pattern>

                    <linearGradient id="cartonFaceGrad" x1="180" y1="122" x2="180" y2="245" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#d5d8df" />
                      <stop offset="100%" stopColor="#c3c6cd" />
                    </linearGradient>

                    <linearGradient id="frontFlapCarton" x1="180" y1="75" x2="180" y2="122" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#eceef2" />
                      <stop offset="100%" stopColor="#d8dbe2" />
                    </linearGradient>

                    {/* Soft Drop shadow filter for front flap onto front face */}
                    <filter id="frontFlapDropShadow" x="-10%" y="-10%" width="120%" height="150%">
                      <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.3" />
                    </filter>
                  </defs>

                  {/* 1. Solid Front Vertical Face of the Box (Light cardboard tone) */}
                  <rect
                    x="70"
                    y="122"
                    width="220"
                    height="124"
                    fill="url(#cartonFaceGrad)"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth="1"
                  />

                  {/* 2. Geometric Herringbone Pattern on Front Face */}
                  <rect
                    x="70"
                    y="122"
                    width="220"
                    height="124"
                    fill="url(#herringbonePattern)"
                    opacity="0.3"
                  />

                  {/* 3. Front Flap Folded DOWN & Toward Viewer (Exact Goji Berry forward fold) */}
                  {/* Top edge is closer to camera (wider: x=38 to x=322 at y=75) */}
                  {/* Bottom edge is hinge along front face top: x=70 to x=290 at y=122 */}
                  <polygon
                    points="38,75 322,75 290,122 70,122"
                    fill="url(#frontFlapCarton)"
                    stroke="rgba(255, 255, 255, 0.75)"
                    strokeWidth="1"
                    filter="url(#frontFlapDropShadow)"
                  />

                  {/* 4. Top Lip Highlight on Front Flap */}
                  <line
                    x1="38"
                    y1="75"
                    x2="322"
                    y2="75"
                    stroke="rgba(255, 255, 255, 0.95)"
                    strokeWidth="1.5"
                  />

                  {/* 5. Centered Metallic Hiveory Bee Logo on Front Face */}
                  <g transform="translate(156, 158)">
                    <rect
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                      rx="12"
                      fill="#121218"
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="1"
                      filter="drop-shadow(0 4px 12px rgba(0,0,0,0.4))"
                    />
                    <image href="/hiveory-logo.png" x="5" y="5" width="38" height="38" />
                  </g>

                  {/* 6. Bottom Edge Shadow of Box */}
                  <line
                    x1="70"
                    y1="245"
                    x2="290"
                    y2="245"
                    stroke="rgba(0, 0, 0, 0.25)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

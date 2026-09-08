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
  GithubIcon,
  LinearIcon,
  JiraIcon,
  VercelIcon,
} from "./CliIcons";

// 16 Verified CLI Coding Agent & Platform Logos
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
      `}</style>

      {/* Content Layout Container (exterior section box removed) */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Copy & Exploration CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-white tracking-[-0.025em] leading-[1.12] mb-4">
              Bring your own CLI
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-[17px] text-zinc-400 leading-relaxed font-normal mb-8 max-w-lg">
              Run Claude Code, OpenAI Codex, Cursor, Gemini CLI, Copilot, Cline, Goose, and your favorite coding agents side by side. Connect your existing developer accounts and run them concurrently inside Hiveory.
            </p>

            {/* Explore CLI Button in Goji Berry Style */}
            <div>
              <Link
                href="/capabilities"
                className="group/btn relative inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-sm"
              >
                {/* Button Outer Boundary Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

                {/* Inner Expanding White Box */}
                <span className="absolute inset-y-1 left-1 w-8 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

                {/* Content Layer (Only first arrow in white box, no second arrow at end) */}
                <span className="relative z-10 flex items-center gap-2.5">
                  <span className="w-8 h-8 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-white group-hover/btn:text-black tracking-wide transition-colors duration-300">
                    Explore CLI Integrations
                  </span>
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
                      {/* GRAYISH TACTILE SQUARE BOX MATCHING CAPABILITIES CARDS */}
                      <div className="relative w-[48px] h-[48px] rounded-[13px] bg-[#f0f2f5] border border-zinc-300/80 shadow-[0_6px_18px_-2px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer">
                        <div className="w-[24px] h-[24px] flex items-center justify-center">
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
                      {/* GRAYISH TACTILE SQUARE BOX MATCHING CAPABILITIES CARDS */}
                      <div className="relative w-[48px] h-[48px] rounded-[13px] bg-[#f0f2f5] border border-zinc-300/80 shadow-[0_6px_18px_-2px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer">
                        <div className="w-[24px] h-[24px] flex items-center justify-center">
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
                      <stop offset="0%" stopColor="#a8adb8" />
                      <stop offset="100%" stopColor="#9398a4" />
                    </linearGradient>

                    <linearGradient id="frontFlapCarton" x1="180" y1="75" x2="180" y2="122" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#bcc1cc" />
                      <stop offset="100%" stopColor="#a7acb8" />
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

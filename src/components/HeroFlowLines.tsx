"use client";

import React from "react";

// Gojiberry's exact reverse-engineered cubic Bezier S-curve
// Total path length: 1036.2412px
// Starts straight at x=138.5, smoothly curves across midpoint (69.25, 492) to x=0 at y=610.477, then continues straight down at x=0.
const GOJIBERRY_FLOW_PATH =
  "M 138.5 0 L 138.5 373.523 C 138.5 422.622 112.031 467.907 69.25 492 L 69.25 492 C 26.469 516.093 0 561.378 0 610.477 L 0 985.5";

const PATH_TOTAL_LENGTH = 1036.24;

// The 3 cascading line offsets matching Gojiberry's vertical stagger
const LINE_OFFSETS = [
  { id: "line-0", top: 0 },
  { id: "line-1", top: 56 },
  { id: "line-2", top: 112 },
];

interface SingleFlowLineProps {
  top: number;
  flipped?: boolean;
}

function SingleFlowLine({ top, flipped = false }: SingleFlowLineProps) {
  return (
    <div
      className="absolute w-[151px] h-[986px] pointer-events-none select-none overflow-visible"
      style={{
        top: `${top}px`,
        transform: flipped ? "scaleX(-1)" : undefined,
        transformOrigin: "center top",
      }}
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 151 986"
        fill="none"
        role="presentation"
      >
        {/* 1. Base Static Guide Line (delicate, faint ambient track) */}
        <path
          d={GOJIBERRY_FLOW_PATH}
          fill="none"
          stroke="rgba(255, 255, 255, 0.025)"
          strokeWidth="0.8"
          strokeLinecap="butt"
        />

        {/* 2. Delicate Flowing Beam (dimmer, subtle, non-distracting) */}
        <path
          d={GOJIBERRY_FLOW_PATH}
          fill="none"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray={`${PATH_TOTAL_LENGTH} ${PATH_TOTAL_LENGTH}`}
          className="animate-gojiberry-flow"
          style={{
            filter: "drop-shadow(0 0 1.5px rgba(255, 255, 255, 0.15))",
          }}
        />
      </svg>
    </div>
  );
}

/**
 * Geometric Isometric Canopy Background
 * Dim, subtle and fades away smoothly towards the bottom to adjust naturally
 */
function IsometricCanopy() {
  return (
    <div
      className="absolute top-0 inset-x-0 w-full h-[700px] pointer-events-none select-none overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 120px, rgba(0,0,0,0.2) 260px, rgba(0,0,0,0.06) 440px, transparent 640px)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 120px, rgba(0,0,0,0.2) 260px, rgba(0,0,0,0.06) 440px, transparent 640px)",
      }}
    >
      {/* SVG Seamless Isometric Cube/Chevron Pattern (Dim, subtle, elegant) */}
      <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="gojiberry-isometric-pattern"
            width="120"
            height="69.282"
            patternUnits="userSpaceOnUse"
          >
            {/* Cube 1 at (30, 17.32) */}
            <g transform="translate(30, 17.32)">
              {/* Top face */}
              <polygon
                points="0,-17.32 30,0 0,17.32 -30,0"
                fill="rgba(255, 255, 255, 0.02)"
                stroke="rgba(255, 255, 255, 0.07)"
                strokeWidth="0.8"
              />
              {/* Left face */}
              <polygon
                points="-30,0 0,17.32 0,51.96 -30,34.64"
                fill="rgba(255, 255, 255, 0.008)"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.8"
              />
              {/* Right face */}
              <polygon
                points="0,17.32 30,0 30,34.64 0,51.96"
                fill="rgba(255, 255, 255, 0.015)"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth="0.8"
              />
            </g>

            {/* Cube 2 at (90, 51.96) - Interlocking half-step */}
            <g transform="translate(90, 51.96)">
              {/* Top face */}
              <polygon
                points="0,-17.32 30,0 0,17.32 -30,0"
                fill="rgba(255, 255, 255, 0.02)"
                stroke="rgba(255, 255, 255, 0.07)"
                strokeWidth="0.8"
              />
              {/* Left face */}
              <polygon
                points="-30,0 0,17.32 0,51.96 -30,34.64"
                fill="rgba(255, 255, 255, 0.008)"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.8"
              />
              {/* Right face */}
              <polygon
                points="0,17.32 30,0 30,34.64 0,51.96"
                fill="rgba(255, 255, 255, 0.015)"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth="0.8"
              />
            </g>

            {/* Cube 3 at (90, -17.32) - Seamless wrap */}
            <g transform="translate(90, -17.32)">
              <polygon
                points="0,17.32 0,51.96 -30,34.64 -30,0"
                fill="rgba(255, 255, 255, 0.008)"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.8"
              />
              <polygon
                points="0,17.32 30,0 30,34.64 0,51.96"
                fill="rgba(255, 255, 255, 0.015)"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth="0.8"
              />
            </g>
          </pattern>

          {/* Gojiberry Technical Diagonal Cross-Hatch Pattern */}
          <pattern
            id="gojiberry-hatch-pattern"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1,5 L5,-1 M-1,19 L19,-1 M-1,33 L33,-1 M9,33 L33,9 M23,33 L33,23"
              fill="none"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>

        {/* Layer 1: Interlocking Isometric Cube Mesh */}
        <rect width="100%" height="100%" fill="url(#gojiberry-isometric-pattern)" />

        {/* Layer 2: Subtle Technical Diagonal Hatch Overlay */}
        <rect width="100%" height="100%" fill="url(#gojiberry-hatch-pattern)" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function HeroFlowLines() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-visible select-none">
      {/* 1. Cohesive 3D Geometric Isometric Canopy */}
      <IsometricCanopy />

      {/* 3. Main Gojiberry Flow Lines Container (1014px width, symmetrically centered) */}
      <div
        className="absolute top-0 bottom-[-300px] left-1/2 -translate-x-1/2 w-[1014px] pointer-events-none overflow-visible hidden md:block"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 4%, black 10%, black 84%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 4%, black 10%, black 84%, transparent 100%)",
        }}
      >
        {/* ================= LEFT SIDE 3 CASCADING LINES ================= */}
        {/* Placed at left: 4px, flipped horizontally to curve inward towards the center */}
        <div className="absolute top-0 bottom-0 left-[4px] w-[151px]">
          {LINE_OFFSETS.map((line) => (
            <SingleFlowLine
              key={`left-${line.id}`}
              top={line.top}
              flipped={true}
            />
          ))}
        </div>

        {/* ================= RIGHT SIDE 3 CASCADING LINES ================= */}
        {/* Placed at left: 859px (outer edge at 859+138.5=997.5px), curves inward to 859px */}
        <div className="absolute top-0 bottom-0 left-[859px] w-[151px]">
          {LINE_OFFSETS.map((line) => (
            <SingleFlowLine
              key={`right-${line.id}`}
              top={line.top}
              flipped={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

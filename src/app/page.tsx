"use client";

import Navbar from "@/components/Navbar";
import HeroFlowLines from "@/components/HeroFlowLines";
import ProductCardStack from "@/components/ProductCardStack";
import HoverFooter from "@/components/ui/hover-footer";
import { triggerLatestDownload, getLatestRelease } from "@/lib/download";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [starCount, setStarCount] = useState<string>("2");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Scroll expansion progress: starts immediately as user scrolls (from 10px to 420px)
      const progress = Math.min(Math.max((y - 10) / 410, 0), 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Prewarm latest release info from GitHub API for instantaneous downloads
    getLatestRelease().catch(() => {});

    // Fetch GitHub stars for raktim-yoddha/hiveory
    fetch("https://api.github.com/repos/raktim-yoddha/hiveory")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStarCount(
            data.stargazers_count >= 1000
              ? `${(data.stargazers_count / 1000).toFixed(1)}k`
              : `${data.stargazers_count}`
          );
        }
      })
      .catch(() => {});

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#060608] relative min-h-screen w-full flex flex-col justify-between overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      {/* Shared Unified Navbar */}
      <Navbar />

      {/* Main Hero Section with Gojiberry Flowing Lines Animation in White Theme */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center w-full pt-36 sm:pt-48 pb-12 sm:pb-16 z-10 overflow-visible">
        {/* Background Flowing Lines & Isometric Geometry System spanning edge-to-edge */}
        <HeroFlowLines />

        {/* Content Container (Keeps text centered and readable) */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">

          {/* Strictly Two-Line High-Impact Display Headline */}
          <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-extrabold tracking-[-0.035em] text-white leading-[1.14] sm:leading-[1.12] mb-6 max-w-4xl mx-auto">
            <span className="block sm:whitespace-nowrap">The ultimate agent super app</span>
            <span className="text-zinc-400 font-normal block mt-2 sm:mt-3 text-xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] tracking-[-0.02em]">
              Code, chat & automate
            </span>
          </h1>

          {/* Crisp Narrative Subtitle */}
          <p className="relative z-10 max-w-2xl mx-auto text-base sm:text-lg text-zinc-400/90 leading-relaxed font-normal mb-10">
            Orchestrate agent swarms in a terminal-first ADE with plugin and skill
            management, brainstorm across AI models with instant switching, and
            delegate tasks to fully autonomous agents—all in one local-first
            desktop workspace.
          </p>

          {/* Call to Action Buttons */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              {/* Primary Download for Windows Button */}
              <button
                onClick={() => triggerLatestDownload("windows")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3 text-[15px] font-semibold hover:bg-zinc-200 transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34A8,8,0,0,0,82.34,109.66Z" />
                </svg>
                <span>Download for Windows</span>
              </button>

              {/* Give us a star Button */}
              <a
                href="https://github.com/raktim-yoddha/hiveory"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#131317] border border-white/10 hover:border-white/20 hover:bg-[#1a1a20] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 shadow-sm active:scale-95 cursor-pointer group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Give us a star</span>
                <span className="flex items-center gap-1 text-xs font-mono text-zinc-300 bg-white/[0.08] px-2 py-0.5 rounded-md border border-white/10 ml-0.5 group-hover:border-white/20 transition-colors">
                  <svg className="w-3 h-3 fill-white text-white" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span>{starCount}</span>
                </span>
              </a>
            </div>

            {/* Subtitle Caption */}
            <button
              onClick={() => triggerLatestDownload()}
              className="text-[12px] text-zinc-500 mt-3 flex items-center gap-1 cursor-pointer hover:text-zinc-300 transition-colors"
            >
              <span>Also for Apple Silicon · Intel · Linux</span>
              <svg
                className="w-3 h-3 text-zinc-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: Hiveory Desktop App Image (Smooth scroll expansion from compact framed start to full screen) */}
      <section
        id="ade-preview"
        className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-6 sm:pt-10 pb-20 sm:pb-28 z-20 overflow-visible"
      >
        {/* Ambient back-glow that gently brightens */}
        <div
          className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-64 bg-blue-500/10 blur-[130px] rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${50 + scrollProgress * 40}%`,
            opacity: 0.35 + scrollProgress * 0.55,
          }}
        />

        {/* The Desktop Image container: Small starting size framed by flow lines, smoothly expands to fill screen */}
        <div
          className="relative rounded-none overflow-hidden transition-[max-width,transform,box-shadow,border-color] duration-300 ease-out will-change-transform flex items-center justify-center"
          style={{
            width: "100%",
            maxHeight: "calc(100vh - 84px)",
            maxWidth: `min(${684 + scrollProgress * 556}px, calc((100vh - 84px) * (16 / 9)))`,
            aspectRatio: "16 / 9",
            transform: `scale(${0.94 + scrollProgress * 0.06})`,
            boxShadow: `0 ${15 + scrollProgress * 25}px ${
              40 + scrollProgress * 40
            }px -15px rgba(0,0,0,${0.8 + scrollProgress * 0.18})`,
            borderColor: `rgba(255, 255, 255, ${0.1 + scrollProgress * 0.1})`,
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          <Image
            src="/demo.png"
            alt="Hiveory Code Mode ADE running multiple CLIs side by side"
            width={1920}
            height={1080}
            className="w-full h-full object-contain block rounded-none"
            priority
            quality={95}
          />
        </div>
      </section>

      {/* SECTION: Bring your own CLI */}
      <section
        id="byok"
        className="relative w-full border-t border-white/[0.08] bg-[#08080b] px-4 sm:px-6 py-20 md:py-28 z-10 overflow-hidden"
      >
        {/* Subtle center ambient radial glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.02] blur-[130px] rounded-full" />

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-18">
          {/* Display Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-white leading-tight mb-4">
            Bring your own CLI
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Works with Claude Code, Codex, OpenCode, Grok, and any other agent
            CLI. Plug in your existing subscriptions and run them side by side in
            Hiveory.
          </p>
        </div>

        {/* Dual Infinite Marquee Rows (Balanced scale) */}
        <div className="w-full overflow-x-hidden marquee-mask space-y-6 md:space-y-8 py-2">
          {/* Row 1 (Track moving left) */}
          <div className="flex w-max items-center animate-marquee-left">
            {[
              { name: "Claude Code", icon: "https://cdn.simpleicons.org/claude" },
              { name: "Codex", icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64" },
              { name: "Grok", icon: "https://www.google.com/s2/favicons?domain=grok.com&sz=64" },
              { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
              { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor" },
              { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot" },
              { name: "OpenCode", icon: "https://cdn.simpleicons.org/opencode" },
              { name: "Amp", icon: "https://www.google.com/s2/favicons?domain=ampcode.com&sz=64" },
              { name: "OpenClaude", isTerminal: true },
              { name: "Antigravity", icon: "https://www.google.com/s2/favicons?domain=antigravity.google&sz=64" },
              { name: "Pi", icon: "https://www.google.com/s2/favicons?domain=pi.ai&sz=64" },
              { name: "oh-my-pi", isTerminal: true },
              { name: "Hermes Agent", isTerminal: true },
              { name: "Goose", isTerminal: true },
              // Repeated for infinite loop
              { name: "Claude Code", icon: "https://cdn.simpleicons.org/claude" },
              { name: "Codex", icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64" },
              { name: "Grok", icon: "https://www.google.com/s2/favicons?domain=grok.com&sz=64" },
              { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
              { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor" },
              { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot" },
              { name: "OpenCode", icon: "https://cdn.simpleicons.org/opencode" },
              { name: "Amp", icon: "https://www.google.com/s2/favicons?domain=ampcode.com&sz=64" },
              { name: "OpenClaude", isTerminal: true },
              { name: "Antigravity", icon: "https://www.google.com/s2/favicons?domain=antigravity.google&sz=64" },
              { name: "Pi", icon: "https://www.google.com/s2/favicons?domain=pi.ai&sz=64" },
              { name: "oh-my-pi", isTerminal: true },
              { name: "Hermes Agent", isTerminal: true },
              { name: "Goose", isTerminal: true },
            ].map((item, idx) => (
              <span key={idx} className="mx-6 sm:mx-8 md:mx-10 shrink-0">
                <span className="inline-flex items-center gap-3">
                  {item.isTerminal ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="text-white/70 w-5 h-5 sm:w-6 sm:h-6"
                    >
                      <path d="M120,137,48,201A12,12,0,1,1,32,183l61.91-55L32,73A12,12,0,1,1,48,55l72,64A12,12,0,0,1,120,137Zm96,43H120a12,12,0,0,0,0,24h96a12,12,0,0,0,0-24Z" />
                    </svg>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-md filter brightness-95"
                      loading="lazy"
                    />
                  )}
                  <span className="whitespace-nowrap text-lg sm:text-xl md:text-[22px] font-bold tracking-tight text-white/90 hover:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                </span>
              </span>
            ))}
          </div>

          {/* Row 2 (Track moving right) */}
          <div className="flex w-max items-center animate-marquee-right">
            {[
              { name: "Auggie", icon: "https://www.google.com/s2/favicons?domain=augmentcode.com&sz=64" },
              { name: "Charm", icon: "https://www.google.com/s2/favicons?domain=charm.sh&sz=64" },
              { name: "Cline", icon: "https://cdn.simpleicons.org/cline" },
              { name: "Codebuff", icon: "https://www.google.com/s2/favicons?domain=codebuff.com&sz=64" },
              { name: "Command Code", isTerminal: true },
              { name: "Continue", icon: "https://www.google.com/s2/favicons?domain=continue.dev&sz=64" },
              { name: "Droid", icon: "https://www.google.com/s2/favicons?domain=factory.ai&sz=64" },
              { name: "Kilocode", icon: "https://www.google.com/s2/favicons?domain=kilocode.ai&sz=64" },
              { name: "Kimi", icon: "https://cdn.simpleicons.org/moonshotai" },
              { name: "Kiro", icon: "https://www.google.com/s2/favicons?domain=kiro.dev&sz=64" },
              { name: "Mistral Vibe", icon: "https://cdn.simpleicons.org/mistralai" },
              { name: "Qwen Code", icon: "https://cdn.simpleicons.org/qwen" },
              { name: "Rovo Dev", icon: "https://www.google.com/s2/favicons?domain=atlassian.com&sz=64" },
              // Repeated for infinite loop
              { name: "Auggie", icon: "https://www.google.com/s2/favicons?domain=augmentcode.com&sz=64" },
              { name: "Charm", icon: "https://www.google.com/s2/favicons?domain=charm.sh&sz=64" },
              { name: "Cline", icon: "https://cdn.simpleicons.org/cline" },
              { name: "Codebuff", icon: "https://www.google.com/s2/favicons?domain=codebuff.com&sz=64" },
              { name: "Command Code", isTerminal: true },
              { name: "Continue", icon: "https://www.google.com/s2/favicons?domain=continue.dev&sz=64" },
              { name: "Droid", icon: "https://www.google.com/s2/favicons?domain=factory.ai&sz=64" },
              { name: "Kilocode", icon: "https://www.google.com/s2/favicons?domain=kilocode.ai&sz=64" },
              { name: "Kimi", icon: "https://cdn.simpleicons.org/moonshotai" },
              { name: "Kiro", icon: "https://www.google.com/s2/favicons?domain=kiro.dev&sz=64" },
              { name: "Mistral Vibe", icon: "https://cdn.simpleicons.org/mistralai" },
              { name: "Qwen Code", icon: "https://cdn.simpleicons.org/qwen" },
              { name: "Rovo Dev", icon: "https://www.google.com/s2/favicons?domain=atlassian.com&sz=64" },
            ].map((item, idx) => (
              <span key={idx} className="mx-6 sm:mx-8 md:mx-10 shrink-0">
                <span className="inline-flex items-center gap-3">
                  {item.isTerminal ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="text-white/70 w-5 h-5 sm:w-6 sm:h-6"
                    >
                      <path d="M120,137,48,201A12,12,0,1,1,32,183l61.91-55L32,73A12,12,0,1,1,48,55l72,64A12,12,0,0,1,120,137Zm96,43H120a12,12,0,0,0,0,24h96a12,12,0,0,0,0-24Z" />
                    </svg>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-md filter brightness-95"
                      loading="lazy"
                    />
                  )}
                  <span className="whitespace-nowrap text-lg sm:text-xl md:text-[22px] font-bold tracking-tight text-white/90 hover:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-14 md:mt-16 flex justify-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
            </svg>
            <span>any CLI agent</span>
          </span>
        </div>
      </section>

      {/* Section Separator */}
      <SectionSeparator />

      {/* SECTION: The 3 Modes Stacking Cards Product Section */}
      <ProductCardStack />

      {/* Section Separator */}
      <SectionSeparator />

      {/* SECTION: Pricing Section (Price First - Exactly same as Price Page) */}
      <section id="price" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 scroll-mt-20">
        <div id="pricing" className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl font-extrabold tracking-[-0.03em] text-white leading-tight mb-4 sm:mb-6 sm:whitespace-nowrap">
            Hiveory for Engineering Teams
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Give your developers the power of autonomous agent engineering
            without leaking intellectual property or compromising internal
            security policies.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 sm:mb-20">
          {/* Open Source Tier */}
          <div className="relative rounded-none border border-white/10 bg-[#0c0c10]/90 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-2xl">
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-white/30 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-white/30 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-white/30 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-white/30 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Open Source
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-none border border-white/10 text-zinc-400 bg-white/[0.04]">
                  Community
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                For individual builders and developers looking for a local-first agent desktop.
              </p>

              <div className="mb-8 pb-6 border-b border-white/[0.06]">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  Free
                </span>
                <span className="text-xs text-zinc-500 ml-2">forever</span>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                Includes
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Full access to Code Mode (ADE)",
                  "Autonomous Agent Mode & routines",
                  "Multi-model chat with BYOK",
                  "Local SQLite WAL persistence",
                  "Community Discord & GitHub support",
                ].map((f, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400"
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
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 py-3 px-6 text-sm font-medium transition-all active:scale-95"
            >
              <span>Get Started Free</span>
            </a>
          </div>

          {/* Enterprise Tier */}
          <div className="relative rounded-none border border-amber-400/40 bg-[#0f0e0c]/90 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_0_50px_-20px_rgba(245,158,11,0.15)]">
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400/50 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400/50 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400/50 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400/50 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Enterprise
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-none border border-amber-400/40 text-amber-300 bg-amber-400/10">
                  Custom Deployment
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                For engineering teams and enterprises requiring air-gapped security, team skill sync, and audit compliance.
              </p>

              <div className="mb-8 pb-6 border-b border-white/[0.06]">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  Custom
                </span>
                <span className="text-xs text-zinc-500 ml-2">tailored for your organization</span>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                Includes
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Air-gapped & on-premise deployment support",
                  "Centralized team skill & MCP registry sync",
                  "Enterprise SAML / SSO authentication",
                  "Audit logging & capability sandboxing policies",
                  "Dedicated engineering support & custom SLAs",
                ].map((f, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 shrink-0 mt-0.5 text-amber-400"
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
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://discord.gg/sT8Maq6Cxs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-gradient-to-r from-amber-400 to-amber-500 text-black py-3 px-6 text-sm font-semibold hover:from-amber-300 hover:to-amber-400 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Contact Enterprise Team</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Security & Compliance Callout */}
        <div className="relative rounded-none border border-white/10 bg-white/[0.02] p-8 sm:p-10 max-w-4xl mx-auto shadow-xl">
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-white/30 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-white/30 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-white/30 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-white/30 pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="text-xl font-bold text-white mb-2">
                Air-Gapped Ready
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Run with local models via Ollama or vLLM inside strictly isolated
                internal networks.
              </p>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-2">
                Zero Data Ingestion
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Hiveory never stores, routes, or trains on your company code or
                terminal prompts.
              </p>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-2">
                Sandboxed Executions
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Hardware and directory access is gated through sandboxed OS capabilities
                and permission prompts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <SectionSeparator />

      {/* SECTION: Communities Section (Exactly same as Community Page) */}
      <section id="community" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 scroll-mt-20 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-white leading-tight mb-6">
            Join the Hiveory Community
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Connect with developers building the future of agentic engineering.
            Share skills, give feedback, and contribute to an open-source
            desktop ecosystem.
          </p>
        </div>

        {/* Community Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Discord Card (Left: comes from extreme left) */}
          <motion.div
            initial={{ opacity: 0, x: -160 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-none border border-white/[0.12] bg-[#0c0c10]/90 p-8 flex flex-col justify-between hover:border-white/25 hover:bg-[#121217] transition-colors shadow-xl group"
          >
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                  <svg
                    className="w-6 h-6 fill-current text-[#5865F2]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded-none border border-white/[0.06]">
                  Active Chat
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Discord Community
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Chat with fellow developers, share custom agent routines, get help, and participate in weekly community office hours.
              </p>
            </div>

            <a
              href="https://discord.gg/sT8Maq6Cxs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-white/[0.06] hover:bg-white text-white hover:text-black py-2.5 px-4 text-sm font-semibold transition-all shadow-sm group-hover:bg-white group-hover:text-black border border-white/10 hover:border-white"
            >
              <span>Join Discord Server</span>
              <span className="text-xs">↗</span>
            </a>
          </motion.div>

          {/* GitHub Card (Center: comes from bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative rounded-none border border-white/[0.12] bg-[#0c0c10]/90 p-8 flex flex-col justify-between hover:border-white/25 hover:bg-[#121217] transition-colors shadow-xl group"
          >
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                  <svg
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded-none border border-white/[0.06]">
                  Open Source
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                GitHub Repository
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Star the project, report bugs, file feature requests, review RFC proposals, and submit pull requests directly to the core codebase.
              </p>
            </div>

            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-white/[0.06] hover:bg-white text-white hover:text-black py-2.5 px-4 text-sm font-semibold transition-all shadow-sm group-hover:bg-white group-hover:text-black border border-white/10 hover:border-white"
            >
              <span>Explore GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          </motion.div>

          {/* YouTube Card (Right: comes from extreme right) */}
          <motion.div
            initial={{ opacity: 0, x: 160 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative rounded-none border border-white/[0.12] bg-[#0c0c10]/90 p-8 flex flex-col justify-between hover:border-white/25 hover:bg-[#121217] transition-colors shadow-xl group"
          >
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                  <svg
                    className="w-6 h-6 fill-current text-[#FF0000]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded-none border border-white/[0.06]">
                  Video Guides
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                YouTube Channel
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Watch deep-dive video tutorials, live coding demonstrations, architecture breakdowns, and feature walkthroughs by the creators.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@ttcislive"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-white/[0.06] hover:bg-white text-white hover:text-black py-2.5 px-4 text-sm font-semibold transition-all shadow-sm group-hover:bg-white group-hover:text-black border border-white/10 hover:border-white"
            >
              <span>Watch on YouTube</span>
              <span className="text-xs">↗</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <SectionSeparator />

      {/* SECTION: Final CTA Card (Matching User's Design) */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 my-16 sm:my-24">
        <div className="relative rounded-none border border-white/10 bg-[#0c0c10]/80 backdrop-blur-xl p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
          {/* Corner Brackets */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-white/30 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-white/30 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-white/30 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-white/30 pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to experience concurrent agent development?
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Download Hiveory today or explore the open-source repository on GitHub.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => triggerLatestDownload()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              Download Hiveory
            </button>

            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#18181c] border border-white/15 text-white font-medium text-sm hover:bg-white/10 transition-all"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Text Hover Footer */}
      <HoverFooter />
    </div>
  );
}

{/* Subtle Full-Width Section Separator matching the Bring Your Own CLI divider */}
function SectionSeparator() {
  return <div className="w-full border-t border-white/[0.08] pointer-events-none z-10" />;
}

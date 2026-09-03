"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeMode, setActiveMode] = useState<"code" | "agent" | "chat">(
    "code"
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [starCount, setStarCount] = useState<string>("Star");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);

      // Scroll expansion progress: from 40px scroll to 480px scroll
      const progress = Math.min(Math.max((y - 40) / 440, 0), 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

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
    <div className="mesh-dot-grid hero-radial-glow relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      {/* FIXED NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full flex justify-center pointer-events-none transition-[padding] duration-500 ease-out ${
          isScrolled ? "pt-0 px-0" : "pt-3 px-4"
        }`}
      >
        <nav
          className={`w-full pointer-events-auto flex items-center justify-center backdrop-blur-xl transition-all duration-500 ease-out ${
            isScrolled
              ? "max-w-full rounded-none px-6 py-3 bg-[#070709]/95 border-b border-white/[0.08] border-t-transparent border-x-transparent shadow-2xl"
              : "max-w-[920px] rounded-2xl px-6 py-2.5 bg-[#121216]/80 border border-white/[0.1] shadow-2xl"
          }`}
        >
          {/* Inner content container: Minimal difference between floating (900px) and sticky (930px) */}
          <div
            className={`w-full flex items-center justify-between transition-[max-width] duration-500 ease-out ${
              isScrolled ? "max-w-[930px]" : "max-w-[900px]"
            }`}
          >
            {/* Left Brand */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center p-0.5 shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/hiveory-logo.png"
                  alt="Hiveory Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain rounded-md"
                  priority
                />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors duration-300">
                Hiveory
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => setActiveMode("code")}
                className={`px-3 py-1.5 text-[13px] rounded-lg transition-all duration-300 cursor-pointer ${
                  activeMode === "code"
                    ? "text-white bg-white/10 font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Code (ADE)
              </button>
              <button
                onClick={() => setActiveMode("agent")}
                className={`px-3 py-1.5 text-[13px] rounded-lg transition-all duration-300 cursor-pointer ${
                  activeMode === "agent"
                    ? "text-white bg-white/10 font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Agent Mode
              </button>
              <button
                onClick={() => setActiveMode("chat")}
                className={`px-3 py-1.5 text-[13px] rounded-lg transition-all duration-300 cursor-pointer ${
                  activeMode === "chat"
                    ? "text-white bg-white/10 font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Chat Mode
              </button>
              <a
                href="#ade-preview"
                className="px-3 py-1.5 text-[13px] text-zinc-400 hover:text-zinc-200 transition-colors duration-300 rounded-lg"
              >
                Architecture
              </a>
              <a
                href="#docs"
                className="px-3 py-1.5 text-[13px] text-zinc-400 hover:text-zinc-200 transition-colors duration-300 rounded-lg"
              >
                Docs
              </a>
            </div>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Discord Button */}
              <a
                href="https://discord.gg/sT8Maq6Cxs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label="Discord Community"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* YouTube Button (Replaced X) */}
              <a
                href="https://www.youtube.com/@ttcislive"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label="YouTube Channel"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Divider */}
              <div className="h-4 w-px bg-white/10 mx-0.5" />

              {/* GitHub Stars Button */}
              <a
                href="https://github.com/raktim-yoddha/hiveory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141418] border border-white/10 hover:border-white/20 text-[12px] font-medium text-white transition-all shadow-sm group"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current text-zinc-300 group-hover:text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>{starCount}</span>
              </a>

              {/* Download Button (blank for now) */}
              <a
                href="#"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black text-[12px] font-semibold hover:bg-zinc-200 transition-all shadow-sm active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34A8,8,0,0,0,82.34,109.66Z" />
                </svg>
                <span>Download</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto my-auto pt-36 sm:pt-44 pb-16 z-10">
        {/* Strictly Two-Line High-Impact Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-extrabold tracking-[-0.035em] text-white leading-[1.12] mb-6">
          <span className="block whitespace-nowrap">The ultimate agent super app</span>
          <span className="text-zinc-400 font-normal block mt-1 sm:mt-2">
            Code, chat & automate
          </span>
        </h1>

        {/* Crisp Narrative Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400/90 leading-relaxed font-normal mb-10">
          Orchestrate agent swarms in a terminal-first ADE with plugin and skill
          management, brainstorm across AI models with instant switching, and
          delegate tasks to fully autonomous agents—all in one local-first
          desktop workspace.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col items-center justify-center w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            {/* Primary Download for Windows Button */}
            <a
              href="#"
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
            </a>

            {/* Secondary View on GitHub Button */}
            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#131317] border border-white/10 hover:border-white/20 hover:bg-[#1a1a20] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Subtitle Caption */}
          <span className="text-[12px] text-zinc-500 mt-3 flex items-center gap-1 cursor-default hover:text-zinc-400 transition-colors">
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
          </span>
        </div>
      </section>

      {/* SECTION: Hiveory Desktop App Image (Subtle, smooth scroll expansion) */}
      <section
        id="ade-preview"
        className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-2 pb-16 z-20"
      >
        {/* Ambient back-glow that gently brightens */}
        <div
          className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-64 bg-blue-500/10 blur-[130px] rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${65 + scrollProgress * 20}%`,
            opacity: 0.4 + scrollProgress * 0.5,
          }}
        />

        {/* The Desktop Image container: Substantial starting size with subtle 4% expansion */}
        <div
          className="relative rounded-2xl overflow-hidden transition-all duration-500 ease-out will-change-transform flex items-center justify-center"
          style={{
            width: "100%",
            maxHeight: "calc(100vh - 84px)",
            maxWidth: `min(${1040 + scrollProgress * 180}px, calc((100vh - 84px) * (16 / 9)))`,
            aspectRatio: "16 / 9",
            transform: `scale(${0.96 + scrollProgress * 0.04})`,
            boxShadow: `0 ${20 + scrollProgress * 15}px ${
              50 + scrollProgress * 30
            }px -15px rgba(0,0,0,${0.85 + scrollProgress * 0.12})`,
            borderColor: `rgba(255, 255, 255, ${0.1 + scrollProgress * 0.08})`,
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          <Image
            src="/hiveory-ade-preview.png"
            alt="Hiveory Code Mode ADE running multiple CLIs side by side"
            width={1920}
            height={1080}
            className="w-full h-full object-contain block rounded-2xl"
            priority
            quality={95}
          />
        </div>
      </section>

      {/* SECTION: Bring your own Subscription */}
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
            Bring your own Subscription
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

      {/* Clean Bottom Footer Anchor / Status */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500 z-10 border-t border-white/[0.04]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Local-First Rust Host · SQLite WAL · Cap-Std Sandboxing</span>
        </div>
        <div>
          <span>Three Modes. One Desktop Super App.</span>
        </div>
      </footer>
    </div>
  );
}

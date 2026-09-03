"use client";

import Navbar from "@/components/Navbar";
import ProductCardStack from "@/components/ProductCardStack";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Scroll expansion progress: from 40px scroll to 480px scroll
      const progress = Math.min(Math.max((y - 40) / 440, 0), 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mesh-dot-grid hero-radial-glow relative min-h-screen w-full flex flex-col justify-between overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      {/* Shared Unified Navbar */}
      <Navbar />

      {/* Main Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto my-auto pt-36 sm:pt-44 pb-16 z-10">
        {/* Strictly Two-Line High-Impact Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-extrabold tracking-[-0.035em] text-white leading-[1.12] mb-6">
          <span className="block whitespace-nowrap">The ultimate agent super app</span>
          <span className="text-zinc-400 font-normal block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] tracking-[-0.02em]">
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

      {/* SECTION: The 3 Modes Stacking Cards Product Section */}
      <ProductCardStack />

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

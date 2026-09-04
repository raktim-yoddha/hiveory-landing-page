"use client";

import Navbar from "@/components/Navbar";
import HeroFlowLines from "@/components/HeroFlowLines";
import ProductCardStack from "@/components/ProductCardStack";
import ByoCliSection from "@/components/ByoCliSection";
import HoverFooter from "@/components/ui/hover-footer";
import { triggerLatestDownload, getLatestRelease } from "@/lib/download";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [starCount, setStarCount] = useState<string>("2");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoTier, setDemoTier] = useState<"custom" | "enterprise">("custom");
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const openDemoModal = (tier: "custom" | "enterprise") => {
    setDemoTier(tier);
    setDemoSubmitted(false);
    setIsDemoModalOpen(true);
  };

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDemoModalOpen(false);
      }
    };
    if (isDemoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDemoModalOpen]);

  return (
    <div className="bg-[#060608] relative min-h-screen w-full flex flex-col justify-between overflow-x-clip selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      {/* Shared Unified Navbar */}
      <Navbar />

      {/* Main Hero Section with Gojiberry Flowing Lines Animation in White Theme */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center w-full pt-44 sm:pt-56 md:pt-60 pb-14 sm:pb-20 z-10 overflow-visible">
        {/* Background Flowing Lines & Isometric Geometry System spanning edge-to-edge */}
        <HeroFlowLines />

        {/* Content Container (Keeps text centered and readable) */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">

          {/* Strictly Two-Line High-Impact Display Headline */}
          <h1 className="relative z-10 w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-medium tracking-[-0.03em] text-white leading-[1.1] sm:leading-[1.08] mb-6 mx-auto">
            <span className="block sm:whitespace-nowrap">The ultimate agent super app</span>
            <span className="text-zinc-400 font-normal block mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-[38px] xl:text-[44px] tracking-[-0.02em]">
              Code, chat & automate
            </span>
          </h1>

          {/* Crisp Narrative Subtitle */}
          <p className="relative z-10 max-w-2xl mx-auto text-base sm:text-lg text-zinc-400/90 leading-relaxed font-normal mb-10">
            Run autonomous agents, chat across AI models, and code in a
            terminal-first ADE—all in one local-first desktop workspace.
          </p>

          {/* Call to Action Buttons */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              {/* Primary Download for Windows Button */}
              <button
                onClick={() => triggerLatestDownload("windows")}
                className="group relative w-full sm:w-auto inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
              >
                {/* Outer Boundary Corner L-Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

                {/* Expanding White Filler */}
                <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)] pointer-events-none rounded-none" />

                {/* Left: Icon & Label */}
                <span className="relative z-10 flex items-center gap-3">
                  <span className="w-9 h-9 flex items-center justify-center text-black shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34A8,8,0,0,0,82.34,109.66Z" />
                    </svg>
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-semibold text-white group-hover:text-black transition-colors duration-300">
                    Download for Windows
                  </span>
                </span>

                {/* Right: Arrow */}
                <span className="relative z-10 text-white/50 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 pl-3">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>

              {/* Give us a star Button */}
              <a
                href="https://github.com/raktim-yoddha/hiveory"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-between p-1 pr-3.5 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-sm"
              >
                {/* Outer Boundary Corner L-Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
                <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

                {/* Expanding White Filler covering GitHub icon */}
                <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)] pointer-events-none rounded-none" />

                {/* Left: GitHub Icon & Label */}
                <span className="relative z-10 flex items-center gap-3">
                  <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-medium text-white group-hover:text-black transition-colors duration-300">
                    Give us a star
                  </span>
                </span>

                {/* Right: Star count badge & Arrow */}
                <span className="relative z-10 flex items-center gap-2 pl-2">
                  <span className="flex items-center gap-1 text-xs font-mono text-zinc-300 group-hover:text-black bg-white/[0.08] group-hover:bg-black/10 px-2 py-0.5 rounded-none border border-white/10 group-hover:border-black/20 transition-all duration-300">
                    <svg className="w-3 h-3 fill-amber-400 group-hover:fill-black text-amber-400 group-hover:text-black transition-colors" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>{starCount}</span>
                  </span>
                  <span className="text-white/40 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
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

      {/* SECTION: Bring your own CLI with 3D Box Dipping Animation */}
      <ByoCliSection />

      {/* Section Separator */}
      <SectionSeparator />

      {/* SECTION: The 3 Modes Stacking Cards Product Section */}
      <ProductCardStack />

      {/* Section Separator */}
      <SectionSeparator />

      {/* SECTION: Pricing Section */}
      <section id="price" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 scroll-mt-20">
        <div id="pricing" className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl font-medium tracking-[-0.025em] text-white leading-tight mb-4 sm:mb-6 sm:whitespace-nowrap">
            Hiveory for Developers & Teams
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Give your developers the power of autonomous agent engineering—from local-first open-source autonomy to custom agent routines and enterprise security.
          </p>
        </div>

        {/* Tier Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 sm:mb-20">
          {/* Open Source Tier */}
          <div className="group relative rounded-none border border-white/10 hover:border-white/30 bg-[#0c0c10]/90 hover:bg-[#111116] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-2xl">
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-medium text-white tracking-tight">
                  Open Source
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-none border border-white/10 text-zinc-400 bg-white/[0.04]">
                  Community
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-6 leading-relaxed truncate">
                Free, local-first agent desktop for builders.
              </p>

              <div className="mb-8 pb-6 border-b border-white/[0.06]">
                <span className="text-4xl font-medium text-white tracking-tight">
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
                  "Autonomous agent routine automation",
                  "Multi-model chat with BYOK & Ollama",
                  "Local SQLite WAL persistence",
                  "Discord & GitHub community support",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-300 flex items-center gap-2.5 whitespace-nowrap overflow-hidden"
                  >
                    <svg
                      className="w-4 h-4 shrink-0 text-white"
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
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding White Filler covering GitHub icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Get Started Free
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300">
                →
              </span>
            </a>
          </div>

          {/* Custom Tier */}
          <div className="group relative rounded-none border border-white/10 hover:border-white/30 bg-[#0c0c10]/90 hover:bg-[#111116] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-2xl">
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-medium text-white tracking-tight">
                  Custom
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-none border border-white/10 text-zinc-400 bg-white/[0.04]">
                  Tailored Setup
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                We set it up, build it, or run it for you.
              </p>

              <div className="mb-8 pb-6 border-b border-white/[0.06]">
                <span className="text-4xl font-medium text-white tracking-tight">
                  Let&apos;s talk
                </span>
                <span className="text-xs text-zinc-500 ml-2">for your team</span>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                Includes
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Paid setup and configuration",
                  "Custom bots built for your workflow",
                  "Managed, hosted Hiveory instance",
                  "Priority support and integration help",
                  "A direct line to the maintainer",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-300 flex items-center gap-2.5 whitespace-nowrap overflow-hidden"
                  >
                    <svg
                      className="w-4 h-4 shrink-0 text-sky-400"
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
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => openDemoModal("custom")}
              className="group/btn relative w-full inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding White Filler covering Calendar icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Book a demo
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300">
                →
              </span>
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="group relative rounded-none border border-amber-400/40 hover:border-amber-400/80 bg-[#0f0e0c]/90 hover:bg-[#14120e] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_0_50px_-20px_rgba(245,158,11,0.15)]">
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-amber-400/60 group-hover:border-amber-400 transition-colors duration-300 pointer-events-none" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-amber-400/60 group-hover:border-amber-400 transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-amber-400/60 group-hover:border-amber-400 transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-amber-400/60 group-hover:border-amber-400 transition-colors duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-medium text-white tracking-tight">
                  Enterprise
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-none border border-amber-400/40 text-amber-300 bg-amber-400/10">
                  Scale & Governance
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                White-label it, embed it, or have us run it.
              </p>

              <div className="mb-8 pb-6 border-b border-white/[0.06]">
                <span className="text-4xl font-medium text-white tracking-tight">
                  Let&apos;s talk
                </span>
                <span className="text-xs text-zinc-500 ml-2">for organization</span>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                Includes
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "White-label builds under your brand",
                  "Embedded in your existing product",
                  "Self-hosted or air-gapped deployment",
                  "SSO, security review, and compliance",
                  "SLA-backed response times",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-300 flex items-center gap-2.5 whitespace-nowrap overflow-hidden"
                  >
                    <svg
                      className="w-4 h-4 shrink-0 text-amber-400"
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
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => openDemoModal("enterprise")}
              className="group/btn relative w-full inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#13110c] border border-amber-400/50 hover:border-amber-400 text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-md"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-amber-400/60 group-hover/btn:border-amber-400 transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-amber-400/60 group-hover/btn:border-amber-400 transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-amber-400/60 group-hover/btn:border-amber-400 transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-amber-400/60 group-hover/btn:border-amber-400 transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding Amber Filler covering Zap icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Make it your own
                </span>
              </span>

              <span className="relative z-10 text-amber-400 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Security & Compliance Callout */}
        <div className="group relative rounded-none border border-white/10 hover:border-white/30 bg-[#0c0c10]/60 hover:bg-[#0f0f14] p-8 sm:p-10 max-w-7xl mx-auto shadow-xl transition-all duration-300">
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="text-xl font-medium text-white mb-2">
                Air-Gapped Ready
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Run with local models via Ollama or vLLM inside strictly isolated
                internal networks.
              </p>
            </div>
            <div>
              <div className="text-xl font-medium text-white mb-2">
                Zero Data Ingestion
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Hiveory never stores, routes, or trains on your company code or
                terminal prompts.
              </p>
            </div>
            <div>
              <div className="text-xl font-medium text-white mb-2">
                Sandboxed Executions
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
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
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-[-0.025em] text-white leading-tight mb-6 sm:whitespace-nowrap">
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
          {/* Discord Card (Left: comes from left, triggers earlier above) */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px 0px 0px 0px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-none border border-white/[0.12] hover:border-white/30 bg-[#0c0c10]/90 hover:bg-[#111116] p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
          >
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

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

              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
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
              className="group/btn relative w-full inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding White Filler covering Discord icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Join Discord Server
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300">
                ↗
              </span>
            </a>
          </motion.div>

          {/* GitHub Card (Center: comes from bottom, triggers earlier above) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px 0px 0px 0px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="group relative rounded-none border border-white/[0.12] hover:border-white/30 bg-[#0c0c10]/90 hover:bg-[#111116] p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
          >
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

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

              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
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
              className="group/btn relative w-full inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding White Filler covering GitHub icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Explore GitHub
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300">
                ↗
              </span>
            </a>
          </motion.div>

          {/* YouTube Card (Right: comes from right, triggers earlier above) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px 0px 0px 0px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="group relative rounded-none border border-white/[0.12] hover:border-white/30 bg-[#0c0c10]/90 hover:bg-[#111116] p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
          >
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

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

              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
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
              className="group/btn relative w-full inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              {/* Inner Expanding White Filler covering YouTube icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Watch on YouTube
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300">
                ↗
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <SectionSeparator />

      {/* SECTION: Final CTA Card (Matching User's Design) */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 my-16 sm:my-24">
        <div className="group relative rounded-none border border-white/10 hover:border-white/30 bg-[#0c0c10]/80 backdrop-blur-xl p-8 sm:p-14 text-center shadow-2xl overflow-hidden transition-all duration-300">
          {/* Corner Brackets */}
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
          <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Ready to experience concurrent agent development?
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Download Hiveory today or explore the open-source repository on GitHub.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => triggerLatestDownload()}
              className="group/btn relative w-full sm:w-auto inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
            >
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34A8,8,0,0,0,82.34,109.66Z" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                  Download Hiveory
                </span>
              </span>

              <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 pl-3">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>

            {/* Give us a star Button (Identical to Hero Page) */}
            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-between p-1 pr-3.5 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-sm"
            >
              {/* Outer Boundary Corner L-Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover:border-white transition-colors duration-300 pointer-events-none" />

              {/* Expanding White Filler covering GitHub icon */}
              <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[calc(100%-8px)] pointer-events-none rounded-none" />

              {/* Left: GitHub Icon & Label */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-white group-hover:text-black transition-colors duration-300">
                  Give us a star
                </span>
              </span>

              {/* Right: Star count badge & Arrow */}
              <span className="relative z-10 flex items-center gap-2 pl-2">
                <span className="flex items-center gap-1 text-xs font-mono text-zinc-300 group-hover:text-black bg-white/[0.08] group-hover:bg-black/10 px-2 py-0.5 rounded-none border border-white/10 group-hover:border-black/20 transition-all duration-300">
                  <svg className="w-3 h-3 fill-amber-400 group-hover:fill-black text-amber-400 group-hover:text-black transition-colors" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span>{starCount}</span>
                </span>
                <span className="text-white/40 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Booking / Enterprise Inquiry Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg rounded-none border border-white/15 bg-[#0e0e12] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Corner Brackets */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50 pointer-events-none" />
              <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50 pointer-events-none" />
              <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50 pointer-events-none" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50 pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span
                    className={`inline-block text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-none border mb-2 ${
                      demoTier === "custom"
                        ? "border-sky-400/30 text-sky-300 bg-sky-400/10"
                        : "border-amber-400/40 text-amber-300 bg-amber-400/10"
                    }`}
                  >
                    {demoTier === "custom" ? "Custom Tier" : "Enterprise Tier"}
                  </span>
                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    {demoTier === "custom" ? "Book a Custom Demo" : "Enterprise Deployment"}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                    {demoTier === "custom"
                      ? "Get custom bots built, ADE configured, or dedicated workflows for your team."
                      : "Discuss white-labeling, air-gapped on-premise setups, compliance & SLAs."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(false)}
                  className="p-1 rounded-none text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Direct Discord Fast-Track */}
              <div className="mb-6 p-4 rounded-none border border-white/10 bg-white/[0.03] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-none bg-[#5865F2]/20 text-[#5865F2]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Need faster response?</div>
                    <div className="text-xs text-zinc-400">Chat with founders in real-time</div>
                  </div>
                </div>
                <a
                  href="https://discord.gg/sT8Maq6Cxs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 rounded-none bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-semibold transition-colors"
                >
                  Join Discord ↗
                </a>
              </div>

              {/* Inquiry Form or Success State */}
              {demoSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-none bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Request Received!</h4>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-6 leading-relaxed">
                    Thanks for reaching out. A core team engineer will follow up with you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(false)}
                    className="px-6 py-2.5 rounded-none bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDemoSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-none bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-none bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={demoForm.company}
                      onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded-none bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      How can we help you?
                    </label>
                    <textarea
                      rows={3}
                      value={demoForm.message}
                      onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                      placeholder={
                        demoTier === "custom"
                          ? "Describe your agent stack or workflow requirements..."
                          : "Describe your team size, on-prem / air-gapped requirements..."
                      }
                      className="w-full px-3.5 py-2.5 rounded-none bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group/btn relative w-full inline-flex items-center justify-between p-1 pr-4 rounded-none bg-[#0c0c10] border border-white/20 hover:border-white text-white transition-all duration-300 cursor-pointer active:scale-[0.98] mt-2 shadow-sm"
                  >
                    {/* Outer Boundary Corner L-Brackets */}
                    <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                    <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                    <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />
                    <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover/btn:border-white transition-colors duration-300 pointer-events-none" />

                    {/* Inner Expanding White Filler covering Send icon with its own 4 Corner L-Brackets */}
                    <span className="absolute inset-y-1 left-1 w-9 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-[calc(100%-8px)] pointer-events-none rounded-none" />

                    <span className="relative z-10 flex items-center gap-3">
                      <span className="w-9 h-9 flex items-center justify-center text-black shrink-0 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-white group-hover/btn:text-black transition-colors duration-300">
                        Submit Request
                      </span>
                    </span>

                    <span className="relative z-10 text-white/50 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Text Hover Footer */}
      <HoverFooter />
    </div>
  );
}

{/* Technical Full-Width Section Separator with centered + crosshair */}
function SectionSeparator() {
  return (
    <div className="relative w-full flex items-center justify-center my-0 pointer-events-none z-10">
      <div className="w-full border-t border-white/[0.08]" />
      <div className="absolute text-white/30 font-mono text-xs select-none bg-[#060608] px-3">
        +
      </div>
    </div>
  );
}

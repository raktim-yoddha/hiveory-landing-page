"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { triggerLatestDownload } from "@/lib/download";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [starCount, setStarCount] = useState<string>("Star");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const navLinks = [
    { label: "Product", href: "/#product-modes" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Docs", href: "/docs" },
    { label: "Community", href: "/#community" },
    { label: "Prices", href: "/#price" },
  ];

  return (
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
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "instant" });
              }
            }}
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
          </Link>

          {/* Navigation Links in Open-Source SaaS Hierarchy */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#") && pathname === "/") {
                      e.preventDefault();
                      const id = link.href.replace("/#", "");
                      const elem = document.getElementById(id);
                      if (elem) {
                        elem.scrollIntoView({ behavior: "instant" });
                      }
                    }
                  }}
                  className={`px-3 py-1.5 text-[13px] rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 font-medium shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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

            {/* YouTube Button */}
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

            {/* Download Button */}
            <button
              onClick={() => triggerLatestDownload()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black text-[12px] font-semibold hover:bg-zinc-200 transition-all shadow-sm active:scale-95 cursor-pointer"
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
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

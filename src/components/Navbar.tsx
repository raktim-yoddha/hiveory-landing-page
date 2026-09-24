"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { triggerLatestDownload } from "@/lib/download";

export default function Navbar() {
  const pathname = usePathname();
  const [starCount, setStarCount] = useState<string>("Star");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor scroll position with high performance outside React render cycle
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isMobile) {
      setIsScrolled(latest > 20);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
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
  }, []);

  const navLinks = [
    { label: "Product", href: "/#product-modes" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Docs", href: "/docs" },
    { label: "Community", href: "/#community" },
    { label: "Prices", href: "/#price" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.replace("/#", "");
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 w-full max-w-[1536px] mx-auto flex flex-col items-center pointer-events-none"
      initial={false}
      animate={{
        paddingTop: isMobile ? 0 : isScrolled ? 0 : 10,
        paddingLeft: isMobile ? 0 : isScrolled ? 0 : 16,
        paddingRight: isMobile ? 0 : isScrolled ? 0 : 16,
      }}
      transition={{
        duration: isMobile ? 0 : 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.nav
        className="w-full pointer-events-auto flex flex-col items-center justify-center backdrop-blur-xl px-3 sm:px-6 shadow-2xl"
        initial={false}
        animate={{
          maxWidth: isMobile ? "100%" : isScrolled ? "1536px" : "920px",
          borderRadius: isMobile || isScrolled ? "0px" : "16px",
          backgroundColor: isMobile || isScrolled
            ? "rgba(7, 7, 9, 0.96)"
            : "rgba(18, 18, 22, 0.8)",
          paddingTop: isMobile ? "10px" : isScrolled ? "12px" : "9px",
          paddingBottom: isMobile ? "10px" : isScrolled ? "12px" : "9px",
          borderTopColor: isScrolled || isMobile
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 0.1)",
          borderLeftColor: isScrolled || isMobile
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 0.1)",
          borderRightColor: isScrolled || isMobile
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 0.1)",
          borderBottomColor: isScrolled || isMobile
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(255, 255, 255, 0.1)",
        }}
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        transition={{
          duration: isMobile ? 0 : 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Inner content container */}
        <div
          className="relative w-full flex items-center justify-between"
          style={{
            maxWidth: isMobile ? "100%" : isScrolled ? "930px" : "900px",
          }}
        >
          {/* Left Brand */}
          <Link
            href="/"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-lg overflow-hidden flex items-center justify-center p-0.5 shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/hiveory-logo.png"
                alt="Hiveory Logo"
                width={28}
                height={28}
                className="w-full h-full object-contain rounded-md"
                priority
              />
            </div>
            <span className="text-[14px] sm:text-[15px] font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors duration-300">
              Hiveory
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#") && pathname === "/") {
                      e.preventDefault();
                      handleNavClick(link.href);
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
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Discord Button (Hidden on small screens) */}
            <a
              href="https://discord.gg/sT8Maq6Cxs"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
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

            {/* YouTube Button (Hidden on small screens) */}
            <a
              href="https://www.youtube.com/@ttcislive"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
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

            {/* Divider (Hidden on small mobile) */}
            <div className="hidden sm:block h-4 w-px bg-white/10 mx-0.5" />

            {/* GitHub Stars Button */}
            <a
              href="https://github.com/raktim-yoddha/hiveory"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 h-8 sm:h-9 rounded-none bg-[#141418] border border-white/20 hover:border-white/40 text-xs sm:text-sm font-medium text-white transition-all shadow-sm group cursor-pointer shrink-0"
            >
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover:border-white pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/50 group-hover:border-white pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/50 group-hover:border-white pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover:border-white pointer-events-none" />
              <svg
                className="w-4 h-4 fill-current text-white shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>{starCount}</span>
            </a>

            {/* Download Button */}
            <button
              onClick={() => triggerLatestDownload()}
              className="group/dlbtn relative flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 h-8 sm:h-9 rounded-none bg-[#EAEAEA] hover:bg-white text-black text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 cursor-pointer shrink-0 border border-zinc-400/40 hover:border-zinc-500"
            >
              <span className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-black/70 group-hover/dlbtn:border-black pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-black/70 group-hover/dlbtn:border-black pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-black/70 group-hover/dlbtn:border-black pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-black/70 group-hover/dlbtn:border-black pointer-events-none" />

              <svg
                className="w-4 h-4 text-black shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative flex items-center justify-center p-1.5 rounded-none bg-[#141418] border border-white/20 text-white hover:border-white transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-white/40 pointer-events-none" />
              <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-white/40 pointer-events-none" />
              <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-white/40 pointer-events-none" />
              <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-white/40 pointer-events-none" />

              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full md:hidden border-t border-white/[0.08] mt-3 pt-3 pb-2 flex flex-col gap-2 overflow-hidden pointer-events-auto"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("/#") && pathname === "/") {
                        e.preventDefault();
                        handleNavClick(link.href);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`px-3 py-2 text-sm rounded-none border border-transparent transition-all flex items-center justify-between ${
                      isActive
                        ? "text-white bg-white/10 border-white/20 font-medium"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-zinc-500 text-xs">→</span>
                  </Link>
                );
              })}

              <div className="border-t border-white/[0.08] pt-2 mt-1 flex items-center justify-around gap-2 text-xs text-zinc-400">
                <a
                  href="https://discord.gg/sT8Maq6Cxs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 py-1.5 px-3 bg-white/[0.03] border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#5865F2]" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Discord</span>
                </a>
                <a
                  href="https://www.youtube.com/@ttcislive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 py-1.5 px-3 bg-white/[0.03] border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#FF0000]" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}

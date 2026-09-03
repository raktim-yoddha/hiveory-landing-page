"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const ctm = svgRef.current.getScreenCTM();
      if (ctm) {
        const pt = svgRef.current.createSVGPoint();
        pt.x = cursor.x;
        pt.y = cursor.y;
        const svgP = pt.matrixTransform(ctm.inverse());
        const cxPercentage = (svgP.x / 300) * 100;
        const cyPercentage = (svgP.y / 100) * 100;
        setMaskPosition({
          cx: `${cxPercentage}%`,
          cy: `${cyPercentage}%`,
        });
      }
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        if (!svgRef.current) return;
        const ctm = svgRef.current.getScreenCTM();
        if (!ctm) return;
        const pt = svgRef.current.createSVGPoint();
        pt.x = e.clientX;
        pt.y = e.clientY;
        const svgP = pt.matrixTransform(ctm.inverse());

        // In viewBox 0 0 300 100, the letters HIVEORY span Y: 18 to 82, X: 10 to 290
        // Top half of letters (18-50) and bottom half (50-82) are both fully hoverable.
        // Once cursor moves past the letters (Y < 18 or Y > 82), hover immediately stops.
        if (svgP.y >= 18 && svgP.y <= 82 && svgP.x >= 10 && svgP.x <= 290) {
          setHovered(true);
          setCursor({ x: e.clientX, y: e.clientY });
        } else {
          setHovered(false);
        }
      }}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        {/* Dynamic monochrome gradient continuously cycling between white, silver, and blackish */}
        <linearGradient
          id="whiteSilverBlackContinuous"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#ffffff">
            <animate
              attributeName="stop-color"
              values="#ffffff;#e4e4e7;#71717a;#18181b;#a1a1aa;#ffffff"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="25%" stopColor="#d4d4d8">
            <animate
              attributeName="stop-color"
              values="#d4d4d8;#27272a;#e4e4e7;#ffffff;#71717a;#d4d4d8"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="#71717a">
            <animate
              attributeName="stop-color"
              values="#71717a;#ffffff;#18181b;#e4e4e7;#27272a;#71717a"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="75%" stopColor="#27272a">
            <animate
              attributeName="stop-color"
              values="#27272a;#a1a1aa;#ffffff;#27272a;#e4e4e7;#27272a"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#ffffff">
            <animate
              attributeName="stop-color"
              values="#ffffff;#18181b;#71717a;#ffffff;#a1a1aa;#ffffff"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        <linearGradient
          id="whiteSilverBlackStroke"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff">
            <animate
              attributeName="stop-color"
              values="#ffffff;#71717a;#18181b;#e4e4e7;#ffffff"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="#a1a1aa">
            <animate
              attributeName="stop-color"
              values="#a1a1aa;#ffffff;#27272a;#a1a1aa;#a1a1aa"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#27272a">
            <animate
              attributeName="stop-color"
              values="#27272a;#18181b;#ffffff;#71717a;#27272a"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r={hovered ? "25%" : "0%"}
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Dim baseline ghost text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-700 font-[helvetica] text-7xl font-bold"
        style={{ opacity: hovered ? 0.4 : 0.15 }}
      >
        {text}
      </text>

      {/* Continuous animated white/silver/blackish stroke outline */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.35"
        stroke="url(#whiteSilverBlackStroke)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Cursor mask revealed fill constantly shifting in white, silver, and blackish */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#whiteSilverBlackContinuous)"
        stroke="url(#whiteSilverBlackStroke)"
        strokeWidth="0.35"
        mask="url(#textMask)"
        className="font-[helvetica] text-7xl font-bold transition-opacity duration-150"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.01) 100%)",
      }}
    />
  );
};

export function HoverFooter() {
  // Corrected Navigation & Modes data
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Agent Mode", href: "/product" },
        { label: "Code Mode", href: "/product" },
        { label: "Chat Mode", href: "/product" },
        { label: "Bring your own CLI", href: "/#byok" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Capabilities", href: "/capabilities" },
        { label: "Prices", href: "/#price" },
        {
          label: "Community Hub",
          href: "/#community",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data for Hiveory
  const contactInfo = [
    {
      icon: (
        <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      text: "raktim-yoddha/hiveory",
      href: "https://github.com/raktim-yoddha/hiveory",
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
      text: "Join Discord Community",
      href: "https://discord.gg/sT8Maq6Cxs",
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      text: "YouTube (@ttcislive)",
      href: "https://www.youtube.com/@ttcislive",
    },
    {
      icon: <MapPin size={18} className="text-white shrink-0" />,
      text: "Jamnagar, Gujarat, India",
    },
  ];

  // Social media icons in monochrome white theme
  const socialLinks = [
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      href: "https://github.com/raktim-yoddha/hiveory",
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
      label: "Discord",
      href: "https://discord.gg/sT8Maq6Cxs",
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      label: "YouTube",
      href: "https://www.youtube.com/@ttcislive",
    },
    {
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "Twitter",
      href: "https://twitter.com",
    },
    {
      icon: <Globe size={18} />,
      label: "Website",
      href: "https://hiveory.com",
    },
  ];

  return (
    <footer className="bg-[#0F0F11]/40 border border-white/[0.08] relative h-fit rounded-none sm:rounded-3xl overflow-hidden m-4 sm:m-8 z-20 shadow-2xl backdrop-blur-xl">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-3 group pointer-events-auto">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-0.5 shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform">
                <Image
                  src="/hiveory-logo.png"
                  alt="Hiveory Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <span className="text-white text-3xl font-bold tracking-tight">
                Hiveory
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A local-first desktop super app uniting autonomous agents, a multi-CLI development environment, and isolated AI chat threads over your own files.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 pointer-events-auto">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.pulse && (
                      <span className="absolute top-1 right-[-10px] w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Connect
            </h4>
            <ul className="space-y-4 pointer-events-auto">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-zinc-400">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors truncate"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-white transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/[0.08] my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-zinc-500">
          {/* Social icons */}
          <div className="flex space-x-6 text-zinc-400 pointer-events-auto">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-xs sm:text-sm pointer-events-auto">
            &copy; {new Date().getFullYear()} Hiveory. Open Source under MIT License.
          </p>
        </div>
      </div>

      {/* Text hover effect with white-silver-blackish continuous theme */}
      <div className="flex justify-center items-center h-[24rem] sm:h-[30rem] -mt-36 sm:-mt-52 -mb-28 sm:-mb-36 pointer-events-auto overflow-hidden relative z-30">
        <TextHoverEffect text="HIVEORY" className="w-full h-full z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;

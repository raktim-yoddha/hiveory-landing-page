"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// 8 Verified, 100% Official AI & CLI Brand Logos
const allBrandLogos = [
  {
    id: "claude",
    name: "Claude Code",
    icon: (
      // Official Anthropic Claude Sunburst Asterisk (SimpleIcons)
      <svg className="w-6 h-6 text-[#D97757]" viewBox="0 0 24 24" fill="currentColor">
        <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
      </svg>
    ),
  },
  {
    id: "gemini",
    name: "Google Gemini",
    icon: (
      // Official Google Gemini 4-Point Curved Sparkle with Google Gradient
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="geminiSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A73E8" />
            <stop offset="45%" stopColor="#8E75B2" />
            <stop offset="100%" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path
          d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
          fill="url(#geminiSparkleGrad)"
        />
      </svg>
    ),
  },
  {
    id: "cursor",
    name: "Cursor",
    icon: (
      // Official Cursor 3D Isometric Cube Logo (SimpleIcons)
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
      </svg>
    ),
  },
  {
    id: "ollama",
    name: "Ollama",
    icon: (
      // Official Ollama Llama Mascot Silhouette (SimpleIcons)
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086-.291.06-.68.195-.951.328-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873c-.062.417-.071.552-.071.991 0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516.029-.217.029-1.016 0-1.258-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141.008-.005.057-.074.108-.152.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z" />
      </svg>
    ),
  },
  {
    id: "openai",
    name: "OpenAI Codex",
    icon: (
      // Official OpenAI Hexagonal Rosette Vortex
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4021-.6814zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.006 9.2298V6.8974a.0662.0662 0 0 1 .0331-.0615l4.8814-2.8197a4.4992 4.4992 0 0 1 6.5303 4.7777zM7.9542 13.0642l2.6738-1.5388 2.669 1.5388v3.0823l-2.669 1.5388-2.6738-1.5388z" />
      </svg>
    ),
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    icon: (
      // Official GitHub Octocat
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "mistral",
    name: "Mistral AI",
    icon: (
      // Official Mistral Stepped Pixel Chevron M
      <svg className="w-6 h-6 text-[#FF7000]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h4v4H3V3zm7 0h4v4h-4V3zm7 0h4v4h-4V3zM3 10h4v4H3v-4zm14 0h4v4h-4v-4zM3 17h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4z" />
      </svg>
    ),
  },
  {
    id: "vercel",
    name: "Vercel / v0",
    icon: (
      // Official Vercel Black Triangle
      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
    ),
  },
];

// Left Stream: 6 curated brands with guaranteed 18-22px space between cards
const leftStreamLogos = [
  allBrandLogos[0], // Claude Code
  allBrandLogos[2], // Cursor
  allBrandLogos[4], // OpenAI
  allBrandLogos[6], // Mistral AI
  allBrandLogos[1], // Google Gemini
  allBrandLogos[3], // Ollama
];

// Right Stream: 6 curated brands with guaranteed 18-22px space between cards
const rightStreamLogos = [
  allBrandLogos[1], // Google Gemini
  allBrandLogos[3], // Ollama
  allBrandLogos[5], // GitHub Copilot
  allBrandLogos[7], // Vercel / v0
  allBrandLogos[0], // Claude Code
  allBrandLogos[4], // OpenAI
];

// Shorter, elegant mathematical Bézier curve keyframes with dedicated non-overlapping landing lanes
const leftTrajectory = {
  x: [-60, -26, 8, 39, 70, 99, 126, 150, 168, 182, 185, 185],
  y: [145, 127, 115, 111, 113, 123, 139, 164, 196, 230, 268, 305],
  rotate: [0, -2, -1, 0, 2, 4, 6, 4, 2, 0, 0, 0],
  times: [0, 0.101, 0.195, 0.277, 0.358, 0.439, 0.521, 0.611, 0.707, 0.804, 0.903, 1],
};

const rightTrajectory = {
  x: [500, 466, 432, 401, 370, 341, 314, 290, 272, 258, 255, 255],
  y: [145, 127, 115, 111, 113, 123, 139, 164, 196, 230, 268, 305],
  rotate: [0, 2, 1, 0, -2, -4, -6, -4, -2, 0, 0, 0],
  times: [0, 0.101, 0.195, 0.277, 0.358, 0.439, 0.521, 0.611, 0.707, 0.804, 0.903, 1],
};

export default function ByoCliSection() {
  // More rapid, lively floating motion for the 3D parcel box (2.4s cycle)
  const boxFloatTransition = {
    duration: 2.4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <section
      id="byok"
      className="relative w-full border-t border-white/[0.08] bg-[#07070a] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden z-10"
    >
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[140px] rounded-full" />

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
              Run Claude Code, OpenAI Codex, Cursor, Google Gemini, Ollama, and Mistral side by side. Connect your existing developer accounts and run them concurrently inside Hiveory.
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
              <motion.div
                animate={{ scaleX: [0.92, 1.08, 0.92], opacity: [0.2, 0.48, 0.2] }}
                transition={boxFloatTransition}
                className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[240px] h-3.5 bg-black/60 blur-md rounded-full pointer-events-none z-0"
              />

              {/* ==================================================================== */}
              {/* LAYER 1: SOLID CARDBOARD REAR & INTERIOR CAVITY (z-0)                */}
              {/* Box floats rapidly up & down (y: [-5, 4, -5]) for tangible 3D effect */}
              {/* ==================================================================== */}
              <motion.div
                animate={{ y: [-5, 4, -5] }}
                transition={boxFloatTransition}
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
              </motion.div>

              {/* ==================================================================== */}
              {/* LAYER 2: DENSE, CONTINUOUS CONVEYOR STREAM OF 3D WHITE SQUIRCLES     */}
              {/* Closely spaced (1s delay interval), constant-speed Bézier trajectory */}
              {/* Smoothly arches down and dips behind front flap into cavity floor    */}
              {/* ==================================================================== */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                
                {/* LEFT-SIDE INCOMING STREAM (Pre-populated, already flowing on mount) */}
                {leftStreamLogos.map((item, idx) => {
                  const totalDuration = 9.6;
                  // 1.6s spacing creates a clean, guaranteed ~18-22px gap between cards
                  const delay = idx * (totalDuration / leftStreamLogos.length);
                  return (
                    <motion.div
                      key={`left-${item.id}-${idx}`}
                      initial={false}
                      animate={{
                        x: leftTrajectory.x,
                        y: leftTrajectory.y,
                        rotate: leftTrajectory.rotate,
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: totalDuration,
                        repeat: Infinity,
                        ease: "linear",
                        times: leftTrajectory.times,
                        delay: -delay,
                      }}
                      className="absolute top-0 left-0 pointer-events-auto"
                    >
                      {/* WHITE 3D EFFECT SQUARE BOX WITH TACTILE BEVEL & LAYERED SHADOW */}
                      <div className="relative w-[42px] h-[42px] rounded-[12px] bg-gradient-to-b from-white via-[#fcfcfd] to-[#edf0f4] border border-white/90 shadow-[0_8px_20px_-3px_rgba(0,0,0,0.35),0_3px_6px_-2px_rgba(0,0,0,0.2),inset_0_1.5px_0_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer">
                        <div className="w-[19px] h-[19px] flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* RIGHT-SIDE INCOMING STREAM (Pre-populated, already flowing on mount) */}
                {rightStreamLogos.map((item, idx) => {
                  const totalDuration = 9.6;
                  // Interleaved by 0.8s so cards alternate cleanly into separate landing tracks
                  const delay = (idx * (totalDuration / rightStreamLogos.length)) + 0.8;
                  return (
                    <motion.div
                      key={`right-${item.id}-${idx}`}
                      initial={false}
                      animate={{
                        x: rightTrajectory.x,
                        y: rightTrajectory.y,
                        rotate: rightTrajectory.rotate,
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: totalDuration,
                        repeat: Infinity,
                        ease: "linear",
                        times: rightTrajectory.times,
                        delay: -delay,
                      }}
                      className="absolute top-0 left-0 pointer-events-auto"
                    >
                      {/* WHITE 3D EFFECT SQUARE BOX WITH TACTILE BEVEL & LAYERED SHADOW */}
                      <div className="relative w-[42px] h-[42px] rounded-[12px] bg-gradient-to-b from-white via-[#fcfcfd] to-[#edf0f4] border border-white/90 shadow-[0_8px_20px_-3px_rgba(0,0,0,0.35),0_3px_6px_-2px_rgba(0,0,0,0.2),inset_0_1.5px_0_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 transition-transform hover:scale-110 cursor-pointer">
                        <div className="w-[19px] h-[19px] flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ==================================================================== */}
              {/* LAYER 3: 3D CARDBOARD FRONT FLAP & FRONT FACE (z-20)                 */}
              {/* Oscillates in perfect sync with Layer 1 (y: [-4, 3, -4])             */}
              {/* Front flap covers entering tiles as they dip into the cavity floor   */}
              {/* ==================================================================== */}
              <motion.div
                animate={{ y: [-5, 4, -5] }}
                transition={boxFloatTransition}
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
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

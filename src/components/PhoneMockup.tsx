import { Inbox, LayoutGrid, Settings } from "lucide-react";
import { ClaudeCodeIcon, CodexIcon, CursorIcon, GeminiCLIIcon, OpenCodeIcon } from "@/components/CliIcons";
import { cn } from "@/lib/utils";

/** Illustration of the phone app's Inbox: agents that need you first, then those working. */
const NEEDS_YOU = [
  { name: "Luna", cli: "Codex", why: "Waiting for permission", icon: <CodexIcon className="w-4 h-4" /> },
  { name: "Ruby", cli: "Cursor CLI", why: "Waiting for input", icon: <CursorIcon className="w-4 h-4 text-black" /> },
];
const WORKING = [
  { name: "Milo", cli: "Claude Code", why: "api · feature/login", icon: <ClaudeCodeIcon className="w-4 h-4" /> },
  { name: "Kai", cli: "Gemini CLI", why: "web · fix/billing", icon: <GeminiCLIIcon className="w-4 h-4" /> },
  { name: "Nova", cli: "OpenCode", why: "api · Primary", icon: <OpenCodeIcon className="w-4 h-4 text-black" /> },
];

function Row({ a, waiting }: { a: (typeof WORKING)[number]; waiting: boolean }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2.5 border border-white/[0.07] bg-white/[0.03] rounded-xl">
      <span className="w-7 h-7 rounded-lg bg-[#f0f2f5] flex items-center justify-center shrink-0">{a.icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[12px] font-semibold text-white leading-tight">
          {a.name} <span className="font-normal text-zinc-500">{a.cli}</span>
        </span>
        <span className={cn("block text-[10.5px] leading-tight mt-0.5 truncate", waiting ? "text-amber-300" : "text-zinc-500")}>{a.why}</span>
      </span>
      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", waiting ? "bg-amber-400" : "bg-sky-400")} />
    </div>
  );
}

/** `parallax`: drifts against the scroll (Locomotive Scroll data-scroll-speed). */
export default function PhoneMockup({ className, parallax = false }: { className?: string; parallax?: boolean }) {
  return (
    <figure
      className={cn("relative w-[280px] shrink-0", className)}
      {...(parallax ? { "data-scroll": "", "data-scroll-speed": "0.08" } : {})}
    >
      <div aria-hidden="true" className="relative rounded-[2.6rem] border border-white/15 bg-[#0b0b0e] p-2.5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]">
        <div className="relative rounded-[2.1rem] overflow-hidden bg-[#0f0f12] h-[560px] flex flex-col">
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black" />
          <div className="px-5 pt-12 pb-3 flex items-end justify-between">
            <span className="text-[22px] font-semibold text-white tracking-tight">Inbox</span>
            <span className="text-[10px] font-mono text-zinc-500">my-desktop</span>
          </div>
          <div className="px-3.5 flex-1 overflow-hidden">
            <div className="text-[11px] font-medium text-zinc-300 px-1 mb-2">Needs you · 2</div>
            <div className="space-y-2 mb-4">
              {NEEDS_YOU.map((a) => (
                <Row key={a.name} a={a} waiting />
              ))}
            </div>
            <div className="text-[11px] font-medium text-zinc-500 px-1 mb-2">Working · 3</div>
            <div className="space-y-2">
              {WORKING.map((a) => (
                <Row key={a.name} a={a} waiting={false} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-white/[0.07] bg-[#0b0b0e] px-2 pt-2.5 pb-5 text-[9.5px]">
            {[
              { label: "Inbox", icon: <Inbox size={16} />, active: true },
              { label: "Workspaces", icon: <LayoutGrid size={16} />, active: false },
              { label: "Settings", icon: <Settings size={16} />, active: false },
            ].map((t) => (
              <span key={t.label} className={cn("flex flex-col items-center gap-1", t.active ? "text-white" : "text-zinc-500")}>
                <span className="relative">
                  {t.icon}
                  {t.active && <span className="absolute -top-1 -right-2 min-w-3.5 h-3.5 px-1 rounded-full bg-amber-400 text-black text-[8px] font-bold flex items-center justify-center">2</span>}
                </span>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="sr-only">The phone app&apos;s Inbox: two agents waiting for you, three working.</figcaption>
    </figure>
  );
}

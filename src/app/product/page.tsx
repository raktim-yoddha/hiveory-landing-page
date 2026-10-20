import Image from "next/image";
import { Bot, Download, MessageSquare, SquareTerminal } from "lucide-react";
import { ActionLink, IconTile, PageHeader, PageShell, Panel, Tag } from "@/components/ui/kit";

export const metadata = {
  title: "Product — Hiveory | Work, Bots and Chat",
  description: "Code with many agents side by side, automate with bots, and chat with any model. One app, three modes.",
};

// Every card has the same shape: one-line headline, one sentence, four one-line points
const MODES = [
  {
    key: "1",
    title: "Work",
    icon: <SquareTerminal size={18} />,
    headline: "Code in parallel",
    description: "Run many coding agents at once, each in its own Worktree.",
    features: ["30+ agent CLIs", "Worktrees made for you", "Live status board", "Panes, tabs and a browser"],
  },
  {
    key: "2",
    title: "Bots",
    icon: <Bot size={18} />,
    headline: "Automate with bots",
    description: "Give a bot a job and it keeps doing it, even while you're away.",
    features: ["Schedules and triggers", "Teams with a lead bot", "Asks before acting", "Own browser and computer"],
  },
  {
    key: "3",
    title: "Chat",
    icon: <MessageSquare size={18} />,
    headline: "Chat with any model",
    description: "Talk to the models of every CLI you have, on your own plans.",
    features: ["Pick model and effort", "Attach images and files", "Queue your next message", "Scheduled chats"],
  },
];

/** Screenshot framed as an app window. */
function Screen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative border border-white/15 card-surface">
      <div aria-hidden="true" className="flex items-center gap-1.5 px-4 h-9 border-b border-white/[0.08]">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" priority />
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <PageShell>
      <PageHeader
        title="One app, three modes"
        sub="Code, automate and chat with the agents you already use."
      >
        <ActionLink href="/download" icon={<Download size={16} />}>
          Download free
        </ActionLink>
      </PageHeader>

      <div className="mb-20 sm:mb-28">
        <div data-scale-in>
        <Screen src="/work.webp" alt="Hiveory's Work view with agents side by side and the status board" />
        </div>
      </div>

      <div data-reveal-stagger className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 sm:mb-28">
        {MODES.map((m) => (
          <Panel key={m.title} id={m.title.toLowerCase()} className="p-7 flex flex-col scroll-mt-28">
            <div className="flex items-center justify-between">
              <IconTile>{m.icon}</IconTile>
              <kbd className="font-mono text-[11px] text-zinc-400 border border-white/10 bg-white/[0.03] px-2 py-1">Ctrl {m.key}</kbd>
            </div>
            <div className="mt-6">
              <Tag>{m.title}</Tag>
            </div>
            <h2 className="mt-4 text-2xl font-medium text-white tracking-tight">{m.headline}</h2>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{m.description}</p>
            <ul className="mt-6 pt-6 border-t border-white/[0.08] space-y-2.5">
              {m.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <span aria-hidden="true" className="w-1 h-1 bg-white" />
                  {f}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div data-reveal>
          <Tag>Chat</Tag>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium text-white tracking-tight">Any CLI, any model</h2>
          <p className="mt-4 text-zinc-400 leading-relaxed max-w-md">
            Pick a CLI Hiveory found, then its model and effort. Chats keep running while you work.
          </p>
          <div className="mt-8">
            <ActionLink href="/capabilities" icon={<Bot size={16} />}>
              See every feature
            </ActionLink>
          </div>
        </div>
        <div data-scale-in>
        <Screen src="/chat.webp" alt="Hiveory's Chat view with Codex and its model and effort pickers" />
        </div>
      </div>
    </PageShell>
  );
}

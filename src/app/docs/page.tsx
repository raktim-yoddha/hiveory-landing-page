import { BookOpen, Bot, Download, FileText, GitBranch, History, LayoutGrid, Wrench } from "lucide-react";
import { ActionLink, IconTile, PageHeader, PageShell, Panel, SectionLabel } from "@/components/ui/kit";
import { GITHUB_URL } from "@/lib/download";

export const metadata = {
  title: "Docs — Hiveory | Kickstart guide, shortcuts and references",
  description: "Get started with Hiveory in four steps, learn the keyboard shortcuts, build it from source and read the full guides.",
};

const blob = (path: string) => `${GITHUB_URL}/blob/main/${path}`;

const START = [
  { title: "Download", body: "Install Hiveory for your system." },
  { title: "Add an agent CLI", body: "Claude Code, Codex or Gemini CLI. Hiveory finds it." },
  { title: "Open a folder", body: "Add a Workspace: a folder, a new repo or a clone." },
  { title: "Start agents", body: "Open agents or load a preset in a Worktree." },
];

// ADR 0047: platform-standard keys; every one can be changed in Settings › Keyboard
const SHORTCUTS = [
  { action: "Go to Work, Bots, Chat", win: ["Ctrl", "1 · 2 · 3"], mac: ["⌘", "1 · 2 · 3"] },
  { action: "Call Queen Bee", win: ["Ctrl", "Shift", "Space"], mac: ["⌥", "Space"] },
  { action: "Open Settings", win: ["Ctrl", ","], mac: ["⌘", ","] },
  { action: "Show or hide the sidebar", win: ["Ctrl", "Shift", "B"], mac: ["⌘", "B"] },
  { action: "Show or hide the side panel", win: ["Ctrl", "Shift", "J"], mac: ["⌘", "J"] },
  { action: "New chat or new bot", win: ["Ctrl", "N"], mac: ["⌘", "N"] },
];

const GUIDES = [
  { icon: <LayoutGrid size={18} />, title: "Work and the board", body: "Workspaces, Worktrees and agent status.", href: blob("product-spec.md") },
  { icon: <Bot size={18} />, title: "Bots", body: "Teams, schedules, triggers and approvals.", href: blob("product-spec.md") },
  { icon: <FileText size={18} />, title: "Every screen", body: "A map of each screen and setting.", href: blob("ui-map.md") },
  { icon: <History size={18} />, title: "Changelog", body: "What changed in each release.", href: blob("CHANGELOG.md") },
  { icon: <Wrench size={18} />, title: "Architecture", body: "How the app is put together.", href: blob("architecture.md") },
  { icon: <GitBranch size={18} />, title: "Contributing", body: "Rules for people and coding agents.", href: blob("AGENTS.md") },
];

function Keys({ keys }: { keys: string[] }) {
  return (
    <span className="inline-flex items-center gap-1">
      {keys.map((k) => (
        <kbd key={k} className="font-mono text-[11px] text-zinc-200 border border-white/15 border-b-white/25 bg-white/[0.04] px-1.5 py-0.5 min-w-6 text-center">
          {k}
        </kbd>
      ))}
    </span>
  );
}

export default function DocsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Docs" title="Kickstart guide" sub="From download to your first agents in a few minutes.">
        <ActionLink href="/download" icon={<Download size={16} />}>
          Download free
        </ActionLink>
      </PageHeader>

      {/* Start here: four numbered steps */}
      <section className="mb-20 sm:mb-24">
        <SectionLabel>Start here</SectionLabel>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {START.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-white/15 pt-6">
              <span aria-hidden="true" className="absolute -top-px left-0 w-10 h-0.5 bg-amber-400" />
              <span className="font-mono text-xs text-amber-400">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm text-zinc-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Shortcuts + build from source, side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20 sm:mb-24">
        <Panel className="p-6 sm:p-7">
          <h2 className="text-lg font-medium text-white mb-1">Keyboard shortcuts</h2>
          <p className="text-sm text-zinc-500 mb-5">Change any of them in Settings › Keyboard.</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500">
                <th className="font-normal pb-3">Action</th>
                <th className="font-normal pb-3">Windows · Linux</th>
                <th className="font-normal pb-3 hidden sm:table-cell">macOS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {SHORTCUTS.map((s) => (
                <tr key={s.action}>
                  <td className="py-2.5 pr-3 text-zinc-300">{s.action}</td>
                  <td className="py-2.5 pr-3">
                    <Keys keys={s.win} />
                  </td>
                  <td className="py-2.5 hidden sm:table-cell">
                    <Keys keys={s.mac} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>

        <Panel className="p-6 sm:p-7 flex flex-col">
          <h2 className="text-lg font-medium text-white mb-1">Build from source</h2>
          <p className="text-sm text-zinc-500 mb-5">Needs Node.js 24, pnpm 11 and Git.</p>
          <pre className="flex-1 font-mono text-[13px] leading-7 text-zinc-300 bg-black/40 border border-white/[0.08] p-5 overflow-x-auto">
            <code>
              <span className="text-zinc-600">$ </span>git clone {GITHUB_URL}.git{"\n"}
              <span className="text-zinc-600">$ </span>cd hiveory{"\n"}
              <span className="text-zinc-600">$ </span>pnpm install{"\n"}
              <span className="text-zinc-600">$ </span>pnpm dev
            </code>
          </pre>
          <a
            href={`${GITHUB_URL}#build-from-source`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text-sm text-zinc-400 hover:text-white underline underline-offset-4 self-start"
          >
            More build commands ↗
          </a>
        </Panel>
      </div>

      {/* Guides */}
      <section>
        <SectionLabel>Guides</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUIDES.map((g) => (
            <a key={g.title} href={g.href} target="_blank" rel="noopener noreferrer" className="block">
              <Panel className="p-6 h-full">
                <div className="flex items-start justify-between">
                  <IconTile>{g.icon}</IconTile>
                  <span aria-hidden="true" className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                    ↗
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-medium text-white">{g.title}</h3>
                <p className="mt-1.5 text-sm text-zinc-400">{g.body}</p>
              </Panel>
            </a>
          ))}
        </div>
      </section>

      <p className="text-center text-sm text-zinc-500 mt-16 flex items-center justify-center gap-2">
        <BookOpen size={14} aria-hidden="true" />
        Something missing?{" "}
        <a href={`${GITHUB_URL}/issues/new`} target="_blank" rel="noopener noreferrer" className="text-zinc-300 underline underline-offset-4 hover:text-white">
          Tell us on GitHub
        </a>
      </p>
    </PageShell>
  );
}

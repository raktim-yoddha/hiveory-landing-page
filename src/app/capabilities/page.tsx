import { Columns3, Download, GitBranch, Globe, Kanban, Mic, Puzzle, RotateCcw, Server, Smartphone } from "lucide-react";
import { ActionLink, IconTile, PageHeader, PageShell, Panel, SectionLabel } from "@/components/ui/kit";

export const metadata = {
  title: "Features — Hiveory",
  description:
    "Every Hiveory feature: Worktrees, a live status board, panes, Queen Bee, a built-in browser, skills and MCP servers, remote machines and the phone app.",
};

const STATS = [
  { value: "30+", label: "agent CLIs" },
  { value: "3", label: "modes" },
  { value: "4", label: "platforms" },
  { value: "MIT", label: "open source" },
];

// Same shape for every card: icon, short title, one sentence of similar length
const GROUPS = [
  {
    label: "Work side by side",
    items: [
      { icon: <GitBranch size={18} />, title: "Workspaces and Worktrees", body: "Each task gets its own folder and branch, made for you." },
      { icon: <Kanban size={18} />, title: "A live status board", body: "See which agents are idle, working or waiting for you." },
      { icon: <Columns3 size={18} />, title: "Flexible panes", body: "Split, drag, swap or tab agents, terminals and pages." },
    ],
  },
  {
    label: "Tools your agents use",
    items: [
      { icon: <Mic size={18} />, title: "Queen Bee", body: "An assistant you talk to. Speech stays on your computer." },
      { icon: <Globe size={18} />, title: "Built-in browser", body: "A real browser your agents can drive, cursor and all." },
      { icon: <Puzzle size={18} />, title: "Skills, MCP and apps", body: "Skills and MCP servers for every CLI, plus 1,000+ apps." },
    ],
  },
  {
    label: "Anywhere, always on",
    items: [
      { icon: <Server size={18} />, title: "Remote machines", body: "Run agents on SSH hosts or a server, over Tailscale." },
      { icon: <Smartphone size={18} />, title: "Phone app", body: "See who needs you and reply to agents from anywhere." },
      { icon: <RotateCcw size={18} />, title: "Keeps running", body: "Agents keep working after you close the window or restart." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <PageShell>
      <PageHeader title="Everything Hiveory does" sub="The whole app, at a glance." />

      {/* Stats strip: four equal cells */}
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.1] border border-white/[0.12] mb-20 sm:mb-24">
        {STATS.map((s) => (
          <div key={s.label} className="card-surface p-6 text-center flex flex-col-reverse">
            <dt className="mt-1 text-sm text-zinc-500">{s.label}</dt>
            <dd className="text-3xl sm:text-4xl font-medium text-white tracking-tight">{s.value}</dd>
          </div>
        ))}
      </dl>

      {GROUPS.map((g) => (
        <section key={g.label} className="mb-14 sm:mb-16">
          <SectionLabel>{g.label}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {g.items.map((f) => (
              <Panel key={f.title} className="p-6">
                <IconTile>{f.icon}</IconTile>
                <h3 className="mt-5 text-lg font-medium text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{f.body}</p>
              </Panel>
            ))}
          </div>
        </section>
      ))}

      <Panel className="mt-20 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-medium text-white">Try it on your next task</h2>
          <p className="mt-1.5 text-sm text-zinc-400">Free for Windows, macOS, Linux and Android.</p>
        </div>
        <ActionLink href="/download" icon={<Download size={16} />} className="shrink-0">
          Download free
        </ActionLink>
      </Panel>
    </PageShell>
  );
}

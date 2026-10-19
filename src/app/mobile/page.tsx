import { Bell, Download, Inbox, Keyboard, LayoutGrid, MessageSquare, Palette, ShieldCheck } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import { ActionLink, Eyebrow, IconTile, PageShell, Panel, SectionLabel } from "@/components/ui/kit";

export const metadata = {
  title: "Phone app — Hiveory",
  description: "Watch and steer your agents from your phone. See who needs you, type into terminals and get a ping when one waits.",
};

const FEATURES = [
  { icon: <Inbox size={18} />, title: "Inbox", body: "Every agent that needs you, across all Workspaces." },
  { icon: <LayoutGrid size={18} />, title: "Workspaces", body: "Live counts, the board and every Worktree." },
  { icon: <Keyboard size={18} />, title: "Real terminals", body: "Esc, Tab, Ctrl, Alt and arrows above the keyboard." },
  { icon: <MessageSquare size={18} />, title: "Chat", body: "Message agents and pick their model and effort." },
  { icon: <Bell size={18} />, title: "Notifications", body: "A ping when an agent is waiting for you." },
  { icon: <Palette size={18} />, title: "Your theme", body: "The phone wears the theme from your computer." },
];

const STEPS = [
  { title: "Install the APK", body: "Download it below and open it on your Android phone." },
  { title: "Share your computer", body: "In Hiveory: Settings › Remote › Share this computer." },
  { title: "Scan the code", body: "Scan “Connect your phone”. Same Tailscale account, no code." },
];

export default function MobilePage() {
  return (
    <PageShell>
      {/* Hero: copy left, phone right */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-14 lg:gap-20 mb-24 sm:mb-32">
        <div className="text-center lg:text-left">
          <Eyebrow>Phone app · Android</Eyebrow>
          <h1 className="mt-6 text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-[1.05]">
            Your agents,
            <br />
            in your pocket
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0">
            See who needs you and answer from anywhere. It talks only to your own computers.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <ActionLink href="/download#android" icon={<Download size={16} />}>
              Download the APK
            </ActionLink>
            <a href="#pair" className="text-sm text-zinc-400 hover:text-white underline underline-offset-4 px-3 py-2">
              How pairing works
            </a>
          </div>
        </div>
        <PhoneMockup className="mx-auto" />
      </section>

      {/* What it does: six equal cards */}
      <SectionLabel>What you can do</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24 sm:mb-32">
        {FEATURES.map((f) => (
          <Panel key={f.title} className="p-6">
            <IconTile>{f.icon}</IconTile>
            <h3 className="mt-5 text-lg font-medium text-white">{f.title}</h3>
            <p className="mt-1.5 text-sm text-zinc-400">{f.body}</p>
          </Panel>
        ))}
      </div>

      {/* Pairing */}
      <section id="pair" className="scroll-mt-28 mb-24 sm:mb-32">
        <SectionLabel>Pair in three steps</SectionLabel>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-white/15 pt-6">
              <span aria-hidden="true" className="absolute -top-px left-0 w-10 h-0.5 bg-amber-400" />
              <span className="font-mono text-xs text-amber-400">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm text-zinc-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Privacy + CTA */}
      <Panel className="p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-start gap-4">
          <IconTile>
            <ShieldCheck size={18} />
          </IconTile>
          <div>
            <h2 className="text-xl font-medium text-white">No server in between</h2>
            <p className="mt-1.5 text-sm text-zinc-400 max-w-lg">
              Your phone connects to your computer over your own Tailscale network. Deleting things, settings and accounts stay on the
              computer.
            </p>
          </div>
        </div>
        <ActionLink href="/download#android" icon={<Download size={16} />} className="shrink-0">
          Get the app
        </ActionLink>
      </Panel>
      <p className="text-center text-xs text-zinc-500 mt-6">iPhone: no store build yet. Developers can build it from source.</p>
    </PageShell>
  );
}

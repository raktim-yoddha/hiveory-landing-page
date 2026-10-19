import { Apple, Download, Monitor, Smartphone, Terminal } from "lucide-react";
import RecommendedDownload from "@/components/RecommendedDownload";
import { ActionLink, IconTile, PageHeader, PageShell, Panel, SectionLabel, Tag } from "@/components/ui/kit";
import { GITHUB_RELEASES_PAGE, OS_LABEL, type Os } from "@/lib/download";
import { getRelease } from "@/lib/release";

// Re-read the latest GitHub release at most every 10 minutes (matches REVALIDATE_SECONDS)
export const revalidate = 600;

export const metadata = {
  title: "Download — Hiveory",
  description: "Download Hiveory for Windows, macOS, Linux and Android. Always the latest release from GitHub.",
};

const PLATFORMS: { os: Os; icon: React.ReactNode; note: string }[] = [
  { os: "windows", icon: <Monitor size={18} />, note: "Updates itself when a new version is out." },
  { os: "mac", icon: <Apple size={18} />, note: "Updates itself when a new version is out." },
  { os: "linux", icon: <Terminal size={18} />, note: "AppImage runs anywhere; .deb for Debian and Ubuntu." },
  { os: "android", icon: <Smartphone size={18} />, note: "Pairs with your computer over Tailscale." },
];

export default async function DownloadPage() {
  const release = await getRelease();

  return (
    <PageShell>
      <PageHeader
        title="Download Hiveory"
        sub={release ? `Version ${release.version.replace(/^v/, "")}, released ${release.date}. Free and open source.` : "Free and open source."}
      />

      {!release ? (
        <Panel className="max-w-xl mx-auto p-8 text-center">
          <p className="text-zinc-300 mb-6">GitHub didn&apos;t answer just now. All files are on the release page.</p>
          <ActionLink href={GITHUB_RELEASES_PAGE} external icon={<Download size={16} />}>
            Open the latest release
          </ActionLink>
        </Panel>
      ) : (
        <>
          <RecommendedDownload files={release.files} version={release.version} />

          <SectionLabel>All downloads</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {PLATFORMS.map(({ os, icon, note }) => (
              <Panel key={os} id={os} className="p-6 sm:p-7 flex flex-col scroll-mt-28">
                <div className="flex items-center gap-3 mb-1">
                  <IconTile>{icon}</IconTile>
                  <h3 className="text-xl font-medium text-white">{OS_LABEL[os]}</h3>
                </div>
                <p className="text-sm text-zinc-500 mb-5 mt-2">{note}</p>
                <ul className="mt-auto divide-y divide-white/[0.06] border-t border-white/[0.06]">
                  {release.files[os].map((f) => (
                    <li key={f.name}>
                      <a
                        href={f.url}
                        className="group/row flex items-center justify-between gap-4 py-3 px-1 hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm text-white">
                            {f.kind}
                            {f.arch && <span className="text-zinc-400"> · {f.arch}</span>}
                          </span>
                          <span className="block font-mono text-[11px] text-zinc-500 truncate">{f.name}</span>
                        </span>
                        <span className="flex items-center gap-3 shrink-0 text-xs text-zinc-400">
                          {f.size}
                          <span
                            aria-hidden="true"
                            className="w-8 h-8 flex items-center justify-center border border-white/15 text-white group-hover/row:bg-white group-hover/row:text-black transition-colors"
                          >
                            <Download size={14} />
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                  {release.files[os].length === 0 && (
                    <li className="py-3 text-sm text-zinc-500">Not in this release.</li>
                  )}
                </ul>
              </Panel>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Install", body: "Run the file you downloaded." },
              { step: "02", title: "Add an agent CLI", body: "Claude Code, Codex or Gemini CLI. Hiveory finds it." },
              { step: "03", title: "Open a folder", body: "Then open agents in your first Worktree." },
            ].map((s) => (
              <div key={s.step}>
                <Tag>{s.step}</Tag>
                <div className="mt-4 text-lg font-medium text-white mb-1">{s.title}</div>
                <p className="text-sm text-zinc-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-zinc-500 mt-16">
            Older versions and release notes are on{" "}
            <a href={release.pageUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 underline underline-offset-4 hover:text-white">
              GitHub
            </a>
            .
          </p>
        </>
      )}
    </PageShell>
  );
}

"use client";

import { useSyncExternalStore } from "react";
import { Download } from "lucide-react";
import { OS_LABEL, detectOs, type Os } from "@/lib/download";
import type { ReleaseFile } from "@/lib/release";
import { Corners } from "@/components/ui/kit";

/** Big download card for the visitor's own system; the full list is below it on the page. */
export default function RecommendedDownload({ files, version }: { files: Record<Os, ReleaseFile[]>; version: string }) {
  // "windows" on the server so hydration matches, then the real system
  const os = useSyncExternalStore<Os>(() => () => {}, detectOs, () => "windows");
  const file = files[os][0];
  if (!file) return null;

  return (
    <div className="relative max-w-3xl mx-auto mb-20 border border-white/15 bg-[#0c0c10] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <Corners tone="border-white/70" />
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-400 mb-2">Recommended for you</div>
        <div className="text-2xl font-medium text-white">Hiveory for {OS_LABEL[os]}</div>
        <div className="text-sm text-zinc-400 mt-1">
          {file.kind}
          {file.arch && ` · ${file.arch}`} · {file.size} · {version}
        </div>
      </div>
      <a
        href={file.url}
        className="group/btn relative inline-flex items-center gap-3 p-1 pr-5 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shrink-0 w-full sm:w-auto"
      >
        <span aria-hidden="true" className="w-9 h-9 flex items-center justify-center bg-black text-white">
          <Download size={16} />
        </span>
        Download {file.kind === "APK" ? "APK" : `for ${OS_LABEL[os]}`}
      </a>
    </div>
  );
}

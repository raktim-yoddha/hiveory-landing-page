/**
 * Server-side: the latest Hiveory release from GitHub, grouped by platform.
 * Pages that use it re-fetch at most every REVALIDATE_SECONDS, so a new release
 * shows up on the site without a rebuild.
 */
import { GITHUB_RELEASES_PAGE, type Os } from "@/lib/download";

const API = "https://api.github.com/repos/raktim-yoddha/hiveory/releases/latest";
export const REVALIDATE_SECONDS = 600;

export interface ReleaseFile {
  name: string;
  url: string;
  size: string;
  /** e.g. "Installer", "Disk image", "AppImage" */
  kind: string;
  /** e.g. "x64", "Apple Silicon"; empty when the file covers every architecture */
  arch: string;
}

export interface Release {
  version: string;
  date: string;
  pageUrl: string;
  files: Record<Os, ReleaseFile[]>;
}

const formatSize = (bytes: number) => `${Math.round(bytes / 1_000_000)} MB`;

function archOf(name: string, os: Os): string {
  const n = name.toLowerCase();
  if (/(arm64|aarch64)/.test(n)) return os === "mac" ? "Apple Silicon" : "ARM64";
  if (/(x86_64|amd64|x64)/.test(n)) return os === "mac" ? "Intel" : "x64";
  return "";
}

/** Platform and file kind from the file name; null for updater metadata and other non-downloads. */
function classify(name: string): { os: Os; kind: string } | null {
  const n = name.toLowerCase();
  if (n.endsWith(".blockmap") || n.endsWith(".yml") || n.endsWith(".sig")) return null;
  if (n.endsWith(".exe")) return { os: "windows", kind: "Installer" };
  if (n.endsWith(".msi")) return { os: "windows", kind: "MSI package" };
  if (n.endsWith(".dmg")) return { os: "mac", kind: "Disk image" };
  if (n.endsWith(".zip") && n.includes("mac")) return { os: "mac", kind: "Zip archive" };
  if (n.endsWith(".appimage")) return { os: "linux", kind: "AppImage" };
  if (n.endsWith(".deb")) return { os: "linux", kind: "Debian / Ubuntu" };
  if (n.endsWith(".rpm")) return { os: "linux", kind: "Fedora / RHEL" };
  if (n.endsWith(".apk")) return { os: "android", kind: "APK" };
  return null;
}

export async function getRelease(): Promise<Release | null> {
  try {
    const res = await fetch(API, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const files: Release["files"] = { windows: [], mac: [], linux: [], android: [] };
    for (const asset of Array.isArray(data.assets) ? data.assets : []) {
      const hit = classify(asset.name);
      if (!hit) continue;
      files[hit.os].push({
        name: asset.name,
        url: asset.browser_download_url,
        size: formatSize(asset.size),
        kind: hit.kind,
        arch: archOf(asset.name, hit.os),
      });
    }
    // Recommended file first: installers before archives, x64 before ARM on Linux
    const rank = (f: ReleaseFile) =>
      ["Installer", "Disk image", "AppImage", "APK"].includes(f.kind) ? 0 : 1;
    for (const os of Object.keys(files) as Os[]) {
      files[os].sort((a, b) => rank(a) - rank(b) || (a.arch === "ARM64" ? 1 : 0) - (b.arch === "ARM64" ? 1 : 0));
    }
    return {
      version: data.tag_name ?? "",
      date: data.published_at
        ? new Date(data.published_at).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })
        : "",
      pageUrl: data.html_url ?? GITHUB_RELEASES_PAGE,
      files,
    };
  } catch {
    return null;
  }
}

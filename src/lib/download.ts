/**
 * Queries GitHub for the latest Hiveory release and the repository's star count,
 * and starts the download of the installer for the visitor's system.
 */

const GITHUB_REPO = "raktim-yoddha/hiveory";
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;
export const GITHUB_RELEASES_PAGE = `${GITHUB_URL}/releases/latest`;

export type Os = "windows" | "mac" | "linux" | "android";

export const OS_LABEL: Record<Os, string> = {
  windows: "Windows",
  mac: "macOS",
  linux: "Linux",
  android: "Android",
};

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface ReleaseInfo {
  /** Empty when GitHub could not be reached. */
  version: string;
  urls: Record<Os, string>;
}

let cachedRelease: ReleaseInfo | null = null;
let inFlightPromise: Promise<ReleaseInfo> | null = null;

const fallbackRelease = (): ReleaseInfo => ({
  version: "",
  urls: {
    windows: GITHUB_RELEASES_PAGE,
    mac: GITHUB_RELEASES_PAGE,
    linux: GITHUB_RELEASES_PAGE,
    android: GITHUB_RELEASES_PAGE,
  },
});

export async function getLatestRelease(): Promise<ReleaseInfo> {
  if (cachedRelease) return cachedRelease;
  if (inFlightPromise) return inFlightPromise;

  inFlightPromise = (async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);

      const data = await res.json();
      const assets: ReleaseAsset[] = Array.isArray(data.assets) ? data.assets : [];
      // First asset ending in one of the extensions, in order of preference.
      const pick = (...exts: string[]) => {
        for (const ext of exts) {
          const hit = assets.find((a) => a.name.toLowerCase().endsWith(ext));
          if (hit) return hit.browser_download_url;
        }
        return GITHUB_RELEASES_PAGE;
      };

      cachedRelease = {
        version: typeof data.tag_name === "string" ? data.tag_name : "",
        urls: {
          windows: pick("-setup.exe", ".exe", ".msi"),
          mac: pick(".dmg"),
          linux: pick("x86_64.appimage", ".appimage", ".deb"),
          android: pick(".apk"),
        },
      };
      return cachedRelease;
    } catch {
      return fallbackRelease();
    } finally {
      inFlightPromise = null;
    }
  })();

  return inFlightPromise;
}

/** The visitor's system from the user agent; Windows when it cannot tell. */
export function detectOs(): Os {
  if (typeof navigator === "undefined") return "windows";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (ua.includes("mac") && !ua.includes("iphone") && !ua.includes("ipad")) return "mac";
  if (ua.includes("linux")) return "linux";
  return "windows";
}

/** Starts the download of the latest installer for `os` (the visitor's own system by default). */
export async function triggerLatestDownload(os: Os = detectOs()) {
  if (typeof window === "undefined") return;
  const release = await getLatestRelease();
  window.location.href = release.urls[os] || GITHUB_RELEASES_PAGE;
}

let starPromise: Promise<string> | null = null;

/** Star count shown as "12" or "1.2k"; one request per page load, "" when unknown. */
export function getStarCount(): Promise<string> {
  starPromise ??= fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
    .then((res) => res.json())
    .then((data) => {
      const n = data.stargazers_count;
      if (typeof n !== "number") return "";
      return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`;
    })
    .catch(() => "");
  return starPromise;
}

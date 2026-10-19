/**
 * Client-safe helpers: links, the visitor's system and the GitHub star count.
 * Release files are loaded on the server (lib/release.ts) for the /download page.
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

/** The visitor's system from the user agent; Windows when it cannot tell. */
export function detectOs(): Os {
  if (typeof navigator === "undefined") return "windows";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (ua.includes("mac") && !ua.includes("iphone") && !ua.includes("ipad")) return "mac";
  if (ua.includes("linux")) return "linux";
  return "windows";
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

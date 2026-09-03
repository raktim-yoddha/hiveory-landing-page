/**
 * Utility to dynamically query GitHub for the latest release assets
 * and trigger immediate download of the latest platform installer.
 */

const GITHUB_REPO = "raktim-yoddha/hiveory";
export const GITHUB_RELEASES_PAGE = `https://github.com/${GITHUB_REPO}/releases/latest`;

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface ReleaseInfo {
  version: string;
  windowsUrl: string;
  macUrl: string;
  linuxUrl: string;
  fallbackUrl: string;
}

let cachedRelease: ReleaseInfo | null = null;
let inFlightPromise: Promise<ReleaseInfo> | null = null;

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

      // Windows installer selection: prefer x64-setup.exe, then any .exe, then .msi
      const windowsAsset =
        assets.find((a) => a.name.toLowerCase().endsWith("-setup.exe")) ||
        assets.find(
          (a) => a.name.toLowerCase().endsWith(".exe") && !a.name.toLowerCase().endsWith(".sig")
        ) ||
        assets.find(
          (a) => a.name.toLowerCase().endsWith(".msi") && !a.name.toLowerCase().endsWith(".sig")
        );

      // macOS installer selection: prefer .dmg, then .app.tar.gz
      const macAsset =
        assets.find(
          (a) => a.name.toLowerCase().endsWith(".dmg") && !a.name.toLowerCase().endsWith(".sig")
        ) ||
        assets.find(
          (a) =>
            a.name.toLowerCase().endsWith(".app.tar.gz") &&
            !a.name.toLowerCase().endsWith(".sig")
        );

      // Linux installer selection: prefer .AppImage, then .deb, then .rpm
      const linuxAsset =
        assets.find(
          (a) =>
            a.name.toLowerCase().endsWith(".appimage") &&
            !a.name.toLowerCase().endsWith(".sig")
        ) ||
        assets.find(
          (a) => a.name.toLowerCase().endsWith(".deb") && !a.name.toLowerCase().endsWith(".sig")
        ) ||
        assets.find(
          (a) => a.name.toLowerCase().endsWith(".rpm") && !a.name.toLowerCase().endsWith(".sig")
        );

      cachedRelease = {
        version: data.tag_name || "v0.1.1",
        windowsUrl: windowsAsset?.browser_download_url || GITHUB_RELEASES_PAGE,
        macUrl: macAsset?.browser_download_url || GITHUB_RELEASES_PAGE,
        linuxUrl: linuxAsset?.browser_download_url || GITHUB_RELEASES_PAGE,
        fallbackUrl: data.html_url || GITHUB_RELEASES_PAGE,
      };

      return cachedRelease;
    } catch {
      return {
        version: "v0.1.1",
        windowsUrl: GITHUB_RELEASES_PAGE,
        macUrl: GITHUB_RELEASES_PAGE,
        linuxUrl: GITHUB_RELEASES_PAGE,
        fallbackUrl: GITHUB_RELEASES_PAGE,
      };
    } finally {
      inFlightPromise = null;
    }
  })();

  return inFlightPromise;
}

/**
 * Triggers download of the latest release installer from GitHub.
 * Automatically resolves the OS if not specified.
 */
export async function triggerLatestDownload(preferredOs?: "windows" | "mac" | "linux") {
  if (typeof window === "undefined") return;

  try {
    const release = await getLatestRelease();
    let targetUrl = release.windowsUrl;

    if (preferredOs === "windows") {
      targetUrl = release.windowsUrl;
    } else if (preferredOs === "mac") {
      targetUrl = release.macUrl;
    } else if (preferredOs === "linux") {
      targetUrl = release.linuxUrl;
    } else if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent.toLowerCase();
      if (ua.includes("mac")) {
        targetUrl = release.macUrl;
      } else if (ua.includes("linux") && !ua.includes("android")) {
        targetUrl = release.linuxUrl;
      } else {
        targetUrl = release.windowsUrl;
      }
    }

    if (!targetUrl || targetUrl === "#") {
      targetUrl = GITHUB_RELEASES_PAGE;
    }

    // Trigger download
    window.location.href = targetUrl;
  } catch {
    window.location.href = GITHUB_RELEASES_PAGE;
  }
}

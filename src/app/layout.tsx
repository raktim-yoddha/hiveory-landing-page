import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiveory.com"),
  title: "Hiveory — Local-First Agent Super App & ADE",
  description:
    "A local-first desktop workspace uniting persistent named agents, an agentic development environment (ADE) with recursive split panes, and isolated AI chat threads over your own folders.",
  icons: {
    icon: [
      { url: "/hiveory-logo.png?v=hiveory", type: "image/png" },
      { url: "/favicon.ico?v=hiveory", sizes: "any" },
    ],
    shortcut: ["/hiveory-logo.png?v=hiveory"],
    apple: [{ url: "/hiveory-logo.png?v=hiveory" }],
  },
  openGraph: {
    title: "Hiveory — Local-First Agent Super App & ADE",
    description:
      "Run autonomous agents, an agentic development environment (ADE), and standalone chat side by side with host-authoritative local security.",
    images: ["/hiveory-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiveory — Local-First Agent Super App & ADE",
    description:
      "Run autonomous agents, an agentic development environment (ADE), and standalone chat side by side.",
    images: ["/hiveory-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <link rel="icon" type="image/png" href="/hiveory-logo.png?v=hiveory" />
        <link rel="shortcut icon" href="/hiveory-logo.png?v=hiveory" />
        <link rel="apple-touch-icon" href="/hiveory-logo.png?v=hiveory" />
      </head>
      <body className="min-h-screen bg-[#070709] text-[#f4f4f5] antialiased selection:bg-white/20 selection:text-white font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

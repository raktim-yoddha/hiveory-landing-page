import type { Metadata } from "next";
import { Saira, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const saira = Saira({
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
    icon: "/hiveory-logo.png",
    apple: "/hiveory-logo.png",
  },
  openGraph: {
    title: "Hiveory — Local-First Agent Super App & ADE",
    description:
      "Run autonomous agents, an agentic development environment (ADE), and standalone chat side by side with host-authoritative Rust security.",
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
      className={`${saira.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#070709] text-[#f4f4f5] antialiased selection:bg-white/20 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}

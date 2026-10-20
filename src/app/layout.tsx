import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const title = "Hiveory — Code, automate and chat with every AI agent";
const description =
  "Coding agents side by side, bots that run on their own, and chat with any model. Free, open source, on your computer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiveory.com"),
  title,
  description,
  icons: {
    icon: [
      { url: "/hiveory-logo.png?v=hiveory", type: "image/png" },
      { url: "/favicon.ico?v=hiveory", sizes: "any" },
    ],
    shortcut: ["/hiveory-logo.png?v=hiveory"],
    apple: [{ url: "/hiveory-logo.png?v=hiveory" }],
  },
  openGraph: {
    title,
    description,
    images: [{ url: "/work.webp", width: 1440, height: 900, alt: "Hiveory's Work view with agents side by side" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/work.webp"],
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
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        {/* Before paint: lets reveal targets start hidden only when motion is allowed */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("motion")`,
          }}
        />
        <link rel="icon" type="image/png" href="/hiveory-logo.png?v=hiveory" />
        <link rel="shortcut icon" href="/hiveory-logo.png?v=hiveory" />
        <link rel="apple-touch-icon" href="/hiveory-logo.png?v=hiveory" />
      </head>
      <body className="min-h-screen bg-[#060608] text-[#f4f4f5] antialiased selection:bg-white/20 selection:text-white font-sans overflow-x-clip">
        <div className="w-full max-w-[1536px] mx-auto relative min-h-screen flex flex-col justify-between overflow-x-clip">
          <MotionProvider>{children}</MotionProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

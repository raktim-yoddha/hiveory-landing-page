import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Enterprise — Hiveory | Sovereign AI Engineering for Teams",
  description:
    "Deploy Hiveory across your engineering organization with on-premise governance, team skill synchronization, and air-gapped security.",
};

export default function EnterprisePage() {
  const tiers = [
    {
      name: "Open Source",
      badge: "Community",
      desc: "For individual builders and developers looking for a local-first agent desktop.",
      price: "Free",
      period: "forever",
      features: [
        "Full access to Code Mode (ADE)",
        "Autonomous Agent Mode & routines",
        "Multi-model chat with BYOK",
        "Local SQLite WAL persistence",
        "Community Discord & GitHub support",
      ],
      cta: "Get Started Free",
      href: "/",
      isPrimary: false,
    },
    {
      name: "Enterprise",
      badge: "Custom Deployment",
      desc: "For engineering teams and enterprises requiring air-gapped security, team skill sync, and audit compliance.",
      price: "Custom",
      period: "tailored for your organization",
      features: [
        "Air-gapped & on-premise deployment support",
        "Centralized team skill & MCP registry sync",
        "Enterprise SAML / SSO authentication",
        "Audit logging & capability sandboxing policies",
        "Dedicated engineering support & custom SLAs",
      ],
      cta: "Contact Enterprise Team",
      href: "https://discord.gg/sT8Maq6Cxs",
      isPrimary: true,
    },
  ];

  return (
    <div className="mesh-dot-grid hero-radial-glow relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Subtle vignette border gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.5)_65%,#060608_100%)] z-0" />

      <Navbar />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-24 flex-1">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[12px] font-medium text-zinc-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Sovereign AI Infrastructure</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-white leading-tight mb-6">
            Hiveory for Engineering Teams
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Give your developers the power of autonomous agent engineering
            without leaking intellectual property or compromising internal
            security policies.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-2xl ${
                t.isPrimary
                  ? "border-amber-400/30 bg-[#0f0e0c]/90 shadow-[0_0_50px_-20px_rgba(245,158,11,0.15)]"
                  : "border-white/10 bg-[#0c0c10]/90"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {t.name}
                  </h2>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                      t.isPrimary
                        ? "border-amber-400/40 text-amber-300 bg-amber-400/10"
                        : "border-white/10 text-zinc-400 bg-white/[0.04]"
                    }`}
                  >
                    {t.badge}
                  </span>
                </div>

                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  {t.desc}
                </p>

                <div className="mb-8 pb-6 border-b border-white/[0.06]">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {t.price}
                  </span>
                  <span className="text-xs text-zinc-500 ml-2">{t.period}</span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                  Includes
                </div>

                <ul className="space-y-3 mb-8">
                  {t.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-sm text-zinc-300 flex items-start gap-2.5"
                    >
                      <svg
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          t.isPrimary ? "text-amber-400" : "text-emerald-400"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {t.isPrimary ? (
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black py-3 px-6 text-sm font-semibold hover:from-amber-300 hover:to-amber-400 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>{t.cta}</span>
                  <span>→</span>
                </a>
              ) : (
                <Link
                  href={t.href}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 py-3 px-6 text-sm font-medium transition-all active:scale-95"
                >
                  <span>{t.cta}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Security & Compliance Callout */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="text-xl font-bold text-white mb-2">
                Air-Gapped Ready
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Run with local models via Ollama or vLLM inside strictly isolated
                internal networks.
              </p>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-2">
                Zero Data Ingestion
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Hiveory never stores, routes, or trains on your company code or
                terminal prompts.
              </p>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-2">
                Sandboxed Executions
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Hardware and directory access is gated through Rust capabilities
                and permission prompts.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500 z-10 border-t border-white/[0.04]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Local-First Rust Host · SQLite WAL · Cap-Std Sandboxing</span>
        </div>
        <div>
          <span>Three Modes. One Desktop Super App.</span>
        </div>
      </footer>
    </div>
  );
}

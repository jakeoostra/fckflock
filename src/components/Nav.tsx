"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Marquee from "./Marquee";

const NAV = [
  { href: "/", label: "Index", n: "00" },
  { href: "/dossier", label: "Dossier", n: "01" },
  { href: "/legal", label: "Legal", n: "02" },
  { href: "/resistance", label: "Resistance", n: "03" },
  { href: "/act", label: "Act", n: "04" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="sticky top-0 z-50">
      {/* Status strip */}
      <div className="border-b border-white/5 bg-[var(--color-pitch)]/80 backdrop-blur-md">
        <div className="flex items-center gap-4 px-4 sm:px-8 py-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-mute)]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blood)] pulse-dot" />
            <span className="text-[var(--color-bone)]">Live</span>
          </span>
          <span className="hidden sm:inline">/ Surveillance Watch</span>
          <span className="hidden md:inline">/ Updated April 2026</span>
          <span className="ml-auto hidden sm:inline">DOSSIER №&nbsp;001</span>
        </div>
        <Marquee />
      </div>

      {/* Main nav */}
      <header className="border-b border-white/5 bg-[var(--color-void)]/85 backdrop-blur-xl">
        <div className="px-4 sm:px-8 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-3 group">
            <Reticle />
            <span className="font-display text-2xl tracking-wider flicker">
              F<span className="text-[var(--color-blood)]">#</span>CK FLOCK
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    active
                      ? "text-[var(--color-bone)]"
                      : "text-[var(--color-mute)] hover:text-[var(--color-bone)]"
                  }`}
                >
                  <span className="text-[var(--color-blood)] mr-2">{item.n}</span>
                  {item.label}
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-px h-px bg-[var(--color-blood)]" />
                  )}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/act"
            className="hidden sm:inline-flex font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 bg-[var(--color-blood)] text-[var(--color-void)] font-semibold hover:bg-[var(--color-bone)] transition-colors"
          >
            Take Action →
          </Link>
        </div>
        {/* Mobile nav row */}
        <nav className="md:hidden flex overflow-x-auto border-t border-white/5">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] ${
                  active
                    ? "text-[var(--color-blood)] border-b-2 border-[var(--color-blood)]"
                    : "text-[var(--color-mute)]"
                }`}
              >
                {item.n} {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
}

function Reticle() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className="text-[var(--color-blood)]"
      aria-hidden
    >
      <circle cx="14" cy="14" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      <line x1="14" y1="0" x2="14" y2="6" stroke="currentColor" strokeWidth="1.2" />
      <line x1="14" y1="22" x2="14" y2="28" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="14" x2="6" y2="14" stroke="currentColor" strokeWidth="1.2" />
      <line x1="22" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

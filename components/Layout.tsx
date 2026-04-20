"use client";

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Marquee from "./Marquee";

const NAV = [
  { to: "/", label: "Index", n: "00" },
  { to: "/dossier", label: "Dossier", n: "01" },
  { to: "/legal", label: "Legal", n: "02" },
  { to: "/resistance", label: "Resistance", n: "03" },
  { to: "/act", label: "Act", n: "04" },
];

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Top status bar */}
      <div className="border-b border-white/5 bg-[var(--color-pitch)]/70 backdrop-blur-md sticky top-0 z-50">
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
      <header className="sticky top-[68px] sm:top-[72px] z-40 border-b border-white/5 bg-[var(--color-void)]/80 backdrop-blur-xl">
        <div className="px-4 sm:px-8 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-3 group">
            <Reticle />
            <span className="font-display text-2xl tracking-wider flicker">
              F<span className="text-[var(--color-blood)]">#</span>CK FLOCK
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `group relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? "text-[var(--color-bone)]"
                      : "text-[var(--color-mute)] hover:text-[var(--color-bone)]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-[var(--color-blood)] mr-2">{item.n}</span>
                    {item.label}
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-px h-px bg-[var(--color-blood)]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <a
            href="#act"
            className="hidden sm:inline-flex font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 bg-[var(--color-blood)] text-[var(--color-void)] font-semibold hover:bg-[var(--color-bone)] transition-colors"
          >
            Take Action →
          </a>
        </div>
        {/* Mobile nav */}
        <nav className="md:hidden flex overflow-x-auto border-t border-white/5">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `shrink-0 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] ${
                  isActive
                    ? "text-[var(--color-blood)] border-b-2 border-[var(--color-blood)]"
                    : "text-[var(--color-mute)]"
                }`
              }
            >
              {item.n} {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Reticle() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-[var(--color-blood)]">
      <circle cx="14" cy="14" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      <line x1="14" y1="0" x2="14" y2="6" stroke="currentColor" strokeWidth="1.2" />
      <line x1="14" y1="22" x2="14" y2="28" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="14" x2="6" y2="14" stroke="currentColor" strokeWidth="1.2" />
      <line x1="22" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/5 bg-[var(--color-pitch)]">
      <div className="px-4 sm:px-8 py-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-5xl tracking-wider">
            F<span className="text-[var(--color-blood)]">#</span>CK FLOCK
          </h3>
          <p className="font-serif italic text-lg text-[var(--color-paper)] mt-3 max-w-md text-balance">
            A live archive of the lawsuits, statutes, terminations, and citizen
            mappers dismantling America's largest license-plate dragnet.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-4">
            Sources
          </p>
          <ul className="space-y-2 text-sm text-[var(--color-paper)]">
            <li>EFF Atlas of Surveillance</li>
            <li>404 Media</li>
            <li>UW Center for Human Rights</li>
            <li>HaveIBeenFlocked.com</li>
            <li>Institute for Justice</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-4">
            Disclaimer
          </p>
          <p className="text-xs text-[var(--color-mute)] leading-relaxed">
            All facts cited are drawn from public records, court filings, and
            reporting by the outlets above. Not affiliated with Flock Safety,
            Inc. The "#" is a hash, obviously.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-dim)]">
        <span>© 2026 / Public-interest archive</span>
        <span className="text-[var(--color-blood)]">
          Watch the watchers ◢
        </span>
      </div>
    </footer>
  );
}

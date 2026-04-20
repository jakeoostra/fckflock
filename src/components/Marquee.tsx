"use client";

const TICKER = [
  "20 BILLION plate scans per month",
  "80,000+ cameras across 5,000+ communities",
  "30+ cities cancelled or paused contracts",
  "$7.5B valuation, mounting class actions",
  "60+ Condor cameras found livestreaming on the open internet",
  "1.6 million out-of-state searches of SFPD's database in 7 months",
  "4,000+ ICE-labeled lookups in a single Illinois town",
  "164 stalking searches by one Kansas officer tracking his ex",
  "Washington SB 6002 — strongest ALPR law in the country, signed 2026",
  "Austin → Cambridge → Mountain View → Denver: cancelled",
];

export default function Marquee() {
  return (
    <div className="border-t border-white/5 overflow-hidden bg-[var(--color-coal)]/40">
      <div className="marquee-track py-1.5">
        {[...TICKER, ...TICKER].map((item, i) => (
          <span
            key={i}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-paper)] px-6 flex items-center gap-6"
          >
            <span className="text-[var(--color-blood)]">◢</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

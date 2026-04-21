import { ReactNode } from "react";

/* ---------------- Section header ---------------- */

export function SectionHeader({
  eyebrow,
  title,
  lead,
  number,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  number?: string;
}) {
  return (
    <header className="mb-12 max-w-4xl">
      <div className="flex items-center gap-3 mb-5">
        {number && (
          <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-blood)]">
            §{number}
          </span>
        )}
        <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-blood)] via-white/10 to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-mute)]">
          {eyebrow}
        </span>
      </div>
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.92] tracking-wide text-balance">
        {title}
      </h1>
      {lead && (
        <p className="font-serif italic text-xl sm:text-2xl text-[var(--color-paper)] mt-6 leading-snug text-pretty max-w-3xl">
          {lead}
        </p>
      )}
    </header>
  );
}

/* ---------------- Evidence Card ---------------- */

export function EvidenceCard({
  no,
  tag,
  title,
  children,
  variant = "default",
}: {
  no: string;
  tag: string;
  title: ReactNode;
  children: ReactNode;
  variant?: "default" | "hot" | "amber";
}) {
  const cls =
    variant === "hot" ? "glass-hot" : variant === "amber" ? "glass-amber" : "glass";
  const accent =
    variant === "hot"
      ? "text-[var(--color-blood)]"
      : variant === "amber"
      ? "text-[var(--color-amber)]"
      : "text-[var(--color-paper)]";
  return (
    <article className={`${cls} lift p-6 sm:p-8 relative`}>
      <div className="flex items-center justify-between mb-5 font-mono text-[10px] uppercase tracking-[0.2em]">
        <span className={accent}>EVIDENCE №&nbsp;{no}</span>
        <span className="text-[var(--color-mute)] border border-white/10 px-2 py-0.5">
          {tag}
        </span>
      </div>
      <h3 className="font-display text-3xl sm:text-4xl leading-tight tracking-wide mb-4 text-balance">
        {title}
      </h3>
      <div className="text-[var(--color-paper)] leading-relaxed text-pretty space-y-3 text-[15px]">
        {children}
      </div>
    </article>
  );
}

/* ---------------- License-plate badge ---------------- */

export function PlateBadge({
  state,
  number,
  className = "",
}: {
  state: string;
  number: string;
  className?: string;
}) {
  return (
    <div className={`plate inline-flex flex-col items-center px-4 py-2 ${className}`}>
      <span className="text-[8px] font-bold tracking-widest opacity-70">{state}</span>
      <span className="text-2xl leading-none font-bold">{number}</span>
    </div>
  );
}

/* ---------------- Redacted text ---------------- */

export function Redacted({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block align-baseline">
      <span className="invisible">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 bg-[var(--color-void)] border border-white/10"
      />
    </span>
  );
}

/* ---------------- Stat tile ---------------- */

export function StatTile({
  value,
  unit,
  label,
  hot = false,
}: {
  value: string;
  unit?: string;
  label: string;
  hot?: boolean;
}) {
  return (
    <div
      className={`${hot ? "glass-hot" : "glass"} p-5 sm:p-6 lift relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 h-px w-12 bg-[var(--color-blood)]" />
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="font-display text-5xl sm:text-6xl text-[var(--color-bone)] leading-none">
          {value}
        </span>
        {unit && (
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-mute)]">
            {unit}
          </span>
        )}
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-paper)]">
        {label}
      </p>
    </div>
  );
}

/* ---------------- Search-log quote ---------------- */

export function SearchLog({
  query,
  source,
  context,
}: {
  query: string;
  source: string;
  context?: string;
}) {
  return (
    <div className="bg-[var(--color-pitch)] border border-white/8 rounded-sm relative overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-coal)] border-b border-white/5">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
          ▸ Flock search log
        </span>
        <span className="font-mono text-[10px] text-[var(--color-blood)]">REC</span>
      </div>
      <div className="p-5 font-mono text-[var(--color-amber)] text-base">
        <span className="text-[var(--color-mute)] mr-2">$ search:</span>
        <span className="text-[var(--color-bone)]">"{query}"</span>
      </div>
      {context && (
        <div className="px-5 pb-3 font-mono text-xs text-[var(--color-mute)]">
          {context}
        </div>
      )}
      <div className="px-5 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-paper)]">
        ▸ source: {source}
      </div>
    </div>
  );
}

/* ---------------- Tag pill ---------------- */

export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "hot" | "amber" | "ice";
}) {
  const map = {
    default: "border-white/15 text-[var(--color-paper)]",
    hot: "border-[var(--color-blood)]/40 text-[var(--color-blood)] bg-[var(--color-blood)]/5",
    amber: "border-[var(--color-amber)]/40 text-[var(--color-amber)] bg-[var(--color-amber)]/5",
    ice: "border-[var(--color-ice)]/40 text-[var(--color-ice)]",
  };
  return (
    <span
      className={`inline-block border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${map[tone]}`}
    >
      {children}
    </span>
  );
}

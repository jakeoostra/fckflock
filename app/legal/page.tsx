import type { Metadata } from "next";
import { LAWSUITS, STATUTES } from "@/data/content";
import { SectionHeader, Tag } from "@/components/UI";

export const metadata: Metadata = {
  title: "Legal — F#CK FLOCK",
  description:
    "Lawsuits, state statutes, and AG enforcement actions reshaping ALPR doctrine in 2025–2026.",
};

function statusTone(s: string): "hot" | "amber" | "ice" | "default" {
  if (s.includes("appeal") || s.includes("Filed")) return "hot";
  if (s.includes("Settled")) return "amber";
  if (s.includes("Decided")) return "ice";
  return "default";
}

export default function LegalPage() {
  return (
    <div className="px-4 sm:px-8 py-20 max-w-[1500px] mx-auto">
      <SectionHeader
        number="02"
        eyebrow="Legal — The Litigation & Statute Map"
        title={
          <>
            The doctrinal ground{" "}
            <span className="text-[var(--color-blood)]">is moving.</span>
          </>
        }
        lead={
          <>
            One federal judge wrote 51 pages explaining why ALPR networks don't
            yet trigger Carpenter — and warned the answer would change as
            networks grow denser. A California class action is now seeking{" "}
            $2,500 per affected driver. The map below tracks both fronts.
          </>
        }
      />

      <div className="mt-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-4xl sm:text-5xl tracking-wide">
            Active <span className="text-[var(--color-blood)]">litigation</span>
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
            ▸ {LAWSUITS.length} cases tracked
          </span>
        </div>

        <div className="space-y-3">
          {LAWSUITS.map((c) => (
            <article
              key={c.name}
              className="glass lift p-6 sm:p-8 grid md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl tracking-wide leading-tight text-balance">
                  {c.name}
                </h3>
                <div className="mt-3 space-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
                  <div>▸ {c.court}</div>
                  <div>▸ {c.counsel}</div>
                </div>
                <div className="mt-3">
                  <Tag tone={statusTone(c.status)}>{c.status}</Tag>
                </div>
              </div>
              <p className="md:col-span-8 text-[var(--color-paper)] leading-relaxed text-pretty">
                {c.summary}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-4xl sm:text-5xl tracking-wide">
            State <span className="text-[var(--color-amber)]">statutes</span>
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
            ▸ {STATUTES.length} jurisdictions
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STATUTES.map((s) => (
            <article
              key={s.bill}
              className="glass-amber lift p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 hazard opacity-20" />
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-amber)] mb-3">
                {s.year}
              </div>
              <h3 className="font-display text-3xl tracking-wide leading-tight">
                {s.state}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-paper)] mt-1 mb-4">
                {s.bill}
              </p>
              <p className="text-sm text-[var(--color-paper)] leading-relaxed text-pretty">
                {s.note}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 glass-hot p-8 sm:p-12 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-10 -right-10 w-48 h-48 hazard opacity-15 rotate-12"
        />
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-blood)] mb-4">
          ◢ Constitutional Pressure Point
        </div>
        <h3 className="font-display text-4xl sm:text-5xl tracking-wide leading-tight max-w-3xl text-balance">
          Carpenter v. United States cracked the foundation. Schmidt is the
          test of how far the crack runs.
        </h3>
        <p className="font-serif italic text-xl text-[var(--color-paper)] mt-5 max-w-3xl leading-snug text-pretty">
          "Understandably conservative and dangerous." That's how GWU law
          professor Andrew Guthrie Ferguson described Norfolk's summary-judgment
          win — warning the ruling would justify ALPRs on "every single street
          corner." The Fourth Circuit will hear the appeal.
        </p>
      </div>
    </div>
  );
}

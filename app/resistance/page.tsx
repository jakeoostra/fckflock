import type { Metadata } from "next";
import { CITIES_TERMINATED, COALITION } from "@/data/content";
import { SectionHeader, Tag } from "@/components/UI";

export const metadata: Metadata = {
  title: "Resistance — F#CK FLOCK",
  description:
    "Thirty-plus Flock contracts terminated or paused, and the citizen coalition that put them there.",
};

function PatternBox({
  title,
  body,
  tone = "default",
}: {
  title: string;
  body: string;
  tone?: "default" | "hot" | "amber";
}) {
  const cls =
    tone === "hot" ? "glass-hot" : tone === "amber" ? "glass-amber" : "glass";
  return (
    <div className={`${cls} p-6`}>
      <h4 className="font-display text-2xl tracking-wide mb-3">{title}</h4>
      <p className="text-sm text-[var(--color-paper)] leading-relaxed text-pretty">
        {body}
      </p>
    </div>
  );
}

export default function ResistancePage() {
  return (
    <div className="px-4 sm:px-8 py-20 max-w-[1500px] mx-auto">
      <SectionHeader
        number="03"
        eyebrow="Resistance — The Kill List"
        title={
          <>
            30+ contracts. <span className="text-[var(--color-blood)]">Cancelled.</span>
          </>
        }
        lead={
          <>
            Between mid-2024 and April 2026, more than thirty cities terminated,
            paused, or refused to renew their Flock contracts. Most votes
            followed FOIA-driven audits and 200-person rallies. None followed a
            change in Flock's marketing.
          </>
        }
      />

      <div className="mt-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-4 flex items-center gap-3">
          <span className="w-2 h-2 bg-[var(--color-blood)] rounded-full" />
          Live tally — {CITIES_TERMINATED.length} jurisdictions
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="glass overflow-hidden">
          <ol className="divide-y divide-white/5">
            {CITIES_TERMINATED.map((c, i) => (
              <li
                key={c.city + c.state}
                className="grid grid-cols-12 gap-3 sm:gap-6 items-baseline px-4 sm:px-8 py-5 hover:bg-white/[0.02] transition-colors"
              >
                <span className="col-span-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-blood)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-7 sm:col-span-5 flex items-baseline gap-2 sm:gap-3 flex-wrap">
                  <span className="font-display text-2xl sm:text-3xl tracking-wide">
                    {c.city}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
                    / {c.state}
                  </span>
                </div>
                <span className="hidden sm:block col-span-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-amber)]">
                  {c.date}
                </span>
                <span className="col-span-4 text-sm text-[var(--color-paper)] leading-snug text-pretty hidden md:block">
                  {c.note}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-4">
        <PatternBox
          title="Unauthorized installs"
          body="Cambridge, Eugene, Evanston, Fort Worth, South Carolina — Flock's field teams kept moving ahead of permits and disclosures. Cities became witnesses against the company."
        />
        <PatternBox
          title="Vendor-based 'issues'"
          body="Oxnard's audit found a 'vendor-based issue' enabled nationwide queries despite a 'California only' setting. Mountain View found ATF, Air Force, and GSA had quietly accessed data."
          tone="amber"
        />
        <PatternBox
          title="Settings nobody knew were on"
          body="The default federal-sharing toggles were on. Most cities discovered them only when external auditors and journalists told them — never from Flock."
          tone="hot"
        />
      </div>

      <div className="mt-32">
        <SectionHeader
          eyebrow="The Coalition"
          title={
            <>
              The infrastructure
              <br />
              <span className="text-[var(--color-blood)]">that broke the narrative.</span>
            </>
          }
          lead={
            <>
              No single ruling did this. A nine-organization coalition of
              plaintiff-side litigators, civil-liberties lawyers, investigative
              journalists, and citizen mappers shifted the public record in
              twelve months.
            </>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {COALITION.map((org) => (
            <article key={org.name} className="glass lift p-6 flex flex-col">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display text-2xl tracking-wide leading-tight">
                  {org.short}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-blood)]">
                  ◢
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--color-mute)] mb-3">
                {org.name}
              </p>
              <p className="text-sm text-[var(--color-paper)] leading-relaxed text-pretty flex-1">
                {org.role}
              </p>
              <div className="mt-4">
                <Tag tone="ice">{org.site}</Tag>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 max-w-4xl mx-auto text-center">
        <p className="font-serif italic text-3xl sm:text-4xl text-[var(--color-paper)] leading-snug text-balance">
          "It was like we were{" "}
          <span className="text-[var(--color-blood)] not-italic font-display tracking-wide">
            building our own prisons.
          </span>
          "
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-mute)] mt-6">
          — Sandy Boyce, Sedona AZ resident, Aug 2025
        </p>
      </div>
    </div>
  );
}

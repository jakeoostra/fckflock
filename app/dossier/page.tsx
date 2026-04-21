import type { Metadata } from "next";
import { REVELATIONS } from "@/data/content";
import { EvidenceCard, SectionHeader, SearchLog } from "@/components/UI";
import ReferenceStrip from "@/components/ReferenceStrip";

export const metadata: Metadata = {
  title: "Dossier — F#CK FLOCK",
  description:
    "Eight documented revelations — from the Johnson County abortion search to 60+ cameras livestreaming on the open internet.",
};

export default function DossierPage() {
  return (
    <div className="px-4 sm:px-8 py-20 max-w-[1500px] mx-auto">
      <SectionHeader
        number="01"
        eyebrow="The Dossier — Eight files in evidence"
        title={
          <>
            Receipts.
            <br />
            <span className="text-[var(--color-blood)]">All of them.</span>
          </>
        }
        lead={
          <>
            Every claim below is sourced from court filings, public-records
            releases, peer-reviewed reporting, or Flock's own admissions.
            Together they describe a vendor that moved faster than its own
            controls — and a customer base that learned what it had bought only
            from outside investigators.
          </>
        }
      />

      <ReferenceStrip />

      <div className="grid lg:grid-cols-2 gap-5 mt-12">
        {REVELATIONS.map((r) => (
          <div key={r.no} className="flex flex-col gap-4">
            <EvidenceCard
              no={r.no}
              tag={r.tag}
              title={r.title}
              variant={r.variant}
            >
              {r.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EvidenceCard>
            {r.log && <SearchLog {...r.log} />}
          </div>
        ))}
      </div>

      <div className="mt-24 max-w-4xl mx-auto text-center">
        <p className="font-serif italic text-3xl sm:text-4xl text-[var(--color-paper)] leading-snug text-balance">
          "As the number and capabilities of ALPR cameras expand, the
          constitutional balancing could conceivably tip the other way…
          What is readily apparent is that, at least in Norfolk, Virginia,
          the answer is:{" "}
          <span className="text-[var(--color-blood)] not-italic font-display tracking-wide">
            not today.
          </span>
          "
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-mute)] mt-6">
          — Chief Judge Mark Davis, Schmidt v. City of Norfolk, Jan 27 2026
        </p>
      </div>
    </div>
  );
}

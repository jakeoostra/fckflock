"use client";

import { REVELATIONS } from "@/data/content";
import { EvidenceCard, SectionHeader, SearchLog } from "@/components/UI";

export default function Dossier() {
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

      {/* Reference photos strip */}
      <ReferenceStrip />

      {/* Evidence grid */}
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

      {/* Closing pull quote */}
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

/* ---------- Reference photos of real cameras ---------- */
function ReferenceStrip() {
  return (
    <div className="grid md:grid-cols-2 gap-5 mt-4">
      <ReferenceFrame
        src="/images/flock_cam1.webp"
        label="Subject 01 — Pole-mount, IR cluster visible"
        caption="Flock Falcon-class. Solar-powered, 24/7 capture. Note the IR LED ring around the primary lens."
      />
      <ReferenceFrame
        src="/images/flock_cam2.jpeg"
        label="Subject 02 — Residential deployment, Atlanta"
        caption="Standalone solar pole installed adjacent to multi-family housing. Typical HOA-contracted placement."
      />
    </div>
  );
}

function ReferenceFrame({
  src,
  label,
  caption,
}: {
  src: string;
  label: string;
  caption: string;
}) {
  return (
    <figure className="glass p-3 relative">
      <div className="relative aspect-[4/3] bg-[var(--color-pitch)] overflow-hidden border border-white/5">
        {/* Reticle overlay */}
        <div
          aria-hidden
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute top-3 left-3 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-blood)]"
        >
          ● REC
        </div>
        <div
          aria-hidden
          className="absolute top-3 right-3 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-bone)]"
        >
          {new Date().toISOString().slice(0, 10).replace(/-/g, ".")}
        </div>
        <div
          aria-hidden
          className="absolute bottom-3 left-3 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-amber)]"
        >
          AUTO-IR · ALPR-ENABLED
        </div>

        {/* Image with fallback */}
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            const sibling = t.nextElementSibling as HTMLElement | null;
            if (sibling) sibling.style.display = "flex";
          }}
        />
        <div
          className="absolute inset-0 hidden flex-col items-center justify-center text-center p-6 bg-[var(--color-pitch)]"
          style={{ display: "none" }}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-3">
            ◤ Image not loaded
          </div>
          <p className="text-[var(--color-paper)] text-sm leading-relaxed max-w-xs text-pretty">
            Drop your reference photo at{" "}
            <code className="font-mono text-[var(--color-amber)]">
              /public{src}
            </code>{" "}
            to render here.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 px-1 flex items-baseline justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-blood)]">
          {label}
        </span>
        <span className="text-xs text-[var(--color-mute)] text-right">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

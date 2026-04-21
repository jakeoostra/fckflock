"use client";

import { useState } from "react";

/**
 * Two surveillance-style frames that display user-supplied camera reference
 * photos. If the image file is missing from /public/images, the frame
 * gracefully falls back to a labeled placeholder telling the user where to
 * drop the file.
 *
 * This is a client component only because it uses useState to track load
 * failures — everything else about the Dossier page is server-rendered.
 */
export default function ReferenceStrip() {
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
  const [failed, setFailed] = useState(false);
  const dateStamp = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

  return (
    <figure className="glass p-3 relative">
      <div className="relative aspect-[4/3] bg-[var(--color-pitch)] overflow-hidden border border-white/5">
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
          {dateStamp}
        </div>
        <div
          aria-hidden
          className="absolute bottom-3 left-3 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-amber)]"
        >
          AUTO-IR · ALPR-ENABLED
        </div>

        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[var(--color-pitch)]">
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
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={label}
            className="w-full h-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
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

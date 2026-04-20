"use client";

import { ACTION_STEPS } from "@/data/content";
import { SectionHeader } from "@/components/UI";

export default function Act() {
  return (
    <div className="px-4 sm:px-8 py-20 max-w-[1500px] mx-auto" id="act">
      <SectionHeader
        number="04"
        eyebrow="Act — Six Things That Have Already Worked"
        title={
          <>
            You don't need a law degree.
            <br />
            <span className="text-[var(--color-blood)]">You need an afternoon.</span>
          </>
        }
        lead={
          <>
            Every cancelled contract on the resistance list started with two or
            three residents at a council meeting. Here's the proven sequence —
            from mapping cameras to funding the appeals.
          </>
        }
      />

      {/* Steps */}
      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {ACTION_STEPS.map((s, i) => (
          <article
            key={s.no}
            className={`${
              i % 2 === 0 ? "glass" : "glass-hot"
            } lift p-7 sm:p-8 relative overflow-hidden`}
          >
            <div className="flex items-start gap-5">
              <div className="font-display text-7xl text-[var(--color-blood)] leading-none shrink-0">
                {s.no}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-3xl tracking-wide leading-tight mb-3 text-balance">
                  {s.title}
                </h3>
                <p className="text-[var(--color-paper)] leading-relaxed text-pretty">
                  {s.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Resource grid */}
      <div className="mt-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-6">
          ▸ Direct links
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Resource title="Map cameras near you" url="https://deflock.me" hint="DeFlock — 76,000+ pins" />
          <Resource
            title="EFF Atlas of Surveillance"
            url="https://atlasofsurveillance.org"
            hint="1,700+ ALPR agencies"
          />
          <Resource
            title="Have I Been Flocked?"
            url="https://haveibeenflocked.com"
            hint="Public archive of audit logs"
          />
          <Resource
            title="ACLU 'Pump the Brakes' guide"
            url="https://aclu.org"
            hint="The municipal playbook"
          />
          <Resource
            title="Plate Privacy Project"
            url="https://plateprivacy.com"
            hint="IJ litigation hub"
          />
          <Resource
            title="404 Media Flock coverage"
            url="https://404media.co"
            hint="Investigative archive"
          />
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-24 glass-hot p-10 sm:p-16 text-center relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 hazard opacity-[0.04] pointer-events-none"
        />
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-blood)] mb-5">
          ◢ The asymmetry has flipped
        </div>
        <h2 className="font-display text-5xl sm:text-7xl tracking-wide leading-[0.92] text-balance">
          A $7.5B incumbent loses its narrative
          <br />
          in a single news cycle now.
        </h2>
        <p className="font-serif italic text-2xl text-[var(--color-paper)] mt-6 max-w-2xl mx-auto leading-snug text-pretty">
          That's the only thing that matters. Use it.
        </p>
      </div>
    </div>
  );
}

function Resource({
  title,
  url,
  hint,
}: {
  title: string;
  url: string;
  hint: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass lift p-5 group flex items-start justify-between gap-3"
    >
      <div>
        <p className="font-display text-xl tracking-wide mb-1">{title}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
          {hint}
        </p>
      </div>
      <span className="text-[var(--color-blood)] font-mono group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0">
        ↗
      </span>
    </a>
  );
}

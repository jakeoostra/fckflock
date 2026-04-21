import Link from "next/link";
import { HEADLINE_STATS } from "@/data/content";
import { StatTile, Tag, SearchLog } from "@/components/UI";
import CameraSVG from "@/components/CameraSVG";
import TakeDownButton from "@/components/TakeDownButton";

export default function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative min-h-[88vh] px-8 sm:px-16 pt-10 sm:pt-14 pb-24 overflow-hidden scanlines">
        {/* Decorative crosshair grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Corner brackets */}
        <Bracket className="top-16 sm:top-20 left-4 sm:left-8" />
        <Bracket className="top-16 sm:top-20 right-4 sm:right-8" rotate={90} />
        <Bracket className="bottom-24 left-4 sm:left-8" rotate={-90} />
        <Bracket className="bottom-24 right-4 sm:right-8" rotate={180} />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 max-w-[1500px] mx-auto items-center">
          {/* ---------- LEFT: title block ---------- */}
          <div className="lg:col-span-7 relative z-20">
            <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
              <span className="w-2 h-2 bg-[var(--color-blood)] pulse-dot rounded-full" />
              <span>Public-interest dossier</span>
              <span className="text-[var(--color-blood)]">/</span>
              <span>v.01 — Apr 2026</span>
            </div>

            <h1 className="font-display leading-[0.85] tracking-wide">
              <span className="block text-[clamp(5rem,16vw,12rem)]">
                F<span className="text-[var(--color-blood)]">#</span>CK
              </span>
              <span className="block text-[clamp(5rem,16vw,12rem)] -mt-2 sm:-mt-4">
                <span className="text-[var(--color-blood)]">FL</span>OCK
              </span>
            </h1>

            {/* ---------- INLINE TAKEDOWN BUTTON (mobile/tablet only) ---------- */}
            <div className="mt-6 flex justify-center lg:hidden">
              <TakeDownButton variant="inline" />
            </div>

            <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-paper)] mt-6 max-w-2xl leading-snug text-pretty">
              How a $7.5 billion surveillance empire became the most-sued,
              most-cancelled vendor in American policing — and the citizen
              coalition tearing it down.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Tag tone="hot">Litigation surge</Tag>
              <Tag tone="amber">CBP back-doors exposed</Tag>
              <Tag tone="ice">30+ contracts dead</Tag>
              <Tag>EFF · ACLU · IJ</Tag>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dossier"
                className="group inline-flex items-center gap-3 bg-[var(--color-blood)] hover:bg-[var(--color-bone)] text-[var(--color-void)] px-6 py-4 font-mono text-xs uppercase tracking-[0.22em] font-bold transition-colors"
              >
                Read the dossier
                <span className="group-hover:translate-x-1 transition-transform">
                  ◢
                </span>
              </Link>
              <Link
                href="/resistance"
                className="inline-flex items-center gap-3 border border-white/15 hover:border-[var(--color-bone)] px-6 py-4 font-mono text-xs uppercase tracking-[0.22em] transition-colors"
              >
                See the cancellations →
              </Link>
            </div>
          </div>

          {/* ---------- RIGHT: camera column (desktop only) ---------- */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative max-w-[440px] ml-auto mr-4 xl:mr-8">
              <CameraSVG className="w-full opacity-95" />
              <div className="absolute -top-6 -left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-blood)]">
                ◤ Subject 01
              </div>
              <div className="absolute -bottom-2 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
                Flock Falcon-class · solar pole-mount
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 rotate-90 origin-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-mute)]">
                75 ft · 100 mph · 24/7 IR
              </div>
            </div>
          </div>

          {/* ---------- FLOATING TAKEDOWN BUTTON (desktop only) ---------- */}
          {/* Positioned in the negative space between the text column and the
              camera SVG. The camera is right-anchored via `ml-auto` so the
              entire LEFT side of col-span-5 plus the grid gap are empty — we
              center the (compact, two-line) button on the column boundary,
              vertically centered in the hero via grid `items-center`. */}
          <div
            className="
              hidden lg:flex
              absolute top-1/2 -translate-y-1/2
              left-[59%] xl:left-[60%] -translate-x-1/2
              z-30
              pointer-events-none
            "
          >
            <div className="pointer-events-auto mb-75 pr-40">
              <TakeDownButton variant="floating" />
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1500px] mx-auto">
          {HEADLINE_STATS.map((s, i) => (
            <StatTile key={i} {...s} hot={i === 0} />
          ))}
        </div>
      </section>

      {/* ============== ARGUMENT ============== */}
      <section className="px-4 sm:px-8 py-24 max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 md:sticky md:top-44">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-blood)] mb-4">
              §00 — The premise that broke
            </div>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.92] tracking-wide text-balance">
              "Trust us"
              <br />
              <span className="text-[var(--color-blood)]">stopped working.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg text-[var(--color-paper)] leading-relaxed text-pretty">
            <p>
              Flock Safety's pitch was a handshake: install thousands of cameras
              at speed, tell cities they "own" their data, and let public-safety
              wins drown out privacy concerns.{" "}
              <em className="font-serif italic text-[var(--color-bone)]">
                Between mid-2024 and April 2026, every element of that premise
                was dismantled in public.
              </em>
            </p>
            <p>
              The Johnson County abortion search revealed nationwide default
              sharing. UW researchers had to tell Washington police chiefs that
              their own cameras were being queried by Border Patrol. California
              cities discovered "vendor-based issues" were re-enabling
              cross-state queries despite their settings. Security researchers
              found Flock's premium PTZ cameras streaming to Shodan without
              passwords.
            </p>
            <p>
              The arc isn't that surveillance has stopped — it hasn't. Denver is
              moving to Axon. ICE has other vendors. Palantir is entering the
              same space. What 2025 produced is something more durable:{" "}
              <span className="text-[var(--color-bone)] font-semibold">
                a working coalition of plaintiff-side lawyers, state attorneys
                general, investigative journalists, and grassroots citizen
                mappers
              </span>{" "}
              who can break a $7.5 billion incumbent's narrative within a single
              news cycle.
            </p>
          </div>
        </div>
      </section>

      {/* ============== INFAMOUS QUERY ============== */}
      <section className="px-4 sm:px-8 py-20 max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-amber)] mb-4">
              ▸ The query that ended the trust era
            </div>
            <h3 className="font-display text-4xl sm:text-5xl leading-[0.95] tracking-wide text-balance">
              On May 9, 2025, a Texas deputy typed seven words into Flock.
            </h3>
            <p className="font-serif italic text-xl text-[var(--color-paper)] mt-5 leading-snug text-pretty">
              The query swept 6,809 networks and 83,345 cameras — including
              cameras in states where the action being investigated is legal.
              The Sheriff called it a "welfare check." The records say
              otherwise.
            </p>
          </div>
          <SearchLog
            query="had an abortion, search for female"
            source="Johnson County TX Sheriff's Office, May 9 2025"
            context="6,809 networks / 83,345 cameras / nationwide. Documented by EFF and 404 Media."
          />
        </div>
      </section>

      {/* ============== SECTION TEASERS ============== */}
      <section className="px-4 sm:px-8 py-24 max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-3">
              ▸ The dossier
            </div>
            <h2 className="font-display text-5xl sm:text-6xl tracking-wide">
              Four files. <span className="text-[var(--color-blood)]">Open them.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <TeaserCard
            no="01"
            title="The Dossier"
            kicker="Eight revelations, in evidence"
            body="From the abortion search to the Russian forum credentials — the proof that 'trust us' was never a system."
            href="/dossier"
            tone="hot"
          />
          <TeaserCard
            no="02"
            title="Legal"
            kicker="Lawsuits, statutes, AG actions"
            body="Schmidt at the Fourth Circuit. Milberg's California class action. Washington's SB 6002. The legal map, fully drawn."
            href="/legal"
          />
          <TeaserCard
            no="03"
            title="Resistance"
            kicker="30+ cities cancelled"
            body="Austin, Cambridge, Mountain View, Denver, Eugene — and the coalition that put them there."
            href="/resistance"
            tone="amber"
          />
          <TeaserCard
            no="04"
            title="Act"
            kicker="What you can do this week"
            body="Map the cameras near you. FOIA the audit logs. Show up at the next council vote. Six steps that have already worked."
            href="/act"
          />
        </div>
      </section>
    </>
  );
}

function Bracket({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      aria-hidden
      className={`absolute w-8 h-8 sm:w-12 sm:h-12 pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-[var(--color-blood)]" />
      <div className="absolute top-0 left-0 h-full w-px bg-[var(--color-blood)]" />
    </div>
  );
}

function TeaserCard({
  no,
  title,
  kicker,
  body,
  href,
  tone,
}: {
  no: string;
  title: string;
  kicker: string;
  body: string;
  href: string;
  tone?: "hot" | "amber";
}) {
  const cls =
    tone === "hot" ? "glass-hot" : tone === "amber" ? "glass-amber" : "glass";
  return (
    <Link
      href={href}
      className={`${cls} lift block p-8 group relative overflow-hidden`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
          §{no} / {kicker}
        </span>
        <span className="text-[var(--color-blood)] font-mono group-hover:translate-x-1 transition-transform">
          ◢
        </span>
      </div>
      <h3 className="font-display text-5xl sm:text-6xl tracking-wide leading-none mb-4">
        {title}
      </h3>
      <p className="text-[var(--color-paper)] text-base leading-relaxed text-pretty">
        {body}
      </p>
    </Link>
  );
}

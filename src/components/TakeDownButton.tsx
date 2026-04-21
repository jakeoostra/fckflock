import Link from "next/link";

/**
 * "TAKE DOWN MADISON, SD" — the hero CTA.
 *
 * Two variants:
 *   - "floating": desktop (lg+). Stacked two-line text — compact enough to
 *                 fit in the negative space between the hero's text column
 *                 and the camera SVG without overlapping either.
 *   - "inline":   mobile/tablet. Single-line text at a generous size, drops
 *                 into the flow under the primary CTAs.
 *
 * Both variants share the brutalist targeting-reticle aesthetic — pulsing
 * indicator above, corner brackets, hazard-stripe sliver, scanline bezel,
 * and coordinate caption.
 */
export default function TakeDownButton({
  variant = "inline",
}: {
  variant?: "floating" | "inline";
}) {
  const isFloat = variant === "floating";

  return (
    <Link
      href="/act"
      aria-label="Take down Madison, SD — join the campaign"
      className={`
        group relative inline-flex flex-col items-center gap-3
        ${isFloat ? "" : "w-full max-w-sm sm:max-w-none sm:w-auto"}
      `}
    >
      {/* ── TARGET ACQUIRED indicator ── */}
      <div
        className={`
          flex items-center gap-2.5 font-mono uppercase
          tracking-[0.32em] text-[var(--color-blood)]
          ${isFloat ? "text-[12px]" : "text-[10px]"}
        `}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blood)] pulse-dot" />
        <span>Target Acquired</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blood)] pulse-dot" />
      </div>

      {/* ── Button body wrapped in corner brackets ── */}
      <div className="relative">
        {/* Outer pulsing halo — creates depth/glow behind the button */}
        <span
          aria-hidden
          className="
            absolute -inset-3 -z-10
            bg-[var(--color-blood)]/25 blur-2xl
            opacity-70 group-hover:opacity-100
            transition-opacity duration-500
          "
        />

        {/* Corner brackets */}
        {([
          "-top-2 -left-2 border-t-2 border-l-2",
          "-top-2 -right-2 border-t-2 border-r-2",
          "-bottom-2 -left-2 border-b-2 border-l-2",
          "-bottom-2 -right-2 border-b-2 border-r-2",
        ] as const).map((pos) => (
          <span
            key={pos}
            aria-hidden
            className={`
              absolute ${pos}
              w-4 h-4 border-[var(--color-bone)]
              group-hover:border-[var(--color-amber)]
              transition-colors duration-300
            `}
          />
        ))}

        {/* The button itself */}
        <div
          className={`
            relative bg-[var(--color-blood)] text-[var(--color-void)]
            border-2 border-[var(--color-void)]
            flex items-center gap-3 overflow-hidden
            transition-all duration-300
            group-hover:bg-[var(--color-bone)]
            group-hover:-translate-y-0.5
            shadow-[0_0_0_3px_rgba(255,43,28,0.22),0_25px_55px_-10px_rgba(255,43,28,0.6)]
            group-hover:shadow-[0_0_0_3px_rgba(245,241,234,0.3),0_30px_65px_-10px_rgba(255,43,28,0.78)]
            ${isFloat ? "px-15 py-3 xl:px-20 xl:py-4" : "px-6 py-4 sm:px-8 sm:py-4"}
          `}
        >
          {/* Hazard-stripe sliver on the left edge */}
          {/* <span
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-1.5 hazard opacity-80"
          /> */}
          {/* Scanline texture on the button face */}
          <span
            aria-hidden
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0 3px, rgba(0,0,0,0.25) 3px 4px)",
            }}
          />

          {/* Text — floating variant STACKS on two lines (compact), inline
              variant uses a single line (wider). */}
          {isFloat ? (
            <span className="relative font-display tracking-wider leading-[0.95] pl-2.5 flex flex-col items-start">
              <span className="text-[16px] uppercase tracking-[0.25em] opacity-80 font-mono -mb-0.5">
                Take Down
              </span>
              <span className="text-2xl xl:text-[32px] whitespace-nowrap">
                Madison, SD
              </span>
            </span>
          ) : (
            <span className="relative font-display tracking-wider whitespace-nowrap leading-none pl-2.5 text-xl sm:text-2xl md:text-3xl">
              Take Down Madison, SD
            </span>
          )}

          <span
            aria-hidden
            className="relative font-mono text-sm leading-none group-hover:translate-x-1 transition-transform"
          >
            ◢
          </span>
        </div>
      </div>

      {/* Coordinates caption */}
      <div
        className={`
          font-mono uppercase tracking-[0.3em]
          text-[var(--color-mute)] group-hover:text-[var(--color-paper)]
          transition-colors
          ${isFloat ? "text-[12px]" : "text-[10px]"}
        `}
      >
        44.0061° N · 97.1139° W
      </div>
    </Link>
  );
}

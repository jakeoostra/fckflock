export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/5 bg-[var(--color-pitch)]">
      <div className="px-4 sm:px-8 py-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-5xl tracking-wider">
            F<span className="text-[var(--color-blood)]">#</span>CK FLOCK
          </h3>
          <p className="font-serif italic text-lg text-[var(--color-paper)] mt-3 max-w-md text-balance">
            A live archive of the lawsuits, statutes, terminations, and citizen
            mappers dismantling America's largest license-plate dragnet.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-4">
            Sources
          </p>
          <ul className="space-y-2 text-sm text-[var(--color-paper)]">
            <li>EFF Atlas of Surveillance</li>
            <li>404 Media</li>
            <li>UW Center for Human Rights</li>
            <li>HaveIBeenFlocked.com</li>
            <li>Institute for Justice</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mute)] mb-4">
            Disclaimer
          </p>
          <p className="text-xs text-[var(--color-mute)] leading-relaxed">
            All facts cited are drawn from public records, court filings, and
            reporting by the outlets above. Not affiliated with Flock Safety,
            Inc. The "#" is a hash, obviously.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-dim)]">
        <span>© 2026 / Public-interest archive</span>
        <span className="text-[var(--color-blood)]">Watch the watchers ◢</span>
      </div>
    </footer>
  );
}

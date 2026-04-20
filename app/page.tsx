"use client";

import dynamic from "next/dynamic";

// React Router needs the browser. Disable SSR for the entire SPA root.
const ClientApp = dynamic(() => import("./ClientApp"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-void)]">
      <div className="font-mono text-[var(--color-mute)] text-xs tracking-widest uppercase">
        Decrypting dossier…
      </div>
    </div>
  ),
});

export default function Page() {
  return <ClientApp />;
}

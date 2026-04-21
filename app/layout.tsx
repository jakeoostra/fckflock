import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "F#CK FLOCK — The Rebellion Against America's License-Plate Dragnet",
  description:
    "How a $7.5B surveillance empire became the most-sued, most-cancelled vendor in American policing. A live dossier of the lawsuits, laws, and citizen revolt against Flock Safety.",
  metadataBase: new URL("https://fuckflock.example"),
  openGraph: {
    title: "F#CK FLOCK",
    description:
      "80,000 cameras. 20 billion plates a month. 30+ cities cancelled. The receipts are inside.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          <Nav />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

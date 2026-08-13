import type { Metadata } from "next";
import "./globals.css";

// Fonts are loaded via <link> tags below rather than next/font/google so the
// project builds without an internet connection to Google Fonts at build time.
// Swap this for next/font/google if you'd rather self-host/optimize the fonts.

export const metadata: Metadata = {
  title: "Gopal Shinde — Gold, Crypto & Day Trading, Explained Simply",
  description:
    "Daily market insights on XAUUSD, Bitcoin, Crypto and Day Trading. Join 1,00,000+ traders in the free Telegram channel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

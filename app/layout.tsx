import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VBS 2026 — Illuminate! | Donation Tracker",
  description:
    "Track fundraising progress for Rhema Living Word Global Ministries Vacation Bible School 2026 — Illuminate! Light in the Darkness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

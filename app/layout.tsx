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
      <body className="font-sans antialiased text-white">
        {children}
      </body>
    </html>
  );
}

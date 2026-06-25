import type { Metadata } from "next";
import Link from "next/link";
import BudgetTable from "@/components/BudgetTable";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Budget | VBS 2026 — Illuminate!",
  description:
    "Full tentative budget breakdown for Rhema Living Word Global Ministries VBS 2026.",
};

export default function BudgetPage() {
  return (
    <>
      <div className="hero-gradient px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-sm font-medium text-white/60 transition hover:text-white"
          >
            ← Back to tracker
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            VBS 2026 Tentative Budget
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            A transparent breakdown of how your generous gifts support Vacation
            Bible School.
          </p>
        </div>
      </div>

      <main className="py-10">
        <BudgetTable />
      </main>

      <Footer />
    </>
  );
}

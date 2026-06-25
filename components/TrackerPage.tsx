"use client";

import { useCallback, useEffect, useState } from "react";
import type { TrackerResponse } from "@/lib/supabase";
import BudgetTeaser from "./BudgetTeaser";
import Footer from "./Footer";
import Hero from "./Hero";
import HowToGive from "./HowToGive";
import Partnership from "./Partnership";
import ProgressTracker from "./ProgressTracker";
import SupportersList from "./SupportersList";
import VenueContact from "./VenueContact";

const POLL_INTERVAL_MS = 30_000;

const DEFAULT_DATA: TrackerResponse = {
  totalRaised: 0,
  goal: 3_000_000,
  percent: 0,
  remaining: 3_000_000,
  milestone: "Just getting started",
  supporters: [],
};

export default function TrackerPage() {
  const [data, setData] = useState<TrackerResponse>(DEFAULT_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTracker = useCallback(async () => {
    try {
      const res = await fetch("/api/tracker");
      if (!res.ok) throw new Error("Failed to load");
      const json = (await res.json()) as TrackerResponse;
      setData(json);
      setError(null);
    } catch {
      setError("Unable to load donation data. Please refresh.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTracker();
    const interval = setInterval(fetchTracker, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchTracker]);

  return (
    <>
      <Hero />

      <main className="pb-16">
        {error ? (
          <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
              {error}
            </p>
          </div>
        ) : loading ? (
          <div className="mx-auto max-w-6xl px-4 pt-16 text-center text-muted sm:px-6">
            <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-orange-brand border-t-transparent" />
            Loading tracker…
          </div>
        ) : (
          <>
            <ProgressTracker
              totalRaised={data.totalRaised}
              goal={data.goal}
              percent={data.percent}
              remaining={data.remaining}
              milestone={data.milestone}
            />
            {data.supporters.length > 0 && (
              <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
                <SupportersList supporters={data.supporters} />
              </div>
            )}
          </>
        )}

        <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <BudgetTeaser />
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <HowToGive />
          <VenueContact />
        </div>
      </main>

      <Partnership />
      <Footer />
    </>
  );
}

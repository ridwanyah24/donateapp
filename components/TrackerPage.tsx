"use client";

import { useCallback, useEffect, useState } from "react";
import type { TrackerResponse } from "@/lib/supabase";
import Footer from "./Footer";
import Header from "./Header";
import HowToGive from "./HowToGive";
import Partnership from "./Partnership";
import ProgressTracker from "./ProgressTracker";
import SupportersList from "./SupportersList";
import VenueContact from "./VenueContact";
import VbsBanner from "./VbsBanner";

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
    <main className="pb-8">
      <Header />
      <VbsBanner />

      {error ? (
        <div className="mx-auto max-w-3xl px-4 py-6">
          <p className="rounded-xl bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
            {error}
          </p>
        </div>
      ) : loading ? (
        <div className="mx-auto max-w-3xl px-4 py-12 text-center text-white/40">
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
          <SupportersList supporters={data.supporters} />
        </>
      )}

      <HowToGive />
      <VenueContact />
      <Partnership />
      <Footer />
    </main>
  );
}

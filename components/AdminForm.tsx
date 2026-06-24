"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { formatNaira } from "@/lib/format";
import type { TrackerResponse } from "@/lib/supabase";
import SectionHeading from "./SectionHeading";

export default function AdminForm() {
  const [currentTotal, setCurrentTotal] = useState(0);
  const [goal, setGoal] = useState(3_000_000);
  const [percent, setPercent] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [password, setPassword] = useState("");
  const [totalRaised, setTotalRaised] = useState("");
  const [supporterName, setSupporterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(
    null
  );

  const fetchTracker = useCallback(async () => {
    try {
      const res = await fetch("/api/tracker");
      if (!res.ok) throw new Error("Failed to load");
      const json = (await res.json()) as TrackerResponse;
      setCurrentTotal(json.totalRaised);
      setGoal(json.goal);
      setPercent(json.percent);
      setTotalRaised(String(json.totalRaised));
    } catch {
      setMessage({ type: "error", text: "Could not load current total." });
    } finally {
      setLoadingData(false);
    }
  }, []);

  useEffect(() => {
    fetchTracker();
  }, [fetchTracker]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const parsed = Number(totalRaised.replace(/,/g, ""));
    if (!Number.isFinite(parsed) || parsed < 0) {
      setMessage({ type: "error", text: "Please enter a valid amount." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          totalRaised: parsed,
          supporterName: supporterName.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error ?? "Update failed." });
        return;
      }

      setCurrentTotal(parsed);
      setPercent(goal > 0 ? Math.min(100, Math.round((parsed / goal) * 100)) : 0);
      setSupporterName("");
      setMessage({ type: "success", text: "Saved successfully!" });
      fetchTracker();
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="hero-gradient px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-lg">
          <Link
            href="/"
            className="text-sm font-medium text-white/60 transition hover:text-white"
          >
            ← Back to tracker
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-white/60">VBS 2026 fundraising</p>

          {!loadingData && (
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Total gotten
                </p>
                <p className="mt-1 text-xl font-extrabold text-orange-brand sm:text-2xl">
                  {formatNaira(currentTotal)}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Target
                </p>
                <p className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  {formatNaira(goal)}
                </p>
              </div>
            </div>
          )}

          {!loadingData && (
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <div className="mb-2 flex justify-between text-xs font-medium text-white/60">
                <span>{percent}% of target reached</span>
                <span>{formatNaira(Math.max(0, goal - currentTotal))} remaining</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="progress-gradient h-full rounded-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <main className="mx-auto max-w-lg px-4 py-8 sm:px-6">
        <div className="card-elevated p-6 sm:p-8">

          <SectionHeading
            label="Update"
            title="Set new total raised"
            description="Enter the cumulative amount donated so far."
          />

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-2.5 text-ink outline-none focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">
                New total raised (₦)
              </label>
              <input
                type="number"
                min="0"
                step="1"
                value={totalRaised}
                onChange={(e) => setTotalRaised(e.target.value)}
                required
                disabled={loadingData}
                className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-2.5 text-ink outline-none focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">
                Supporter name (optional)
              </label>
              <input
                type="text"
                value={supporterName}
                onChange={(e) => setSupporterName(e.target.value)}
                placeholder="e.g. John & Jane Doe"
                className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-2.5 text-ink outline-none focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20"
              />
            </div>

            {message && (
              <p
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  message.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {message.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || loadingData}
              className="w-full rounded-xl bg-orange-brand py-3 text-sm font-bold text-white transition hover:bg-orange-dark active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Saving…" : "Save changes"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

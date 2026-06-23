"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { formatNaira } from "@/lib/format";
import type { TrackerResponse } from "@/lib/supabase";

export default function AdminForm() {
  const [currentTotal, setCurrentTotal] = useState(0);
  const [goal, setGoal] = useState(3_000_000);
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
      setSupporterName("");
      setMessage({ type: "success", text: "Saved successfully!" });
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-lg px-4 py-10">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-white/50 transition hover:text-orange-brand"
        >
          ← Back to tracker
        </Link>
      </div>

      <div className="card-glass rounded-2xl p-6 sm:p-8">
        <h1 className="mb-1 text-xl font-bold">Admin</h1>
        <p className="mb-6 text-sm text-white/60">
          Update the VBS 2026 fundraising total
        </p>

        {!loadingData && (
          <p className="mb-6 rounded-lg bg-white/5 px-4 py-3 text-sm">
            Current total:{" "}
            <span className="font-semibold text-orange-brand">
              {formatNaira(currentTotal)}
            </span>
            <span className="text-white/50"> / {formatNaira(goal)} goal</span>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-white/60">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-orange-brand"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-white/60">
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
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-orange-brand disabled:opacity-50"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-white/60">
              Supporter name (optional)
            </label>
            <input
              type="text"
              value={supporterName}
              onChange={(e) => setSupporterName(e.target.value)}
              placeholder="e.g. John & Jane Doe"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-orange-brand"
            />
          </div>

          {message && (
            <p
              className={`text-sm ${message.type === "success" ? "text-green-400" : "text-red-400"}`}
            >
              {message.text}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || loadingData}
            className="w-full rounded-lg bg-orange-brand px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-orange-dark disabled:opacity-50"
          >
            {loading ? "Saving…" : "Save"}
          </button>
        </form>
      </div>
    </main>
  );
}

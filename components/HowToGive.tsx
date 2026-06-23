"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const ACCOUNT_NUMBER = "6798914445";
const ACCOUNT_NAME = "Rhema Living Word Global Ministries";

export default function HowToGive() {
  const [copied, setCopied] = useState(false);

  async function copyAccount() {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section className="card flex h-full flex-col p-6 sm:p-8">
      <SectionHeading
        label="How to Give"
        title="Support VBS 2026"
        description="Transfer via Moniepoint to the account below."
      />

      <div className="mt-auto rounded-2xl bg-gradient-to-br from-navy to-navy-mid p-6 text-white">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-brand text-lg font-bold">
            M
          </div>
          <div>
            <p className="font-semibold">Moniepoint</p>
            <p className="text-xs text-white/60">Bank transfer</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-white/50">
              Account name
            </p>
            <p className="font-medium leading-snug">{ACCOUNT_NAME}</p>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-white/50">
              Account number
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-2xl font-bold tracking-widest sm:text-3xl">
                {ACCOUNT_NUMBER}
              </p>
              <button
                onClick={copyAccount}
                className="rounded-xl bg-orange-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-dark active:scale-95"
              >
                {copied ? "✓ Copied" : "Copy number"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

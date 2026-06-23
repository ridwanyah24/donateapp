"use client";

import { useState } from "react";

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
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="card-glass rounded-2xl p-6 sm:p-8">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          How to Give
        </h3>

        <div className="rounded-xl bg-white/5 p-5">
          <p className="mb-1 text-sm font-semibold text-orange-brand">Moniepoint</p>
          <p className="mb-3 text-sm text-white/70">Account name</p>
          <p className="mb-4 font-medium">{ACCOUNT_NAME}</p>

          <p className="mb-1 text-sm text-white/70">Account number</p>
          <div className="flex items-center gap-3">
            <p className="font-mono text-2xl font-bold tracking-wider">
              {ACCOUNT_NUMBER}
            </p>
            <button
              onClick={copyAccount}
              className="rounded-lg bg-orange-brand px-3 py-1.5 text-xs font-semibold text-navy transition hover:bg-orange-dark"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

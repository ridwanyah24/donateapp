"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { formatNaira } from "@/lib/format";

type ProgressTrackerProps = {
  totalRaised: number;
  goal: number;
  percent: number;
  remaining: number;
  milestone: string;
};

function AnimatedCounter({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => formatNaira(Math.round(v)));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className="text-3xl font-extrabold text-orange-brand sm:text-4xl">
      {display}
    </motion.span>
  );
}

export default function ProgressTracker({
  totalRaised,
  goal,
  percent,
  remaining,
  milestone,
}: ProgressTrackerProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="card-glass rounded-2xl p-6 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Fundraising Progress
        </p>

        <div className="mb-4 inline-block rounded-full bg-purple-brand/30 px-4 py-1.5 text-sm font-medium text-purple-brand ring-1 ring-purple-brand/40">
          {milestone}
        </div>

        <div className="mb-6">
          <p className="mb-1 text-sm text-white/60">Total Raised</p>
          <AnimatedCounter value={totalRaised} />
          <p className="mt-1 text-sm text-white/50">
            Goal: {formatNaira(goal)}
          </p>
        </div>

        <div className="mb-3 h-4 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="progress-gradient progress-shimmer h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="mb-6 flex justify-between text-sm">
          <span className="font-semibold text-orange-brand">{percent}% raised</span>
          <span className="text-white/60">{formatNaira(remaining)} remaining</span>
        </div>

        <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4 text-sm text-white/70">
          <span>
            <strong className="text-white">400+</strong> Children
          </span>
          <span className="text-white/30">·</span>
          <span>
            <strong className="text-white">5</strong> Days
          </span>
          <span className="text-white/30">·</span>
          <span>
            Ages <strong className="text-white">3–16</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

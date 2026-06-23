"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import SectionHeading from "./SectionHeading";

type ProgressTrackerProps = {
  totalRaised: number;
  goal: number;
  percent: number;
  remaining: number;
  milestone: string;
};

function AnimatedPercent({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className="text-5xl font-extrabold tracking-tight text-navy sm:text-6xl lg:text-7xl">
      {display}
    </motion.span>
  );
}

export default function ProgressTracker({
  percent,
  milestone,
}: ProgressTrackerProps) {
  return (
    <section className="relative -mt-8 px-4 sm:px-6">
      <div className="card-elevated mx-auto max-w-6xl p-6 sm:p-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading
            label="Fundraising Progress"
            title="Help us reach our goal"
            description="Every gift helps light a child's path at VBS 2026."
          />
          <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-purple-soft px-4 py-2 text-sm font-semibold text-purple-brand">
            <span className="pulse-soft h-2 w-2 rounded-full bg-purple-brand" />
            {milestone}
          </div>
        </div>

        <div className="mb-8 text-center sm:text-left">
          <p className="mb-2 text-sm font-medium text-muted">Progress so far</p>
          <AnimatedPercent value={percent} />
        </div>

        <div className="relative mb-2 h-5 overflow-hidden rounded-full bg-cream-dark">
          <motion.div
            className="progress-gradient progress-shimmer h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between text-xs font-medium text-muted">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    </section>
  );
}

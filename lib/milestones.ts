export function getMilestone(percent: number): string {
  if (percent >= 100) return "Goal reached — thank you!";
  if (percent >= 75) return "Almost there!";
  if (percent >= 50) return "Halfway there!";
  if (percent >= 25) return "Building momentum";
  return "Just getting started";
}

export function computePercent(totalRaised: number, goal: number): number {
  if (goal <= 0) return 0;
  return Math.min(100, Math.round((totalRaised / goal) * 100));
}

export function computeRemaining(totalRaised: number, goal: number): number {
  return Math.max(0, goal - totalRaised);
}

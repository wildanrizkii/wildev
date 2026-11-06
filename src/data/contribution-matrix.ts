import { ContributionDay } from "@/types/portfolio";

export function getDeterministicContributionData(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const totalDays = 52 * 7;
  // Reference date: modern period leading up to present
  const baseDate = new Date("2026-11-05");
  baseDate.setDate(baseDate.getDate() - totalDays);

  // Deterministic pseudo-random seed generator
  let seed = 12345;
  function pseudoRandom(): number {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  for (let i = 0; i < totalDays; i++) {
    const currentDate = new Date(baseDate);
    currentDate.setDate(baseDate.getDate() + i);
    const dayOfWeek = currentDate.getDay(); // 0 is Sunday, 6 is Saturday

    const rand = pseudoRandom();
    let tier: 0 | 1 | 2 | 3 | 4 = 0;
    let count = 0;

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      if (rand > 0.85) {
        tier = 2;
        count = Math.floor(rand * 5) + 3;
      } else if (rand > 0.6) {
        tier = 1;
        count = Math.floor(rand * 3) + 1;
      } else {
        tier = 0;
        count = 0;
      }
    } else {
      if (rand < 0.22) {
        tier = 0;
        count = 0;
      } else if (rand < 0.52) {
        tier = 1;
        count = Math.floor(rand * 4) + 1;
      } else if (rand < 0.78) {
        tier = 2;
        count = Math.floor(rand * 6) + 4;
      } else if (rand < 0.92) {
        tier = 3;
        count = Math.floor(rand * 8) + 8;
      } else {
        tier = 4;
        count = Math.floor(rand * 10) + 14;
      }
    }

    days.push({
      date: currentDate.toISOString().split("T")[0],
      count,
      tier,
    });
  }

  return days;
}

export const contributionMatrixData = getDeterministicContributionData();

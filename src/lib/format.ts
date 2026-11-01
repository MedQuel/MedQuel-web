import type { Plan } from './api';


export function formatInr(paise: number): string {
  const rupees = paise / 100;
  return `₹${rupees.toLocaleString('en-IN', { maximumFractionDigits: Number.isInteger(rupees) ? 0 : 2 })}`;
}

export function monthsOf(plan: Plan): number {
  return Math.max(1, Math.round(plan.durationDays / 30));
}

export function perMonthPaise(plan: Plan): number {
  return Math.round(plan.pricePaise / monthsOf(plan));
}

export function savingsPercent(plan: Plan, plans: Plan[]): number {
  const monthly = plans.find((p) => monthsOf(p) === 1);
  if (!monthly || monthly.planId === plan.planId) return 0;

  const pct = Math.round((1-perMonthPaise(plan) / monthly.pricePaise) * 100);
  return pct > 0 ? pct : 0;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}

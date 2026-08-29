// Centralized backend API access.
// All fetch calls live here, so the base URL and request logic
// are defined in ONE place instead of scattered across components.

import type { Trade, TradeStats } from "../types/trade";
import type {  DailyPnl } from "../types/trade";
const BASE_URL = "http://localhost:8080/api/trades";

export async function fetchStats(): Promise<TradeStats> {
  const res = await fetch(`${BASE_URL}/stats`);
  if (!res.ok) {
    throw new Error(`Failed to fetch stats: ${res.status}`);
  }
  return res.json();
}

export async function fetchTrades(): Promise<Trade[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch trades: ${res.status}`);
  }
  return res.json();
}



export async function fetchDailyPnl(): Promise<Record<string, DailyPnl>> {
  const res = await fetch(`${BASE_URL}/daily-pnl`);
  if (!res.ok) throw new Error(`Failed to fetch daily P&L: ${res.status}`);
  return res.json();
}
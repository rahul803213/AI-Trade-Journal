// Custom hook: encapsulates fetching + holding the dashboard stats.
// Components just call useStats() and get { stats, loading, error }
// without repeating the fetch/state logic themselves.

import { useState, useEffect } from "react";
import type { TradeStats } from "../types/trade";
import { fetchStats } from "../services/api";

export function useStats() {
  const [stats, setStats] = useState<TradeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStats()
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { stats, loading, error };
}
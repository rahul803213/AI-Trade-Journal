import { useState, useEffect } from "react";
import type { DailyPnl } from "../types/trade";
import { fetchDailyPnl } from "../services/api";

export function useDailyPnl() {
  const [daily, setDaily] = useState<Record<string, DailyPnl>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDailyPnl()
      .then((data) => { setDaily(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return { daily, loading };
}
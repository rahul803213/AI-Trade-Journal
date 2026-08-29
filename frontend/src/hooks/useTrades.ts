import { useState, useEffect } from "react";
import type { Trade } from "../types/trade";
import { fetchTrades } from "../services/api";

export function useTrades() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrades()
      .then((data) => { setTrades(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return { trades, loading };
}
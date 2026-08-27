import type { TradeStats } from "../../types/trade";
import { StatCard } from "./StatCard";

interface StatsGridProps {
  stats: TradeStats | null;
  loading: boolean;
  error: string | null;
}

export function StatsGrid({ stats, loading, error }: StatsGridProps) {
  if (loading) {
    return <div className="text-slate-400">Loading stats…</div>;
  }

  if (error) {
    return <div className="text-red-400">Error: {error}</div>;
  }

  if (!stats) {
    return <div className="text-slate-400">No data yet.</div>;
  }

  const netSign = stats.netProfitLoss >= 0 ? "+" : "-";
  const netValue = `${netSign}$${Math.abs(stats.netProfitLoss).toFixed(2)}`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard label="Total Trades" value={stats.totalTrades.toString()} />
      <StatCard label="Win Rate" value={`${stats.winRate.toFixed(1)}%`} />
      <StatCard
        label="Net P&L"
        value={netValue}
        colored
        positive={stats.netProfitLoss >= 0}
      />
      <StatCard label="Profit Factor" value={stats.profitFactor.toFixed(2)} />
    </div>
  );
}
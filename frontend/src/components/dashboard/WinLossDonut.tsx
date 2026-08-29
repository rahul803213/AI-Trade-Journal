import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import type { Trade } from "../../types/trade";

interface Props { trades: Trade[]; }

export function WinLossDonut({ trades }: Props) {
  const wins = trades.filter((t) => t.profitLoss >= 0).length;
  const losses = trades.length - wins;
  const winRate = trades.length ? Math.round((wins / trades.length) * 100) : 0;

  const data = [
    { name: "Wins", value: wins, color: "#34d399" },
    { name: "Losses", value: losses, color: "#f87171" },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
      <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Win / Loss</h3>
      <div className="relative">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={70} outerRadius={95} paddingAngle={2} stroke="none">
              {data.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-slate-100">{winRate}%</span>
          <span className="text-xs text-slate-500">win rate</span>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-2 text-sm">
        <span className="text-emerald-400">● Wins ({wins})</span>
        <span className="text-red-400">● Losses ({losses})</span>
      </div>
    </div>
  );
}
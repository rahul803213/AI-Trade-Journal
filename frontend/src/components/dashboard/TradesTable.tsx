import type { Trade } from "../../types/trade";

interface Props { trades: Trade[]; }

export function TradesTable({ trades }: Props) {
  const recent = [...trades].reverse().slice(0, 50);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
      <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Recent Trades</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 border-b border-white/10">
              <th className="py-2 px-3 font-medium">Symbol</th>
              <th className="py-2 px-3 font-medium">Side</th>
              <th className="py-2 px-3 font-medium">Entry</th>
              <th className="py-2 px-3 font-medium">Exit</th>
              <th className="py-2 px-3 font-medium">Close Time</th>
              <th className="py-2 px-3 font-medium text-right">P&L</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((t) => {
              const positive = t.profitLoss >= 0;
              return (
                <tr key={t.id} className="border-b border-white/5 hover:bg-white/[0.03] transition">
                  <td className="py-2 px-3 font-medium text-slate-200">{t.symbol}</td>
                  <td className="py-2 px-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      t.direction === "BUY" ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"
                    }`}>{t.direction}</span>
                  </td>
                  <td className="py-2 px-3 text-slate-400">{t.entryPrice}</td>
                  <td className="py-2 px-3 text-slate-400">{t.exitPrice}</td>
                  <td className="py-2 px-3 text-slate-500">{t.closeTime.replace("T", " ").slice(0, 16)}</td>
                  <td className={`py-2 px-3 text-right font-semibold ${positive ? "text-emerald-400" : "text-red-400"}`}>
                    {positive ? "+" : "-"}${Math.abs(t.profitLoss).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
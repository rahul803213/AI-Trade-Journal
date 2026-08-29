import { useState } from "react";
import { useDailyPnl } from "../../hooks/useDailyPnl";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export function PnlCalendar() {
  const { daily, loading } = useDailyPnl();
  const [current, setCurrent] = useState(() => {
    const keys = Object.keys(daily);
    return new Date(2025, 8, 1); // default Sep 2025 where the data is
  });

  if (loading) return <div className="text-slate-400">Loading calendar…</div>;

  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const keyFor = (d: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const changeMonth = (delta: number) =>
    setCurrent(new Date(year, month + delta, 1));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-slate-100">
          {MONTHS[month]} {year}
        </h3>
        <div className="flex gap-2">
          <button onClick={() => changeMonth(-1)}
            className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition">‹</button>
          <button onClick={() => changeMonth(1)}
            className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition">›</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const entry = daily[keyFor(d)];
          const pnl = entry?.profitLoss;
          const has = entry !== undefined;
          const positive = has && pnl! >= 0;

          return (
            <div key={i}
              className={`aspect-square rounded-xl border p-2 flex flex-col justify-between transition
                ${has
                  ? positive
                    ? "border-emerald-500/30 bg-emerald-500/10"
                    : "border-red-500/30 bg-red-500/10"
                  : "border-white/5 bg-white/[0.02]"}`}>
              <span className="text-xs text-slate-400">{d}</span>
              {has && (
                <div className="text-right">
                  <div className={`text-xs font-semibold ${positive ? "text-emerald-400" : "text-red-400"}`}>
                    {positive ? "+" : "-"}${Math.abs(pnl!).toFixed(0)}
                  </div>
                  <div className="text-[10px] text-slate-500">{entry.tradeCount} {entry.tradeCount === 1 ? "trade" : "trades"}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
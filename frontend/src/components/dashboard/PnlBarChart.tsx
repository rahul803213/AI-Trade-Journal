import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { Trade } from "../../types/trade";

interface Props { trades: Trade[]; }

export function PnlBarChart({ trades }: Props) {
  const data = trades.map((t, i) => ({ name: i + 1, pnl: Number(t.profitLoss.toFixed(2)) }));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
      <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">P&L Per Trade</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis stroke="#64748b" fontSize={11} />
          <Tooltip
            contentStyle={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 8, color: "#e2e8f0" }}
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
          />
          <Bar
            dataKey="pnl"
            radius={[3, 3, 0, 0]}
            fill="#34d399"
            shape={(props: any) => {
              const { x, y, width, height, payload } = props;
              const color = payload.pnl >= 0 ? "#34d399" : "#f87171";
              const h = Math.abs(height);
              const yy = height < 0 ? y + height : y;
              return <rect x={x} y={yy} width={width} height={h} rx={3} fill={color} />;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
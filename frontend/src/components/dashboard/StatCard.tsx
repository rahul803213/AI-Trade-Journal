interface StatCardProps {
  label: string;
  value: string;
  colored?: boolean;
  positive?: boolean;
}

export function StatCard({ label, value, colored, positive }: StatCardProps) {
  const valueColor = colored
    ? positive
      ? "text-emerald-400"
      : "text-red-400"
    : "text-slate-100";

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-slate-700 transition-colors">
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
        {label}
      </p>
      <p className={`mt-2 text-3xl font-semibold tracking-tight ${valueColor}`}>
        {value}
      </p>
    </div>
  );
}
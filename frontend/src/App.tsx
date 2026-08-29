import { Header } from "./components/layout/Header";
import { StatsGrid } from "./components/dashboard/StatsGrid";
import { useStats } from "./hooks/useStats";
import { PnlCalendar } from "./components/dashboard/PnlCalendar";
import { PnlBarChart } from "./components/dashboard/PnlBarChart";
import { WinLossDonut } from "./components/dashboard/WinLossDonut";
import { useTrades } from "./hooks/useTrades";
import { TradesTable } from "./components/dashboard/TradesTable";

function App() {
  const { stats, loading, error } = useStats();
const { trades } = useTrades();
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">
          Overview
        </h2>
                        <StatsGrid stats={stats} loading={loading} error={error} />

        {/* Charts row */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PnlBarChart trades={trades} />
          </div>
          <WinLossDonut trades={trades} />
        </div>

        {/* Calendar */}
        <div className="mt-8">
          <h2 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">P&L Calendar</h2>
          <PnlCalendar />
        </div>

        {/* Trades table */}
        <div className="mt-8">
          <TradesTable trades={trades} />
        </div>
      </main>
    </div>
  );
}

export default App;
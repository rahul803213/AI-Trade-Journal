import { Header } from "./components/layout/Header";
import { StatsGrid } from "./components/dashboard/StatsGrid";
import { useStats } from "./hooks/useStats";

function App() {
  const { stats, loading, error } = useStats();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">
          Overview
        </h2>
        <StatsGrid stats={stats} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;
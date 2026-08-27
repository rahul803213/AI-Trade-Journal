import { useState, useEffect } from "react";

interface TradeStats {
  totalTrades: number;
  winRate: number;
  netProfitLoss: number;
  profitFactor: number;
}

function App() {
  const [stats, setStats] = useState<TradeStats | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/trades/stats")
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error("Failed to fetch stats:", error));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>AI Trade Journal</h1>

      {stats === null ? (
        <p>Loading stats...</p>
      ) : (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", minWidth: "150px" }}>
            <p style={{ color: "#888", margin: 0 }}>Total Trades</p>
            <h2 style={{ margin: 0 }}>{stats.totalTrades}</h2>
          </div>
          <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", minWidth: "150px" }}>
            <p style={{ color: "#888", margin: 0 }}>Win Rate</p>
            <h2 style={{ margin: 0 }}>{stats.winRate.toFixed(1)}%</h2>
          </div>
          <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", minWidth: "150px" }}>
            <p style={{ color: "#888", margin: 0 }}>Net P&L</p>
            <h2 style={{ margin: 0 }}>${stats.netProfitLoss.toFixed(2)}</h2>
          </div>
          <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", minWidth: "150px" }}>
            <p style={{ color: "#888", margin: 0 }}>Profit Factor</p>
            <h2 style={{ margin: 0 }}>{stats.profitFactor.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
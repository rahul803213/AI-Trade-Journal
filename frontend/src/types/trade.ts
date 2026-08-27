// Shared TypeScript types for the trade domain.
// Keeping types in one place means every component uses the same shape.

export interface Trade {
  id: number;
  symbol: string;
  direction: string;
  entryPrice: number;
  exitPrice: number;
  quantity: number;
  openTime: string;
  closeTime: string;
  profitLoss: number;
  notes: string;
}

export interface TradeStats {
  totalTrades: number;
  winRate: number;
  netProfitLoss: number;
  profitFactor: number;
}
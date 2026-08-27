package com.tradejournal.ai_trade_journal.model;

public class TradeStats {

    private long totalTrades;
    private double winRate;
    private double netProfitLoss;
    private double profitFactor;

    public TradeStats(long totalTrades, double winRate, double netProfitLoss, double profitFactor) {
        this.totalTrades = totalTrades;
        this.winRate = winRate;
        this.netProfitLoss = netProfitLoss;
        this.profitFactor = profitFactor;
    }

    public long getTotalTrades() { return totalTrades; }
    public double getWinRate() { return winRate; }
    public double getNetProfitLoss() { return netProfitLoss; }
    public double getProfitFactor() { return profitFactor; }
}
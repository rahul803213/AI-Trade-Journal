package com.tradejournal.ai_trade_journal.model;

import java.time.LocalDate;

public class DailyPnl {
    private LocalDate date;
    private double profitLoss;
    private int tradeCount;

    public DailyPnl(LocalDate date, double profitLoss, int tradeCount) {
        this.date = date;
        this.profitLoss = profitLoss;
        this.tradeCount = tradeCount;
    }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
    public double getProfitLoss() { return profitLoss; }
    public void setProfitLoss(double profitLoss) { this.profitLoss = profitLoss; }
    public int getTradeCount() { return tradeCount; }
    public void setTradeCount(int tradeCount) { this.tradeCount = tradeCount; }
}
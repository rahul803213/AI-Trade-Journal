package com.tradejournal.ai_trade_journal.service;

//import com.tradejournal.ai_trade_journal.model.TradeStats;
import com.tradejournal.ai_trade_journal.model.Trade;
import com.tradejournal.ai_trade_journal.model.TradeStats;
import com.tradejournal.ai_trade_journal.repository.TradeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeService {

    private final TradeRepository tradeRepository;

    public TradeService(TradeRepository tradeRepository) {
        this.tradeRepository = tradeRepository;
    }

    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }

    public Trade saveTrade(Trade trade) {
        return tradeRepository.save(trade);
    }
        public List<Trade> saveAll(List<Trade> trades) {
        return tradeRepository.saveAll(trades);
    }
        public TradeStats calculateStats() {
        List<Trade> trades = tradeRepository.findAll();

        long totalTrades = trades.size();

        long winningTrades = trades.stream()
                .filter(t -> t.getProfitLoss() > 0)
                .count();

        double winRate = totalTrades == 0 ? 0
                : (winningTrades * 100.0) / totalTrades;

        double netProfitLoss = trades.stream()
                .mapToDouble(Trade::getProfitLoss)
                .sum();

        double grossProfit = trades.stream()
                .mapToDouble(Trade::getProfitLoss)
                .filter(pl -> pl > 0)
                .sum();

        double grossLoss = trades.stream()
                .mapToDouble(Trade::getProfitLoss)
                .filter(pl -> pl < 0)
                .sum();

        double profitFactor = grossLoss == 0 ? 0
                : grossProfit / Math.abs(grossLoss);

        return new TradeStats(totalTrades, winRate, netProfitLoss, profitFactor);
    }
}
package com.tradejournal.ai_trade_journal.service;

import com.tradejournal.ai_trade_journal.model.Trade;
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
}
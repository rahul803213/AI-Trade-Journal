package com.tradejournal.ai_trade_journal.repository;

import com.tradejournal.ai_trade_journal.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<Trade, Long> {
    
}
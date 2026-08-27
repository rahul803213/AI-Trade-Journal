package com.tradejournal.ai_trade_journal.controller;

import com.tradejournal.ai_trade_journal.model.Trade;
import com.tradejournal.ai_trade_journal.service.TradeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/trades")
public class TradeController {

    private final TradeService tradeService;

    public TradeController(TradeService tradeService) {
        this.tradeService = tradeService;
    }

    @GetMapping
    public List<Trade> getAllTrades() {
        return tradeService.getAllTrades();
    }

    @PostMapping
    public Trade createTrade(@RequestBody Trade trade) {
        return tradeService.saveTrade(trade);
    }
}
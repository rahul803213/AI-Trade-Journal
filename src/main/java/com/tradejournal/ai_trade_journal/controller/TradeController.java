package com.tradejournal.ai_trade_journal.controller;

import com.tradejournal.ai_trade_journal.model.TradeStats;
import com.tradejournal.ai_trade_journal.model.Trade;
import com.tradejournal.ai_trade_journal.service.TradeService;
import com.tradejournal.ai_trade_journal.service.PdfParserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/trades")
@CrossOrigin(origins = "*")
public class TradeController {

    private final TradeService tradeService;
    private final PdfParserService pdfParserService;

    public TradeController(TradeService tradeService, PdfParserService pdfParserService) {
        this.tradeService = tradeService;
        this.pdfParserService = pdfParserService;
    }

    @GetMapping
    public List<Trade> getAllTrades() {
        return tradeService.getAllTrades();
    }

    @PostMapping
    public Trade createTrade(@RequestBody Trade trade) {
        return tradeService.saveTrade(trade);
    }

    @PostMapping("/import-pdf")
    public List<Trade> importPdf(@RequestParam("file") MultipartFile file) {
        List<Trade> parsed = pdfParserService.parseTrades(file);
        return tradeService.saveAll(parsed);
    }

        @GetMapping("/stats")
    public TradeStats getStats() {
        return tradeService.calculateStats();
    }
    

  
}

package com.tradejournal.ai_trade_journal.service;

import com.tradejournal.ai_trade_journal.model.Trade;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class PdfParserService {

    private static final DateTimeFormatter FORMATTER =
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    // Keep this for the temporary inspect endpoint
    public String extractText(MultipartFile file) {
        try (PDDocument document = Loader.loadPDF(file.getBytes())) {
            return new PDFTextStripper().getText(document);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read PDF: " + e.getMessage(), e);
        }
    }

    public List<Trade> parseTrades(MultipartFile file) {
        String text = extractText(file);
        List<Trade> trades = new ArrayList<>();

        String[] lines = text.split("\\r?\\n");

        for (String line : lines) {
            String trimmed = line.trim();
            String[] parts = trimmed.split("\\s+");

            // A real trade line: at least 16 fields, second word is buy/sell,
            // and NOT a cancelled order.
            if (parts.length < 16) {
                continue;
            }
            String type = parts[1];
            if (!type.equals("buy") && !type.equals("sell")) {
                continue;   // skips balance rows, headers, etc.
            }
            if (trimmed.contains("cancelled")) {
                continue;   // skips cancelled limit orders
            }

            try {
                Trade trade = new Trade();
                trade.setDirection(type.toUpperCase());
                trade.setOpenTime(LocalDateTime.parse(parts[2] + " " + parts[3], FORMATTER));
                trade.setSymbol(stripSuffix(parts[4]));
                trade.setEntryPrice(Double.parseDouble(parts[5]));
                trade.setQuantity(Double.parseDouble(parts[6]));
                trade.setCloseTime(LocalDateTime.parse(parts[7] + " " + parts[8], FORMATTER));
                trade.setExitPrice(Double.parseDouble(parts[9]));
                trade.setProfitLoss(Double.parseDouble(parts[parts.length - 1]));
                trade.setNotes("");
                trades.add(trade);
            } catch (Exception e) {
                // If one line is malformed, skip it rather than failing the whole import
                System.out.println("Skipping unparseable line: " + trimmed);
            }
        }

        return trades;
    }

    private String stripSuffix(String symbol) {
        // Remove a trailing lowercase 'm' broker suffix: XAUUSDm -> XAUUSD
        if (symbol.endsWith("m")) {
            return symbol.substring(0, symbol.length() - 1);
        }
        return symbol;
    }
}
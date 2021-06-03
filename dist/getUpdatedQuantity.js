"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedQuantity = void 0;
const jsonParser_1 = require("./jsonParser");
const quantityCalculator_1 = require("./quantityCalculator");
const getUpdatedQuantity = async (sku) => {
    const stock = await jsonParser_1.jsonParser("./data/stock.json");
    const transactions = await jsonParser_1.jsonParser("./data/transactions.json");
    const target = stock.find(stockItem => stockItem.sku === sku);
    // If target in stock file, get stock value, else we default to 0
    const initialQuantity = target ? target.stock : 0;
    const relevantTransactions = transactions.filter(transaction => transaction.sku === sku);
    if (relevantTransactions.length === 0 && target === undefined) {
        throw new Error("SKU not found in stock.json or transactions.json");
    }
    const finalQuantity = quantityCalculator_1.quantityCalculator(relevantTransactions, initialQuantity);
    return { "sku": sku, "qty": finalQuantity };
};
exports.getUpdatedQuantity = getUpdatedQuantity;

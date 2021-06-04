import { jsonParser } from "./jsonParser";
import { quantityCalculator } from "./quantityCalculator";
export const getUpdatedQuantity = async (sku) => {
    const stock = await jsonParser("./data/stock.json");
    const transactions = await jsonParser("./data/transactions.json");
    const target = stock.find(stockItem => stockItem.sku === sku);
    // If target in stock file, get stock value, else we default to 0
    const initialQuantity = target ? target.stock : 0;
    const relevantTransactions = transactions.filter(transaction => transaction.sku === sku);
    if (relevantTransactions.length === 0 && target === undefined) {
        throw new Error("SKU not found in stock.json or transactions.json");
    }
    const finalQuantity = quantityCalculator(relevantTransactions, initialQuantity);
    return { "sku": sku, "qty": finalQuantity };
};

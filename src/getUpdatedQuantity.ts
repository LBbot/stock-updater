import { jsonParser } from "./jsonParser";
import { quantityCalculator } from "./quantityCalculator";

export const getUpdatedQuantity = async (sku: string): Promise<{ sku: string, qty: number }> => {
    const stock: Stock[] = await jsonParser("./data/stock.json");
    const transactions: Transaction[] = await jsonParser("./data/transactions.json");

    const target: undefined | Stock = stock.find(stockItem  => stockItem.sku === sku);

    // If target in stock file, get stock value, else we default to 0
    const initialQuantity: number = target ? target.stock : 0;

    const relevantTransactions: Transaction[] = transactions.filter(transaction => transaction.sku === sku);

    if (relevantTransactions.length === 0 && target === undefined) {
        throw new Error("SKU not found in stock.json or transactions.json");
    }

    const finalQuantity: number = quantityCalculator(relevantTransactions, initialQuantity);

    return {"sku": sku, "qty": finalQuantity};
};

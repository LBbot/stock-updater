"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quantityCalculator = void 0;
const quantityCalculator = (transactionsArray, quantity) => {
    transactionsArray.forEach(transaction => {
        if (transaction.type === "order") {
            quantity += transaction.qty;
        }
        else if (transaction.type === "refund") {
            quantity -= transaction.qty;
        }
    });
    return quantity;
};
exports.quantityCalculator = quantityCalculator;

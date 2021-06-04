export const quantityCalculator = (transactionsArray, quantity) => {
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

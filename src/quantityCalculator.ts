export const quantityCalculator = (transactionsArray: Transaction[], quantity: number): number => {
    transactionsArray.forEach(transaction => {
        if (transaction.type === "order") {
            quantity += transaction.qty;
        } else if (transaction.type === "refund") {
            quantity -= transaction.qty;
        }
    });
    return quantity;
}

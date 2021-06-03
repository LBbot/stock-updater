import { quantityCalculator } from "../dist/quantityCalculator";

test("Order transactions should add to total", () => {
    const transactions = [
        {"sku":"HGG795032/35/91","type":"order","qty":4},
        {"sku":"HGG795032/35/91","type":"order","qty":0},
        {"sku":"HGG795032/35/91","type":"order","qty":6}
    ];
    const quantity = 0;
    const result = quantityCalculator(transactions, quantity);
    expect(result).toEqual(10);
});

test("Refund transactions should subtract from total", () => {
    const transactions = [
        {"sku":"HGG795032/35/91","type":"refund","qty":6},
        {"sku":"HGG795032/35/91","type":"refund","qty":0},
        {"sku":"HGG795032/35/91","type":"refund","qty":4},
    ];
    const quantity = 20;
    const result = quantityCalculator(transactions, quantity);
    expect(result).toEqual(10);
});

test("Refund AND order transactions should add up correctly", () => {
    const transactions = [
        {"sku":"HGG795032/35/91","type":"refund","qty":5},
        {"sku":"HGG795032/35/91","type":"order","qty":0},
        {"sku":"HGG795032/35/91","type":"order","qty":15},
    ];
    const quantity = 0;
    const result = quantityCalculator(transactions, quantity);
    expect(result).toEqual(10);
});
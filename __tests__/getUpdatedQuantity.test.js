import { getUpdatedQuantity } from "../dist/getUpdatedQuantity";

test("SKU that does not exist in either data file should throw error", async () => {
    await expect(getUpdatedQuantity("fakesku"))
        .rejects
        .toThrow("SKU not found in stock.json or transactions.json");
});

test("Accurate SKUs should get expected data", async () => {
    const result1 = await getUpdatedQuantity("HGG795032/35/91");
    expect(result1).toEqual({sku: "HGG795032/35/91", qty: 4039});

    const result2 = await getUpdatedQuantity("TZH873296/06/42");
    expect(result2).toEqual({sku: "TZH873296/06/42", qty: 1159});
});

test("SKU missing from stock should start at 0 and get data from transactions", async () => {
    const result = await getUpdatedQuantity("DXQ324600/17/58");
    expect(result).toEqual({sku: "DXQ324600/17/58", qty: 95});
});

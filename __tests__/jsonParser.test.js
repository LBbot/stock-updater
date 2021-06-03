import {jsonParser, } from "../dist/jsonParser";

test("JSON file should be parsed", async () => {
    const result = await jsonParser("./data/stock.json");
    expect(typeof result === "array");
});

# stock-updater

## Two json files
 - stock.json: contains objects which represent the starting stock levels for given SKUS
 - transactions.json: contains an array of transactions since the stock levels were recorded in `stock.json`

## Goal
getUpdatedQuantity is a function which is able to return the current stock levels for a given SKU by combining the data in these two files.
- The function must match the following signature: `(sku: string) => Promise<{ sku: string, qty: number }>`.
- The function must read from the `stock` and `transactions` files on each invocation (totals cannot be precomputed)
- The function must throw an error where the SKU does not exist in the `transactions.json` and `stock.json` file
- All code must be adequately tested
Notes:
- Transactions may exist for SKUs which are not present in `stock.json`. It should be assumed that the starting quantity for these is 0.
- Functionality can be split into many files to help keep the project clear and organised

## Notes
- Includes Babel so that Jest can use ES6 import syntax for consistency.
- Install steps: 1) Clone repo, run `npm install`.
- `tsc` to recompile TypeScript files.
- `npm test` to run tests.

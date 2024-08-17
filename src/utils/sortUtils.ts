import { Transaction } from "./../types/Transaction";
import { fetchConversionRates } from "./../services/currencyService";

export type SortOrder = "asc" | "desc";

let cachedRates: { [key: string]: number } | null = null;

export const sortTransactions = async (
  transactions: Transaction[],
  columnName: keyof Transaction | null,
  order: SortOrder
): Promise<Transaction[]> => {
  if (!columnName) return transactions;

  if (columnName === "amount" && !cachedRates) {
    cachedRates = await fetchConversionRates();
  }

  return [...transactions].sort((transactionA, transactionB) => {
    let cellValueA = transactionA[columnName];
    let cellValueB = transactionB[columnName];

    if (columnName === "amount" && cachedRates) {
      cellValueA = (transactionA.amount / 100) * (cachedRates[transactionA.currency] || 1);
      cellValueB = (transactionB.amount / 100) * (cachedRates[transactionB.currency] || 1);
    }

    if (typeof cellValueA === "string" && typeof cellValueB === "string") {
      return order === "asc"
        ? cellValueA.localeCompare(cellValueB)
        : cellValueB.localeCompare(cellValueA);
    }

    if (typeof cellValueA === "number" && typeof cellValueB === "number") {
      return order === "asc"
        ? cellValueA - cellValueB
        : cellValueB - cellValueA;
    }

    return 0;
  });
};

import { TransactionProps } from "./../types/TransactionProps";
import { fetchConversionRates } from "./../services/currencyService";

export type SortOrder = "asc" | "desc";

let cachedRates: { [key: string]: number } | null = null;

// Used to map error class to display name
// Otherwise, the sorting sort by error class which can produce visually incorrect display results
const mapErrorClassToDisplayName = (errorClass: string): string => {
  if (errorClass.includes("Remote")) return "Remote";
  if (errorClass.includes("System")) return "System";

  return "Unknown";
};

export const sortTransactions = async (
  transactions: TransactionProps[],
  columnName: keyof TransactionProps | null,
  order: SortOrder,
): Promise<TransactionProps[]> => {
  if (!Array.isArray(transactions)) return [];

  if (!columnName) return transactions;

  if (columnName === "amount" && !cachedRates) {
    cachedRates = await fetchConversionRates();
  }

  return [...transactions].sort((transactionA, transactionB) => {
    let cellValueA = transactionA[columnName];
    let cellValueB = transactionB[columnName];

    if (columnName === "amount" && cachedRates) {
      cellValueA =
        (transactionA.amount / 100) * (cachedRates[transactionA.currency] || 1);
      cellValueB =
        (transactionB.amount / 100) * (cachedRates[transactionB.currency] || 1);
    }

    if (columnName === "error_class") {
      cellValueA = mapErrorClassToDisplayName(transactionA.error_class);
      cellValueB = mapErrorClassToDisplayName(transactionB.error_class);
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

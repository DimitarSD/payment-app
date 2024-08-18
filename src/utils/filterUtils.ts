import { TransactionProps } from "./../types/TransactionProps";

export type Filter = {
  column: keyof TransactionProps;
  matchType: "equal" | "starts with" | "ends with" | "contains";
  value: string;
};

export type DateRange = {
  from: string;
  to: string;
};

export const filterTransactions = (
  transactions: TransactionProps[],
  dateRange: DateRange,
  filters: Filter[],
): TransactionProps[] => {
  let filtered = [...transactions];

  if (dateRange.from) {
    const from = new Date(dateRange.from).getTime();
    filtered = filtered.filter(
      (transaction) => new Date(transaction.created_at).getTime() >= from,
    );
  }

  if (dateRange.to) {
    const to = new Date(dateRange.to).getTime();
    filtered = filtered.filter(
      (transaction) => new Date(transaction.created_at).getTime() <= to,
    );
  }

  filters.forEach((filter) => {
    filtered = filtered.filter((transaction) => {
      const transactionValue = String(transaction[filter.column]).toLowerCase();
      const filterValue = filter.value.toLowerCase();

      switch (filter.matchType) {
        case "equal":
          return transactionValue === filterValue;
        case "starts with":
          return transactionValue.startsWith(filterValue);
        case "ends with":
          return transactionValue.endsWith(filterValue);
        case "contains":
          return transactionValue.includes(filterValue);
        default:
          return true;
      }
    });
  });

  return filtered;
};

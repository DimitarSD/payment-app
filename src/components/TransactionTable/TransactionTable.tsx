import React, { useState, useEffect } from "react";
import TransactionRow from "./TransactionRow/TransactionRow";
import SortableTableHeader from "./SortableTableHeader/SortableTableHeader";
import * as styles from "./TransactionTable.module.css";
import { sortTransactions, SortOrder } from "./../../utils/sortUtils";
import { TransactionProps } from "./../../types/TransactionProps";
import { tableColumns } from "./../../utils/tableColumns";
import { useCurrencyRates } from "./../../hooks/useCurrencyRates";

type TransactionTableProps = {
  transactions: TransactionProps[];
};

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  const [sortColumn, setSortColumn] = useState<keyof TransactionProps | null>(
    null,
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [sortedTransactions, setSortedTransactions] = useState<
    TransactionProps[]
  >([]);

  const { rates: conversionRates, loading } = useCurrencyRates();

  const handleSort = (column: keyof TransactionProps) => {
    const order = column === sortColumn && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);
  };

  useEffect(() => {
    if (!loading) {
      const sorted = sortTransactions(
        transactions,
        sortColumn,
        sortOrder,
        conversionRates,
      );
      setSortedTransactions(sorted);
    }
  }, [transactions, sortColumn, sortOrder, conversionRates, loading]);

  return (
    <div className={styles["table-container"]}>
      <table className={styles.table}>
        <thead>
          <SortableTableHeader<TransactionProps>
            columns={tableColumns}
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            handleSort={handleSort}
          />
        </thead>
        <tbody>
          {sortedTransactions.map((transaction: TransactionProps) => (
            <TransactionRow
              key={transaction.unique_id}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

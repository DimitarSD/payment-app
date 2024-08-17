import React, { useState, useEffect } from "react";
import useTransactions from "./../../hooks/useTransactions";
import TransactionRow from "./../TransactionRow/TransactionRow";
import * as styles from "./TransactionTable.module.css";
import { sortTransactions, SortOrder } from "./../../utils/sortUtils";
import SortableTableHeader from "./../SortableTableHeader/SortableTableHeader";
import { TransactionProps } from "../../types/TransactionProps";
import { tableColumns } from "./../../utils/tableColumns";

const TransactionTable = () => {
  const { transactions } = useTransactions();
  const [sortColumn, setSortColumn] = useState<keyof TransactionProps | null>(
    null,
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [sortedTransactions, setSortedTransactions] = useState<
    TransactionProps[]
  >([]);

  const handleSort = (column: keyof TransactionProps) => {
    const order = column === sortColumn && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);
  };

  useEffect(() => {
    const sortData = async () => {
      const sorted = await sortTransactions(
        transactions,
        sortColumn,
        sortOrder,
      );
      setSortedTransactions(sorted);
    };
    sortData();
  }, [transactions, sortColumn, sortOrder]);

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
            <TransactionRow transaction={transaction} />
          ))}
        </tbody>
      </table>
      <div className={styles["currency-label-bottom"]}>
        Sorting default currency: USD
      </div>
    </div>
  );
};

export default TransactionTable;

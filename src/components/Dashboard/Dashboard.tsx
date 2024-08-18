import React, { useState, useEffect } from "react";
import TransactionTable from "./../TransactionTable/TransactionTable";
import SearchArea from "./../SearchArea/SearchArea";
import {
  filterTransactions,
  DateRange,
  Filter,
} from "./../../utils/filterUtils";
import { TransactionProps } from "./../../types/TransactionProps";
import useTransactions from "./../../hooks/useTransactions";

import * as styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { transactions } = useTransactions();
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionProps[]
  >([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>({ from: "", to: "" });

  useEffect(() => {
    const filtered = filterTransactions(transactions, dateRange, filters);
    setFilteredTransactions(filtered);
  }, [transactions, dateRange, filters]);

  return (
    <>
      <div className={styles["currency-label"]}>
        Sorting default currency: USD
      </div>
      <div className={styles.dashboardContainer}>
        <SearchArea setFilters={setFilters} setDateRange={setDateRange} />
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </>
  );
};

export default Dashboard;

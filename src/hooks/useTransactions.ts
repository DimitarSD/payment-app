import { useState, useEffect } from "react";
import { TransactionProps } from "./../types/TransactionProps";

const useTransactions = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/transactions");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch transactions: ${response.statusText}`,
          );
        }
        const transactions = await response.json();
        setTransactions(transactions);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setTransactions([]);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions };
};

export default useTransactions;

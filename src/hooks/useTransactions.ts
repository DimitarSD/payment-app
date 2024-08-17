import { useState, useEffect } from "react";
import TransactionService from "../services/TransactionService";
import { Transaction } from "./../types/Transaction";

const transactionService = new TransactionService();

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactions = await transactionService.fetchTransactions();
        setTransactions(transactions);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions };
};

export default useTransactions;

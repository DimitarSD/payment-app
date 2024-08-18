import { useState, useEffect } from "react";
import { TransactionProps } from "./../types/TransactionProps";
import TransactionService from "./../services/TransactionService";

const transactionService = new TransactionService();

export const useTransaction = (unique_id: string) => {
  const [transaction, setTransaction] = useState<TransactionProps | null>(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      const data = await transactionService.fetchTransactionById(unique_id);
      if (data) {
        setTransaction(data);
      }
    };

    fetchTransaction();
  }, [unique_id]);

  return { transaction };
};

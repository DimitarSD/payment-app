import { useState, useEffect } from "react";
import { TransactionProps } from "./../types/TransactionProps";

export const useTransaction = (unique_id: string) => {
  const [transaction, setTransaction] = useState<TransactionProps | null>(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/transactions/${unique_id}`,
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch transaction: ${response.statusText}`,
          );
        }
        const data = await response.json();
        setTransaction(data);
      } catch (err) {
        console.error("Error fetching transaction:", err);
        setTransaction(null);
      }
    };

    fetchTransaction();
  }, [unique_id]);

  return { transaction };
};

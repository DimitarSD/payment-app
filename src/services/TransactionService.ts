import { TransactionProps } from "./../types/TransactionProps";

class TransactionService {
  private apiUrl = "http://localhost:3001/api/transactions";

  async fetchTransactions(): Promise<TransactionProps[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch transactions: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      return [];
    }
  }

  async fetchTransactionById(id: string): Promise<TransactionProps | null> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch transaction: ${response.statusText}`);
      }

      const data = await response.json();
      return data as TransactionProps;
    } catch (error) {
      console.error("Error fetching transaction:", error);
      return null;
    }
  }
}

export default TransactionService;

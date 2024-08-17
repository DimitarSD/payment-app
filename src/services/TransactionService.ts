import { Transaction } from "./../types/Transaction";

class TransactionService {
  private apiUrl = "http://localhost:3001/api/transactions";

  async fetchTransactions(): Promise<Transaction[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch transactions: ${response.statusText}`);
      }

      const data = await response.json();

      return data["payment_transactions"];
    } catch (error) {
      console.error("Error fetching transactions:", error);

      return [];
    }
  }
}

export default TransactionService;

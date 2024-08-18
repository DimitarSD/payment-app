import { sortTransactions } from "./../utils/sortUtils";
import { TransactionProps } from "./../types/TransactionProps";

describe("sortUtils", () => {
  const transactions: TransactionProps[] = [
    {
      id: "1",
      unique_id: "abc123",
      status: "approved",
      created_at: "2023-01-01T12:00:00Z",
      merchant_name: "Merchant A",
      terminal_name: "Terminal 1",
      type: "Sale",
      error_class: "None",
      card_holder: "John Doe",
      card_number: "411111...1111",
      amount: 100,
      currency: "USD",
      error_message: "None",
    },
    {
      id: "2",
      unique_id: "def456",
      status: "error",
      created_at: "2023-01-02T12:00:00Z",
      merchant_name: "Merchant B",
      terminal_name: "Terminal 2",
      type: "Refund",
      error_class: "TimeoutError",
      card_holder: "Jane Smith",
      card_number: "411111...2222",
      amount: 200,
      currency: "USD",
      error_message: "Timeout",
    },
  ];

  const mockConversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
  };

  it("sorts transactions by amount ascending", async () => {
    const sorted = await sortTransactions(
      transactions,
      "amount",
      "asc",
      mockConversionRates,
    );
    expect(sorted[0].id).toBe("1");
    expect(sorted[1].id).toBe("2");
  });

  it("sorts transactions by amount descending", async () => {
    const sorted = await sortTransactions(
      transactions,
      "amount",
      "desc",
      mockConversionRates,
    );
    expect(sorted[0].id).toBe("2");
    expect(sorted[1].id).toBe("1");
  });

  it("sorts transactions by date ascending", async () => {
    const sorted = await sortTransactions(
      transactions,
      "created_at",
      "asc",
      mockConversionRates,
    );
    expect(sorted[0].id).toBe("1");
    expect(sorted[1].id).toBe("2");
  });

  it("sorts transactions by date descending", async () => {
    const sorted = await sortTransactions(
      transactions,
      "created_at",
      "desc",
      mockConversionRates,
    );
    expect(sorted[0].id).toBe("2");
    expect(sorted[1].id).toBe("1");
  });
});

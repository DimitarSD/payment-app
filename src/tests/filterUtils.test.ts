import { filterTransactions, Filter, DateRange } from "./../utils/filterUtils";
import { TransactionProps } from "./../types/TransactionProps";

describe("filterUtils", () => {
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

  describe("filterTransactions", () => {
    it("filters transactions by date range (from)", () => {
      const dateRange: DateRange = { from: "2023-01-02T00:00:00Z", to: "" };
      const filtered = filterTransactions(transactions, dateRange, []);
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe("2");
    });

    it("filters transactions by date range (to)", () => {
      const dateRange: DateRange = { from: "", to: "2023-01-01T23:59:59Z" };
      const filtered = filterTransactions(transactions, dateRange, []);
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe("1");
    });

    it("filters transactions by column using 'equal'", () => {
      const filters: Filter[] = [
        { column: "status", matchType: "equal", value: "error" },
      ];
      const filtered = filterTransactions(
        transactions,
        { from: "", to: "" },
        filters,
      );
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe("2");
    });

    it("filters transactions by column using 'starts with'", () => {
      const filters: Filter[] = [
        {
          column: "merchant_name",
          matchType: "starts with",
          value: "Merchant",
        },
      ];
      const filtered = filterTransactions(
        transactions,
        { from: "", to: "" },
        filters,
      );
      expect(filtered.length).toBe(2);
    });

    it("filters transactions by column using 'ends with'", () => {
      const filters: Filter[] = [
        { column: "terminal_name", matchType: "ends with", value: "1" },
      ];
      const filtered = filterTransactions(
        transactions,
        { from: "", to: "" },
        filters,
      );
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe("1");
    });

    it("filters transactions by column using 'contains'", () => {
      const filters: Filter[] = [
        { column: "card_holder", matchType: "contains", value: "Smith" },
      ];
      const filtered = filterTransactions(
        transactions,
        { from: "", to: "" },
        filters,
      );
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe("2");
    });

    it("applies multiple filters together", () => {
      const filters: Filter[] = [
        { column: "status", matchType: "equal", value: "error" },
        {
          column: "merchant_name",
          matchType: "starts with",
          value: "Merchant",
        },
      ];
      const filtered = filterTransactions(
        transactions,
        { from: "", to: "" },
        filters,
      );
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe("2");
    });
  });
});

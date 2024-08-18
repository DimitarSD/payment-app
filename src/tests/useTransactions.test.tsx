import React from "react";
import { render, waitFor } from "@testing-library/react";
import useTransactions from "./../hooks/useTransactions";

global.fetch = jest.fn();

const TestComponent = () => {
  const { transactions } = useTransactions();

  return (
    <div>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id}>{tx.merchant_name}</li>
          ))}
        </ul>
      ) : (
        <div />
      )}
    </div>
  );
};

describe("useTransactions Hook", () => {
  const mockTransactions = [
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
  ];

  beforeEach(() => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      json: async () => mockTransactions,
    } as Response);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches transactions and displays them", async () => {
    const { getByText } = render(<TestComponent />);

    await waitFor(() => {
      expect(getByText("Merchant A")).not.toBeNull();
    });
  });

  it("renders no transaction rows when transactions are empty", async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    } as Response);

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      const rows = container.querySelectorAll("li");
      expect(rows.length).toBe(0);
    });
  });
});

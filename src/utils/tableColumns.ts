import { Transaction } from "./../types/Transaction";

export const tableColumns: { key: keyof Transaction; label: string }[] = [
  { key: "status", label: "Status" },
  { key: "created_at", label: "Created At" },
  { key: "merchant_name", label: "Merchant Name" },
  { key: "type", label: "Type" },
  { key: "error_class", label: "Error Class" },
  { key: "card_holder", label: "Card Holder" },
  { key: "card_number", label: "Card Number" },
  { key: "amount", label: "Amount" },
];

import { ColumnConfig } from "./../types/SortableTableHeaderProps";
import { TransactionProps } from "../types/TransactionProps";

export const tableColumns: ColumnConfig<TransactionProps>[] = [
  { key: "status", label: "Status" },
  { key: "created_at", label: "Created At" },
  { key: "merchant_name", label: "Merchant Name" },
  { key: "terminal_name", label: "Terminal Name", sortable: false },
  { key: "type", label: "Type" },
  { key: "error_class", label: "Error Class" },
  { key: "card_holder", label: "Card Holder" },
  { key: "card_number", label: "Card Number" },
  { key: "amount", label: "Amount" },
];

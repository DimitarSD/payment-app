export type TransactionProps = {
  id: string;
  unique_id: string;
  status: string;
  created_at: string;
  merchant_name: string;
  terminal_name: string;
  type: string;
  error_class: string;
  card_holder: string;
  card_number: string;
  amount: number;
  currency: string;
  error_message: string;
};

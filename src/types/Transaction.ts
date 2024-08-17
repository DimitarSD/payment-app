export type Transaction = {
  id: string;
  status: string;
  created_at: string;
  merchant_name: string;
  type: string;
  error_class: string;
  card_holder: string;
  card_number: string;
  amount: number;
  currency: string;
}
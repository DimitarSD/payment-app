export const formatTransactionType = (type: string): string => {
  return type.replace("Transaction", "");
};

export const formatErrorClass = (errorClass: string): string => {
  if (errorClass.includes("System")) return "System";
  if (errorClass.includes("Remote")) return "Remote";
  return "Unknown";
};

export const formatAmount = (amount: number, currency: string): string => {
  return `${(amount / 100).toFixed(2)} ${currency}`;
};

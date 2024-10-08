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

export const styleTransactionType = (
  type: string,
  styles: { [key: string]: string },
): string => {
  switch (type) {
    case "SaleTransaction":
      return styles.saleTag;
    case "Sale3dTransaction":
      return styles.sale3dTag;
    case "RefundTransaction":
      return styles.refundTag;
    case "AuthorizeTransaction":
      return styles.authorizeTag;
    default:
      return "";
  }
};

import React from "react";
import { TransactionRowProps } from "./../../types/TransactionRowProps";
import * as styles from "./TransactionRow.module.css";

import { formatDate } from "./../../utils/dateUtils";
import {
  formatTransactionType,
  formatErrorClass,
  formatAmount,
} from "./../../utils/transactionUtils";

const TransactionRow = ({ transaction }: TransactionRowProps) => {
  return (
    <tr>
      <td className={styles[`status-${transaction.status.toLowerCase()}`]}>
        {transaction.status}
      </td>
      <td>{formatDate(transaction.created_at)}</td>
      <td>{transaction.merchant_name}</td>
      <td>{formatTransactionType(transaction.type)}</td>
      <td>{formatErrorClass(transaction.error_class)}</td>
      <td>{transaction.card_holder}</td>
      <td>{transaction.card_number}</td>
      <td className={styles.amount}>
        {formatAmount(transaction.amount, transaction.currency)}
      </td>
    </tr>
  );
};

export default TransactionRow;

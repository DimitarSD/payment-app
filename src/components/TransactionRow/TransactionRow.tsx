import React from 'react';
import { TransactionRowProps } from '../../types/TransactionRowProps';
import * as styles from './TransactionRow.module.css';

function TransactionRow({ transaction }: TransactionRowProps) {
  return (
    <tr>
      <td className={styles[`status-${transaction.status.toLowerCase()}`]}>{transaction.status}</td>
      <td>{new Date(transaction.created_at).toLocaleString()}</td>
      <td>{transaction.merchant_name}</td>
      <td>{transaction.type.replace('Transaction', '')}</td>
      <td>{transaction.error_class.split('Error')[0]}</td>
      <td>{transaction.card_holder}</td>
      <td>{transaction.card_number}</td>
      <td className={styles.amount}>
        {(transaction.amount / 100).toFixed(2)} {transaction.currency}
      </td>
    </tr>
  );
}

export default TransactionRow;
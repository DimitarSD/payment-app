import React from 'react';
import useTransactions from '../../hooks/useTransactions';
import TransactionRow from '../TransactionRow/TransactionRow';
import * as styles from './TransactionTable.module.css';

function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <div className={styles['table-container']}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Status</th>
            <th>Created At</th>
            <th>Merchant Name</th>
            <th>Type</th>
            <th>Error Class</th>
            <th>Card Holder</th>
            <th>Card Number</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
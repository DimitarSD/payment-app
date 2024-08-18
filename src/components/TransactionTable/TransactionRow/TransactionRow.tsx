import React from "react";
import { TransactionProps } from "./../../../types/TransactionProps";
import * as styles from "./TransactionRow.module.css";
import * as tagStyles from "./../../../styles/tags.module.css";

import { formatDate } from "./../../../utils/dateUtils";
import {
  formatTransactionType,
  styleTransactionType,
  formatErrorClass,
  formatAmount,
} from "./../../../utils/transactionUtils";

import { Link } from "react-router-dom";
import { getCardType } from "./../../../utils/cardUtils";

type TransactionData = {
  transaction: TransactionProps;
};

const TransactionRow = ({ transaction }: TransactionData) => {
  const cardType = getCardType(transaction.card_number);
  const cardIconSrc = `/icons/${cardType}.png`;
  console.log(cardIconSrc);

  return (
    <tr>
      <td className={styles[`status-${transaction.status.toLowerCase()}`]}>
        {transaction.status}
      </td>
      <td>
        <Link
          to={`/transaction/${transaction.unique_id}`}
          className={styles.link}
        >
          {formatDate(transaction.created_at)}
        </Link>
      </td>
      <td>{transaction.merchant_name}</td>
      <td>{transaction.terminal_name}</td>
      <td>
        <span
          className={`${tagStyles.tag} ${styleTransactionType(
            transaction.type,
            tagStyles,
          )}`}
        >
          {formatTransactionType(transaction.type)}
        </span>
      </td>
      <td>{formatErrorClass(transaction.error_class)}</td>
      <td>{transaction.card_holder}</td>
      <td className={styles.cardNumber}>
        {cardType !== "unknown" && (
          <img
            src={cardIconSrc}
            alt={`${cardType} icon`}
            className={styles.cardIcon}
          />
        )}
        {transaction.card_number}
      </td>
      <td className={styles.amount}>
        {formatAmount(transaction.amount, transaction.currency)}
      </td>
    </tr>
  );
};

export default TransactionRow;

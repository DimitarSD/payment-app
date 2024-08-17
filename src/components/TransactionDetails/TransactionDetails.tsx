import React from "react";
import { useParams } from "react-router-dom";
import * as styles from "./TransactionDetails.module.css";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import CardAccountInfo from "./CardAccountInfo/CardAccountInfo";
import TransactionAmount from "./TransactionAmount/TransactionAmount";
import TransactionField from "./TransactionField/TransactionField";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useTransaction } from "./../../hooks/useTransaction";

import { formatTransactionType } from "./../../utils/transactionUtils";

const TransactionDetails = () => {
  const { unique_id } = useParams<{ unique_id: string }>();
  const { transaction } = useTransaction(unique_id!);

  if (!transaction) {
    return <p>Loading Transaction Details</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <TransactionHeader
        title="Transaction Details"
        status={transaction.status}
      />
      <CardAccountInfo
        cardNumber={transaction.card_number}
        cardHolder={transaction.card_holder}
        createdAt={transaction.created_at}
      />
      <div className={styles.divider}></div>
      <TransactionAmount
        amount={transaction.amount}
        currency={transaction.currency}
        status={transaction.status}
      />
      <div className={styles.subtext}>Amount</div>

      <TransactionField label="Card Number" value={transaction.card_number} />
      <TransactionField
        label="Type"
        value={formatTransactionType(transaction.type)}
        isTag={true}
        tagType={transaction.type}
      />
      <TransactionField
        label="Merchant Name"
        value={transaction.merchant_name}
      />
      <TransactionField
        label="Terminal Name"
        value={transaction.terminal_name}
      />
      <TransactionField
        label="Error Class"
        value={transaction.error_class || "N/A"}
      />

      {transaction.error_class && (
        <ErrorMessage message={transaction.error_message} />
      )}
    </div>
  );
};

export default TransactionDetails;

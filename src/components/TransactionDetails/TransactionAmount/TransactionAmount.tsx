import React from "react";
import * as styles from "./TransactionAmount.module.css";

import { TransactionAmountProps } from "./../../../types/TransactionAmountProps";

const TransactionAmount = ({
  amount,
  currency,
  status,
}: TransactionAmountProps) => {
  const amountClass =
    status === "approved" ? styles["amount-approved"] : styles["amount-error"];

  return (
    <div className={`${styles.amount} ${amountClass}`}>
      ${(amount / 100).toFixed(2)} {currency}
    </div>
  );
};

export default TransactionAmount;

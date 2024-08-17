import React from "react";
import * as styles from "./TransactionHeader.module.css";

import { TransactionHeaderProps } from "./../../../types/TransactionHeaderProps";

const TransactionHeader = ({ title, status }: TransactionHeaderProps) => {
  const statusClass =
    status === "approved" ? styles["status-approved"] : styles["status-error"];

  return (
    <div className={styles.detailsHeader}>
      <h2>{title}</h2>
      <span className={`${styles.status} ${statusClass}`}>{status}</span>
    </div>
  );
};

export default TransactionHeader;

import React from "react";
import * as styles from "./TransactionField.module.css";
import * as tagStyles from "./../../../styles/tags.module.css";
import { styleTransactionType } from "./../../../utils/transactionUtils";
import { TransactionFieldProps } from "./../../../types/TransactionFieldProps";

const TransactionField = ({
  label,
  value,
  isTag = false,
  tagType,
}: TransactionFieldProps) => {
  return (
    <div className={styles.fieldWrapper}>
      <span className={styles.fieldName}>{label}:</span>
      {isTag && tagType ? (
        <span
          className={`${tagStyles.tag} ${styleTransactionType(
            tagType,
            tagStyles,
          )}`}
        >
          {value}
        </span>
      ) : (
        <span className={styles.fieldValue}>{value}</span>
      )}
    </div>
  );
};

export default TransactionField;

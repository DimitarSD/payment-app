import React from "react";
import * as styles from "./CardAccountInfo.module.css";
import { getCardType } from "./../../../utils/cardUtils";

import { CardAccountInfoProps } from "./../../../types/CardAccountInfoProps";

const CardAccountInfo = ({
  cardNumber,
  cardHolder,
  createdAt,
}: CardAccountInfoProps) => {
  const cardType = getCardType(cardNumber);
  const cardIconSrc = `/icons/${cardType}.png`;

  return (
    <div className={styles.cardAccount}>
      {cardType !== "unknown" && (
        <img
          src={cardIconSrc}
          alt={`${cardType} icon`}
          className={styles.cardImage}
        />
      )}
      <div className={styles.accountInfo}>
        <div className={styles.infoBlock}>
          <span className={styles.label}>Card Holder</span>
          <span className={styles.accountName}>{cardHolder}</span>
        </div>
        <div className={`${styles.infoBlock} ${styles.dateBlock}`}>
          <span className={styles.label}>Created At</span>
          <span className={styles.transactionDate}>
            {new Date(createdAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardAccountInfo;

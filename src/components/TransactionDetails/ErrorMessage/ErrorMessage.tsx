import React from "react";
import * as styles from "./ErrorMessage.module.css";

import { ErrorMessageProps } from "./../../../types/ErrorMessageProps";

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className={styles.error}>
    <strong>Error Message:</strong> {message}
  </div>
);

export default ErrorMessage;

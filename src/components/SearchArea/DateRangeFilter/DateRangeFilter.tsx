import React, { useState } from "react";
import * as styles from "./DateRangeFilter.module.css";
import { DateRange } from "./../../../utils/filterUtils";

type DateRangeFilterProps = {
  onDateRangeChange: (range: DateRange) => void;
};

const DateRangeFilter = ({ onDateRangeChange }: DateRangeFilterProps) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFrom(value);
    onDateRangeChange({ from: value, to });
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTo(value);
    onDateRangeChange({ from, to: value });
  };

  return (
    <div className={styles.dateRangeFilter}>
      <div className={styles.dateFilter}>
        <label className={styles.dateLabel} htmlFor="fromDate">
          FROM
        </label>
        <input
          id="fromDate"
          type="datetime-local"
          value={from}
          onChange={handleFromChange}
          className={styles.dateInput}
        />
      </div>
      <div className={styles.dateFilter}>
        <label className={styles.dateLabel} htmlFor="toDate">
          TO
        </label>
        <input
          id="toDate"
          type="datetime-local"
          value={to}
          onChange={handleToChange}
          className={styles.dateInput}
        />
      </div>
    </div>
  );
};

export default DateRangeFilter;

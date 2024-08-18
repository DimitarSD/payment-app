import React from "react";
import * as styles from "./SelectedFilter.module.css";
import { Filter } from "./../../../utils/filterUtils";

type SelectedFilterProps = {
  filter: Filter;
  onRemove: () => void;
};

const SelectedFilter = ({ filter, onRemove }: SelectedFilterProps) => {
  return (
    <div className={styles.selectedFilter}>
      <span>
        {filter.column} {filter.matchType} &#34;{filter.value}&#34;
      </span>
      <button onClick={onRemove} className={styles.removeButton}>
        &times;
      </button>
    </div>
  );
};

export default SelectedFilter;

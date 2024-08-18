import React, { useState, useEffect } from "react";
import * as styles from "./FilterDropdown.module.css";
import { Filter } from "./../../../utils/filterUtils";
import { TransactionProps } from "./../../../types/TransactionProps";

type FilterDropdownProps = {
  onAddFilter: (filter: Filter) => void;
  filters: Filter[];
};

const FilterDropdown = ({ onAddFilter, filters }: FilterDropdownProps) => {
  const availableColumns: Array<keyof TransactionProps> = [
    "status",
    "merchant_name",
    "terminal_name",
    "type",
    "error_class",
    "card_holder",
    "card_number",
    "amount",
    "currency",
  ];

  const [filteredColumns, setFilteredColumns] = useState(availableColumns);
  const [selectedColumn, setSelectedColumn] = useState(availableColumns[0]);
  const [matchType, setMatchType] = useState<Filter["matchType"]>("contains");
  const [value, setValue] = useState("");

  useEffect(() => {
    const updatedColumns = availableColumns.filter(
      (column) => !filters.some((filter) => filter.column === column),
    );
    setFilteredColumns(updatedColumns);

    if (!updatedColumns.includes(selectedColumn)) {
      setSelectedColumn(updatedColumns[0] || "");
    }
  }, [filters]);

  const handleAddFilter = () => {
    if (value.trim() === "" || !selectedColumn) return;
    onAddFilter({
      column: selectedColumn,
      matchType,
      value: value.toLocaleLowerCase(),
    });
    setValue("");
  };

  return (
    <div className={styles.filterDropdownWrapper}>
      <div className={styles.filterDropdown}>
        <div className={styles.fieldWrapper}>
          <label className={styles.fieldLabel}>FILTERS</label>
          <select
            value={selectedColumn}
            onChange={(e) =>
              setSelectedColumn(e.target.value as keyof TransactionProps)
            }
            className={styles.select}
          >
            {filteredColumns.map((column) => (
              <option key={column} value={column}>
                {column}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.fieldWrapper}>
          <label className={styles.fieldLabel}>MATCHED BY</label>
          <select
            value={matchType}
            onChange={(e) =>
              setMatchType(e.target.value as Filter["matchType"])
            }
            className={styles.select}
          >
            <option value="equal">Equal</option>
            <option value="starts with">Starts With</option>
            <option value="ends with">Ends With</option>
            <option value="contains">Contains</option>
          </select>
        </div>

        <div className={styles.fieldWrapper}>
          <label className={styles.fieldLabel}>VALUE</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.textInput}
            placeholder="Value"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button
            onClick={handleAddFilter}
            className={styles.addButton}
            disabled={filteredColumns.length === 0}
          >
            Add Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;

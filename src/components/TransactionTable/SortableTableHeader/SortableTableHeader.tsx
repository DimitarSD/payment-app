import React from "react";
import * as styles from "./SortableTableHeader.module.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { SortableTableHeaderProps } from "./../../../types/SortableTableHeaderProps";

const SortableTableHeader = <T,>({
  columns,
  sortColumn,
  sortOrder,
  handleSort,
}: SortableTableHeaderProps<T>) => {
  return (
    <tr>
      {columns.map((column) => {
        const isActive = sortColumn === column.key;
        const sortClass = isActive
          ? sortOrder === "asc"
            ? styles["sorted-asc"]
            : styles["sorted-desc"]
          : "";

        return (
          <th
            key={String(column.key)}
            onClick={
              column.sortable !== false
                ? () => handleSort(column.key)
                : undefined
            }
            className={`${column.sortable !== false ? styles.sortable : styles.nonSortable} ${sortClass}`}
          >
            {column.label}
          </th>
        );
      })}
    </tr>
  );
};

export default SortableTableHeader;

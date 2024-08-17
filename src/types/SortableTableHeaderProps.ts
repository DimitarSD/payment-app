export type ColumnConfig<T> = {
  key: keyof T;
  label: string;
}

export type SortableTableHeaderProps<T> = {
  columns: ColumnConfig<T>[];
  sortColumn: keyof T | null;
  sortOrder: "asc" | "desc";
  handleSort: (columnKey: keyof T) => void;
}
import React, { useState } from "react";
import * as styles from "./SearchArea.module.css";
import DateRangeFilter from "./DateRangeFilter/DateRangeFilter";
import FilterDropdown from "./FilterDropdown/FilterDropdown";
import SelectedFilter from "./SelectedFilter/SelectedFilter";
import { DateRange, Filter } from "./../../utils/filterUtils";

type SearchAreaProps = {
  setFilters: (filters: Filter[]) => void;
  setDateRange: (dateRange: DateRange) => void;
};

const SearchArea = ({ setFilters, setDateRange }: SearchAreaProps) => {
  const [filters, updateFilters] = useState<Filter[]>([]);

  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range);
  };

  const handleAddFilter = (filter: Filter) => {
    const updatedFilters = [...filters, filter];
    updateFilters(updatedFilters);
    setFilters(updatedFilters);
  };

  const handleRemoveFilter = (index: number) => {
    const updatedFilters = filters.filter((_, i) => i !== index);
    updateFilters(updatedFilters);
    setFilters(updatedFilters);
  };

  return (
    <div className={styles.searchArea}>
      <div className={styles.filterControls}>
        <DateRangeFilter onDateRangeChange={handleDateRangeChange} />
        <FilterDropdown onAddFilter={handleAddFilter} filters={filters} />
      </div>
      <div className={styles.selectedFiltersContainer}>
        {filters.map((filter, index) => (
          <SelectedFilter
            key={index}
            filter={filter}
            onRemove={() => handleRemoveFilter(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchArea;

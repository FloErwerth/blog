import {ComponentState} from "react";

type filterReturn = { value: boolean, index?: number }

export const hasKeyword = (entry: JSX.Element, currentFilter: string[]): boolean => {
  if (currentFilter.length === 0) {
    return true;
  }
  const categories = entry.props.categories;
  for (let j = 0; j < currentFilter.length; j++) {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].toLowerCase() == currentFilter[j]) {
        return true;
      }
    }
  }

  return false;
};

export const setNewFilter = (filterName: string, currentFilter: string[], setCurrentFilter: ComponentState): void => {
  let filters = currentFilter;
  const filterData = hasFilter(filterName, currentFilter);
  if (filterData.value) {
    filters.splice(filterData.index, 1);
  } else {
    filters.push(filterName);
  }
  setCurrentFilter([...filters]);
};

export const hasFilter = (filterName: string, currentFilter: string[]): filterReturn => {
  for (let i = 0; i < currentFilter.length; i++) {
    if (currentFilter[i] === filterName) return {value: true, index: i};
  }
  return {value: false, index: undefined};
};

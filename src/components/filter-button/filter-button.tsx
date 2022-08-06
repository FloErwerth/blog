import * as React from "react";
import "./filter-button.scss";
import {useCallback} from "react";

interface Props {
  filterName: string;
  filter: React.ComponentState;
}

const getFilter = (filterName: string) => {
  console.log("filter");
  document.getElementById(filterName).toggleAttribute("toggled");
}

function FilterButton(props: Props) {

  const handleClick = useCallback(() => {
    props.filter(props.filterName.toLowerCase());
    getFilter(props.filterName);
  }, []);

  return (
    <div
      id={props.filterName}
      className="filter-button"
      onClick={handleClick}
    >
      {props.filterName}
    </div>
  );
}

export default FilterButton;

import * as React from "react";
import "./filter-button.scss";

interface Props {
  filterName: string;
  filter: React.ComponentState;
}

function FilterButton(props: Props) {
  return (
    <div
      id={props.filterName}
      className="filter-button"
      onClick={() => {
        props.filter(props.filterName.toLowerCase());
        document.getElementById(props.filterName).toggleAttribute("toggled");
      }}
    >
      {props.filterName}
    </div>
  );
}

export default FilterButton;

import React from "react";
import "./filter-button.scss";
function FilterButton(props) {
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

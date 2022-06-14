import React from "react";
import "./entry-list-element.scss";
function EntryListElement(props) {
  const handleClick = () => {
    if (props.clickRef === undefined) return;
    props.clickRef.current.scrollIntoView();
  };
  return (
    <li className="entry-list-element" onClick={handleClick}>
      {props.children}
    </li>
  );
}

export default EntryListElement;

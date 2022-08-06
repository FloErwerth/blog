import * as React from "react";
import "./entry-list-element.scss";

interface Props {
  reference: React.RefObject<HTMLElement>;
  children: React.ReactElement;
}

function EntryListElement(props: Props) {
  const handleClick = () => {
    if (props.reference === undefined) return;
    props.reference.current.scrollIntoView();
  };
  return (
    <li className="entry-list-element" onClick={handleClick}>
      {props.children}
    </li>
  );
}

export default EntryListElement;

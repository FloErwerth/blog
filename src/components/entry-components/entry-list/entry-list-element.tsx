import * as React from "react";
import "./entry-list-element.scss";
import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren{
  reference: React.RefObject<HTMLElement>;
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

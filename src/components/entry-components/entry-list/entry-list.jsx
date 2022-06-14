import React from "react";
import EntryListElement from "./entry-list-element";

function EntryList(props) {
  return <ul style={{ marginBottom: "60px" }}>{props.children}</ul>;
}
EntryList.Element = (props) => (
  <EntryListElement
    onClick={() => {
      console.log(props);
    }}
    clickRef={props.clickRef}
  >
    {props.children}
  </EntryListElement>
);
export default EntryList;

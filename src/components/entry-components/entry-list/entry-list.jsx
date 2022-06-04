import React from "react";
import EntryListElement from "./entry-list-element";

function EntryList(props) {
  return <ul>{props.children}</ul>;
}
EntryList.Element = EntryListElement;
export default EntryList;

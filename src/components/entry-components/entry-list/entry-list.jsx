import React from "react";

function EntryList(props) {
  return <ul style={{ marginBottom: "60px" }}>{props.children}</ul>;
}

export default EntryList;

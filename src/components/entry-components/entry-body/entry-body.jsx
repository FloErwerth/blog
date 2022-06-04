import React from "react";
import "./entry-body.scss";

function EntryBody(props) {
  return <div className="entry-body">{props.children}</div>;
}

export default EntryBody;

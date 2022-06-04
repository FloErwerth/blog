import React from "react";
import "./entry-body.scss";

function EntryBody(props) {
  return <div className="entry-body">{props.children}</div>;
}

EntryBody.Text = (props) => <p className="entry-body-text">{props.children}</p>;
EntryBody.Subtitle = (props) => <h3 ref={props.ref}>{props.children}</h3>;
export default EntryBody;

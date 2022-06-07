import React from "react";
import "./entry-body.scss";
import EntryBodyImage from "../entry-body-image/entry-body-image";

function EntryBody(props) {
  return <div className="entry-body">{props.children}</div>;
}

EntryBody.Text = (props) => <p className="entry-body-text">{props.children}</p>;
EntryBody.Subtitle = (props) => <h3 ref={props.ref}>{props.children}</h3>;
EntryBody.Link = (props) => (
  <a className="entry-body-link" target={props.target} href={props.href}>
    {props.children}
  </a>
);
EntryBody.Image = (props) => (
  <EntryBodyImage id={props.id} src={props.src} placement={props.placement}>
    {props.children}
  </EntryBodyImage>
);
export default EntryBody;

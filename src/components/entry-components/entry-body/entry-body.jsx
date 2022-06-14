import React, { useEffect, useState } from "react";
import "./entry-body.scss";
import EntryBodyImage from "../entry-body-image/entry-body-image";
function EntryBody(props) {
  return <div className="entry-body">{props.children}</div>;
}

EntryBody.Text = (props) => <p className="entry-body-text">{props.children}</p>;
EntryBody.Subtitle = (props) => <h3 ref={props.reference}>{props.children}</h3>;
EntryBody.Link = (props) => (
  <a className="entry-body-link" target="_blank" href={props.href}>
    {props.children}
  </a>
);
EntryBody.Image = (props) => (
  <EntryBodyImage id={props.id} src={props.src} width={props.width}>
    {props.children}
  </EntryBodyImage>
);
EntryBody.Highlight = (props) => {
  return (
    <div
      id={props.id}
      className="entry-body-highlight"
      style={{ marginBottom: props.spacing !== undefined ? "3px" : "0" }}
    >
      {props.children}
    </div>
  );
};
EntryBody.Button = (props) => {
  const anim = "entry-body-copybutton-notification-anim";
  const id = props.children.props.id;
  const text = props.children.props.children;
  const handleClick = () => {
    if (id === undefined) {
      return;
    }
    navigator.clipboard.writeText(text);
    document.getElementById(id + "-notification").classList.add(anim);
    setTimeout(() => {
      document.getElementById(id + "-notification").classList.remove(anim);
    }, 1000);
  };
  return (
    <div className="entry-body-copybutton-container" onClick={handleClick}>
      {props.children}
      <svg class="entry-body-copybutton" viewBox="0 0 200 200">
        <g style={{ transform: "translateY(40px)" }}>
          <path d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z" />
        </g>
      </svg>
      <div
        id={props.children.props.id + "-notification"}
        className="entry-body-copybutton-notification"
      >
        Copied!
      </div>
    </div>
  );
};
export default EntryBody;

import React, { useEffect, useState } from "react";
import "./entry-body.scss";
import EntryBodyImage from "../entry-body-image/entry-body-image";
import { navigateTo } from "../../../..";
function EntryBody(props) {
  const handleReturn = () => {
    navigateTo("/");
  };
  return (
    <>
      <button className="entry-body-button" onClick={handleReturn}>
        RETURN
      </button>
      <div ref={props.reference} className="entry-body">
        <button
          className="entry-body-return"
          onClick={() => {
            props.reference.current.scrollIntoView();
          }}
        ></button>
        {props.children}
      </div>
    </>
  );
}

EntryBody.Text = (props) => <p className="entry-body-text">{props.children}</p>;
EntryBody.Subtitle = (props) => (
  <h3 style={{ marginBottom: "60px", marginTop: "60px" }} ref={props.reference}>
    {props.children}
  </h3>
);
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
      style={{
        marginBottom: props.spacing !== undefined ? "3px" : "0",
      }}
    >
      {props.children}
    </div>
  );
};

EntryBody.Button = (props) => {
  const id = props.children.props.id;
  const text = props.children.props.children;
  const handleClick = () => {
    if (id === undefined) {
      return;
    }
    navigator.clipboard.writeText(text);
    const notification = document.getElementById(id + "-notification");
    const children = document.getElementById(id + "-children");
    const div = document.getElementById(id);
    notification.style.top = 0 + "px";
    notification.style.lineHeight = div.clientHeight + "px";
    children.style.top = div.clientHeight + "px";

    setTimeout(() => {
      notification.style.top = -div.clientHeight + "px";
      children.style.top = 0;
    }, 1500);
  };
  return (
    <div
      id={id}
      className="entry-body-copybutton-container"
      onClick={handleClick}
    >
      <div
        id={props.children.props.id + "-notification"}
        className="entry-body-copybutton-notification"
      >
        Copied!
      </div>
      <div
        className="entry-body-copybutton-children"
        id={props.children.props.id + "-children"}
      >
        {props.children}
      </div>
    </div>
  );
};
export default EntryBody;

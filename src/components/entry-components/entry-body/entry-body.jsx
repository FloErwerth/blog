import React, { useEffect } from "react";
import "./entry-body.scss";
import EntryBodyImage from "../entry-body-image/entry-body-image";
import EntryList from "../entry-list/entry-list";
import EntryListElement from "../entry-list/entry-list-element";
import EntryBodyCode from "../entry-body-code/entry-body-code";

function EntryBody(props) {
  useEffect(() => {
    if (props.reference === null || props.reference === undefined) return;
    props.reference.current.scrollIntoView();
  }, []);
  return (
    <div ref={props.reference} className="entry-body">
      {props.hideScrollButton ||
      props.reference === null ||
      props.reference === undefined ? null : (
        <div
          className="entry-body-scrolltotop"
          onClick={() => {
            props.reference.current.scrollIntoView();
          }}
        />
      )}
      {props.children}
    </div>
  );
}

EntryBody.Text = (props) => (
  <div className="entry-body-text">{props.children}</div>
);

EntryBody.Title = (props) => <h1 ref={props.reference}>{props.children}</h1>;

EntryBody.Subtitle = (props) => (
  <h2 style={{ marginBottom: "60px", marginTop: "60px" }} ref={props.reference}>
    {props.children}
  </h2>
);
EntryBody.Link = (props) => (
  <a className="entry-body-link" target="_blank" href={props.href}>
    {props.children}
  </a>
);
EntryBody.Image = (props) => (
  <EntryBodyImage
    id={props.id}
    alt={props.alt}
    src={props.src}
    width={props.width}
  >
    {props.children}
  </EntryBodyImage>
);
EntryBody.List = (props) => (
  <EntryList reference={props.reference}>{props.children}</EntryList>
);
EntryBody.ListElement = (props) => (
  <EntryListElement reference={props.reference}>
    {props.children}
  </EntryListElement>
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

EntryBody.Code = (props) => (
  <EntryBodyCode language={props.language}>{props.children}</EntryBodyCode>
);

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

import {PropsWithChildren, ReactElement, RefObject, useEffect} from "react";
import * as React from "react";
import "./entry-body.scss";
import EntryBodyImage, {EntryBodyImageProps} from "../entry-body-image/entry-body-image";
import EntryList from "../entry-list/entry-list";
import EntryListElement from "../entry-list/entry-list-element";
import EntryBodyCode from "../entry-body-code/entry-body-code";
import {EntryBodyCodeProps} from "../entry-body-code/entry-body-code";
import EntryBodyButton from "../entry-body-button/entry-body-button";

interface Props extends PropsWithChildren{
  reference: RefObject<HTMLDivElement>,
  hideScrollButton?: boolean,
}

function EntryBody(props: Props) {

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

EntryBody.Text = (props: PropsWithChildren) => (
  <div className="entry-body-text">{props.children}</div>
);

EntryBody.Title = (props: Props) => <h1 ref={props.reference}>{props.children}</h1>;

EntryBody.Subtitle = (props: Props) => (
  <h2 style={{ marginBottom: "60px", marginTop: "60px" }} ref={props.reference}>
    {props.children}
  </h2>
);

interface LinkProps extends PropsWithChildren{
  href: string,
}
EntryBody.Link = (props: LinkProps) => (
  <a className="entry-body-link" target="_blank" href={props.href}>
    {props.children}
  </a>
);

EntryBody.Image = (props: EntryBodyImageProps) => (
  <EntryBodyImage
    id={props.id}
    alt={props.alt}
    src={props.src}
    width={props.width}
  >
    {props.children}
  </EntryBodyImage>
);

interface ListProps {
  children: ReactElement,
  reference?: RefObject<HTMLDivElement>,
}
EntryBody.List = (props: ListProps) => (
  <EntryList>{props.children}</EntryList>
);

EntryBody.ListElement = (props: Props) => (
  <EntryListElement reference={props.reference}>
    {props.children}
  </EntryListElement>
);

interface HighlightProps {
  spacing?: boolean,
  id?: string,
  children: ReactElement,
}

EntryBody.Highlight = (props: HighlightProps) => {
  return (
    <div
      id={props.id}
      className="entry-body-highlight"
      style={{
        marginBottom: props.spacing ? "3px" : "0",
      }}
    >
      {props.children}
    </div>
  );
};


EntryBody.Code = (props: EntryBodyCodeProps) => (
  <EntryBodyCode language={props.language}>{props.children}</EntryBodyCode>
);

EntryBody.Button = EntryBodyButton;

export default EntryBody;

import * as React from "react";
import {ReactElement, useCallback} from "react";

interface Props {
  children: ReactElement,
}

const EntryBodyButton = (props: Props) => {
  const id = props.children.props.id;
  const text = props.children.props.children;

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(text);
    const notification = document.getElementById(id + "-notification");
    const children = document.getElementById(id + "-children");
    const div = document.getElementById(id);
    notification.style.top = 0 + "px";
    notification.style.lineHeight = div.clientHeight + "px";
    children.style.top = div.clientHeight + "px";

    setTimeout(() => {
      notification.style.top = -div.clientHeight + "px";
      children.style.top = "0";
    }, 1500);
  }, []);


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

export default EntryBodyButton;
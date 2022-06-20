import "./linkButton.scss";
import arrow from "./pictures/arrow.svg";
import React from "react";
function LinkButton(props) {
  const linkEvent = new Event("link-click", {
    bubbles: "true",
  });
  const handleClick = () => {
    document.dispatchEvent(linkEvent);
    if (props.onClick !== undefined) {
      props.onClick();
    }
    const link = document.createElement("a");
    link.href = "/#" + props.to;
    link.onclick = () => link.remove();
    setTimeout(() => {
      link.click();
    }, 750);
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="link-button"
      id="link-button"
      style={{ margin: props.margin ? 0 : "auto" }}
    >
      {props.children}
      <img className="link-arrow" src={arrow} />
    </div>
  );
}

export default LinkButton;

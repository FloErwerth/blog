import React from "react";
import "./header-link.scss";
import { navigateTo } from "../../../..";

function HeaderLink(props) {
  const handleClick = () => {
    navigateTo(props.to);
  };

  return (
    <a
      id={props.to}
      className="header-link header-link-title"
      onClick={handleClick}
      isActive={props.isActive !== undefined ? "true" : "false"}
    >
      {props.title}
    </a>
  );
}

export default HeaderLink;

import React from "react";
import "./header-link.scss";
import { navigateTo } from "../../../..";
function HeaderLink(props) {
  const handleClick = (e) => {
    navigateTo(props.to);
    props.onClick(e);
  };
  return (
    <a
      id={props.to}
      className="header-link header-link-title"
      onClick={(e) => handleClick(e)}
    >
      {props.title}
    </a>
  );
}

export default HeaderLink;

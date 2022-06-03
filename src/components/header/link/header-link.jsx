import React from "react";
import "./header-link.scss";
import { navigateTo } from "../../../..";
function HeaderLink(props) {
  const handleClick = () => {
    navigateTo(props.to);
  };
  return (
    <div className="header-link" onClick={handleClick}>
      <div className="header-link-title">{props.title}</div>
    </div>
  );
}

export default HeaderLink;

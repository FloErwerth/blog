import React from "react";
import "./header-link.scss";
function HeaderLink(props) {
  return (
    <div className="header-link">
      <div className="header-link-title">{props.title}</div>
    </div>
  );
}

export default HeaderLink;

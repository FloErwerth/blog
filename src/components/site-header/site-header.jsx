import React from "react";
import "./site-header.scss";
function SiteHeader(props) {
  return <div className="site-header">{props.title}</div>;
}

export default SiteHeader;

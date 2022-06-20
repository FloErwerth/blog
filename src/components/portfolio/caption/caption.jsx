import "./caption.scss";
import React from "react";
function Caption(props) {
  return <div className="caption">{props.children}</div>;
}

export default Caption;

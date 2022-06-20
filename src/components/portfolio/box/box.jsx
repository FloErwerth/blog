import "./box.scss";
import React from "react";
function Box(props) {
  return (
    <div className="box">
      <div className="box-type">{props.boxType}</div>
      {props.boxType === "Link" ? (
        <a href={props.href} target="_blank" className="box-text box-link">
          {props.text}
        </a>
      ) : (
        <div className="box-text">{props.text}</div>
      )}
    </div>
  );
}

export default Box;

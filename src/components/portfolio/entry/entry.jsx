import "./entry.scss";
import Caption from "../caption/caption";
import React from "react";
function Entry(props) {
  return (
    <>
      <Caption>{props.caption}</Caption>
      {props.text !== undefined ? (
        <div className="entry-text">
          <div className="entry-shift"></div>
          {props.text}
        </div>
      ) : null}
    </>
  );
}

export default Entry;

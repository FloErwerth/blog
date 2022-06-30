import React, { useState } from "react";
import "./entry-body-image.scss";
function EntryBodyImage(props) {
  return (
    <div id={props.id} className="entry-body-image">
      <img
        src={props.src}
        className="entry-body-image-image"
        width={props.width + "px"}
        alt={props.alt}
      ></img>
    </div>
  );
}

export default EntryBodyImage;

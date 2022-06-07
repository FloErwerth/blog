import React, { useState } from "react";
import "./entry-body-image.scss";
function EntryBodyImage(props) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleClick = () => {
    setIsFullscreen(true);
  };
  return (
    <>
      <div id={props.id} className="entry-body-image">
        {props.placement == "left" ? (
          <>
            <img
              src={props.src}
              onClick={handleClick}
              style={{ width: "100%", height: "100%" }}
            ></img>
            <div className="entry-body-image-text">{props.children}</div>
          </>
        ) : (
          <>
            <div className="entry-body-image-text">{props.children}</div>
            <img
              src={props.src}
              onClick={handleClick}
              style={{ width: "100%", height: "100%" }}
            ></img>
          </>
        )}
      </div>
    </>
  );
}

export default EntryBodyImage;

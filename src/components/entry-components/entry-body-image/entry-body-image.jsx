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
        <>
          <img
            lazy
            src={props.src}
            className="entry-body-image-image"
            style={{
              width: `95%`,
            }}
            onClick={handleClick}
          ></img>
          <div className="entry-body-image-text">{props.children}</div>
        </>
      </div>
    </>
  );
}

export default EntryBodyImage;

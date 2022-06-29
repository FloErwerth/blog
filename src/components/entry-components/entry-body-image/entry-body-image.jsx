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
            src={props.src}
            className="entry-body-image-image"
            onClick={handleClick}
            width={props.width + "px"}
          ></img>
        </>
      </div>
    </>
  );
}

export default EntryBodyImage;

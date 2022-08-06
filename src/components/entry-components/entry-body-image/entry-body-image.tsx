import * as React from "react";
import "./entry-body-image.scss";

interface Props {
  id: string,
  src: string,
  width: string | number,
  alt: string,
}

function EntryBodyImage(props: Props) {
  return (
    <div id={props.id} className="entry-body-image">
      <img
        src={props.src}
        className="entry-body-image-image"
        width={props.width + "px"}
        alt={props.alt}
        loading="lazy"
      ></img>
    </div>
  );
}

export default EntryBodyImage;

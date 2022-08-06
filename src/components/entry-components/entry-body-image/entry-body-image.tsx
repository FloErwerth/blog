import * as React from "react";
import "./entry-body-image.scss";
import {PropsWithChildren} from "react";

export interface EntryBodyImageProps extends PropsWithChildren{
  id: string,
  src: string,
  width: string | number,
  alt: string,
}

function EntryBodyImage(props: EntryBodyImageProps) {
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

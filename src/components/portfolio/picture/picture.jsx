import "./picture.scss";
import React from "react";
function Picture(props) {
  return (
    <>
      <div
        className="picture"
        style={{
          backgroundImage: `url(${props.src})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="picture-description">{props.description}</div>
    </>
  );
}

export default Picture;

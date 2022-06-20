import "./pictureBox.scss";
import React from "react";
function PictureBox(props) {
  return (
    <>
      <div className="picture-box-header">Media</div>
      <div className="picture-box">{props.children}</div>
    </>
  );
}

export default PictureBox;

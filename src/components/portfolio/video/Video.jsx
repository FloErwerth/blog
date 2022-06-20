import "./video.scss";
import React from "react";
function Video(props) {
  return (
    <div className="video-container">
      <video autoPlay loop style={{ width: "100%" }}>
        <source src={props.src} type={"video/" + props.type} />
      </video>
      <div className="video-description">{props.description}</div>
    </div>
  );
}

export default Video;

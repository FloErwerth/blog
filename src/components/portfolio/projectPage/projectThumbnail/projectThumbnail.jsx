import "./projectThumbnail.scss";
import React from "react";
function ProjectThumbnail(props) {
  const handleClick = () => {
    props.handleClick(props.id);
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
    >
      <div className="project-thumbnail-container">
        <img className="project-thumbnail" id={props.id} src={props.src} />
        <div className="project-thumbnail-title">{props.text}</div>
      </div>
      <div className="project-thumbnail-description">{props.description}</div>
    </div>
  );
}

export default ProjectThumbnail;

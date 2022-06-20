import React from "react";
import "./project.scss";
function Project(props) {
  return (
    <div id={props.id} className="project show-project">
      <div className="project-header">
        <div className="project-header-text">
          {props.headerText}
          <div className="project-header-duration">{props.duration}</div>
        </div>

        <button
          className="project-return"
          onClick={() => {
            document.getElementById(props.id).classList.remove("show-project");
            document.getElementById(props.id).classList.add("hide-project");
            setTimeout(() => {
              document
                .getElementById(props.id)
                .classList.remove("hide-project");
              document.getElementById(props.id).classList.add("show-project");
              props.return();
            }, 750);
          }}
        >
          RETURN
        </button>
      </div>
      {props.component}
    </div>
  );
}

export default Project;

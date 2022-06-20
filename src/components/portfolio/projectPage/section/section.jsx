import "./section.scss";
import React from "react";
function Section(props) {
  return (
    <div className="section">
      <div className="section-description">{props.description}</div>
      <div className="section-container">{props.children}</div>
    </div>
  );
}

export default Section;

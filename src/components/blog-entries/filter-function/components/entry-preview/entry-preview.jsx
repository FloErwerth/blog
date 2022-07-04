import React from "react";
import "./entry-preview.scss";
function EntryPreview(props) {
  return (
    <div className="entry-preview">
      <h1 className="entry-preview-title">{props.title}</h1>
      <div className="entry-preview-text">{props.text}</div>
      <div className="entry-preview-categories">
        {props.categories.map((category) => {
          return (
            <div className="entry-preview-category" key={Math.random() * 1000}>
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EntryPreview;

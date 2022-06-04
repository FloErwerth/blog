import React from "react";
import "./blog-card.scss";
import pic from "./Foto_Florian.jpg";
import { navigateTo } from "../../../index.js";

function BlogCard(props) {
  const handleTextClick = () => {
    if (props.to === undefined) return;
    navigateTo(props.to);
  };

  const handleImageClick = () => {
    navigateTo("/about");
  };

  return (
    <div className="blog-card" id={props.id}>
      {props.picture !== undefined ? (
        <div className="blog-card-picture">{props.picture}</div>
      ) : null}
      <div className="blog-card-content" onClick={handleTextClick}>
        <div className="blog-card-title">{props.title}</div>
        <div className="blog-card-text">{props.text}</div>
      </div>
      <div className="blog-card-credentials">
        <div
          onClick={handleImageClick}
          className="blog-card-image"
          style={{
            backgroundImage: `url(${pic})`,
            backgroundSize: "200% 240%",
            backgroundPosition: "-3px -10px",
          }}
        ></div>
        <div className="blog-card-metadata">
          {props.author}
          <div className="blog-card-date">
            {props.date} - {props.time} mins reading
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

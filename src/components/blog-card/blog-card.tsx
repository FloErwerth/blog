import * as React from "react";
import {navigateTo} from "../../util/navigateTo";
import "./blog-card.scss";
import {getPicture} from "../../media/pictures";

interface Props {
  to: string;
  title: string;
  text: string;
  categories: string[];
  author: string;
  date: string;
  time: string;
}

function BlogCard(props: Props) {
  const handleTextClick = () => {
    if (props.to === undefined) return;
    navigateTo(props.to);
  };

  const handleImageClick = () => {
    navigateTo("/about");
  };

  return (
    <div className="blog-card" id="blog-card">
      <div className="blog-card-content" onClick={handleTextClick}>
        <div className="blog-card-title">{props.title}</div>
        <div className="blog-card-text">{props.text}</div>
        <div className="blog-card-categories">
          {props.categories.map((category) => {
            return (
              <div className="blog-card-category" key={Math.random() * 1000}>
                {category}
              </div>
            );
          })}
        </div>
      </div>
      <div className="blog-card-credentials">
        <div
          onClick={handleImageClick}
          className="blog-card-image"
          style={{
            backgroundImage: `url(${getPicture("PictureFlorian")})`,
            backgroundSize: "200% 240%",
            backgroundPosition: "-3px -10px",
          }}
        ></div>
        <div className="blog-card-metadata">
          {props.author}
          <div className="blog-card-date">
            {props.date} - {props.time} mins
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

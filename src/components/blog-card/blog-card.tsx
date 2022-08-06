import * as React from "react";
import {navigateTo} from "../../util/navigateTo";
import "./blog-card.scss";
import {pictures, wrapInUrl} from "../../media/pictures";
import {useCallback} from "react";

export interface Props {
  to: string;
  title: string;
  text: string;
  categories: string[];
  author: string;
  date: string;
  time: string;
}

const handleImageClick = () => {
  navigateTo("/about");
};

function BlogCard(props: Props) {

  const handleTextClick = useCallback(() => {
    navigateTo(props.to);
  }, [props.to]);


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
            backgroundImage: wrapInUrl(pictures.PictureFlorian),
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

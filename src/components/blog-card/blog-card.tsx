import * as React from "react";
import {useCallback, useId} from "react";
import {Endpoint, navigateTo} from "../../util/navigateTo";
import "./blog-card.scss";
import {pictures, wrapInUrl} from "../../media/pictures";

interface Props {
  to: Endpoint;
  title: string;
  text: string;
  categories: string[];
  author: string;
  date: string;
  time: string;
  filtered: boolean;
}

const handleImageClick = () => {
  navigateTo(Endpoint.About);
};

function BlogCard(props: Props) {

  const getClassName = useCallback(
    () => {
      return props.filtered ? "blog-card blog-card-filtered" : "blog-card"
    },
    [props.filtered],
  );

  const handleTextClick = useCallback(() => {
    navigateTo(props.to);
  }, [props.to]);

  return (
    <div className={getClassName()} id="blog-card">
      <div className="blog-card-content" onClick={handleTextClick}>
        <div className="blog-card-title">{props.title}</div>
        <div className="blog-card-text">{props.text}</div>
        <div className="blog-card-categories">
          {props.categories.map((category) => {
            return (
              <div className="blog-card-category" key={useId()}>
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

BlogCard.defaultProps = {
  filtered: false,
  author: "Florian Erwerth",
}

export default BlogCard;

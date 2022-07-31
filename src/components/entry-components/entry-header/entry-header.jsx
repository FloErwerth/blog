import * as React from "react";
import "./entry-header.scss";
import {getPicture} from "../../../media/pictures";
import {navigateTo} from "../../../util/navigateTo";
import { Helmet } from "react-helmet-async";

function EntryHeader(props) {
  const handleImageClick = () => {
    navigateTo("/about");
  };
  const handleReturn = () => {
    navigateTo("/");
  };

  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description}></meta>
        <link rel="canonical" href={props.canonical}></link>
      </Helmet>
      <div id="entry-header" className="entry-header">
        <button className="entry-header-return" onClick={handleReturn}>
          RETURN
        </button>
        <div className="entry-header-wrapper">
          <div className="entry-header-date">
            {props.date} - {props.time} mins reading
          </div>
        </div>
        <h1 className="entry-header-title">{props.title}</h1>
        <div className="entry-header-wrapper">
          <div
            className="entry-header-image"
            onClick={handleImageClick}
            style={{
              backgroundImage: `url(${getPicture("PictureFlorian")})`,
              backgroundSize: "200% 240%",
              backgroundPosition: "0px -15px",
            }}
          ></div>
          <div className="entry-header-metadata">
            <div className="entry-header-author">{props.author}</div>
            <div className="entry-header-shortdescription">
              {props.shortDescription}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EntryHeader;

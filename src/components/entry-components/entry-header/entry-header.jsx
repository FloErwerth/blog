import React, { useState, useEffect } from "react";
import "./entry-header.scss";
import pic from "./Foto_Florian.jpg";
import { navigateTo } from "../../../..";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import github from "./github.svg";
import SocialLogo from "./social-logo/social-logo";

function EntryHeader(props) {
  const handleImageClick = () => {
    navigateTo("/about");
  };

  return (
    //TODO: return button
    <div id="entry-header" className="entry-header">
      <div className="entry-header-wrapper">
        <div
          className="entry-header-image"
          onClick={handleImageClick}
          style={{
            backgroundImage: `url(${pic})`,
            backgroundSize: "200% 240%",
            backgroundPosition: "0px -15px",
          }}
        ></div>
        <div className="entry-header-metadata">
          <div className="entry-header-author">{props.author}</div>
          <div id="social-links" className="entry-header-wrapper">
            <SocialLogo
              width="20"
              height="20"
              src={instagram}
              link="https://www.instagram.com/floerwerth/"
            />
            <SocialLogo
              width="20"
              height="20"
              src={twitter}
              link="https://mobile.twitter.com/florirwrt"
            />
            <SocialLogo
              width="20"
              height="20"
              src={github}
              useFilter
              link="https://github.com/FloErwerth"
            />
          </div>
        </div>
      </div>
      <h3 className="entry-header-title">{props.title}</h3>
      <div className="entry-header-wrapper">
        <div className="entry-header-date">
          {props.date} - {props.time} mins reading
        </div>
      </div>
    </div>
  );
}

export default EntryHeader;

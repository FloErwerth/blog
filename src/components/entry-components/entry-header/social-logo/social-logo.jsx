import React from "react";
import "./social-logo.scss";
import instagram from "./svgs/instagram.svg";
import github from "./svgs/github.svg";
import twitter from "./svgs/twitter.svg";

function SocialLogo(props) {
  const handleSocialClick = () => {
    const link = document.createElement("a");
    link.href = props.link;
    link.onclick = () => {
      link.remove();
    };
    link.target = "_blank";
    link.click();
  };

  const getSource = () => {
    switch (props.logo) {
      case "instagram":
        return instagram;
      case "twitter":
        return twitter;
      case "github":
        return github;
    }
  };
  const getSourceAlt = () => {
    switch (props.logo) {
      case "instagram":
        return "Open Instagram";
      case "twitter":
        return "Open Twitter";
      case "github":
        return "Open GitHub";
    }
  };

  return (
    <img
      src={getSource()}
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        cursor: "pointer",
        marginRight: "5px",
      }}
      title={getSourceAlt()}
      alt={getSourceAlt()}
      className={
        props.useFilter
          ? props.invertFilter
            ? "social-logo-inverted"
            : "social-logo"
          : ""
      }
      onClick={handleSocialClick}
    />
  );
}

export default SocialLogo;

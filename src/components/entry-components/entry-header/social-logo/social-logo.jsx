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
      document.removeChild(link);
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
        return "Logo of instagram";
      case "twitter":
        return "Logo of twitter";
      case "github":
        return "Logo of github";
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

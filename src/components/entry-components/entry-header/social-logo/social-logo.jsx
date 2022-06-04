import React from "react";
import "./social-logo.scss";
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
  return (
    <img
      src={props.src}
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        cursor: "pointer",
        marginTop: "15px",
        marginRight: "5px",
      }}
      className={props.useFilter ? "social-logo" : ""}
      onClick={handleSocialClick}
    />
  );
}

export default SocialLogo;

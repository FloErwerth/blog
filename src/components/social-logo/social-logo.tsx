import * as React from "react";
import "./social-logo.scss";
import {getSvg} from "../../media/svgs";
import {AvailableLogos} from "../../media/svgs";
import { ReactComponent as Instagram } from "../../media/svgs/instagram.svg";
import {useEffect} from "react";


interface Props {
  link: string,
  logo: AvailableLogos,
  width: string,
  height: string,
  useFilter?: boolean,
  invertFilter?: boolean,
}

function SocialLogo(props: Props) {

  const handleSocialClick = () => {
    const link = document.createElement("a");
    link.href = props.link;
    link.onclick = () => {
      link.remove();
    };
    link.target = "_blank";
    link.click();
  };

  function getSource(): string {
    switch (props.logo) {
      case "instagram":
        return getSvg("instagram");
      case "twitter":
        return getSvg("twitter");
      case "github":
        return getSvg("github");
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

  // @ts-ignore
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

import React from "react";
import "./header.scss";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import SocialLogo from "../entry-components/entry-header/social-logo/social-logo";

function Header(props) {
  const handleClick = (dark) => {
    document.getElementById("body").setAttribute("dark", dark);
  };

  return (
    <div id="header" className="header">
      <ThemeSwitcher onClick={(dark) => handleClick(dark)} />
      <div className="header-links">
        <SocialLogo
          logo="instagram"
          width="30"
          height="30"
          link="https://www.instagram.com/floerwerth/"
        />
        <SocialLogo
          logo="twitter"
          width="30"
          height="30"
          link="https://mobile.twitter.com/florirwrt"
        />
        <SocialLogo
          logo="github"
          width="30"
          height="30"
          useFilter
          link="https://github.com/FloErwerth"
        />
      </div>
    </div>
  );
}

export default Header;

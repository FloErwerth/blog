import * as React from "react";
import "./header.scss";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import SocialLogo from "../social-logo/social-logo";

function Header() {
  const handleClick = (dark: boolean) => {
    document.getElementById("body").setAttribute("dark", dark.toString());
  };

  return (
    <div id="header" className="header">
      <ThemeSwitcher onClick={(dark: boolean) => handleClick(dark)} />
      <div className="header-links">
        <SocialLogo
          logo="instagram"
          width="30"
          height="30"
          useFilter={false}
          invertFilter={false}
          link="https://www.instagram.com/floerwerth/"
        />
        <SocialLogo
          logo="twitter"
          width="30"
          height="30"
          useFilter={false}
          invertFilter={false}
          link="https://mobile.twitter.com/florirwrt"
        />
        <SocialLogo
          logo="github"
          width="30"
          height="30"
          useFilter={true}
          invertFilter={false}
          link="https://github.com/FloErwerth"
        />
      </div>
    </div>
  );
}

export default Header;

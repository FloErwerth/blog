import React, { useState } from "react";
import "./header.scss";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import HeaderLink from "./link/header-link";
import BurgerMenu from "./burger-menu/burger-menu";
import SocialLogo from "../entry-components/entry-header/social-logo/social-logo";

function Header(props) {
  const [dark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const themeChangedEvent = new Event("theme", {
    bubbles: true,
    composed: true,
  });

  const handleClick = () => {
    setCollapsed((collapsed) => !collapsed);
    document
      .querySelector(".header-links")
      .classList.toggle("header-links-show");
  };

  return (
    <h1 id="header" className="header">
      <ThemeSwitcher
        onClick={() => {
          setDark((dark) => !dark);
          document.getElementById("header").dispatchEvent(themeChangedEvent);
        }}
      />
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
    </h1>
  );
}

export default Header;

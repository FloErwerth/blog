import React, { useState } from "react";
import "./header.scss";
import Logo from "./logo/logo";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import HeaderLink from "./link/header-link";
import { Link } from "react-router-dom";
import BurgerMenu from "./burger-menu/burger-menu";

function Header(props) {
  const [dark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const themeChangedEvent = new Event("theme", {
    bubbles: true,
    composed: true,
  });
  const handleBurgerMenu = () => {
    setCollapsed((collapsed) => !collapsed);
    document
      .querySelector(".header-links")
      .classList.toggle("header-links-show");
  };

  return (
    <h1 id="header" className="header">
      <BurgerMenu
        dark={dark}
        collapsed={collapsed}
        handleBurgerMenu={handleBurgerMenu}
      />
      <div className="header-links">
        <HeaderLink title="Blog" to="/" />
        <HeaderLink title="About Me" to="/about" />
      </div>
      <ThemeSwitcher
        onClick={() => {
          setDark((dark) => !dark);
          document.getElementById("header").dispatchEvent(themeChangedEvent);
        }}
      />
    </h1>
  );
}

export default Header;

import React, { useState } from "react";
import "./header.scss";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import HeaderLink from "./link/header-link";
import BurgerMenu from "./burger-menu/burger-menu";
import { navigateTo } from "../../..";

function Header(props) {
  const [dark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const themeChangedEvent = new Event("theme", {
    bubbles: true,
    composed: true,
  });

  const handleClick = (e) => {
    setCollapsed((collapsed) => !collapsed);
    handleSelection(e);
    document
      .querySelector(".header-links")
      .classList.toggle("header-links-show");
  };

  const handleSelection = (e) => {
    const links = document.querySelectorAll(".header-link");
    links.forEach((link) => link.removeAttribute("active"));
    e.target.toggleAttribute("active");
  };

  return (
    <h1 id="header" className="header">
      <BurgerMenu
        dark={dark}
        collapsed={collapsed}
        handleBurgerMenu={handleClick}
      />
      <div className="header-links">
        <HeaderLink title="Blog" to="/" onClick={(e) => handleClick(e)} />
        <HeaderLink title="About" to="/about" onClick={(e) => handleClick(e)} />
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

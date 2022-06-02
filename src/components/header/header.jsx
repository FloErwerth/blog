import React, { useState } from "react";
import "./header.scss";
import Logo from "./logo/logo";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import HeaderLink from "./link/header-link";
import { Link } from "react-router-dom";

function Header(props) {
  const themeChangedEvent = new Event("theme", {
    bubbles: true,
    composed: true,
  });
  return (
    <h1 id="header" className="header">
      <div></div>
      <div className="header-left">
        <Logo />
        <HeaderLink title="Blog" />
        <HeaderLink title="Recent Posts" />
        <HeaderLink title="About Me" />
      </div>
      <div className="header-right">
        <ThemeSwitcher
          onClick={() =>
            document.getElementById("header").dispatchEvent(themeChangedEvent)
          }
        />
      </div>
      <div></div>
    </h1>
  );
}

export default Header;

import React, { useState } from "react";
import "./header.scss";
import Logo from "./logo/logo";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import HeaderLink from "./link/header-link";
import { Link } from "react-router-dom";

function Header(props) {
  const [dark, setDark] = useState(false);
  const themeChangedEvent = new Event("theme", {
    bubbles: true,
    composed: true,
  });
  const handleBurgerMenu = () => {
    document
      .querySelector(".header-links")
      .classList.toggle("header-links-show");
  };

  return (
    <h1 id="header" className="header">
      <div className="header-burger-menu" onClick={handleBurgerMenu}>
        <svg width="40" height="30">
          <line
            style={{
              fill: dark ? "#c8c8ff" : "rgb(15, 19, 15)",
              stroke: dark ? "#c8c8ff" : "rgb(15, 19, 15)",
              strokeWidth: "3px",
              strokeLinecap: "round",
            }}
            x1={5}
            x2={35}
            y1={5}
            y2={5}
          />
          <line
            style={{
              fill: dark ? "#c8c8ff" : "rgb(15, 19, 15)",
              stroke: dark ? "#c8c8ff" : "rgb(15, 19, 15)",
              strokeWidth: "3px",
              strokeLinecap: "round",
            }}
            x1={5}
            x2={35}
            y1={15}
            y2={15}
          />
          <line
            style={{
              fill: dark ? "#c8c8ff" : "rgb(15, 19, 15)",
              stroke: dark ? "#c8c8ff" : "rgb(15, 19, 15)",
              strokeWidth: "3px",
              strokeLinecap: "round",
            }}
            x1={5}
            x2={35}
            y1={25}
            y2={25}
          />
        </svg>
      </div>
      <div className="header-links">
        <HeaderLink title="Blog" />
        <HeaderLink title="Recent Posts" />
        <HeaderLink title="About Me" />
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

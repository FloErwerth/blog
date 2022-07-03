import React, { useState, useEffect } from "react";
import "./theme-switcher.scss";
import Sun from "./svgs/sun.svg";
import Moon from "./svgs/moon.svg";

const ThemeSwitcher = (props) => {
  const [isDark, setIsDark] = useState(
    document.getElementById("body").getAttribute("dark") === "true"
  );

  const storeCookie = (isDark) => {
    var cookie = "dark=" + isDark + ";";
    cookie += "expires=31-Dec-9999 00:00:00 GMT;";
    document.cookie = cookie;
  };

  return (
    <div
      className="theme-switcher"
      id="theme-switcher"
      onClick={() => {
        storeCookie(!isDark);
        setIsDark((isDark) => !isDark);
        props.onClick(!isDark);
      }}
    >
      <div
        className="theme-switcher-mover"
        style={{
          top: isDark ? "-44px" : "0px",
        }}
      >
        <img
          src={Moon}
          className="theme-switcher"
          alt="A moon"
          title="Switch to dark mode"
        />
        <img
          src={Sun}
          className="theme-switcher"
          alt="A sun"
          title="Switch to light mode"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;

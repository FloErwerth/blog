import React, { useState } from "react";
import "./theme-switcher.scss";
import Sun from "./svgs/sun.svg";
import Moon from "./svgs/moon.svg";

const ThemeSwitcher = (props) => {
  const [isDark, setIsDark] = useState(
    document.getElementById("body").getAttribute("dark") === "true"
  );

  const storeDarkmode = (isDark) => {
    try {
      storage.setItem("dark", isDark.toString());
    } catch (e) {
      console.error("Could not set session data.");
    }
  };

  const storage = localStorage;

  return (
    <div
      className="theme-switcher"
      id="theme-switcher"
      onClick={() => {
        storeDarkmode(!isDark);
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

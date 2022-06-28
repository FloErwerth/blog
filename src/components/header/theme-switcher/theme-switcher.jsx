import React, { useState, ReactComponent } from "react";
import "./theme-switcher.scss";
import Sun from "./svgs/sun.svg";
import Moon from "./svgs/moon.svg";

function ThemeSwitcher(props) {
  const [dark, setDark] = useState(false);
  return (
    <div className="theme-switcher" id="theme-switcher">
      <div
        className="theme-switcher-icon"
        onClick={() => {
          props.onClick();
          setDark((dark) => !dark);
        }}
      >
        <div
          className="theme-switcher-mover"
          style={{
            top: dark ? "-1px" : "-51px",
          }}
        >
          <img src={Sun} className="theme-switcher" />
          <img src={Moon} className="theme-switcher" />
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;

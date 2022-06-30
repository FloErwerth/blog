import React, { useState } from "react";
import "./theme-switcher.scss";
import Sun from "./svgs/sun.svg";
import Moon from "./svgs/moon.svg";

const ThemeSwitcher = (props) => {
  const [dark, setDark] = useState(false);
  return (
    <div
      className="theme-switcher"
      id="theme-switcher"
      onClick={() => {
        setDark((dark) => !dark);
        props.onClick();
      }}
    >
      <div
        className="theme-switcher-mover"
        style={{
          top: dark ? "-44px" : "0px",
        }}
      >
        <img
          src={Moon}
          className="theme-switcher"
          alt="A moon"
          title="A svg of a moon"
        />
        <img
          src={Sun}
          className="theme-switcher"
          alt="A sun"
          title="A svg of a sun"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;

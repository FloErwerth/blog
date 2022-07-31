import * as React from "react";
import { useState } from "react";
import "./theme-switcher.scss";
import {getSvg} from "../../../media/svgs";

interface Props {
  onClick: React.ComponentState;
}

const ThemeSwitcher = (props: Props) => {
  const [isDark, setIsDark] = useState(
    document.getElementById("body").getAttribute("dark") === "true"
  );

  const storeDarkmode = (isDark: boolean) => {
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
          src={getSvg("moon")}
          className="theme-switcher"
          alt="A moon"
          title="Switch to dark mode"
        />
        <img
          src={getSvg("sun")}
          className="theme-switcher"
          alt="A sun"
          title="Switch to light mode"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;

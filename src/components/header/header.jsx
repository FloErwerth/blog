import React, { useState } from "react";
import "./header.scss";
import Logo from "./logo/logo";
import { Link } from "react-router-dom";

function Header(props) {
  const themeChangedEvent = new Event("theme", {
    bubbles: true,
    composed: true,
  });
  return (
    <h1 id="header" className={props.dark ? "header header-dark" : "header"}>
      <Logo dark={props.dark} />
      <button
        onClick={() => {
          document.getElementById("header").dispatchEvent(themeChangedEvent);
        }}
      >
        Change theme
      </button>
    </h1>
  );
}

export default Header;

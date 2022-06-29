import React, { StrictMode, useState } from "react";
import Dom from "react-dom/client";
import Main from "./src/components/main/main";
import Header from "./src/components/header/header";
import CreateReactApp from "./src/components/blog-entries/create-react-app/create-react-app";
import About from "./src/components/about/about";
import "./body.scss";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

const root = document.getElementById("root");
const body = document.getElementById("body");
body.addEventListener("theme", () => {
  body.toggleAttribute("dark");
});
const rootObject = Dom.createRoot(root);

rootObject.render(
  <StrictMode>
    <Header />
    <div id="wrapper" className="content-wrapper">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-react-app" element={<CreateReactApp />} />
        </Routes>
      </HashRouter>
    </div>
  </StrictMode>
);

export const navigateTo = (to) => {
  if (window.location.hash === "#" + to || to === undefined) return;
  document.getElementById("wrapper").toggleAttribute("animation");
  setTimeout(() => {
    window.location.href = "/#" + to;
    document.getElementById("wrapper").toggleAttribute("animation");
  }, 750);
};

import React, { StrictMode, useState } from "react";
import Dom from "react-dom/client";
import Main from "./src/components/main/main";
import Header from "./src/components/header/header";
import CreateReactApp from "./src/components/blog-entries/create-react-app/create-react-app";
import "./body.scss";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import PortfolioMain from "./src/components/portfolio/main/main";
import Projects from "./src/components/portfolio/projectPage/projects";

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
          <Route path="/about" element={<PortfolioMain />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/create-react-app" element={<CreateReactApp />} />
        </Routes>
      </HashRouter>
    </div>
  </StrictMode>
);

export const navigateTo = (href) => {
  if (window.location.hash === "#" + href || href === undefined) return;
  document.getElementById("wrapper").toggleAttribute("animation");
  setTimeout(() => {
    window.location.href = "/#" + href;
    document.getElementById("wrapper").toggleAttribute("animation");
  }, 1000);
};

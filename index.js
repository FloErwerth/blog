import React, { StrictMode, useState } from "react";
import Dom from "react-dom/client";
import Main from "./src/components/main/main";
import Header from "./src/components/header/header";
import CreateReactApp from "./src/components/blog-entries/create-react-app/create-react-app";
import HowICreatedTheDarkmodeToggle from "./src/components/blog-entries/darkmode/HowICreatedTheDarkmodeToggle";
import About from "./src/components/about/about";
import EasyUnderline from "./src/components/blog-entries/easy-underline/easy-underline";
import "./body.scss";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");
const rootObject = Dom.createRoot(root);

rootObject.render(
  <HelmetProvider>
    <StrictMode>
      <Header />
      <div id="wrapper" className="content-wrapper">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/create-react-app" element={<CreateReactApp />} />
            <Route
              path="how-I-managed-darkmode"
              element={<HowICreatedTheDarkmodeToggle />}
            />
            <Route path="easy-underline" element={<EasyUnderline />} />
          </Routes>
        </HashRouter>
      </div>
    </StrictMode>
  </HelmetProvider>
);

export const navigateTo = (to) => {
  if (window.location.hash === "#" + to || to === undefined) return;
  document.getElementById("wrapper").toggleAttribute("animation");
  setTimeout(() => {
    window.location.href = "/#" + to;
    document.getElementById("wrapper").toggleAttribute("animation");
  }, 750);
};

import React, { StrictMode } from "react";
import Dom from "react-dom/client";
import Main from "./src/components/main/main";
import Header from "./src/components/header/header";
import CreateReactApp from "./src/components/blog-entries/create-react-app/create-react-app";
import HowICreatedTheDarkmodeToggle from "./src/components/blog-entries/darkmode/HowICreatedTheDarkmodeToggle";
import About from "./src/components/about/about";
import EasyUnderline from "./src/components/blog-entries/easy-underline/easy-underline";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import UsingCookies from "./src/components/blog-entries/using-cookies/using-cookies";
import FilterFunction from "./src/components/blog-entries/filter-function/filter-function";
import CustomEvents from "./src/components/blog-entries/custom-events/custom-events";
import Wrapper from "./src/components/main/wrapper";
import Impressum from "./src/components/impressum/impressum";

const root = document.getElementById("root");
const rootObject = Dom.createRoot(root);

rootObject.render(
  <StrictMode>
    <HelmetProvider>
      <Header />
      <Wrapper>
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
            <Route path="using-cookies" element={<UsingCookies />} />
            <Route path="filter-function" element={<FilterFunction />} />
            <Route path="custom-events" element={<CustomEvents />} />
          </Routes>
        </HashRouter>
      </Wrapper>
      <Impressum />
    </HelmetProvider>
  </StrictMode>
);

var lastSite = "#/";
export const navigateTo = (to) => {
  if (window.location.hash === "#" + to || to === undefined) return;
  document.getElementById("wrapper").setAttribute("animation", "true");
  lastSite = "/" + window.location.hash;
  setTimeout(() => {
    window.location.href = `/#` + to;
    document.getElementById("wrapper").setAttribute("animation", "false");
  }, 750);
};
export const navigateToLastSite = () => {
  document.getElementById("wrapper").setAttribute("animation", "true");
  setTimeout(() => {
    window.location.href = lastSite;
    document.getElementById("wrapper").setAttribute("animation", "false");
  }, 750);
};

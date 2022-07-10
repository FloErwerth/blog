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
              path="/how-I-managed-darkmode"
              element={<HowICreatedTheDarkmodeToggle />}
            />
            <Route path="/easy-underline" element={<EasyUnderline />} />
            <Route path="/using-cookies" element={<UsingCookies />} />
            <Route path="/filter-function" element={<FilterFunction />} />
            <Route path="/custom-events" element={<CustomEvents />} />
          </Routes>
        </HashRouter>
      </Wrapper>
      <Impressum />
    </HelmetProvider>
  </StrictMode>
);

var lastSite = "#/";
const animationStepTime = 750;

export const navigateTo = (to) => {
  if (window.location.hash === "#" + to || to === undefined) return;
  lastSite = "/" + window.location.hash;
  const wrapper = document.getElementById("wrapper");
  window.location.href = "/#" + to;
  // if (to === "/") {
  //   transitionFromEntry(wrapper);
  // } else {
  //   transitionToEntry(wrapper);
  // }
};

export const navigateToLastSite = () => {
  document.getElementById("wrapper").toggleAttribute("animation");
  setTimeout(() => {
    window.location.href = lastSite;
    document.getElementById("wrapper").toggleAttribute("animation");
  }, 750);
};

const transitionToEntry = (wrapper) => {
  wrapper.classList.toggle("content-wrapper-to-left");

  setTimeout(() => {
    wrapper.classList.toggle("content-wrapper-to-left"), 750;
  });
};

const transitionFromEntry = (wrapper) => {
  addClassAfter(wrapper, "content-wrapper-to-left", 0);
  removeClassAfter(wrapper, "content-wrapper-to-left", animationStepTime);
  addClassAfter(wrapper, "content-wrapper-set-right", animationStepTime);
  addClassAfter(wrapper, "content-wrapper-to-middle", animationStepTime + 1);
  removeClassAfter(
    wrapper,
    "content-wrapper-to-middle",
    animationStepTime + animationStepTime
  );
  removeClassAfter(
    wrapper,
    "content-wrapper-set-right",
    animationStepTime + animationStepTime + 1
  );
};

const removeClassAfter = (element, className, time) => {
  setTimeout(() => {
    element.classList.remove(className);
  }, time);
};

const addClassAfter = (element, className, time) => {
  setTimeout(() => {
    element.classList.add(className);
  }, time);
};

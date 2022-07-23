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
import Footer from "./src/components/footer/footer";
import CookiePopup from "./src/components/cookie-popup/cookie-popup";

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
      <CookiePopup />
      <Footer name={"footer"} />
    </HelmetProvider>
  </StrictMode>
);

let lastSite = "#/";
const animationStepTime = 500;

export const navigateTo = (to) => {
  if (window.location.hash === "#" + to || to === undefined) return;
  lastSite = "/" + window.location.hash;
  const wrapper = document.getElementById("wrapper");
  if (to === "/") {
    transitionFromEntry(wrapper).then(() => {
      window.location.href = "/#" + to;
    });
  } else {
    transitionToEntry(wrapper).then(() => {
      window.location.href = "/#" + to;
    });
  }
};

export const navigateToLastSite = () => {
  transitionFromEntry(wrapper).then(() => {
    window.location.href = lastSite;
  });
};

const transitionToEntry = (wrapper) => {
  return new Promise((resolve) => {
    addClassAfter(wrapper, "content-wrapper-to-right", 0);
    removeClassAfter(wrapper, "content-wrapper-to-right", animationStepTime);
    addClassAfter(wrapper, "content-wrapper-set-left", animationStepTime);
    addClassAfter(wrapper, "content-wrapper-to-middle", animationStepTime + 10);
    removeClassAfter(
      wrapper,
      "content-wrapper-set-left",
      animationStepTime * 2
    );
    removeClassAfter(
      wrapper,
      "content-wrapper-to-middle",
      animationStepTime * 2
    );
    setTimeout(() => {
      resolve(true);
    }, animationStepTime);
  });
};

const transitionFromEntry = (wrapper) => {
  return new Promise((resolve) => {
    addClassAfter(wrapper, "content-wrapper-to-left", 0);
    removeClassAfter(wrapper, "content-wrapper-to-left", animationStepTime);
    addClassAfter(wrapper, "content-wrapper-set-right", animationStepTime);
    addClassAfter(wrapper, "content-wrapper-to-middle", animationStepTime + 10);
    removeClassAfter(
      wrapper,
      "content-wrapper-set-right",
      animationStepTime * 2
    );
    removeClassAfter(
      wrapper,
      "content-wrapper-to-middle",
      animationStepTime * 2
    );
    setTimeout(() => {
      resolve(true);
    }, animationStepTime);
  });
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

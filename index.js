import React, { StrictMode, useState } from "react";
import Dom from "react-dom/client";
import Entry from "./src/components/entry/Entry";
import Header from "./src/components/header/header";
import "./body.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");
const body = document.getElementById("body");
body.addEventListener("theme", () => {
  body.toggleAttribute("dark");
});
const rootObject = Dom.createRoot(root);

rootObject.render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Entry />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

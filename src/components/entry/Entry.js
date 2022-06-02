import React from "react";
import "./entry.scss";

const Entry = () => {
  document.addEventListener("theme", () => {
    document.getElementById("entry").toggleAttribute("dark");
  });
  return (
    <div id="entry" className="entry">
      dadssaffdsf
    </div>
  );
};

export default Entry;

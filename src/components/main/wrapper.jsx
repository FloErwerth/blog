import React, { useEffect } from "react";
import "../../../body.scss";
function Wrapper(props) {
  useEffect(() => {
    if (document.getElementById("wrapper").getAttribute("animation")) {
      document.getElementById("wrapper").setAttribute("animation", "false");
    }
  });
  return (
    <div id="wrapper" className="content-wrapper">
      {props.children}
    </div>
  );
}

export default Wrapper;

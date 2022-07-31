import * as React from "react";
import { ReactElement, useEffect} from "react";

import "../../../body.scss";

interface Props {
  children: ReactElement;
}

function Wrapper(props: Props) {
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

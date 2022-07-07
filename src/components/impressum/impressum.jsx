import React, { useId } from "react";
import "./impressum.scss";
function Impressum() {
  const header = useId();
  const handleOpening = () => {
    document.getElementById(header).toggleAttribute("opened");
  };
  return (
    <>
      <h1 id={header} onClick={handleOpening} className="impressum-header">
        Imprint
      </h1>
      <div className="impressum-body">
        <div>Name: Florian Erwerth</div>
        <div>Adress: Balanstraße 93, 81539 Munich</div>
        <div>Email: erwerthflorian@outlook.de</div>
        <div>Phone: +4915730243460</div>
      </div>
    </>
  );
}

export default Impressum;

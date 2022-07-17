import {useId} from "react";
import * as React from "react";
import "./imprint.scss";

function Imprint() {
    const headerId = useId();
    const handleOpening = () => {
        document.getElementById(headerId).toggleAttribute("opened");
    };
    return (
        <div className={"imprint"}>
            <h1 id={headerId} onClick={handleOpening} className="imprint-header">
                Imprint
            </h1>
            <div className="imprint-body">
                <div className={"imprint-row"}>
                    <div className={"imprint-name"}>Name: </div>
                    <div>Florian Erwerth</div>
                </div>
                <div className={"imprint-row"}>
                    <div className={"imprint-name"}>Adress: </div>
                    <div>Balanstraße 93, 81539 Munich</div>
                </div>
                <div className={"imprint-row"}>
                    <div className={"imprint-name"}>Email: </div>
                    <div>erwerthflorian@outlook.de</div>
                </div>
                <div className={"imprint-row"}>
                    <div className={"imprint-name"}>Phone: </div>
                    <div>+4915730243460</div>
                </div>
            </div>
        </div>
    );
}

export default Imprint;

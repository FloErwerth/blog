import {FunctionComponent, useState, useEffect, useId} from 'react';
import * as React from "react";
import "./footer.scss";
import Privacy from "../privacy/privacy";
import Imprint from "../imprint/imprint";
import Modal from "./modal/modal";

const index = require("../../../index.js");

const LABEL = "Florian Erwerth's Blog";
const modals = [<Privacy/>, <Imprint/>];

const handleCloseModal = (setShowModal: Function) => {
    setShowModal(false);
}

const handleOpenModal = (setShowModal: Function) => {
    setShowModal(true);
}

const footer: FunctionComponent = () => {
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const footerModal = useId();

    useEffect(() => {
        document.getElementById(footerModal).toggleAttribute("show")
    }, [showModal]);

    return (<div className={"footer"}>
        <div className={"footer-label"}>{LABEL}</div>
        <div className={"footer-content"}>
            <div onClick={() => handleOpenModal(setShowModal)} className={"footer-link"}>Imprint</div>
            <div onClick={() => handleOpenModal(setShowModal)} className={"footer-link"}>Privacy</div>
            <div className={"footer-link"} onClick={() => index.navigateTo("/about")}>About</div>
        </div>
        <div id={footerModal} className={"footer-modal"}>
            <Modal selectedModal={modals[modalContentIndex]} closeModal={() => handleCloseModal(setShowModal)}/>
        </div>

    </div>);
};

export default footer;

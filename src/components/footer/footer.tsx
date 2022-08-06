import { useState } from "react";
import * as React from "react";
import "./footer.scss";
import Privacy from "../privacy/privacy";
import Imprint from "../imprint/imprint";
import Modal from "../modal/modal";

const index = require("../../../index.js");

const LABEL = "Florian Erwerth's Blog";
const modals = [<Privacy />, <Imprint />];

const footer = () => {
  const [modalContentIndex, setModalContentIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (index: number) => {
    setModalContentIndex(index);
    setShowModal(true);
  };

  return (
    <div className={"footer"}>
      <div className={"footer-label"}>{LABEL}</div>
      <div className={"footer-content"}>
        <div onClick={() => handleOpenModal(1)} className={"footer-link"}>
          Imprint
        </div>
        <div
          className={"footer-link"}
          onClick={() => index.navigateTo("/about")}
        >
          About
        </div>
      </div>

      {showModal ? (
        <div className={"footer-modal"}>
          <Modal modalVisible={showModal} closeModal={handleCloseModal}>
            {modals[modalContentIndex]}
          </Modal>
        </div>
      ) : null}
    </div>
  );
};

export default footer;
